
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  Crown, 
  Sparkles, 
  MessagesSquare, 
  BookOpen, 
  ChevronRight 
} from "lucide-react";

export default function FeaturedHighlights() {
  const navigate = useNavigate();
  
  const features = [
    {
      title: "Comunidades",
      description: "Conecte-se com pessoas que compartilham seus interesses em nossos grupos temáticos.",
      icon: <Users className="h-10 w-10 text-accent p-2 bg-accent/10 rounded-lg" />,
      action: "Explorar comunidades",
      path: "/communities",
      highlight: false
    },
    {
      title: "Premium",
      description: "Desbloqueie recursos exclusivos, conteúdo premium e um perfil destacado.",
      icon: <Crown className="h-10 w-10 text-accent p-2 bg-accent/10 rounded-lg" />,
      action: "Conhecer o Premium",
      path: "/premium",
      highlight: true,
      badge: "Popular"
    },
    {
      title: "Debates",
      description: "Participe de conversas enriquecedoras sobre os mais diversos temas.",
      icon: <MessagesSquare className="h-10 w-10 text-accent p-2 bg-accent/10 rounded-lg" />,
      action: "Participar de debates",
      path: "/discussions",
      highlight: false
    },
    {
      title: "Biblioteca",
      description: "Acesse uma vasta coleção de artigos, livros e recursos educacionais.",
      icon: <BookOpen className="h-10 w-10 text-accent p-2 bg-accent/10 rounded-lg" />,
      action: "Acessar biblioteca",
      path: "/library",
      highlight: false
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore o que o <span className="text-accent">Nexus</span> oferece
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra todas as possibilidades para expandir seu círculo social e conhecimento
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-md transition-all ${feature.highlight ? 'border-accent/50 shadow-lg' : ''}`}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                      <Sparkles className="h-3 w-3 mr-1" />
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant={feature.highlight ? "default" : "outline"} 
                  className={feature.highlight ? "bg-accent hover:bg-accent/90 w-full" : "w-full"}
                  onClick={() => navigate(feature.path)}
                >
                  {feature.action}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
