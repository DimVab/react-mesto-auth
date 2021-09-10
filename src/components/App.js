import React from 'react';
import Header from './Header';
import MainPage from './MainPage';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {Switch, Route, Link} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';

function App() {

  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditProfilePopupOpen, setOpenProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, setOpenAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setOpenEditAvatarPopup] = React.useState(false);
  const [isImagePopupOpen, setOpenImagePopup] = React.useState(false);
  const [isStatusPopupOpen, setStatusPopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(true);

  React.useEffect(() => {
    api.getInitialData()
      .then((data) => {
        const [initialCardsData, userInfoData] = data;
        setCurrentUser(userInfoData);
        setCards(initialCardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    }

    document.addEventListener('keydown', closeByEscape)

    return () => document.removeEventListener('keydown', closeByEscape)
  }, []);

  function handleCardLike(card) {
    api.likeCard(card._id)
      .then((newCard) => {
          setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRemoveCardLike(card) {
    api.removeLikeCard(card._id)
      .then((newCard) => {
          setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(userData) {
    api.editUserInfo(userData)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(avatarUrl) {
    api.editAvatar(avatarUrl)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit(newCardInfo) {
    api.addCard(newCardInfo)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditAvatarClick () {
    setOpenEditAvatarPopup(true);
  }

  function handleEditProfileClick () {
    setOpenProfilePopup(true);
  }

  function handleAddPlaceClick () {
    setOpenAddPlacePopup(true);
  }

  function handleCardClick (card) {
    setSelectedCard(card);
    setOpenImagePopup(true);
  }

  function closeAllPopups () {
    setOpenEditAvatarPopup(false);
    setOpenProfilePopup(false);
    setOpenAddPlacePopup(false);
    setOpenImagePopup(false);
    setStatusPopup(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <ProtectedRoute
          path="/"
          exact
          loggedIn={loggedIn}
          component={MainPage}
          // тут пришлось сделать отдельный компонент, чтобы компактно упаковать основную страницу в защищённый адрес
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardRemoveLike={handleRemoveCardLike}
          onCardDelete={handleCardDelete}
        />
        <Route path="/sign-up">
          <Header>
            <Link to="/sign-in" className="header__link">Войти</Link>
          </Header>
          <Register />
        </Route>
        <Route path="/sign-in">
          <Header>
            <Link to="/sign-up" className="header__link">Регистрация</Link>
          </Header>
          <Login />
        </Route>
      </Switch>


      <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <AddPlacePopup onAddPlace={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

      <PopupWithForm
        name="type_submit"
        title="Вы уверены?"
        submit="Да"
      />

      <InfoTooltip
        name="type_status"
        title="Вы успешно зарегистрировались!"
        // isOpen={isStatusPopupOpen}
        isOpen={false}
        onClose={closeAllPopups}
        isOk={true}
      />
      {/* здесь можно оставить 1 попап и изменять его стейтами */}

      <InfoTooltip
        name="type_status"
        title="Что-то пошло не так! Попробуйте ещё раз."
        // isOpen={isStatusPopupOpen}
        isOpen={false}
        onClose={closeAllPopups}
        isOk={false}
      />

      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
