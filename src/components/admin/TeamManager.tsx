"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Trash2, Plus, Upload, User,
  Loader2, Pencil, X, AlertTriangle, Save, GripVertical
} from "lucide-react";
import { motion } from "framer-motion";
import { ErrorAlert } from "./ErrorAlert";

// DND Kit Imports
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const memberSchema = z.object({
  name: z.string().min(2, "Name zu kurz"),
  role: z.string().min(2, "Rolle zu kurz"),
  image_url: z.string().min(1, "Foto erforderlich"),
});

type TeamMember = {
  id: string | number;
  name: string;
  role: string;
  image_url: string;
  sort_order?: number;
};

type SortableMemberProps = {
  member: TeamMember;
  editingId: string | number | null;
  setEditingId: (id: string | number | null) => void;
  handleSaveMember: (id: string | number) => Promise<void>;
  loadingId: string | number | null;
  fetchData: () => Promise<void>;
  setDeleteConfirmId: (id: string | number | null) => void;
  setMembers: (fn: (prev: TeamMember[]) => TeamMember[]) => void;
  handleFileUpload: (id: string | number, file: File) => void;
};

const SortableMember = ({
  member,
  editingId,
  setEditingId,
  handleSaveMember,
  loadingId,
  fetchData,
  setDeleteConfirmId,
  setMembers,
  handleFileUpload
}: SortableMemberProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: member.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 0,
    opacity: isDragging ? 0.6 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative group">
      <motion.div
        layout
        className={`bg-white p-6 rounded-[24px] border transition-all duration-300 ${editingId === member.id ? 'border-[#e62e7a]/40 shadow-xl' : 'border-slate-100 shadow-sm'
          }`}
      >
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-left">

          {/* (Grip) */}
          <div
            {...attributes}
            {...listeners}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 cursor-grab active:cursor-grabbing text-slate-300 hover:text-[#e62e7a] transition-colors md:flex hidden"
          >
            <GripVertical size={20} />
          </div>

          <div className="relative w-32 h-32 flex-shrink-0 ml-4">
            <div className={`w-full h-full rounded-[20px] bg-slate-50 border overflow-hidden flex items-center justify-center relative group/avatar shadow-inner ${editingId === member.id ? 'border-rose-200' : 'border-slate-100'}`}>
              {member.image_url ? (
                <img src={member.image_url} alt="" className="w-full h-full object-cover" />
              ) : (
                <User className="w-8 h-8 text-slate-200" />
              )}

              {editingId === member.id && (
                <label className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer text-white">
                  <Upload className="w-6 h-6 mb-1" />
                  <span className="text-[8px] font-black uppercase tracking-tighter">Upload</span>
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => e.target.files?.[0] && handleFileUpload(member.id, e.target.files[0])} />
                </label>
              )}
            </div>
          </div>

          <div className="flex-grow w-full space-y-4">
            <div className="space-y-1">
              <label className="text-[9px] uppercase font-black text-slate-400 tracking-widest ml-1">Vollständiger Name</label>
              <Input
                disabled={editingId !== member.id}
                value={member.name}
                onChange={(e) => setMembers((prev: TeamMember[]) => prev.map((m: TeamMember) => m.id === member.id ? { ...m, name: e.target.value } : m))}
                className="h-11 rounded-xl border-transparent bg-slate-50/50 focus:bg-white focus:border-[#e62e7a]/30 font-serif italic text-lg"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] uppercase font-black text-slate-400 tracking-widest ml-1">Rolle / Position</label>
              <Input
                disabled={editingId !== member.id}
                value={member.role}
                onChange={(e) => setMembers((prev: TeamMember[]) => prev.map((m: TeamMember) => m.id === member.id ? { ...m, role: e.target.value } : m))}
                className="h-11 rounded-xl border-transparent bg-slate-50/50 focus:bg-white focus:border-[#e62e7a]/30 text-xs"
              />
            </div>
          </div>

          <div className="flex flex-row md:flex-col gap-3 self-center md:self-start">
            {editingId === member.id ? (
              <>
                <Button variant="default" size="icon" onClick={() => handleSaveMember(member.id)} className="rounded-2xl w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg">
                  {loadingId === member.id ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save size={20} />}
                </Button>
                <Button variant="outline" size="icon"
                onClick={() => { setEditingId(null); fetchData(); }}
                className="rounded-2xl w-12 h-12 border-slate-200">
                  <X size={20} />
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="icon" onClick={() => setEditingId(member.id)} className="rounded-2xl w-12 h-12 border-slate-100 text-slate-300 hover:text-[#e62e7a]">
                  <Pencil size={20} />
                </Button>
                <Button variant="outline" size="icon" onClick={() => setDeleteConfirmId(member.id)} className="rounded-2xl w-12 h-12 border-slate-100 text-slate-300 hover:text-red-500">
                  <Trash2 size={20} />
                </Button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const TeamManager = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [loadingId, setLoadingId] = useState<string | number | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const isFetchingRef = useRef(false);
  const memberIds = useMemo(() => members.map(m => m.id), [members]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const fetchData = useCallback(async () => {
    if (isFetchingRef.current) return;

    isFetchingRef.current = true;
    setIsInitialLoading(true);
    setError(null);
    try {
      const { data, error: sbError } = await supabase
        .from("team")
        .select("*")
        .order("sort_order", { ascending: true });

      if (sbError) throw sbError;
      if (data) setMembers(data);
    } catch (err: unknown) {
      setError("Das Team konnte nicht geladen werden. Bitte überprüfen Sie Ihre Verbindung.");
    } finally {
      setIsInitialLoading(false);
      isFetchingRef.current = false;
    }
  }, []);

  useEffect(() => { 
    fetchData(); 
  }, [fetchData]);


  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setMembers((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over?.id);
        const newOrder = arrayMove(items, oldIndex, newIndex);

        updateOrderInSupabase(newOrder);
        return newOrder;
      });
    }
  };

  const updateOrderInSupabase = async (newOrder: TeamMember[]) => {
    const updates = newOrder.map((m, index) => ({
      id: m.id,
      sort_order: index,
      name: m.name,
      role: m.role,
      image_url: m.image_url
    }));

    const { error } = await supabase.from("team").upsert(updates);
    if (error) toast.error("Fehler beim Speichern der Reihenfolge");
    else toast.success("Reihenfolge aktualisiert");
  };

  const handleSaveMember = async (id: string | number) => {
    const member = members.find(m => m.id === id);
    if (!member) return;

    const validation = memberSchema.safeParse(member);
    if (!validation.success) {
      const errorMessage = validation.error.issues[0]?.message || "Bitte alle Felder ausfüllen.";
      toast.error("Validierungsfehler", { description: errorMessage });
      return;
    }

    setLoadingId(id);
    setError(null);

    try {
      const isNew = typeof id === 'number';
      const payload = isNew
        ? {
          name: member.name,
          role: member.role,
          image_url: member.image_url,
          sort_order: members.length
        }
        : member;

      const { error: sbError } = await supabase
        .from("team")
        .upsert(payload, { onConflict: 'id' });

      if (sbError) throw sbError;

      toast.success(isNew ? "Mitglied erstellt" : "Änderungen gespeichert");
      setEditingId(null);

      await fetchData();

    } catch (err: unknown) {
      console.error("Save error:", err);
      toast.error("Fehler beim Speichern", {
        description: "Die Verbindung zur Datenbank ist fehlgeschlagen."
      });
      setError("Das Speichern war nicht erfolgreich. Bitte versuchen Sie es erneut.");
    } finally {
      setLoadingId(null);
    }
  };

  const handleFileUpload = async (id: string | number, file: File) => {
    const promise = async () => {
      const fileName = `${Date.now()}-${file.name}`;
      await supabase.storage.from('avatars').upload(`team/${fileName}`, file);
      const { data: { publicUrl } } = supabase.storage.from('avatars').getPublicUrl(`team/${fileName}`);
      setMembers(prev => prev.map(m => m.id === id ? { ...m, image_url: publicUrl } : m));
      return publicUrl;
    };
    toast.promise(promise(), { loading: 'Foto Upload...', success: 'Bereit!', error: 'Fehler' });
  };

  const deleteMember = async () => {
    if (typeof deleteConfirmId === 'string') await supabase.from("team").delete().eq("id", deleteConfirmId);
    setMembers(prev => prev.filter(m => m.id !== deleteConfirmId));
    setDeleteConfirmId(null);
    toast.success("Gelöscht");
  };

  return (
    <div className="space-y-8">
      {error && <ErrorAlert error={error} onRetry={fetchData} />}
      <div className="flex items-center justify-between bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-rose-50 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#e62e7a]" />
          <span className="text-xs font-black uppercase tracking-widest text-slate-400">Team-Verwaltung</span>
        </div>
        <Button
          onClick={() => {
            const newId = Date.now();
            const newMember = {
              id: newId,
              name: "",
              role: "",
              image_url: ""
            };

            setMembers(prev => [newMember, ...prev]);
            setTimeout(() => {
              setEditingId(newId);
            }, 0);
          }}
          className="bg-[#e62e7a] hover:bg-[#c02065] rounded-full px-6 h-10 shadow-lg uppercase tracking-widest text-[10px] font-black"
        >
          <Plus className="w-3 h-3 mr-2" /> Mitglied hinzufügen
        </Button>
      </div>
      {isInitialLoading && members.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24">
          <Loader2 className="w-12 h-12 animate-spin text-[#e62e7a] mb-4" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Mitglieder werden geladen</span>
        </div>
      ) : members.length > 0 ? (
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={memberIds} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 gap-4">
            {members.map((member) => (
              <SortableMember
                key={member.id}
                member={member}
                editingId={editingId}
                setEditingId={setEditingId}
                handleSaveMember={handleSaveMember}
                loadingId={loadingId}
                fetchData={fetchData}
                setDeleteConfirmId={setDeleteConfirmId}
                setMembers={setMembers}
                handleFileUpload={handleFileUpload}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
      ) : (
        <div className="text-center py-20 border-2 border-dashed border-slate-100 rounded-[40px]">
          <p className="text-slate-400 font-serif italic">Keine Teammitglieder gefunden.</p>
        </div>
      )}

      <Dialog open={!!deleteConfirmId} onOpenChange={() => setDeleteConfirmId(null)}>
        <DialogContent className="rounded-[30px] p-8 max-w-sm">
          <DialogHeader className="items-center text-center space-y-3">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-1"><AlertTriangle className="text-red-500 w-6 h-6" /></div>
            <DialogTitle className="text-xl font-serif italic tracking-tighter">Mitglied löschen?</DialogTitle>
          </DialogHeader>
          <DialogFooter className="flex gap-2 mt-4">
            <Button variant="ghost" onClick={() => setDeleteConfirmId(null)} className="rounded-full h-10 flex-1 font-bold uppercase text-[9px]">Abbrechen</Button>
            <Button onClick={deleteMember} className="bg-red-500 hover:bg-red-600 rounded-full h-10 flex-1 font-bold uppercase text-[9px] text-white">Löschen</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};