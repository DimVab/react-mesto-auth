import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {Link} from 'react-router-dom';

function MainPage({cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardRemoveLike, onCardDelete}) {

  return(
    <>
    <Header>
    <div className="header__container">
      <p className="header__email">emal@mail.com</p>
      <Link to="/sign-in" className="header__link header__link_color_grey">Выйти</Link>
    </div>
    </Header>
    <Main
      cards={cards}
      onEditProfile={onEditProfile}
      onAddPlace={onAddPlace}
      onEditAvatar={onEditAvatar}
      onCardClick={onCardClick}
      onCardLike={onCardLike}
      onCardRemoveLike={onCardRemoveLike}
      onCardDelete={onCardDelete}/>
    <Footer />
    </>
  )
}

export default MainPage;