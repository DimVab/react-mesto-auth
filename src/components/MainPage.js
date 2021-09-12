import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function MainPage({email, onSignOut, loggedIn, ...props}) {

  const [isClicked, setIsClicked] = React.useState(false);

  function handleClick () {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  }

  return(
    <>
    <Header loggedIn={loggedIn} isClicked={isClicked} handleClick={handleClick}>
    <div className={`header__container ${isClicked && "header__container_opened"}`}>
      <p className="header__email">{email}</p>
      <Link to="/sign-in" className="header__link header__link_logined" onClick={onSignOut}>Выйти</Link>
    </div>
    </Header>
    <Main {...props}/>
    <Footer />
    </>
  )
}

export default MainPage;