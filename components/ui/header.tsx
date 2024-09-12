import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { InsightLogo } from "../icons/insight-logo";

export default function Header() {
  return (
    <header className="absolute z-30 w-full">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <InsightLogo />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex flex-wrap items-center justify-end grow">
              <li>
                <Link
                  href="/"
                  className="flex items-center px-4 py-3 font-medium text-purple-100 transition duration-150 ease-in-out hover:text-purple-800"
                >
                  Conteúdo
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center px-4 py-3 font-medium text-purple-100 transition duration-150 ease-in-out hover:text-purple-800"
                >
                  Automação & IA
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center px-4 py-3 font-medium text-purple-100 transition duration-150 ease-in-out hover:text-purple-800"
                >
                  Engenharia de Plataforma
                </Link>
              </li>
              <li>
                <Link
                  href="https://tally.so/r/3EDbbr"
                  className="ml-3 text-white bg-pink-200 btn-sm hover:bg-pink-100"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
