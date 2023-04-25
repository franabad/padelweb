import Link from 'next/link';
import { useState } from 'react';

const links = [
  { title: 'Tenis', href: '/tenis' },
  { title: 'Piscina', href: '/piscina' },
  { title: 'Informática', href: '/informatica' },
  { title: 'Restaurante', href: '/restaurante' },
];

const Services = () => {
  const [showServices, setShowServices] = useState<boolean>(false);

  return (
    <div
      className="relative text-black font-bold hover:text-blue-700 hover:cursor-pointer"
      onMouseEnter={() => setShowServices(true)}
      onMouseLeave={() => setShowServices(false)}
    >
      <span>Servicios</span>
      <ul
        className={`absolute bg-white/50 rounded-2xl shadow-[0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-blur-[10px] border-[1px] border-solid border-white/30 py-3 text-white flex flex-col gap-2 left-[50%] text-center transition-transform duration-[250ms] ${
          showServices
            ? 'scale-100 translate-x-[-50%]'
            : 'scale-0 translate-x-[-50%]'
        } origin-top shadow-lg`}
      >
        {links.map((link) => (
          <li
            key={link.title}
            className="hover:text-blue-700 px-2 font-normal text-black"
          >
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
