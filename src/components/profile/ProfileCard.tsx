
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Bookmark, Users, BookText } from "lucide-react";

interface ProfileCardProps {
  showSignup?: boolean;
  onSignup?: () => void;
}

export default function ProfileCard({ showSignup = false, onSignup }: ProfileCardProps) {
  if (showSignup) {
    return (
      <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-none overflow-hidden">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Faça parte do Nexus</h3>
            <p className="text-sm text-muted-foreground">
              Conecte-se com pessoas que compartilham seus interesses e descubra novos conteúdos todos os dias.
            </p>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-center">
          <Button
            onClick={onSignup}
            className="w-full bg-accent hover:bg-accent/90"
          >
            Criar conta grátis
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden bg-card">
      <div className="h-24 bg-gradient-to-r from-accent/30 to-accent/10" />
      <CardContent className="pt-0 relative">
        <div className="-mt-12 flex justify-between items-end mb-4">
          <Avatar className="h-20 w-20 border-4 border-background">
            <AvatarImage src="https://i.pravatar.cc/150?img=3" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm">
            Editar perfil
          </Button>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">João Dantas</h3>
          <p className="text-sm text-muted-foreground">@jdantas</p>
          
          <p className="text-sm mt-4">
            Amante de livros, séries e aprendizado contínuo. Sempre em busca de novas conexões e conhecimentos.
          </p>
          
          <div className="flex items-center gap-3 mt-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>45 seguidores</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <BookText className="h-4 w-4" />
              <span>23 posts</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t p-4">
        <div className="w-full">
          <h4 className="text-sm font-semibold mb-2">Interesses</h4>
          <div className="flex flex-wrap gap-2">
            {["Literatura", "Filosofia", "Cinema", "Ciência", "História"].map((interest) => (
              <span 
                key={interest} 
                className="px-3 py-1 text-xs bg-secondary rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
