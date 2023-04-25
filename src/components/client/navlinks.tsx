import react from "react";
import Link from "next/link";

const NavLinks = () => {
  const links = [
    {
      id: 1,
      name: "Servicios",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "Tenis", link: "/tenis" },
            { name: "Piscina", link: "/piscina" },
            { name: "Informática", link: "/informatica" },
            { name: "Restaurante", link: "/restaurante" },
          ],
        },
      ],
    },
  ];
  return (
    <>
      {links.map((link, id) => (
        <div key={id}>
          <div className="cursor-pointer group">
            <h1 className="hover:text-white">{link.name}</h1>
            {link.submenu && (
              <div>
                <div className="absolute hidden group-hover:block hover:block">
                  <div className="bg-slate-400 p-3">
                    {link.sublinks.map((mysublinks, id) => (
                      <div key={id}>
                        {mysublinks.sublink.map((slink, id) => (
                          <li
                            key={id}
                            className="capitalize hover:text-yellow-400"
                          >
                            <Link href={slink.link}>{slink.name}</Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
