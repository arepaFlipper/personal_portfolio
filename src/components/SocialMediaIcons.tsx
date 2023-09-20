type Props = {}

const SocialMediaIcons = () => {
  const icons = [
    "linkedin",
    "instagram",
    "twitter",
    "facebook",
    // "github",
    // "leetcode",
  ]
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      {icons.map((icon) => {
        return (
          <a className="hover:opacity-50 transition duration-500" href={`https://www.${icon}.com/`} target="_blank" rel="noreferrer" key={icon}>
            <img alt={icon} src={`/${icon}.png`} />
          </a>
        )
      }
      )}
    </div>
  )
}

export default SocialMediaIcons
