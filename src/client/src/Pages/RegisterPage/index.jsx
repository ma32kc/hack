import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div>
      <h3>Регистрация</h3>
      <form className="form-auth" action="">
        <div className="form-auth__item">
          <label htmlFor="login">Логин</label>
          <input className="form-auth__input" name="login" type="text" />
        </div>
        <div className="form-auth__item">
          <label htmlFor="password">Пароль</label>
          <input className="form-auth__input" name="password" type="password" />
        </div>
        <button className="form-auth__button">Зарегестрироваться</button>
      </form>
      <p className="register-link">
        Уже зарегестрированны <Link to="/">Авторизоваться</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
