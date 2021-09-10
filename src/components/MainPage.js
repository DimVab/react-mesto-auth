import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {Link} from 'react-router-dom';

function MainPage({email, onExit, ...props}) {

  return(
    <>
    <Header>
    <div className="header__container">
      <p className="header__email">{email}</p>
      <Link to="/sign-in" className="header__link header__link_color_grey" onClick={onExit}>Выйти</Link>
    </div>
    </Header>
    <Main {...props}/>
    <Footer />
    </>
  )
}

export default MainPage;