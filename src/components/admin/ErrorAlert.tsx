import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorAlertProps {
  error: string;
  onRetry: () => void;
}

export const ErrorAlert = ({ error, onRetry }: ErrorAlertProps) => (
  <div className="bg-rose-50 border border-rose-100 p-4 rounded-2xl flex items-start gap-4 animate-in fade-in slide-in-from-top-4 duration-300 mb-6">
    <div className="bg-white p-2 rounded-xl shadow-sm">
      <AlertCircle className="w-5 h-5 text-[#e62e7a]" />
    </div>
    <div className="flex-grow">
      <h3 className="text-sm font-bold text-slate-900 mb-1">Kurze Verschnaufpause...</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{error}</p>
    </div>
    <Button variant="ghost" size="sm" onClick={onRetry} className="text-[#e62e7a] hover:bg-rose-100/50">
      <RefreshCw className="w-4 h-4 mr-2" /> Erneut versuchen
    </Button>
  </div>
);