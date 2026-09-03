export default function DesignMockup() {
  const swatches = ["#591323", "#f4efe9", "#22090f", "#b24767"];

  return (
    <div className="group/mockup relative mx-auto w-full max-w-[760px]">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[68%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#591323]/18 blur-[100px]" />

      <div className="relative z-10 mx-auto w-[98%] -rotate-[0.7deg] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/mockup:-translate-y-3 group-hover/mockup:rotate-0">
        <div className="rounded-t-[24px] border border-[#5a2133] bg-[#17090e] p-[7px] pb-0 shadow-[0_30px_100px_rgba(73,12,32,0.34)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-t-[17px] border-x border-t border-white/10 bg-[#080808]">
            <span aria-hidden="true" className="absolute left-1/2 top-[5px] z-30 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-white/10" />

            <div className="grid h-full grid-rows-[42px_minmax(0,1fr)_44px]">
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0d0d0d] px-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#4f1628]" />
                    <span className="h-2 w-2 rounded-full bg-[#7a3047]" />
                    <span className="h-2 w-2 rounded-full bg-[#b15e77]" />
                  </div>
                  <div className="rounded-[6px] bg-[#171717] px-3 py-1.5 text-[7px] text-white/42">Adobe Photoshop</div>
                </div>
                <div className="flex items-center gap-3 text-[7px] text-white/30">
                  <span>File</span><span>Edit</span><span>Image</span><span>Layer</span><span>Type</span>
                </div>
              </div>

              <div className="grid min-h-0 grid-cols-[48px_minmax(0,1fr)_118px]">
                <aside className="flex min-h-0 flex-col items-center gap-2 overflow-hidden border-r border-white/[0.08] bg-[#090909] py-3">
                  {["↖", "T", "▭", "○", "✎", "#"].map((tool, index) => (
                    <div key={`${tool}-${index}`} className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] text-[9px] ${index === 0 ? "bg-[#7b1737] text-white" : "text-white/38"}`}>{tool}</div>
                  ))}
                </aside>

                <div className="relative min-h-0 overflow-hidden bg-[#111111]">
                  <div aria-hidden="true" className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                  <div aria-hidden="true" className="absolute left-[12%] top-[18%] aspect-[4/5] h-[58%] -rotate-[5deg] border border-white/[0.06] bg-[#191919]" />
                  <div aria-hidden="true" className="absolute bottom-[14%] right-[11%] aspect-[4/5] h-[53%] rotate-[6deg] border border-[#4c1627] bg-[#260b14]" />

                  <div className="absolute left-1/2 top-1/2 z-10 aspect-[4/5] h-[68%] -translate-x-1/2 -translate-y-1/2 border border-white/10 bg-[#74152f] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                    <div aria-hidden="true" className="pointer-events-none absolute -inset-[3px] border border-[#d05779]/30">
                      <span className="absolute -left-[2px] -top-[2px] h-[4px] w-[4px] bg-white" />
                      <span className="absolute -right-[2px] -top-[2px] h-[4px] w-[4px] bg-white" />
                      <span className="absolute -bottom-[2px] -left-[2px] h-[4px] w-[4px] bg-white" />
                      <span className="absolute -bottom-[2px] -right-[2px] h-[4px] w-[4px] bg-white" />
                    </div>
                    <div className="flex h-full flex-col justify-between">
                      <div className="flex items-start justify-between"><span className="text-[6px] tracking-[0.25em] text-white/45">FION / 01</span><span className="text-[6px] text-white/25">1080 × 1350</span></div>
                      <div>
                        <p className="font-serif text-[clamp(1.4rem,2.4vw,2.45rem)] leading-[0.82] tracking-[-0.055em] text-[#f4efe9]">Sıradan<br />Olanı<br />Unut.</p>
                        <div className="mt-3 h-px w-9 bg-white/40" />
                        <p className="mt-3 max-w-[115px] text-[6px] leading-3 text-white/52">Fikri ve görsel dili aynı sistemde buluşturuyoruz.</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-[5px] bg-black/60 px-2 py-1 text-[6px] text-white/30">78%</div>
                </div>

                <aside className="min-h-0 overflow-hidden border-l border-white/[0.08] bg-[#090909] p-3">
                  <p className="text-[7px] uppercase tracking-[0.22em] text-white/35">Properties</p>
                  <div className="mt-4 border-t border-white/[0.08] pt-3"><p className="text-[7px] text-white/32">Fill</p><div className="mt-2 flex items-center gap-2"><span className="h-7 w-7 rounded-[8px] bg-[#591323]" /><span className="text-[7px] text-white/50">#591323</span></div></div>
                  <div className="mt-4 border-t border-white/[0.08] pt-3"><p className="text-[7px] text-white/32">Typeface</p><p className="mt-2 font-serif text-[18px] text-[#f4efe9]">Aa</p><p className="mt-1 text-[6px] text-white/38">Display Serif</p></div>
                  <div className="mt-4 border-t border-white/[0.08] pt-3"><div className="flex justify-between"><p className="text-[7px] text-white/32">Opacity</p><span className="text-[6px] text-white/25">78%</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[78%] rounded-full bg-[#c45a78]" /></div></div>
                  <div className="mt-4 border-t border-white/[0.08] pt-3"><p className="text-[7px] text-white/32">Layers</p><div className="mt-2 space-y-1.5">{["Headline", "Body Copy", "Background"].map((layer, index) => <div key={layer} className={`truncate rounded-[5px] px-2 py-1.5 text-[6px] ${index === 0 ? "bg-[#32101c] text-white/65" : "bg-[#141414] text-white/30"}`}>{layer}</div>)}</div></div>
                </aside>
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.08] bg-[#090909] px-4">
                <div className="flex gap-2">{swatches.map((color) => <span key={color} className="h-7 w-7 rounded-[7px] border border-white/10" style={{ backgroundColor: color }} />)}</div>
                <span className="text-[6px] uppercase tracking-[0.2em] text-white/22">RGB / 8</span>
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="relative mx-auto h-[16px] w-[108%] -translate-x-[4%] rounded-b-[44px] border-t border-white/10 bg-[#241117]"><div className="absolute left-1/2 top-0 h-[4px] w-[100px] -translate-x-1/2 rounded-b-[6px] bg-[#10080b]" /></div>
        <div className="mx-auto h-[4px] w-[88%] rounded-b-full bg-[#12080c]" />
      </div>
    </div>
  );
}
