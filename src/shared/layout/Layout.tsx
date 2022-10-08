import { useState } from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { TaskModal } from "../components/modal/TaskModal/TaskModal";

interface LayoutProps {
  children: any;
  phrase: string;
  isModalOpen?(): void;
}

export const Layout: React.FC<LayoutProps> = ({ children, phrase }) => {

  return (
    <div>
      <div className="p-2 bg-slate-600 text-white">
        <h1>{ phrase }</h1>
      </div>
      <div>
        <Header />
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