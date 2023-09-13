import { SocialMediaIcons } from '@/components'
type Props = {}

const Footer = () => {
  return (
    <footer className="h-64 bg-green pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">Cristian F. Tovar</p>
          <p className="font-playfair text-md text-yellow">©2023 Cristian. All lefts reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
