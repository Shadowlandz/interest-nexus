
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserPlus, LogIn } from "lucide-react";

export default function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-accent/5">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-accent/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Junte-se à nossa comunidade hoje
              </h2>
              <p className="text-muted-foreground max-w-md">
                Cadastre-se gratuitamente para conectar-se com pessoas que compartilham seus interesses e expandir seus horizontes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate("/auth?tab=register")} 
                size="lg" 
                className="bg-accent hover:bg-accent/90"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Criar conta
              </Button>
              <Button 
                onClick={() => navigate("/auth?tab=login")} 
                variant="outline" 
                size="lg"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Entrar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
