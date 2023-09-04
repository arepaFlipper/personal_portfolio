import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@/hooks/useMediaQuery";

type TNavbar = {
  selectedPage: string,
  setSelectedPage: (page: string) => void,
};

type TLink = {
  page: string,
  selectedPage: string,
  setSelectedPage: (page: string) => void,
}


const Link = ({ page, selectedPage, setSelectedPage }: TLink) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${(selectedPage === lowerCasePage) ? "text-yellow" : ""} hover:text-yellow transition dureation-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
};

const Navbar = ({ selectedPage, setSelectedPage }: TNavbar) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">AF</h4>
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            {/* <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} /> */}
            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        ) : (
          <button className="rounded-full bg-red p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <img alt="menu-icon" src="/src/assets/menu-icon.svg" />
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
