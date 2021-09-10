function Sign({title, name, submit, children}) {

  return(
    <section className="sign" >
      <h1 className="sign__title">{title}</h1>
      <form className="form form_type_sign" name={name}>
        <div className="form__input-container form__input-container_type_sign">
          <input type="email" className="form__input form__input_type_sign" placeholder="Email" name="email" minLength="2" maxLength="30" required />
          <input type="text" className="form__input form__input_type_sign" placeholder="Пароль" name="text" minLength="2" maxLength="30" required />
        </div>
        <input type="submit" className="form__submit-button form__submit-button_type_sign" value={submit} />
      </form>
      {children}
    </section>
  )
}

export default Sign;