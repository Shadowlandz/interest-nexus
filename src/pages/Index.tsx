import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import AnimatedIcon from "@/components/ui/AnimatedIcon";
import Feed from "@/components/feed/Feed";
import ProfileCard from "@/components/profile/ProfileCard";
import { useAuth } from "@/contexts/AuthContext";
import { BookOpen, Globe, Users, BookMarked, ChevronRight, Plus, ArrowUp } from "lucide-react";

export default function Index() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Conecte-se através de <span className="text-accent">interesses</span> comuns
                </h1>
                <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto lg:mx-0">
                  Descubra pessoas, comunidades e conteúdos que realmente importam para você.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90" 
                  onClick={() => navigate("/auth")}
                >
                  Começar agora
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate("/auth")}
                >
                  Entrar
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
                <div className="flex items-center gap-2">
                  <AnimatedIcon
                    icon={<BookOpen className="h-5 w-5 text-accent" />}
                    animationDelay="0ms"
                  />
                  <span className="text-sm">Compartilhe ideias</span>
                </div>
                <div className="flex items-center gap-2">
                  <AnimatedIcon
                    icon={<Users className="h-5 w-5 text-accent" />}
                    animationDelay="200ms"
                  />
                  <span className="text-sm">Encontre pessoas</span>
                </div>
                <div className="flex items-center gap-2">
                  <AnimatedIcon
                    icon={<Globe className="h-5 w-5 text-accent" />}
                    animationDelay="400ms"
                  />
                  <span className="text-sm">Expanda horizontes</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative z-10 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1599748989594-a1099854abc2?q=80&w=2670&auto=format&fit=crop"
                  alt="People connecting" 
                  className="rounded-2xl shadow-xl max-w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-2xl bg-accent/10" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar */}
            <div className="w-full lg:w-1/4 space-y-6">
              <ProfileCard 
                showSignup={!user} 
                onSignup={() => navigate("/auth")} 
              />
              
              {user && (
                <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                  <div className="p-4 border-b">
                    <h3 className="font-semibold">Tópicos em alta</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    {["Literatura Brasileira", "Filmes de Ficção Científica", "Filosofia Moderna", "Séries Netflix", "História da Arte"].map((topic) => (
                      <a 
                        key={topic} 
                        href="#"
                        className="flex items-center justify-between py-2 text-sm hover:text-accent transition-colors"
                      >
                        <span>{topic}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Main Feed */}
            <div className="w-full lg:w-2/4">
              {user && (
                <div className="mb-6 p-4 bg-card rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <Button className="flex-1 justify-start text-muted-foreground gap-2 bg-secondary hover:bg-secondary/80 border">
                      <Plus className="h-4 w-4" />
                      No que você está pensando?
                    </Button>
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Feed de descobertas</h2>
                <Feed />
              </div>
            </div>
            
            {/* Right Sidebar */}
            <div className="w-full lg:w-1/4 space-y-6">
              <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                <div className="p-4 border-b">
                  <h3 className="font-semibold">Recomendações para você</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-6">
                    {[
                      {
                        title: "Como fazer amizades e influenciar pessoas",
                        author: "Dale Carnegie",
                        category: "Desenvolvimento Pessoal",
                        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=687&auto=format&fit=crop"
                      },
                      {
                        title: "Sapiens: Uma breve história da humanidade",
                        author: "Yuval Noah Harari",
                        category: "História",
                        image: "https://images.unsplash.com/photo-1531346610577-be5a5798e165?q=80&w=687&auto=format&fit=crop"
                      }
                    ].map((book, index) => (
                      <div key={index} className="flex gap-3">
                        <img 
                          src={book.image} 
                          alt={book.title} 
                          className="w-16 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{book.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{book.author}</p>
                          <div className="flex items-center mt-2">
                            <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                              {book.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="w-full mt-4 text-sm">
                    Ver mais recomendações
                  </Button>
                </div>
              </div>
              
              <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                <div className="p-4 border-b">
                  <h3 className="font-semibold">Comunidades para explorar</h3>
                </div>
                <div className="p-4 space-y-4">
                  {[
                    {
                      name: "Clube do Livro",
                      members: 2456,
                      icon: <BookMarked className="h-8 w-8 text-accent p-1.5" />
                    },
                    {
                      name: "Análise de Filmes",
                      members: 1872,
                      icon: <BookOpen className="h-8 w-8 text-accent p-1.5" />
                    }
                  ].map((group, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        {group.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{group.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          {group.members.toLocaleString()} membros
                        </p>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs h-8">
                        Entrar
                      </Button>
                    </div>
                  ))}
                  
                  <Button variant="ghost" className="w-full mt-2 text-sm">
                    Explorar mais
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Nexus</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent">Sobre nós</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent">Nossa história</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Recursos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent">Blog</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent">Comunidades</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent">Premium</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Ajuda</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent">FAQ</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent">Contato</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent">Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent">Termos</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent">Política de Privacidade</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-accent">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nexus. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <button
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-accent text-white shadow-lg transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        onClick={scrollToTop}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
