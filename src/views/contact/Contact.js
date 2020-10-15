import React from "react";
import Block from "../../components/Block/Block";
import styles from "./Contact.module.scss";

const Contact = () => {
  function submitFn(e) {
    e.preventDefault();
    e.preventDefault();
    const eventData = {
      [e.target[0].name]: e.target[0].value,
      [e.target[1].name]: e.target[1].value,
      [e.target[2].name]: e.target[2].value,
      [e.target[3].name]: e.target[3].value,
    };

    fetch("https://www.slusarstwo-siarkiewicz.pl/contact/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify(eventData),
    }).then((res) =>
      res.status === 200
        ? alert("Formularz został wysłany")
        : alert("coś poszło nie tak")
    );
  }
  return (
    <main className={styles.wrapper}>
      <section
        className={styles.text}
        data-aos="fade-up"
        data-aos-duration="400"
        data-aos-delay="300"
      >
        <header className={styles.title}>Napisz do nas</header>
        <form className={styles.form} onSubmit={submitFn} method="POST">
          <input
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="150"
            className={styles.input}
            type="text"
            name="name"
            placeholder="Imię"
            autoComplete="off"
            title="Wpisz imię"
            minLength="3"
            required
          />
          <input
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="250"
            className={styles.input}
            placeholder="E-mail"
            name="mail"
            type="email"
            autoComplete="off"
            title="Wpisz e-mail"
            required
          />
          <input
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="350"
            className={styles.input}
            type="number"
            id="phone"
            name="phone"
            min="120000000"
            max="999999999"
            maxLength="9"
            minLength="9"
            autoComplete="off"
            title="Wpisz numer telefonu np. 123456789"
            placeholder="Telefon (opcjonalnie)"
          />
          <textarea
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="450"
            className={styles.textArea}
            spellCheck
            autoComplete="off"
            minLength="5"
            name="text"
            type="textarea"
            placeholder="Treść"
            required
          />
          <button
            className={styles.btn}
            type="submit"
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="550"
          >
            Wyślij
          </button>
        </form>
      </section>
      <Block
        title="Kontakt"
        text={
          <div className={styles.containerMedia}>
            <h2 className={styles.media}>Media:</h2>
            <a
              className={styles.anhor}
              target="_blank"
              href="https://www.facebook.com/Ogrodzenia-i-Balustrady-Siarkiewicz-683117135206613"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              className={styles.anhor}
              target="_blank"
              href="https://www.instagram.com/slusarstwo.siarkiewicz/?hl=pl"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <h2 className={styles.tel}>Telefon:</h2>
            <a
              className={styles.anhor}
              href="tel:+48510707255"
              rel="noopener noreferrer"
            >
              510 707 255
            </a>
            <a
              className={styles.anhor}
              href="tel:+48572161889"
              rel="noopener noreferrer"
            >
              572 161 889
            </a>

            <h2 className={styles.mail}>Mail:</h2>
            <p>slusarstwo.m-siarkiewicz@wp.pl</p>

            <h2 className={styles.adres}>Adres:</h2>
            <p>
              Macierzysz <br /> Sochaczewska 12 <br />
              05-850
            </p>
          </div>
        }
        photoTitle="Balustrady i ogrodzenie firmy Ślusarstwo Siarkiewicz"
        src={require("../../images/landingPagePhotos/Balkon2.jpg")}
      />
    </main>
  );
};

export default Contact;
