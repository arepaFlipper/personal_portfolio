type Props = {}

const Icon_component = (props: Props) => {
  return (
    <a className="hover:opacity-50 transition duration-500" href="https://www.linkedin.com/in/cristian00tovar/" target="_blank" rel="noreferrer">
      <img alt="linkedin" src="/src/assets/linkedin.png" />
    </a>
  )
}

const SocialMediaIcons = (props: Props) => {
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
            <img alt={icon} src={`/src/assets/${icon}.png`} />
          </a>
        )
      }
      )}
    </div>
  )
}

export default SocialMediaIcons
