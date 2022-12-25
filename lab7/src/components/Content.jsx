import React from 'react'

export class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor1: 'white',
      textColor1: 'black',
      backgroundColor2: 'white',
      textColor2: 'black',
    }
  }

  changeColor1() {
    const textColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`
    this.setState({ textColor1: textColor, backgroundColor1: 'red' })
  }

  changeColor2() {
    const textColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`
    this.setState({ textColor2: textColor, backgroundColor2: 'black' })
  }

  render() {
    return (
      <>
          <p>Місце народження 16 грудня 2001 року, м. Бориспіль</p>
        <ul>
          Освіта:
          <li id="elem">
            <div
              onClick={() => this.changeColor1()}
              style={{
                backgroundColor: this.state.backgroundColor1,
                color: this.state.textColor1,
              }}
            >
                Загальнооствіня школа №8, м. Бориспіль
            </div>
          </li>
          <li id="elem2">
            <div
              onClick={() => this.changeColor2()}
              style={{
                backgroundColor: this.state.backgroundColor2,
                color: this.state.textColor2,
              }}
            >
              Університет: КПІ ФІОТ 126
            </div>
          </li>
        </ul>
        <label>Хоббі:</label>
        <ul>
          <li>Футбол</li>
          <li>Комп'ютерні ігри</li>
          <li>Книги</li>
          <li>Музика</li>
        </ul>
          <label>Улюблені фільми:</label>
          <ol>
              <li>Бійцівський клуб, 1999</li>
              <li>Форест Гамп, 1994</li>
              <li>Джокер, 2018</li>
              <li>Достукатися до небес, 1997</li>
          </ol>
          <p><b>Гетебо́рг (швед. Göteborg, [jœtɛˈbɔrj] </b> — друге за величиною місто Швеції, п'яте за величиною в Нордичих країнах, адміністративний центр лену Вестра-Йоталанд та комуни Гетеборг. Розташоване на Каттегат, на західному узбережжі Швеції, і має населення в 570 тисяч осіб.</p>
      </>
    )
  }
}
