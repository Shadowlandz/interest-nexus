
import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Calendar, UserPlus } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Communities() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const communities = [
    {
      id: 1,
      name: "Clube do Livro",
      description: "Discussões literárias e recomendações de leitura para todos os gostos.",
      members: 2456,
      posts: 158,
      lastActive: "Hoje",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=687&auto=format&fit=crop",
      tags: ["Literatura", "Livros", "Cultura"]
    },
    {
      id: 2,
      name: "Análise de Filmes",
      description: "Um espaço para discutir e analisar os mais diversos filmes e suas nuances.",
      members: 1872,
      posts: 342,
      lastActive: "Ontem",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1718&auto=format&fit=crop",
      tags: ["Cinema", "Filmes", "Crítica"]
    },
    {
      id: 3,
      name: "Programação e Tecnologia",
      description: "Compartilhe conhecimentos, dúvidas e novidades sobre programação e tecnologia.",
      members: 3241,
      posts: 567,
      lastActive: "Hoje",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      tags: ["Tecnologia", "Programação", "Desenvolvimento"]
    },
    {
      id: 4,
      name: "Filosofia Moderna",
      description: "Debates sobre correntes filosóficas contemporâneas e seus impactos na sociedade.",
      members: 1320,
      posts: 289,
      lastActive: "2 dias atrás",
      image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop",
      tags: ["Filosofia", "Pensamento Crítico", "Debates"]
    },
    {
      id: 5,
      name: "Fotografia e Arte Visual",
      description: "Um espaço para compartilhar e discutir fotografia, design e artes visuais.",
      members: 2104,
      posts: 412,
      lastActive: "Hoje",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1738&auto=format&fit=crop",
      tags: ["Fotografia", "Arte", "Design"]
    },
    {
      id: 6,
      name: "Ciência e Descobertas",
      description: "Discussões sobre descobertas científicas recentes e avanços tecnológicos.",
      members: 1895,
      posts: 231,
      lastActive: "3 dias atrás",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
      tags: ["Ciência", "Descobertas", "Pesquisa"]
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
            <h1 className="text-4xl font-bold mb-4">Comunidades</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Encontre pessoas que compartilham seus interesses e participe de discussões enriquecedoras.
            </p>
          </div>
          
          {!user && (
            <div className="bg-card rounded-xl p-6 mb-12 shadow-sm border">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-center sm:text-left text-muted-foreground">
                  Faça login para participar das comunidades e começar a interagir
                </p>
                <Button onClick={redirectToAuth} className="bg-accent hover:bg-accent/90">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Entrar / Cadastrar
                </Button>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community) => (
              <Card key={community.id} className="overflow-hidden hover:shadow-md transition-all">
                <div className="h-32 overflow-hidden">
                  <img 
                    src={community.image} 
                    alt={community.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{community.name}</CardTitle>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={community.image} />
                      <AvatarFallback>{community.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardDescription>{community.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {community.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{community.members}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{community.posts}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{community.lastActive}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-4" 
                    disabled={!user}
                    variant={user ? "default" : "outline"}
                  >
                    {user ? "Participar" : "Faça login para participar"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
