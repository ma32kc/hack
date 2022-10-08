import "./auth.scss";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <div>
      <h3>Авторизация</h3>
      <form className="form-auth" action="">
        <div className="form-auth__item">
          <label htmlFor="login">Логин</label>
          <input className="form-auth__input" name="login" type="text" />
        </div>
        <div className="form-auth__item">
          <label htmlFor="password">Пароль</label>
          <input className="form-auth__input" name="password" type="password" />
        </div>
        <button className="form-auth__button">Авторизоваться</button>
      </form>
      <p className="register-link">
        Ещё не зарегестрированы? <Link to="/register">Зарегестрироваться</Link>
      </p>
    </div>
  );
}

export default Auth;
