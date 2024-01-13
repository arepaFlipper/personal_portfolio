type TIcon = {
  name: string;
  url: string;
  file_name: string;
}

const SocialMediaIcons = () => {
  const icons: TIcon[] = [
    {"name": "github", "url": "https://www.github.com/arepaflipper/", "file_name": "github-mark-white.png"},
    {"name": "leetcode", "url": "https://www.leetcode.com/cristian00tovar/", "file_name": "leetcode.svg"},
    {"name": "linkedin", "url": "https://www.linkedin.com/in/cristian00tovar/", "file_name": "linkedin.png"},
    {"name": "instagram", "url": "https://www.instagram.com/cristiam182/", "file_name": "instagram.png"},
    {"name": "facebook", "url": "https://www.facebook.com/cristianfam/", "file_name": "facebook.png"},
    {"name": "twitter", "url": "https://www.twitter.com/cristiam182/", "file_name": "twitter.png"},
  ]
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      {icons.map((icon) => {
        return (
          <a className="hover:opacity-50 transition duration-500 w-10 h-10" href={icon.url} target="_blank" rel="noreferrer" key={icon.name}>
            <img className="w-full h-full object-contain" alt={icon.name} src={icon.file_name} />
          </a>
        )
      }
      )}
    </div>
  )
}

export default SocialMediaIcons
