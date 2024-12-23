import AnchorLink from "react-anchor-link-smooth-scroll"
type TDotGroup = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
}

const DotGroup = ({ selectedPage, setSelectedPage }: TDotGroup) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6
          before:h-6 before:rounded-full before:border-2 before:border-yellow
          before:left-[-50%] before:top-[-50%]`;
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${(selectedPage === 'home') ? selectedStyles : "bg-deep-grey"} w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage('home')}
      />
      <AnchorLink
        className={`${(selectedPage === 'skills') ? selectedStyles : "bg-deep-grey"} w-3 h-3 rounded-full`}
        href="#skills"
        onClick={() => setSelectedPage('skills')}
      />
      <AnchorLink
        className={`${(selectedPage === 'technologies') ? selectedStyles : "bg-deep-grey"} w-3 h-3 rounded-full`}
        href="#technologies"
        onClick={() => setSelectedPage('technologies')}
      />
      <AnchorLink
        className={`${(selectedPage === 'projects') ? selectedStyles : "bg-deep-grey"} w-3 h-3 rounded-full`}
        href="#projects"
        onClick={() => setSelectedPage('projects')}
      />
      {/* <AnchorLink */}
      {/*   className={`${(selectedPage === 'testimonials') ? selectedStyles : "bg-deep-grey"} w-3 h-3 rounded-full`} */}
      {/*   href="#testimonials" */}
      {/*   onClick={() => setSelectedPage('testimonials')} */}
      {/* /> */}
      <AnchorLink
        className={`${(selectedPage === 'contact') ? selectedStyles : "bg-deep-grey"} w-3 h-3 rounded-full`}
        href="#contacts"
        onClick={() => setSelectedPage('contact')}
      />
    </div>
  )
}

export default DotGroup;
