import headerLogo from '../images/icons/mesto.svg';

function Header () {
  return(
    <header className="header root__header">
      <img src={headerLogo} alt="Место. Россия" className="header__logo" />
    </header>
  )
}

export default Header;