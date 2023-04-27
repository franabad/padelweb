'use client'
import Link from 'next/link'
import Auth from './authButtons'
import Services from './services'

const NavBar = () => {
  return (
    <nav className="bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-blur-[10px] border-[1px] border-solid border-white/30 mx-8 py-4 grid place-items-center grid-cols-[1fr_64px_1fr] grid-rows-1">
      <div className="col-span-1 flex items-center justify-evenly w-full">
        <div>
          <Link href="/" className="text-black font-bold hover:text-blue-700">
            Inicio
          </Link>
        </div>
        <div>
          <Link
            href="/about"
            className=" text-black font-bold hover:text-blue-700"
          >
            Nosotros
          </Link>
        </div>
      </div>

      <div className="col-span-1 w-full">
        <svg
          className="fill-black scale-[2.5]"
          xmlns="http://www.w3.org/2000/svg"
          width="32px"
          height="32px"
          version="1.0"
          viewBox="0 0 2000 2000"
        >
          <path d="M960.5 453.1c-51.6 4.2-97.1 14.8-133.2 31.2l-11.7 5.3-4.2 17.4c-21.9 89.6-28.6 122.9-33.8 168.5-4.4 38.7-4.7 82.4-.7 105C797.4 895.4 899 976 1014.6 968.9c71.8-4.4 137.2-42.9 176.6-103.9 16.3-25.1 26.6-51.2 32.5-82 4.4-23.4 4.3-67.2-.3-108-4.7-42.1-12.2-79.8-32-161.4l-5.9-23.9-9.1-4.3c-33.6-15.6-72.3-25.5-120.4-30.9-17-2-78.2-2.9-95.5-1.4zM882.1 542c13.1 6.7 9.4 25.7-5.3 27.6-15.7 2-22-20.2-7.8-27.7 4.5-2.4 8.1-2.4 13.1.1zm49.9-.1c9.8 5.2 10.9 18.8 2 25.1-4.5 3.2-8.9 3.6-14.3 1.2-11.3-5-11.9-20.4-1-26.1 4.8-2.5 8.9-2.6 13.3-.2zm50 0c14.2 7.5 7.9 29.7-7.8 27.7-8.1-1.1-13.2-6.7-13.2-14.8 0-5.5 2.8-10.1 7.7-12.7 4.8-2.5 8.9-2.6 13.3-.2zm50 0c10.7 5.6 10.7 20.4 0 26.3-9.3 5.1-21-2.4-21-13.3 0-5.9 3-10.5 8.3-12.9 5.3-2.5 8.3-2.5 12.7-.1zm50 0c10.9 5.7 10.7 21.1-.3 26.1-5.2 2.4-7.1 2.4-12.3.1-11-5-11.3-20.4-.4-25.9 5.4-2.7 8.4-2.8 13-.3zm50 0c10.9 5.7 10.7 21.1-.3 26.1-5.2 2.4-7.1 2.4-12.3.1-11-5-11.3-20.4-.4-25.9 5.4-2.7 8.4-2.8 13-.3zm-298.4 46.7c6.4 4.2 8.4 14.2 4.2 20.4-2.7 3.9-8.1 7-12.3 7-7.5 0-14.5-7.1-14.5-14.7 0-7 4.3-12.9 10.5-14.6 3.1-.8 9.4.2 12.1 1.9zm50.6.5c8.7 6.2 7.5 19.9-2.2 25-4.5 2.4-8.1 2.4-13.1-.1-5.1-2.7-7.9-7.2-7.9-13 0-11.9 13.5-18.8 23.2-11.9zm47.5-1.1c11 5 11.2 20.4.3 26.1-6.6 3.5-14.3 1.4-18.7-5.1-3-4.3-3.1-11.2-.3-15.8 2.1-3.4 8.7-7.2 12.5-7.2 1.1 0 3.9.9 6.2 2zm50.3-.1c5.1 2.7 8 7.4 8 13.1 0 5.7-2.9 10.4-8 13.1-4.5 2.4-8.1 2.4-13.1-.1-10.8-5.6-10.6-21 .4-26 5.3-2.5 8.3-2.5 12.7-.1zm50.1.1c10.7 5.5 10.6 20.5-.1 26.1-4.5 2.4-8.1 2.4-13.1-.1-10.6-5.5-10.6-20.3.1-25.8 5.5-2.7 8-2.8 13.1-.2zm49.6 0c11 4.9 11.2 20.8.3 26.2-4.7 2.4-8.7 2.2-13.4-.5-13-7.4-8.2-26.9 6.9-27.6 1.1 0 3.9.8 6.2 1.9zm50 0c14.6 6.6 8.5 29.3-7.4 27.7-14.6-1.5-18.3-20.8-5.3-27.5 5.4-2.7 7.3-2.7 12.7-.2zm50.4 0c14.1 7.2 7.9 29.3-7.8 27.7-14.5-1.5-18.3-20.8-5.3-27.5 5.5-2.7 8-2.8 13.1-.2zm-350.5 45.9c11 5 11.3 20.9.4 26.3-13.1 6.6-26.6-8.4-18.8-21 2.1-3.5 8.5-7.2 12.3-7.2 1.1 0 3.8.9 6.1 1.9zm50.1.1c11 4.9 11.2 20.8.3 26.2-13 6.6-26.6-8.5-19-21 2.1-3.4 8.7-7.2 12.5-7.2 1.1 0 3.9.9 6.2 2zm50 0c11 4.9 11.2 20.8.3 26.2-4.5 2.3-8.7 2.3-13-.1-10.9-5.7-10.7-21.1.3-26.1 2.3-1.1 5.1-2 6.2-2 1.1 0 3.9.9 6.2 2zm50 0c11 4.9 11.2 20.8.3 26.2-4.5 2.3-8.7 2.3-13-.1-10.7-5.6-10.7-20.4 0-25.9 5.4-2.7 7.3-2.7 12.7-.2zm50 0c11 4.9 11.2 20.8.3 26.2-4.5 2.3-8.7 2.3-13-.1-10.9-5.7-10.6-21.2.4-26.2 5.2-2.3 7.1-2.3 12.3.1zm50 0c11 4.9 11.2 20.8.3 26.2-4.5 2.3-8.7 2.3-13-.1-10.7-5.6-10.7-20.2 0-25.8 5.2-2.8 7.2-2.8 12.7-.3zm52.5 1.1c8.7 6.2 7.5 20.3-2.2 25.1-4.5 2.3-8.7 2.3-13-.1-5-2.6-8-7.4-8-12.9 0-11.9 13.5-19 23.2-12.1zm50 0c8.7 6.2 7.5 20.3-2.2 25.1-6.7 3.4-14.3 1.3-18.7-5.2-8.9-12.9 8-29 20.9-19.9zM832 680.3c10.6 5.6 10.6 20.6 0 25.9-9.7 4.9-21-2.1-21-13 0-5.8 2.9-10.4 8.3-13.1 5.3-2.7 7.4-2.6 12.7.2zm51.2.3c6.5 3.4 8.9 13.9 4.5 20.5-1.2 1.9-3.8 4.2-5.7 5.1-13.4 6.8-26.9-9-18.5-21.5 1.4-2 2.7-3.7 2.8-3.7.1 0 2-.7 4.2-1.5 4.2-1.5 8.2-1.2 12.7 1.1zm48.4-.5c11.1 5.3 11.3 20.7.4 26.1-9.7 4.9-21-2.1-21-13 0-5.8 2.9-10.4 8.3-13.1 5.3-2.6 7-2.6 12.3 0zm50-.2c11 5 11.3 20.9.4 26.3-13.4 6.8-26.9-9-18.5-21.5 1.4-2 2.7-3.7 2.8-3.7.1 0 2-.7 4.2-1.5 5.2-1.8 6.2-1.8 11.1.4zm50.1.1c11 4.9 11.2 20.8.3 26.2-13.1 6.6-26.6-8.4-18.8-21 2.1-3.5 8.5-7.2 12.3-7.2 1.1 0 3.9.9 6.2 2zm50 0c11 4.9 11.2 20.8.3 26.2-9.7 4.9-21-2.1-21-13 0-5.8 2.9-10.4 8.3-13.1 5.2-2.6 7-2.6 12.4-.1zm50 0c11 4.9 11.2 20.8.3 26.2-12.8 6.5-26-7.5-19.1-20.2 1.9-3.6 8.8-8 12.5-8 1.2 0 4 .9 6.3 2zm50 0c14 6.3 9.1 28-6.3 28-10.7 0-17.7-12.3-12.5-22 1.9-3.6 8.8-8 12.5-8 1.2 0 4 .9 6.3 2zM829 725c2 .5 5.1 2.5 7 4.5 2.7 2.8 3.4 4.4 3.8 8.7.3 4.4 0 5.9-2 8.8-6.1 9-18.5 9.1-24.5.1-5.4-8.1-1.1-19.2 8.6-22.1 3.5-1.1 3.2-1.1 7.1 0zm50 0c2 .5 5.1 2.5 7 4.5 2.7 2.8 3.4 4.4 3.7 8.7.5 6.2-1.7 10.6-6.9 13.8-6.6 4-15.5 1.7-19.9-5.2-3.2-5.2-2.3-12.8 2.2-17.4 2.7-2.8 6.2-4.7 9.9-5.3.3-.1 2.1.4 4 .9zm54.5 2c9.3 5.7 8.5 20.2-1.5 25.2-6.8 3.4-14.4 1.3-18.8-5.2-2-2.9-2.3-4.4-2-8.8.4-4.3 1.1-5.9 3.9-8.8 5.4-5.6 11.7-6.4 18.4-2.4zm49.7-.4c9.2 4.7 8.9 19.7-.4 25.4-6.6 4-15.5 1.7-19.9-5.2-3.2-5.2-2.3-12.8 2.2-17.4 5.2-5.4 11.2-6.3 18.1-2.8zm50 0c6.5 3.4 8.9 13.9 4.5 20.5-6 9-18.4 8.9-24.5-.1-2-2.9-2.3-4.4-2-8.8.4-4.3 1.1-5.9 3.9-8.8 5.2-5.4 11.2-6.3 18.1-2.8zm50.3.4c9 5.5 8.6 19.3-.7 25-9.2 5.6-21.8-1.5-21.8-12.3 0-12.2 12.1-19 22.5-12.7zm49.8-.3c6.6 3.3 8.8 13.8 4.4 20.4-10.2 15.3-33 2-25.1-14.6 3.5-7.5 12.5-10 20.7-5.8zm50 0c6.9 3.5 9.1 15.3 4.1 21.3-5.1 6-11.8 7.6-18.4 4.2-9.3-4.7-10.7-16.6-2.7-24 4.5-4.3 10.6-4.8 17-1.5zM834 773.3c8.5 6 7.8 19.2-1.2 24.7-6.6 4-15.5 1.7-19.9-5.2-1.5-2.6-1.9-4.5-1.6-8.6.3-4.5.9-5.9 3.9-8.9 5.3-5.2 13-6.1 18.8-2zm50.2.1c5.6 3.7 7.5 13.3 3.8 19.4-7.6 12.4-27 7.3-27-7.1 0-12.4 12.8-19.1 23.2-12.3zm49.8-.1c11.4 8 5.4 26.7-8.5 26.7-10.7 0-17.7-11.5-12.9-21.5 3.6-7.6 14.3-10.2 21.4-5.2zm50 0c11.4 8 5.4 26.7-8.5 26.7-10.7 0-17.7-11.5-12.9-21.5 3.6-7.6 14.3-10.2 21.4-5.2zm52.3 2.6c3.2 3.5 3.7 4.7 3.7 8.8 0 8.6-6.4 15.3-14.5 15.3-10.4 0-17.8-11.7-13.1-20.8 5.1-9.8 16.3-11.4 23.9-3.3zm47.7-2.6c11.4 8 5.4 26.7-8.5 26.7-11 0-17.8-11.7-12.6-21.8 3.9-7.5 14-9.9 21.1-4.9zm50 0c6.5 4.6 8.2 14.9 3.4 20.7-5.2 6.1-13 7.8-19.2 4-8.7-5.3-9.6-16.6-1.9-23.9 4.5-4.1 12.5-4.5 17.7-.8zm49.7-.5c1.2.7 3.1 2.8 4.3 4.7 3 4.9 2.5 13.3-1.1 17.1-7.1 7.7-18 6.9-23.7-1.6-2-2.9-2.3-4.4-2-8.8.4-4.5 1-5.9 4-8.9 5.1-5 11.9-6 18.5-2.5zM833.5 819c11.9 7.4 6.1 27-8 27-14.4 0-19.9-19.2-7.9-27.1 3.9-2.6 11.7-2.5 15.9.1zm52.2 2.3c3.1 3 3.7 4.4 4 8.9.5 6.2-1.7 10.6-6.9 13.8-6.6 4-15.5 1.7-19.9-5.2-3-4.9-2.2-12.8 1.7-16.9 3.9-4.2 6-4.9 12.2-4.6 4.6.3 5.9.9 8.9 4zm46.9-2.7c9.8 4.6 9.9 19.5.2 25.4-9.3 5.6-21.8-1.5-21.8-12.5 0-11.2 11.1-17.9 21.6-12.9zm50.9.4c8.9 5.5 8.5 19.4-.7 25-6.6 4-15.5 1.7-19.9-5.2-3-4.9-2.2-12.8 1.7-16.9 1.6-1.7 3.8-3.5 4.9-3.9 3.7-1.6 10.6-1.1 14 1zm51.8 1.9c4.1 3.9 4.2 4.1 4.2 10.4 0 5.6-.4 6.9-2.5 9.2-5.4 5.8-12.8 7.1-18.8 3.5-8.6-5.3-9.6-16.7-2-23.6 3-2.8 4.3-3.2 10.1-3.3 4.2-.1 5.3.3 9 3.8zm48.1-2c4.5 3 6.6 7 6.6 12.8 0 4.1-.5 5.8-2.6 8.3-7.2 8.4-18.7 7.9-24.5-1.2-1.6-2.6-1.9-4.5-1.6-8.7.3-4.8.8-5.8 4.5-9.3 3.7-3.4 4.7-3.8 9.4-3.8 3.5 0 6.3.7 8.2 1.9zm50.1.1c7.7 4.8 8.8 16.1 2.2 22.8-3 3-4.4 3.6-8.9 3.9-9.7.7-16.2-5.8-15.5-15.6.3-4.8.8-5.8 4.5-9.3 3.7-3.4 4.7-3.8 9.3-3.8 3.4 0 6.3.7 8.4 2zm50 0c7.7 4.8 8.8 16.1 2.2 22.8-3 3-4.4 3.6-8.9 3.9-15 1.1-21.5-16.2-9.8-26.1 4-3.3 11.6-3.6 16.5-.6zM882 860.1c1.4.5 3.7 2.6 5.3 4.6 7 9.3-.1 23.3-11.8 23.3-7.7 0-14.5-6.7-14.5-14.3 0-11.5 10.1-18.1 21-13.6zm51.5.9c9.3 5.7 8.5 20.2-1.5 25.2-12.6 6.4-25.5-6.9-19.4-19.7 3.6-7.7 13.1-10.2 20.9-5.5zm50 0c12 7.3 6.2 27-8 27-13.9 0-19.9-18.7-8.6-26.7 5.2-3.6 11-3.7 16.6-.3zm49.7-.4c6.3 3.3 8.8 13.6 4.8 20.2-5.7 9.3-18.6 9.5-24.8.2-2-2.9-2.3-4.4-2-8.8.4-4.3 1.1-5.9 3.9-8.8 5.2-5.4 11.2-6.3 18.1-2.8zm50 0c9.2 4.7 8.9 19.7-.4 25.4-9 5.5-21.8-1.7-21.8-12.2 0-11.9 11.4-18.7 22.2-13.2zm50 0c4.6 2.4 7.1 7.7 6.6 14-.5 5.8-2.8 9.3-8 12-9 4.7-20.8-2.7-20.8-12.9 0-12 11.3-18.6 22.2-13.1z" />
          <path d="M784.4 508.7c-43.3 31-70.5 72.1-83.3 126.3-20 84.3-5.5 178.2 42.3 273.1 31.5 62.7 58.5 100 121.6 168.2 44 47.5 60 65.8 70.9 81.2 19.7 27.8 27.3 47.3 27.5 71l.1 12h74l.6-14c.3-7.7 1.1-16 1.7-18.5 4.2-17 14.6-36.4 30.5-57.5 11.4-14.9 21.6-26.4 65.3-73.5 59.9-64.7 87.5-102.2 117.2-159.1 29.7-56.9 47.2-111 53.9-166.9 2.2-18.6 2.2-60.8 0-78.6-2-16-5.9-36.5-9.3-48.2-11.3-39.8-33.1-75.2-62.2-100.8-10.5-9.2-25-19.9-25.8-19.1-.4.3 2.1 11.7 5.5 25.4 23.6 96.6 32.3 157.9 30.8 218.2-1 40.5-8 69.3-25.3 104-36.7 73.8-108.2 124.5-189.9 134.6-15.1 1.9-42.7 2.1-56.5.5-57.2-6.8-106.9-30.8-147-71-37.6-37.5-61.3-84.2-69.7-137-2.5-15.9-2.5-67.7.1-93 4.9-48.9 15-102.2 32.5-171.8 1.6-6.1 2.8-11.2 2.6-11.2-.1 0-3.8 2.5-8.1 5.7zm172.1 524.8c7.7 2 16.7 4.4 20 5.3 8.4 2.3 39.5 2.3 48 0 3.3-.9 12.3-3.3 20-5.3 12.5-3.4 15.3-3.8 26.5-3.9 17.3-.1 21.5 2.3 21.3 12.4-.1 5.7-2.2 10.4-8.8 20.5-9.1 13.9-27.1 32.8-45.7 47.7-22.5 18.2-51.8 18.1-74.9-.3-24-19.1-46.4-44.7-52.2-59.7-2.6-6.5-2.2-12.4.9-16.1 3.6-4.3 7.2-5.1 19.9-4.6 8.4.3 14.3 1.2 25 4zM967.4 1268.7c.2.3 69.3 14.3 70.3 14.3.2 0 .3-3.3.3-7.3v-7.2h-35.5c-19.5-.1-35.3.1-35.1.2zM962 1307c0 5.5.1 10 .3 10 .1 0 17.1 3.4 37.7 7.5s37.9 7.5 38.3 7.5c.4 0 .6-4.6.5-10.2l-.3-10.2-36-7.2c-19.8-4-37-7.3-38.2-7.4-2.2 0-2.3.3-2.3 10zM961 1355.2v10.3l40.1 8.1 40.1 8.1-.7-10.1c-.4-5.6-.8-10.3-1-10.5-.3-.2-76.3-15.9-78.2-16.1-.2 0-.3 4.6-.3 10.2zM959.8 1404c-.3 9.4-.2 10.1 1.7 10.6 1.1.2 19.7 4 41.3 8.3l39.2 7.8v-10.3c0-5.7-.2-10.4-.5-10.4s-18.3-3.6-40.1-8-40-8-40.4-8c-.5 0-1 4.5-1.2 10zM954.2 1474.2c-2.9 17.2-5.3 32.3-5.2 33.5 0 1.2 1.2 3.1 2.6 4.2 2.6 2.1 3.6 2.1 49.4 2.1h46.7l2.1-2.3c2.9-3.1 2.8-5.1-1.6-30.7l-3.8-21.4-40.9-8.3c-22.6-4.5-41.7-8.2-42.5-8.3-1.2 0-2.6 6.3-6.8 31.2zM1204.5 1561.5c-18 3.3-29.2 12.8-34.8 29.8-1.7 5.1-2.1 9.4-2.4 24.7-.4 26.1 1.6 36.1 9.5 46.5 7.8 10.3 19.1 15.5 35.3 16.3 27.6 1.2 44.2-9.6 50.5-32.9 1.4-5.1 1.7-10.5 1.7-25.9 0-21.2-.9-27.4-5.8-37.1-8.6-16.9-30.7-25.6-54-21.4zm24 22.3c4.7 2.4 8.6 6.3 11 11.1 4.1 8.1 3.9 42.6-.3 50.6-4.5 8.9-11.6 12.8-23.2 12.8-9.2 0-14.9-2.3-20.1-8-5.8-6.4-6.4-9.4-6.4-30.8 0-18.8 0-19.1 2.8-24.8 4.8-9.8 12.7-13.9 25.2-13.4 4.6.3 8.4 1.1 11 2.5zM1322.5 1560.9c-22.1 3.5-35 14.7-39.1 34-1.9 8.9-1.9 40.3 0 49.2 3.9 18 14.9 29.2 33.2 33.5 10.1 2.3 28.8 1.5 36.9-1.6 13.3-5.2 21.2-12.4 25.6-23.7 1.9-4.9 2.3-8.2 2.7-22.1.3-11.9.1-16.6-.8-17.7-1-1.2-4.9-1.5-22.1-1.5-24.3 0-23.9-.2-23.9 10.5 0 9.8.9 10.5 14.2 10.5h11.1l-.6 5.4c-1.4 14.2-10.1 20.9-27.2 20.9-13.7 0-21-3.8-25.4-13.2-2.5-5.5-2.6-6.1-2.6-25.6 0-19 .1-20.2 2.3-24.4 2.8-5.2 6.2-8.5 11.7-11.4 3.2-1.7 5.8-2.1 13.5-2.2 8.4 0 10.1.3 15.3 2.8 3.2 1.6 7 4.4 8.5 6.4 5.8 7.6 5.6 7.5 14.8 7.1 11.3-.4 12.2-1.8 8.3-12.5-4-10.5-14.8-19.2-28.3-22.7-7.2-1.9-21.5-2.7-28.1-1.7zM1438 1561.1c-19 2.8-31 13.1-36.7 31.4-2.7 8.8-2.7 46.2 0 55 6.4 20.9 22 31.5 46.2 31.5 25.8-.1 41.7-11.4 47.2-33.7 2.3-9.7 2.3-42.2 0-51-4.9-18.6-16.8-29.5-35.6-32.9-8.4-1.5-12.9-1.6-21.1-.3zm22.5 22.7c4.7 2.4 8.6 6.3 11 11.1 4.3 8.5 4 42.2-.4 50.9-4.3 8.3-11.9 12.5-23.1 12.5-9.2 0-14.9-2.3-20.1-8-5.8-6.4-6.4-9.4-6.4-30.8 0-18.8 0-19.1 2.8-24.8 4.8-9.8 12.7-13.9 25.2-13.4 4.6.3 8.4 1.1 11 2.5zM510.2 1563.2c-.9.9-1.2 14.8-1.2 56.4 0 48.9.2 55.4 1.6 56.8 1.1 1.2 3.6 1.6 9.3 1.6 11.4 0 11.1.6 11.1-22.7v-19.1l20.3-.4c17.8-.3 20.8-.6 25.6-2.5 16-6.5 22.6-16.8 22.4-35.3-.2-18.8-9.2-30.2-27.4-34.5-8.3-1.9-59.8-2.2-61.7-.3zm58.1 21.2c1.8.7 4.3 2.6 5.7 4.1 2.2 2.4 2.5 3.5 2.5 10.5s-.3 8.1-2.5 10.5c-4.5 5-8.1 5.8-26.2 6.3l-16.8.4V1583h17c12.2 0 18 .4 20.3 1.4zM642.8 1563.7c-.8 1-3.6 7.2-6.1 13.8-2.5 6.6-11.8 30.7-20.7 53.5-10.6 27.4-15.9 42.3-15.5 43.7.7 2.9 3.9 3.7 12.7 3.1 8.2-.6 7.7-.1 12.8-13.3l3.6-9h52.7l4 10.3c4.5 11.8 5 12.2 15 12.2 6.2 0 10.7-1.8 10.7-4.2 0-1.7-40.9-107-42.6-109.6-1.4-2.1-2.1-2.2-13.3-2.2-10 0-12 .3-13.3 1.7zm22.6 47.8 8.4 22-17.5.3c-9.7.1-17.7.1-17.9-.1-.2-.2 3.6-10.5 8.4-23 4.8-12.4 9-22.3 9.4-21.9.4.4 4.5 10.6 9.2 22.7zM728.1 1563.9c-.8 1.3-1.1 19.4-1.1 56.5v54.6l2.5 1.6c2.2 1.4 5.6 1.6 28.2 1.1 32.8-.6 39.5-2.2 50.3-12.3 8.8-8.3 12.7-19.6 13.7-39.9 1.6-34.6-7-52.6-29-60.6-5.8-2.1-8.2-2.3-34.9-2.7-27.9-.3-28.7-.3-29.7 1.7zm57.7 21.7c6 2.9 10.5 8.3 12.4 14.8.7 2.4 1.2 10.6 1.2 19.6 0 18.9-1.3 23.8-7.9 29.9-6.2 5.7-11.8 7.1-28.7 7.1H749v-73.9l5.3-.4c2.8-.3 9.9-.3 15.7-.1 8.8.4 11.4.9 15.8 3zM845 1563c-1.3.8-1.5 8.3-1.8 55.9-.2 54.9-.2 55.1 1.9 57.2 2.1 2.1 2.5 2.1 39.6 1.7 43.4-.4 40.3.5 40.3-10.9 0-10.4 1.6-9.9-31.1-9.9H866v-27h24.8c30 0 29.2.3 29.2-10.1 0-11.7 2-10.9-28-10.9h-26v-26h26.6c16.4 0 27.3-.4 28.5-1 1.6-.9 1.9-2.2 1.9-9.3 0-5.1-.5-8.8-1.2-9.5-1.5-1.5-74.5-1.7-76.8-.2zM946 1563.9c-.6 1.3-1 20.7-1 56 0 52.8 0 54.1 2 56.1 1.9 1.9 3.3 2 39 2 36.3 0 37 0 39.1-2.1 1.8-1.8 2.1-3 1.7-9.6-.2-5.1-.8-7.7-1.8-8.3-.8-.6-13.8-1-29.2-1h-27.7l-.3-46.5c-.3-40.1-.5-46.7-1.8-47.5-.8-.5-5.4-1-10.2-1-7.6 0-8.9.2-9.8 1.9zM1077.2 1563.2c-.9.9-1.2 14.8-1.2 56.5v55.3l2.4 1.5c3.5 2.3 76.2 1.8 77.6-.5 1.4-2.2 1.2-16.4-.2-17.8-.9-.9-8.8-1.2-29.5-1.2H1098v-46.3c0-34.7-.3-46.6-1.2-47.5-1.6-1.6-18-1.6-19.6 0z" />
        </svg>
      </div>
      <div className="col-span-1 flex items-center justify-evenly w-full">
        <Services />
        <div>
          <Link
            href="/faq"
            className="text-black font-bold hover:text-blue-700"
          >
            FAQ
          </Link>
        </div>
        <div className="relative">
          <Auth />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
