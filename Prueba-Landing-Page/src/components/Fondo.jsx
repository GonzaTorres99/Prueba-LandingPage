const dotGrid = Array.from({ length: 20 })

function DotPattern({ className = '' }) {
  return (
    <div className={`grid grid-cols-4 gap-2 ${className}`}>
      {dotGrid.map((_, index) => (
        <span
          key={index}
          className="h-1.5 w-1.5 rounded-full bg-white/95"
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function Fondo() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#f6efe3]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_45%,#eab593_0%,#efcfb5_27%,#f2e6c6_58%,#f6efe3_100%)]" />

      <div className="absolute inset-y-[-20%] left-[18%] w-[14%] -rotate-[17deg] bg-white/14 blur-[1px]" />
      <div className="absolute inset-y-[-18%] left-[36%] w-[16%] -rotate-[17deg] bg-white/20" />
      <div className="absolute inset-y-[-25%] left-[58%] w-[18%] -rotate-[17deg] bg-orange-600/90" />
      <div className="absolute inset-y-[-20%] left-[70%] w-[16%] -rotate-[17deg] bg-orange-500/90" />
      <div className="absolute inset-y-[-15%] left-[84%] w-[22%] -rotate-[17deg] bg-orange-600" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_88%,rgba(255,20,0,0.85),rgba(255,20,0,0)_34%)]" />

      <div className="absolute left-1/2 top-[20%] h-[48vw] w-[48vw] max-h-[600px] max-w-[600px] -translate-x-[12%] rounded-full border-[24px] border-white/50 bg-transparent shadow-[inset_0_0_0_3px_rgba(255,255,255,0.35)]" />
      <div className="absolute left-1/2 top-[20%] h-[48vw] w-[48vw] max-h-[600px] max-w-[600px] -translate-x-[12%] rounded-full border-2 border-white/25" />

      <div className="absolute left-[44%] top-[74%] h-16 w-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f6f6f6,#c5c5c7_68%,#a3a5a8)] shadow-[0_14px_20px_rgba(0,0,0,0.25)]" />
      <div className="absolute left-[80%] top-[28%] h-16 w-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f6f6f6,#c5c5c7_68%,#a3a5a8)] shadow-[0_10px_14px_rgba(0,0,0,0.2)]" />

      <DotPattern className="absolute left-[73%] top-[9%]" />
      <DotPattern className="absolute left-[63%] top-[36%]" />
    </div>
  )
}

export default Fondo
