import LogoImage from "../assets/logo.svg"
import ThemesToggle from "./ThemesToggle"
export default function Sidebar() {
  return (
    <div className="bg-[#373B53]">
      <img src={LogoImage} alt="Logo image" />
      <div>
        <ThemesToggle/>
      </div>
    </div>
  )
}
