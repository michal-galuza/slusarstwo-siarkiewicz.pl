import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <h1>Kontakt</h1>
        <a href="tel:+48572161889" rel="noopener noreferrer">
          572 161 889
        </a>
        <a href="tel:+48510707255" rel="noopener noreferrer">
          510 707 255
        </a>
        <p>slusarstwo.m-siarkiewicz@wp.pl</p>
      </div>
      <div className={styles.contentWrapper}>
        <h1>Adres</h1>
        <p>Macierzysz </p>
        <p>Sochaczewska 12</p>
        <p>05-850</p>
      </div>
      <div className={styles.contentWrapper}>
        <h1>Media </h1>
        <a
          target="_blank"
          href="https://www.facebook.com/Ogrodzenia-i-Balustrady-Siarkiewicz-683117135206613"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/slusarstwo.siarkiewicz/?hl=pl"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>

      <iframe
        title="localizationMap"
        className={styles.contentWrapper}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.997073133999!2d20.859274315796483!3d52.22527097975945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecab5c65830f7%3A0xa87ac2d7820f1f5!2sSochaczewska%2012%2C%2005-850%20Macierzysz!5e0!3m2!1spl!2spl!4v1601308691602!5m2!1spl!2spl"
      ></iframe>
    </footer>
  );
};

export default Footer;
