export default function BackgroundSpots() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Main background gradients - more subtle */}
      <div
        className="absolute -right-20 -top-20 h-[30rem] w-[30rem] rounded-full bg-blue-500/5 blur-[100px]"
        style={{ transform: "translate3d(0, 0, 0)" }}
      ></div>

      <div
        className="absolute -bottom-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-blue-500/5 blur-[100px]"
        style={{ transform: "translate3d(0, 0, 0)" }}
      ></div>

      <div
        className="absolute left-1/2 top-1/3 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/3 blur-[120px]"
        style={{ transform: "translate3d(-50%, -50%, 0)" }}
      ></div>

      {/* Small floating spots - very subtle */}
      <div className="absolute left-1/4 top-1/4 h-4 w-4 rounded-full bg-blue-500/10 blur-sm"></div>
      <div className="absolute bottom-1/4 right-1/3 h-3 w-3 rounded-full bg-blue-500/10 blur-sm"></div>
      <div className="absolute bottom-1/3 left-1/3 h-2 w-2 rounded-full bg-blue-500/10 blur-sm"></div>
      <div className="absolute right-1/4 top-1/3 h-2 w-2 rounded-full bg-blue-500/10 blur-sm"></div>

      {/* Additional floating elements - very subtle */}
      <div className="absolute left-[15%] top-[60%] h-6 w-6 rounded-full bg-blue-500/5 blur-md"></div>
      <div className="absolute right-[20%] top-[40%] h-5 w-5 rounded-full bg-blue-500/8 blur-md"></div>
      <div className="absolute bottom-[15%] right-[25%] h-4 w-4 rounded-full bg-blue-500/5 blur-sm"></div>
      <div className="absolute bottom-[30%] left-[20%] h-3 w-3 rounded-full bg-blue-500/5 blur-sm"></div>

      {/* Animated spots - very subtle */}
      <div className="absolute left-[30%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-blue-400/15 blur-sm"></div>
      <div className="absolute right-[40%] top-[70%] h-2 w-2 animate-pulse rounded-full bg-blue-400/15 blur-sm"></div>
      <div className="absolute bottom-[40%] right-[10%] h-2 w-2 animate-pulse rounded-full bg-blue-400/15 blur-sm"></div>

      {/* Grid patterns - very subtle */}
      <div className="absolute bottom-0 left-0 right-0 top-1/2 grid-pattern opacity-2"></div>
      <div className="absolute bottom-1/2 left-0 right-0 top-0 grid-pattern opacity-2"></div>

      {/* Radial gradients - very subtle */}
      <div className="absolute left-1/4 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 radial-gradient opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 h-[40rem] w-[40rem] translate-x-1/2 translate-y-1/2 radial-gradient opacity-10"></div>
    </div>
  );
}
