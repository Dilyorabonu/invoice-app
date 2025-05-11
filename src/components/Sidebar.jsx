import LogoImage from "../assets/logo.svg"
import ThemesToggle from "./ThemesToggle"
export default function Sidebar() {
  return (
    <div 
    className="bg-[#373B53] flex items-center justify-between 
    md:flex-col md:h-full md:fixed md:left-0 md:top-0 md:bottom-0 md:z-[999]">
      <img src={LogoImage} alt="Logo image" />
      <div className="mr-5 md:mr-0 md:mb-5">
        <ThemesToggle/>
      </div>
    </div>
  )
}
