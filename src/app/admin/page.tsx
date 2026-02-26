"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "@/components/ui/sonner"
import { 
  Users, 
  Calendar, 
  Palmtree, 
  LogOut,  
} from "lucide-react";
import { Button } from "@/components/ui/button"
import { LoginForm } from "@/components/admin/LoginForm";
import { VacationManager } from "@/components/admin/VacationManager";
import { TeamManager } from "@/components/admin/TeamManager";
import { SheduleManagment } from "@/components/admin/SheduleManagment";

interface SessionData {
  data: {
    session: object;
  };
}

const adminTabs = [
  { id: "schedule", label: "Öffnungszeiten", icon: Calendar },
  { id: "team", label: "Team-Management", icon: Users },
  { id: "vacation", label: "Urlaubsmodus", icon: Palmtree },
];

export default function AdminPage() {
  const [session, setSession] = useState<SessionData | null>(null)
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("schedule");
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session as SessionData | null);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="min-h-screen bg-[#FCFBFA] flex items-center justify-center font-serif italic text-[#e62e7a]">Laden...</div>;

  if (!session) return <LoginForm />;

  return (
    <div className="min-h-screen bg-[#FCFBFA]">
      {/* --- HEADER --- */}
      <header className="py-10 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#e62e7a] mb-2 block">
            Management Panel
          </span>
          <h1 className="text-3xl md:text-5xl font-serif italic text-slate-900 tracking-tighter">
            Admin<span className="text-[#e62e7a]">Dashboard</span>
          </h1>
        </div>
        <Button
          variant="outline"
          onClick={async () => {
            await supabase.auth.signOut();
            router.push("/"); // Переход на главную
          }}
          className="group flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-slate-500 hover:text-[#e62e7a] transition-all"
        >
          Logout <LogOut className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </header>

      <main className="container mx-auto px-4 md:px-8 pb-20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12 flex flex-col items-center">
          
          <div className="flex justify-center z-30 px-0 md:px-4 w-full">
            <TabsList
              className="h-auto bg-white/80 backdrop-blur-xl p-1.5 md:p-2 flex flex-wrap justify-center gap-1.5 md:gap-2 mx-auto rounded-[1rem] 2xl:rounded-full xl:rounded-[1.5rem] shadow-[0_20px_50px_-12px_rgba(230,46,122,0.12)] border border-rose-100/50"
              style={{ height: 'max-content' }}
            >
              {adminTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="group relative px-5 md:px-10 py-3.5 md:py-4 rounded-[1.1rem] md:rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-black transition-all duration-500 ease-out data-[state=active]:text-white data-[state=inactive]:text-slate-500 data-[state=inactive]:hover:text-[#e62e7a]"
                >
                  <div className="absolute inset-0 opacity-0 group-data-[state=active]:opacity-100 bg-gradient-to-br from-[#e62e7a] to-[#f05697] shadow-[0_8px_20px_rgba(230,46,122,0.25)] transition-all duration-500 scale-[0.98] group-data-[state=active]:scale-100 rounded-[1rem] md:rounded-full" />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <tab.icon className="w-4 h-4 md:w-6 md:h-6 transition-colors duration-500 group-data-[state=active]:text-white group-hover:group-data-[state=inactive]:text-[#e62e7a]" />
                    <span className="leading-none">{tab.label}</span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="max-w-6xl w-full mx-auto outline-none">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "circOut" }}
              >
                <TabsContent value="schedule" className="outline-none">
                    <SheduleManagment />
                </TabsContent>

                <TabsContent value="team" className="outline-none">
                    <TeamManager />
                </TabsContent>

                <TabsContent value="vacation" className="outline-none">
                  <VacationManager />
                </TabsContent>
              </motion.div>
          </div>
        </Tabs>
        <Toaster position="top-center" richColors />
      </main>
    </div>
  );
}