interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
}

export default function BrowserFrame({ src, alt, url = "app.squadra.io" }: BrowserFrameProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200">
      <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-full px-4 py-0.5 text-xs text-slate-400 border border-slate-200 max-w-[200px] w-full text-center">
            {url}
          </div>
        </div>
        <div className="w-12 flex-shrink-0" />
      </div>
      <img src={src} alt={alt} className="w-full block" />
    </div>
  );
}
