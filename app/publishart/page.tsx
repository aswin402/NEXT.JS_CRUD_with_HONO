"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UploadArtPage() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  // Clear any previous alerts
  console.clear();
  console.log("=== Starting upload ===");

  try {
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Log form data
    console.log("Form inputs:", {
      artname: formData.get("artname"),
      artist: formData.get("artist"),
      price: formData.get("price"),
      description: formData.get("description"),
      hasImage: !!image
    });

    if (image) {
      formData.append("image", image);
      console.log("Image details:", {
        name: image.name,
        type: image.type,
        size: image.size + " bytes"
      });
    }

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    console.log("API URL:", `${API_URL}/art`);

    // Make the request with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const res = await fetch(`${API_URL}/art`, {
      method: "POST",
      body: formData,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    console.log("Response received:", {
      status: res.status,
      statusText: res.statusText,
      headers: Object.fromEntries(res.headers.entries())
    });

    // Get response text first
    const responseText = await res.text();
    console.log("Response body:", responseText);

    if (!res.ok) {
      // Try to parse error
      let errorMessage = `HTTP ${res.status}: ${res.statusText}`;
      try {
        const errorData = JSON.parse(responseText);
        errorMessage = errorData.message || errorData.error || errorData.details || errorMessage;
      } catch {
        if (responseText) errorMessage += ` - ${responseText}`;
      }
      
      console.error("Server responded with error:", errorMessage);
      throw new Error(errorMessage);
    }

    // Parse successful response
    const data = JSON.parse(responseText);
    console.log("✅ Success! Response data:", data);

    alert(`✅ Art uploaded successfully!\nArt ID: ${data.data?.id || data.id}`);
    form.reset();
    setImage(null);

  } catch (err: any) {
    console.error("❌ Upload failed with error:", {
      name: err.name,
      message: err.message,
      stack: err.stack
    });

    if (err.name === "AbortError") {
      alert("❌ Request timeout. Check if backend server is running.");
    } else {
      alert(`❌ Upload failed: ${err.message || "Unknown error"}`);
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <Card className="bg-background/60 backdrop-blur border">
        <CardHeader>
          <CardTitle>Upload New Art</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="artname" placeholder="Art Name" required />
            <Input name="artist" placeholder="Artist Name" required />
            <Input
  name="price"
  type="number"
  step="1"
  min="0"
  placeholder="Price"
  required
/>

            <Textarea name="description" placeholder="Description" />

            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />

            <Button className="w-full" disabled={loading}>
              {loading ? "Uploading..." : "Upload Art"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
