import type { ProjectAccentType } from "./projects.types";

type ProjectAccentProps = {
  type: ProjectAccentType;
};

function CameraMark() {
  return (
    <div aria-hidden="true" className="flex h-14 w-16 rotate-[5deg] items-center justify-center rounded-[14px] border border-[#5a1b30] bg-[#10070a]">
      <div className="relative h-7 w-9 rounded-[6px] border border-[#c45a78]/65">
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c45a78]/65" />
        <span className="absolute -top-[5px] left-[6px] h-[5px] w-[10px] rounded-t-[3px] bg-[#c45a78]/45" />
      </div>
    </div>
  );
}

function RecordMark() {
  return (
    <div aria-hidden="true" className="flex rotate-[-4deg] items-center gap-3 rounded-full border border-[#5a1b30] bg-[#10070a] px-4 py-3">
      <span className="h-2 w-2 rounded-full bg-[#c45a78] shadow-[0_0_12px_rgba(196,90,120,0.55)]" />
      <span className="text-[8px] uppercase tracking-[0.3em] text-[#c45a78]">REC</span>
    </div>
  );
}

function FrameMark() {
  return (
    <div aria-hidden="true" className="relative h-14 w-14 rotate-[8deg]">
      <span className="absolute left-0 top-0 h-5 w-px bg-[#c45a78]/60" /><span className="absolute left-0 top-0 h-px w-5 bg-[#c45a78]/60" />
      <span className="absolute right-0 top-0 h-5 w-px bg-[#c45a78]/60" /><span className="absolute right-0 top-0 h-px w-5 bg-[#c45a78]/60" />
      <span className="absolute bottom-0 left-0 h-5 w-px bg-[#c45a78]/60" /><span className="absolute bottom-0 left-0 h-px w-5 bg-[#c45a78]/60" />
      <span className="absolute bottom-0 right-0 h-5 w-px bg-[#c45a78]/60" /><span className="absolute bottom-0 right-0 h-px w-5 bg-[#c45a78]/60" />
    </div>
  );
}

export default function ProjectAccent({ type }: ProjectAccentProps) {
  if (type === "camera") return <CameraMark />;
  if (type === "record") return <RecordMark />;
  return <FrameMark />;
}
