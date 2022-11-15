import { useState } from "react";
import "./Header.css";

const Header = () => {
  
  function useResponsiveSize(breakpoint:number): boolean {
    const [size, setSize] = useState<number>(window.innerWidth);
    window.addEventListener('resize', () => setSize(window.innerWidth))    
    
    return size < breakpoint 
  }

  return (
    <header>
      <div className="container__flex">
        <img
          className="img__logo"
          src={useResponsiveSize(900) ? "/assets/imgs/logo-pequeno.png" : "/assets/imgs/logo.png"}
          alt="logo escrito sorteador de amigo secreto"
        />
        <span className="img__participante" role={"img"}></span>
      </div>
    </header>
  )
}
export default Header