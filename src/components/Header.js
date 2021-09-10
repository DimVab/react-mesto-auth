import headerLogo from '../images/icons/mesto.svg';

function Header ({children}) {
  return(
    <header className="header root__header">
      <img src={headerLogo} alt="Место. Россия" className="header__logo" />
      {children}
    </header>
  )
}

export default Header;