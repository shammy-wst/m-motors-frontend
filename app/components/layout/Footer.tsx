import Link from "next/link";
import { navigationLinks } from "./Navigation";

const Footer = () => {
  // Sélectionner uniquement les sections pertinentes pour le footer
  const footerLinks = {
    nosVoitures: navigationLinks.nosVoitures.slice(0, 4),
    contact: navigationLinks.contact,
    experience: navigationLinks.experience,
    legal: navigationLinks.legal,
  };

  return (
    <footer className="flex flex-col w-full bg-black text-white">
      {/* Main Footer */}
      <div className="flex w-full">
        <div className="flex flex-1 px-[20%] py-16">
          <div className="flex flex-1 flex-col md:flex-row flex-wrap gap-12">
            {Object.entries(footerLinks).map(([key, links]) => (
              <div key={key} className="flex flex-col flex-1 min-w-[200px]">
                <h4 className="font-rem text-lg mb-6 capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </h4>
                <ul className="flex flex-col gap-4">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors font-inter text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex w-full border-t border-gray-800">
        <div className="flex flex-1 px-[20%] py-6">
          <div className="flex flex-1 flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-rem text-xl">M-MOTORS</span>
              <span className="text-gray-400 text-sm font-inter">
                © {new Date().getFullYear()}
              </span>
            </div>
            <div className="flex gap-6">
              {footerLinks.legal.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm font-inter"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
