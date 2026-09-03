export default function MiniCamera() {
  return (
    <div aria-hidden="true" className="relative flex h-[70px] w-[86px] rotate-[6deg] items-center justify-center rounded-[18px] border border-[#5a1b30] bg-[#10070a]">
      <div className="relative h-9 w-12 rounded-[8px] border border-[#c45a78]/65">
        <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c45a78]/70" />
        <span className="absolute -top-[7px] left-[8px] h-[7px] w-[15px] rounded-t-[4px] bg-[#6d1e37]" />
        <span className="absolute right-[5px] top-[5px] h-[4px] w-[4px] rounded-full bg-[#c45a78]" />
      </div>
    </div>
  );
}
