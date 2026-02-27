import Fondo from './components/Fondo'
import ps5Controller from './assets/ps5-controller.png'

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Fondo />

      <div className="relative z-10 flex min-h-screen w-full flex-col px-6 pb-12 pt-6 sm:px-10 lg:px-[120px] lg:pt-10">
        <header className="flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight sm:text-xl">
            <span className="text-orange-500">YOU</span>-GAMING
          </a>

          <nav className="hidden items-center gap-12 text-lg font-medium text-zinc-900 lg:flex">
            <a href="#">Category</a>
            <a href="#">Product</a>
            <a href="#">About</a>
          </nav>

          <button className="rounded-2xl border-2 border-white px-6 py-2 text-base font-semibold text-white backdrop-blur-sm sm:px-8">
            Login
          </button>
        </header>

        <section className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-2 lg:gap-10 lg:py-0">
          <div className="max-w-2xl">
            <p className="text-5xl font-extrabold leading-none text-orange-400 sm:text-6xl">
              GAMING
            </p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight text-black sm:text-6xl">
              Landing Page
            </h1>

            <p className="mt-6 max-w-xl text-base font-semibold leading-relaxed text-zinc-900 sm:text-lg sm:leading-8 lg:text-[1.3rem] lg:leading-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="min-w-[130px] rounded-full bg-orange-500 px-7 py-2.5 text-sm font-bold tracking-wide text-white sm:text-base">
                SIGN IN
              </button>
              <button className="min-w-[160px] rounded-full border border-orange-500 px-7 py-2.5 text-sm font-bold tracking-wide text-orange-500 sm:text-base">
                START TRIAL
              </button>
            </div>
          </div>

          <div className="relative flex min-h-[340px] items-center justify-center sm:min-h-[430px] lg:min-h-[540px]">
            <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/60" />

            <div className="absolute left-[12%] top-[8%] rounded-2xl border border-white/50 bg-neutral-200/55 px-4 py-3 text-sm backdrop-blur-sm sm:text-base">
              <p className="text-lg font-bold text-orange-500 sm:text-2xl">
                Play Your Game
              </p>
              <p className="text-sm font-semibold text-zinc-700">Lorem ipsum is simply dummy</p>
            </div>

            <div className="absolute bottom-[4%] right-[2%] rounded-2xl border border-white/50 bg-red-300/50 px-4 py-3 text-sm text-white backdrop-blur-sm sm:text-base">
              <p className="text-lg font-bold sm:text-2xl">Play Your Game</p>
              <p className="text-sm font-semibold">Lorem ipsum is simply dummy</p>
            </div>

            <img
              src={ps5Controller}
              alt="PlayStation 5 Controller"
              className="h-auto w-[78%] max-w-[560px] -rotate-[30deg] object-contain drop-shadow-[0_28px_40px_rgba(0,0,0,0.33)] lg:w-[96%] lg:max-w-[760px]"
            />
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
