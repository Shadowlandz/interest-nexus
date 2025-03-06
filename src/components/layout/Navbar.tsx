
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import AuthModal from "../auth/AuthModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLoginClick = () => {
    setAuthModalOpen(true);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setAuthModalOpen(false);
  };

  const navLinks = [
    { title: "Explorar", href: "/explore" },
    { title: "Comunidades", href: "/communities" },
    { title: "Premium", href: "/premium" },
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out",
          scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2 text-xl font-semibold">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent text-accent-foreground font-bold">
                N
              </div>
              <span className="hidden sm:inline-block">Nexus</span>
            </a>
            
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.title}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-accent"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex items-center">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="w-64 pl-10 pr-4 py-2 rounded-full bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>
            
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
                </Button>
                <Avatar className="h-9 w-9 transition-transform hover:scale-105">
                  <AvatarImage src="https://i.pravatar.cc/150?u=user" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost"
                  size="sm"
                  onClick={handleLoginClick}
                  className="text-sm hidden md:flex"
                >
                  Entrar
                </Button>
                <Button 
                  onClick={handleLoginClick}
                  className="bg-accent hover:bg-accent/90 text-sm"
                >
                  Cadastrar
                </Button>
              </div>
            )}
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            mobileMenuOpen ? "max-h-screen pb-4" : "max-h-0"
          )}
        >
          <div className="px-4 py-2 space-y-4">
            <div className="relative flex items-center my-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="w-full pl-10 pr-4 py-2 rounded-full bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>
            
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a 
                  key={link.title}
                  href={link.href}
                  className="text-sm font-medium py-2 transition-colors hover:text-accent"
                >
                  {link.title}
                </a>
              ))}
              
              {!isLoggedIn && (
                <Button
                  onClick={handleLoginClick}
                  variant="ghost"
                  className="justify-start px-0 text-sm font-medium"
                >
                  Entrar
                </Button>
              )}
            </nav>
          </div>
        </div>
      </header>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)}
        onSuccess={handleLoginSuccess}
      />
    </>
  );
}
