import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container__flex">
        <img className="img__logo" src="/assets/imgs/logo-pequeno.png" alt="logo escrito sorteador de amigo secreto" />
        <span className="img__participante" role={"img"}></span>
      </div>
    </header>
  )
}
export default Header