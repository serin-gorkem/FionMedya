export default function AdsMockup() {
  const bars = [34, 48, 42, 58, 54, 71, 64, 83];
  const campaigns = [
    { name: "Brand Awareness", status: "Active", reach: "XY.K", result: "ZT" },
    { name: "Conversion Push", status: "Active", reach: "AB.K", result: "QR" },
    { name: "Remarketing", status: "Paused", reach: "JK.K", result: "LM" },
  ];

  return (
    <div className="group/mockup relative mx-auto w-full max-w-[560px]">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#591323]/18 blur-[100px]" />
      <div className="relative z-10 rounded-[30px] border border-[#5f1c31] bg-[#0a0a0a] p-6 shadow-[0_30px_100px_rgba(72,12,31,0.30)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/mockup:-translate-y-2">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div><p className="text-[10px] uppercase tracking-[0.32em] text-[#c45a78]">Campaign Manager</p><h4 className="mt-3 font-serif text-[46px] leading-[0.9] tracking-[-0.05em] text-[#f4efe9]">Reklam<br />Yönetimi</h4></div>
          <button type="button" className="rounded-[14px] bg-[#7a1636] px-5 py-3 text-sm font-medium text-white">+ Campaign</button>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            ["Reach", "XY.K", "+ZT%"],
            ["CTR", "Z.T%", "+AB%"],
            ["Results", "AB", "Active"],
          ].map(([label, value, meta], index) => (
            <div key={label} className={`rounded-[20px] border p-4 ${index === 1 ? "border-[#622036] bg-[#2a0d17]" : "border-white/10 bg-[#111111]"}`}>
              <p className="text-[9px] uppercase tracking-[0.24em] text-white/35">{label}</p>
              <p className="mt-4 font-serif text-[44px] tracking-[-0.05em] text-[#f4efe9]">{value}</p>
              <p className="mt-2 text-[10px] text-[#c45a78]">{meta}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-[24px] border border-white/10 bg-[#101010] p-5">
          <div className="flex items-center justify-between"><div><p className="text-sm font-medium text-white/70">Campaign activity</p><p className="mt-1 text-[11px] text-white/28">Last 8 periods</p></div><span className="text-[11px] text-white/28">Reach</span></div>
          <div className="mt-6 flex h-[170px] items-end gap-3">
            {bars.map((height, index) => <div key={`${height}-${index}`} className="flex h-full w-full items-end"><div className={`w-full rounded-t-[8px] ${index === bars.length - 1 ? "bg-[#c45a78]" : "bg-[#74203b]"}`} style={{ height: `${height}%` }} /></div>)}
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-[24px] border border-white/10 bg-[#0f0f0f]">
          <div className="grid grid-cols-[1fr_88px_72px_56px] border-b border-white/10 px-5 py-4">
            {['Campaign','Status','Reach','Result'].map((header) => <span key={header} className="text-[10px] uppercase tracking-[0.2em] text-white/25">{header}</span>)}
          </div>
          {campaigns.map((campaign, index) => (
            <div key={campaign.name} className={`grid grid-cols-[1fr_88px_72px_56px] items-center px-5 py-5 ${index !== campaigns.length - 1 ? "border-b border-white/[0.06]" : ""}`}>
              <span className="text-sm text-white/65">{campaign.name}</span>
              <div><span className={`rounded-full px-3 py-1 text-[10px] ${campaign.status === "Active" ? "bg-[#39101f] text-[#db6d8a]" : "bg-white/[0.05] text-white/35"}`}>{campaign.status}</span></div>
              <span className="text-sm text-white/45">{campaign.reach}</span>
              <span className="text-sm text-white/68">{campaign.result}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
