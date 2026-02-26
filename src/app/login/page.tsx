"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase"; // создай этот файл с твоими ключами
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert("Ошибка: " + error.message);
    else window.location.href = "/admin";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <Card className="w-full max-w-md">
        <CardHeader><CardTitle className="text-center">Вход в админку</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleLogin} className="w-full bg-[#e62e7a]">Войти</Button>
        </CardContent>
      </Card>
    </div>
  );
}