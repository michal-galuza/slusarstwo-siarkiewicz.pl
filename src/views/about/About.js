import React from "react";
import Block from "../../components/Block/Block";
import styles from "./About.module.scss";
const About = () => {
  return (
    <main className={styles.wrapper}>
      <Block
        title="O nas"
        src={require("../../images/landingPagePhotos/BalustradaIogrodzenie.jpg")}
        alt="Ogrodzenie czarne lakierowane proszkowo"
        wrapper="wrapper2"
        photoTitle="Balustrady i ogrodzenia Ślusarstwo Siarkiewicz"
        text="Ślusarstwo Siarkiewicz, jesteśmy firmą, która od lat zajmuje się projektowaniem, tworzeniem i montażem balustrad, ogrodzeń, bram oraz konstrukcji stalowych. Siedziba firmy mieści się na Macierzyszu pod Warszawą, lecz działamy na terenie całego Mazowsza. Nasze usługi skupiają się na kompleksowej obsłudze klienta w sprawie ślusarstwa. Przyjmujemy zlecenia od osób fizycznych oraz firm i deweloperów. Zapraszamy do kontaktu telefonicznie, mailowo lub przez formularz kontaktowy na stornie.na jego analizy."
      />
    </main>
  );
};

export default About;
