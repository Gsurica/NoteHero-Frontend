import { useState } from "react";
import { SideDrawer } from "../components/Drawer/SideDrawer";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

interface LayoutProps {
  children: any;
  phrase: string;
  isModalOpen?(): void;
}

export const Layout: React.FC<LayoutProps> = ({ children, phrase }) => {

  const [menuOpen, setMenuOpen] = useState(false)

  const showMenu = () => {
    setMenuOpen(!menuOpen);
  }


  return (
    <div>
      { menuOpen && (
        <div>
          <SideDrawer isOpen={() => showMenu()} />
        </div>
      ) }
      <div className="p-2 bg-slate-600 text-white">
        <h1>{ phrase }</h1>
      </div>
      <div>
        <Header isOpen={() => showMenu()} />
      </div>
      <div>
        { children }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}