import headerLogo from '../images/icons/mesto.svg';

function Header ({loggedIn, children}) {

  return(
    <header className={`header root__header ${loggedIn && "header_logined"}`}>
      <img src={headerLogo} alt="Место. Россия" className={`header__logo ${loggedIn && "header__logo_logined"}`} />
      {children}
    </header>
  )
}

export default Header;