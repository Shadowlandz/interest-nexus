
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import SocialLoginButtons from "./SocialLoginButtons";
import TabSwitcher from "./TabSwitcher";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden rounded-2xl">
        <div className="p-6">
          <DialogTitle className="text-2xl font-bold tracking-tight mb-6">
            {tab === "login" ? "Bem-vindo(a) de volta" : "Crie sua conta"}
          </DialogTitle>
          
          <Tabs defaultValue="login" value={tab} onValueChange={(value) => setTab(value as "login" | "register")} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Entrar</TabsTrigger>
              <TabsTrigger value="register">Cadastrar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <LoginForm 
                onSuccess={onSuccess} 
                isLoading={isLoading} 
                setIsLoading={setIsLoading}
              />
            </TabsContent>
            
            <TabsContent value="register">
              <RegisterForm 
                onSuccess={onSuccess} 
                isLoading={isLoading} 
                setIsLoading={setIsLoading}
              />
            </TabsContent>
          </Tabs>
          
          <SocialLoginButtons 
            onSuccess={onSuccess} 
            isLoading={isLoading} 
            setIsLoading={setIsLoading}
          />
          
          <TabSwitcher tab={tab} setTab={setTab} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
