import Sign from './Sign';
import { Link } from 'react-router-dom';

function Register () {

  return(
    <Sign
      title="Регистрация"
      name="sign-up"
      submit="Зарегистрироваться">
      <Link to="/sign-in" className="sign__link">
        Уже зарегистрированы? Войти
      </Link>
    </Sign>
  )
}

export default Register;