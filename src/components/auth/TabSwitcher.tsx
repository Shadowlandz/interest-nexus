
import React from "react";

interface TabSwitcherProps {
  tab: "login" | "register";
  setTab: (tab: "login" | "register") => void;
}

export default function TabSwitcher({ tab, setTab }: TabSwitcherProps) {
  return (
    <p className="mt-6 text-center text-sm text-muted-foreground">
      {tab === "login" ? (
        <>
          Não tem uma conta?{' '}
          <button onClick={() => setTab("register")} className="text-accent hover:underline">
            Cadastre-se
          </button>
        </>
      ) : (
        <>
          Já tem uma conta?{' '}
          <button onClick={() => setTab("login")} className="text-accent hover:underline">
            Faça login
          </button>
        </>
      )}
    </p>
  );
}
