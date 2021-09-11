import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {Link} from 'react-router-dom';

function MainPage({email, onSignOut, loggedIn, ...props}) {

  return(
    <>
    <Header loggedIn={loggedIn}>
    <div className="header__container header__container_logined">
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