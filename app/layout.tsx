import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import { ThemeProvider } from "@/components/theme-provider"; 
import Footer from '@/components/Footer';
import DustBackground from '@/components/DustBackground';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' }); 
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arts Gallery",
  description: "Explore arts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
       <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       
          <DustBackground />
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
       
      </body>
       </ThemeProvider>
    </html>
  );
}