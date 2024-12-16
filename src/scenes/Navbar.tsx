import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Link as RouterLink } from "react-router-dom";

type TNavbar = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  isTopOfPage: boolean;
};

type TLink = {
  page: string;
  selectedPage: string;
  setSelectedPage: (page: string) => void;
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

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: TNavbar) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-green";
  return (
    <nav className={`${navbarBackground} z-50 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">CFT</h4>
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Technologies" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            {/* <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} /> */}
            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <RouterLink to="/cv">CV</RouterLink>
          </div>
        ) : (
          <button className="rounded-full bg-green p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <img alt="menu-icon" src="/menu-icon.svg" />
          </button>
        )}

        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="/close-icon.svg" />
              </button>
            </div>

            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Technologies" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              {/* <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} /> */}
              <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <RouterLink to="/cv">CV</RouterLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
