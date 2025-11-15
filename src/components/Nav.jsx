import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
//Nav component
const Nav = () => {
  return (
    <header className="padding-x absolute  py-8 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* header logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        {/* Other taps for navigation like home about appears only on large screen*/}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-monts errat leading-normal text-lg text-slate-gray hover:text-slate-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger icon for small devices like mobile phones */}
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
