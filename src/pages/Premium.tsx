
import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star, Sparkles, Gem } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Premium() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const plans = [
    {
      name: "Básico",
      price: "Grátis",
      description: "Perfeito para começar sua jornada",
      features: [
        "Acesso a comunidades públicas",
        "Criação de perfil básico",
        "Feed personalizado limitado"
      ],
      highlighted: false,
      buttonText: "Plano Atual",
      badge: null
    },
    {
      name: "Premium",
      price: "R$ 19,90",
      period: "/mês",
      description: "Recursos avançados para os mais engajados",
      features: [
        "Todos os recursos do plano Básico",
        "Acesso a comunidades exclusivas",
        "Perfil destacado na plataforma",
        "Feed totalmente personalizado",
        "Sem anúncios",
        "Conteúdo exclusivo"
      ],
      highlighted: true,
      buttonText: "Assinar Premium",
      badge: "Popular"
    },
    {
      name: "Anual",
      price: "R$ 179,90",
      period: "/ano",
      description: "Maior economia para uso contínuo",
      features: [
        "Todos os recursos do plano Premium",
        "Economia de 25% em relação ao mensal",
        "2 meses grátis",
        "Acesso antecipado a novos recursos"
      ],
      highlighted: false,
      buttonText: "Assinar Anual",
      badge: "Economia"
    }
  ];

  const redirectToAuth = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-28 pb-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-2 mb-2">
              <Crown className="h-6 w-6 text-accent" />
              <h1 className="text-4xl font-bold">Nexus Premium</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Desbloqueie recursos exclusivos e aprimore sua experiência na plataforma
            </p>
          </div>
          
          {!user && (
            <div className="bg-card rounded-xl p-6 mb-12 shadow-sm border">
              <div className="text-center">
                <p className="mb-4 text-muted-foreground">
                  Para assinar o Premium, você precisa estar logado em sua conta
                </p>
                <Button onClick={redirectToAuth} className="bg-accent hover:bg-accent/90">
                  Entrar para continuar
                </Button>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.highlighted ? 'border-accent shadow-lg' : 'shadow-sm'}`}
              >
                {plan.badge && (
                  <Badge 
                    className="absolute -top-3 right-4 bg-accent text-white"
                  >
                    {plan.badge === "Popular" ? (
                      <><Sparkles className="h-3 w-3 mr-1" /> {plan.badge}</>
                    ) : (
                      <><Star className="h-3 w-3 mr-1" /> {plan.badge}</>
                    )}
                  </Badge>
                )}
                
                <CardHeader className={plan.highlighted ? "bg-accent/5 border-b" : ""}>
                  <CardTitle>
                    <div className="flex items-center gap-2">
                      {plan.highlighted && <Gem className="h-5 w-5 text-accent" />}
                      {plan.name}
                    </div>
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className={`h-5 w-5 mt-0.5 ${plan.highlighted ? 'text-accent' : 'text-green-500'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    variant={plan.highlighted ? "default" : "outline"}
                    className={`w-full ${plan.highlighted ? 'bg-accent hover:bg-accent/90' : ''}`}
                    disabled={!user && plan.name !== "Básico"}
                  >
                    {!user && plan.name !== "Básico" ? "Faça login para assinar" : plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center mb-8">Recursos Premium</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Comunidades exclusivas",
                  description: "Acesse grupos restritos com discussões de alto nível",
                  icon: <Users className="h-10 w-10 p-2 bg-accent/10 rounded-lg text-accent" />
                },
                {
                  title: "Perfil destacado",
                  description: "Aumente sua visibilidade e encontre mais conexões",
                  icon: <Star className="h-10 w-10 p-2 bg-accent/10 rounded-lg text-accent" />
                },
                {
                  title: "Conteúdo exclusivo",
                  description: "Acesse artigos e recursos disponíveis apenas para assinantes",
                  icon: <Gem className="h-10 w-10 p-2 bg-accent/10 rounded-lg text-accent" />
                },
                {
                  title: "Sem anúncios",
                  description: "Experiência limpa e sem distrações na plataforma",
                  icon: <Sparkles className="h-10 w-10 p-2 bg-accent/10 rounded-lg text-accent" />
                }
              ].map((feature, index) => (
                <Card key={index} className="border shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex justify-start">{feature.icon}</div>
                    <CardTitle className="text-xl mt-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
