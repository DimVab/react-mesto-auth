import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {Link} from 'react-router-dom';

function MainPage({cards, handleEditProfileClick, handleEditAvatarClick, handleAddPlaceClick, handleCardClick, handleCardLike, handleRemoveCardLike, handleCardDelete}) {

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
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
      onCardLike={handleCardLike}
      onCardRemoveLike={handleRemoveCardLike}
      onCardDelete={handleCardDelete}/>
    <Footer />
    </>
  )
}

export default MainPage;