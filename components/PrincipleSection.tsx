import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PrinciplesSection() {
  const principles = [
    {
      title: "Our Mission",
      description: "To empower artists by providing an innovative platform where creativity, technology, and commerce seamlessly converge.",
      points: [
        "Support emerging digital artists",
        "Democratize art ownership",
        "Foster sustainable creative careers"
      ]
    },
    {
      title: "Our Vision",
      description: "To become the world's most trusted digital art ecosystem where artists and collectors thrive together.",
      points: [
        "Global creative community hub",
        "Cutting-edge art technology",
        "Cross-cultural art exchange"
      ]
    },
    {
      title: "Our Values",
      description: "Built on foundations of integrity, innovation, and inclusivity for a sustainable digital art ecosystem.",
      points: [
        "Transparency in all operations",
        "Artist-first approach",
        "Environmental responsibility",
        "Community-driven development"
      ]
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Guiding Principles</h2>
          <p className="text-lg text-muted-foreground">
            We're building more than a platform—we're creating a sustainable future for digital artists and collectors worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{principle.description}</p>
                <ul className="space-y-2">
                  {principle.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}