
import Link from 'next/link'

const Hero = () => {
  return (
    <main>
      <header className='flex flex-col items-center fixed top-0 w-full z-40 pt-[70px]'>
        <div className='mt-40 flex flex-col justify-evenly'>
          <h1 className="text-white text-9xl animate-fade-up animate-once animate-duration-1000 animate-delay-100 animate-ease-in-out delay-200">Esports <span className='text-yellow-700'>Center</span></h1>
          <div className="flex justify-center mt-20 gap-24 animate-fade-up animate-once animate-duration-1000 animate-delay-700 animate-ease-in-out delay-[2000ms] ">
            <Link href="/register" className="bg-sky-500 tex-white py-2 px-5 text-xl rounded-md hover:bg-sky-900 ">Empieza ya</Link>
            <Link href="/prices" className="bg-white/80 text-black py-2 px-5 text-xl rounded-md hover:bg-black hover:text-gray-100">Más información</Link>
          </div>
        </div>
      </header>
      <section className="bg-black h-screen w-screen relative overflow-hidden flex">
        <div className='absolute z-20 w-full flex'>
          <video autoPlay muted loop className='w-full h-full' src='/video.mp4'></video>
        </div>
      </section>
    </main>
  )
}

export default Hero
