import { useState, useEffect } from "react";
import { navLinks } from "../constants/Abt";
import JoinBtn from "./JoinBtn";
import Hamburger from "./Hamburger";
import { useMediaQuery } from "react-responsive";

const Navbar = ({ onNavLinkClick }) => {
  const isMedScreen = useMediaQuery({ minWidth: 770, maxWidth: 1800 });
  const isSmallScreen = useMediaQuery({ maxWidth: 769 });
  const isHam = useMediaQuery({ maxWidth: 1024 });
  const [scrolled, setScrolled] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`navbar ${scrolled ? "scrolled pb-[10px]" : "not-scrolled"} ${
        isSmallScreen
          ? `py-[10px] px-5 mt-0 h-[50px]`
          : isMedScreen
          ? `pt-[30px] px-[50px] mt-0 `
          : `py-5 px-5 mt-0 `
      }`}
    >
      <div className={`inner `}>
        <a
          href="#hero"
          className={`logo ${
            isSmallScreen ? `text-[25px]` : isMedScreen ? `text-[40px]` : ``
          }`}
          onClick={() => onNavLinkClick && onNavLinkClick("Hero")}
        >
          RoomEase
        </a>

        {isMedScreen ? null : (
          <nav className="desktop">
            <ul>
              {navLinks.map(({ link, name }) => (
                <li key={name} className="group px-5">
                  <a
                    href={link}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavLinkClick && onNavLinkClick(name);
                      // Scroll to section if not "Find Rooms"
                      if (link && link.startsWith("#")) {
                        const el = document.querySelector(link);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    <span className="text-[22px]">{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {isHam ? (
          <div
            className="h-[22px] w-[22px]"
            onClick={() => setShowHamburger(true)}
          >
            <img src="./images/hamburger-imgs/menu.png" alt="menu" />
          </div>
        ) : (
          <JoinBtn />
        )}
        <Hamburger
          show={showHamburger}
          onClose={() => setShowHamburger(false)}
        />
      </div>
    </header>
  );
};

export default Navbar;
