import profileImage from "../../Assets/Images/img.png";

import "./profile.scss";
import Header from "../../Components/Header/Header";

function Profile() {
  return (
    <>
      <Header></Header>
      <main className="profile">
        <div className="container">
          <div className="info-block">
            <img
              className="info-block__profile-image"
              src={profileImage}
              alt="profile"
            />
            <div className="info-block__info">
              <h3 className="info-block__username">Sasha</h3>
              <ul className="wallet">
                <li className="wallet__item">
                  <p>Валюта:</p> <span>12312</span>
                </li>
                <li className="wallet__item">
                  <p>Matic:</p> <span>123124</span>
                </li>
                <li className="wallet__item">
                  <p>NFT:</p> <span>13/100</span>
                </li>
              </ul>
              <button className="wallet__watch-button">
                Посмотреть портфолио NFT
              </button>
            </div>
          </div>
          <div className="functional-block">
            <h4 className="functional-block__title">Обменник</h4>
            <ul className="functional-block__list">
              <li className="functional-block__item">Создать свою NFT</li>
              <li className="functional-block__item">Получить NFT стипендию</li>
              <li className="functional-block__item">
                Обменять NFT диплом на рубли
              </li>
              <li className="functional-block__item">Добавить коллегу</li>
              <li className="functional-block__item">
                Добавить родственика в дмс страховку
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
