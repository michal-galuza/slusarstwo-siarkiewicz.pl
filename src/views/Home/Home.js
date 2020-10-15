import React from "react";
import Block from "../../components/Block/Block";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <main className={styles.wrapper}>
      <header className={styles.headerWrapper}>
        <div
          className={styles.header}
          data-aos="slide-left"
          data-aos-delay="150"
          data-aos-duration="1000"
        >
          <h1 className={styles.headerTitle}>Ślusarstwo Siarkiewicz</h1>
          <p>Bramy</p>

          <p>Balustrady</p>
          <p>Ogrodzenia</p>
          <p>Konstrukcje stalowe</p>
        </div>
      </header>

      <Block
        src={require("../../images/landingPagePhotos/OgrodzenieCzarne24.jpg")}
        alt="Ogrodzenie czarne lakierowane proszkowo"
        wrapper="wrapper3"
        photoTitle="Ogrodzenie lakierowane proszkowo"
        text="Oferujemy kompleksowe usługi w zakresie ślusarstwa od projektu po wykonanie i montaż.
          Głównymi produktami firmy są bramy, ogrodzenia oraz balustrady.
          Możemy też stworzyć specyficzne konstrukcje stalowe na życzenie klienta.
          W zakładce galeria możesz obejrzeć nasze projekty. Wszystkie produkty tworzymy ze stali nierdzewnej lub stali czarnej.
          Zabezpieczamy je poprzez lakierowanie zwykłe lub proszkowe w zależności od wymagań klienta.
          Wykonujemy zlecenia dla deweloperów oraz osób prywatnych. Pracujemy na terenie całego województwa mazowieckiego."
        title="Oferta"
      />
      <Block
        src={require("../../images/landingPagePhotos/BalustradaIogrodzenie.jpg")}
        alt="Balustrady z stali nierdzewnej oraz czarne ogrodzenie z stali czarnej"
        wrapper="wrapper2"
        text=" Jakość naszych produktów oraz zadowolenie klienta to nasze główne cele dlatego materiały, które działających w branży od wielu lat. Działamy głównie na podstawie stal nierdzewnej oraz stali czarnej. Są to wytrzymałe rodzaje stali, które odpowiednio zabezpieczone służą wiele lat. Jeśli zdecydujesz się na przeszkloną balustradę ze stali nierdzewnej zamówimy dla ciebie odpowiednie szyby w dobrej cenie, a następnie je zamontujemy. Nie musisz korzystać z wielu firm w kwestii swoich ogrodzeń lub balustrad my wykonamy wszystko za ciebie."
        title="Materiały"
        photoTitle="Przeszkolne balustrady oraz ocynkowane ogrodzenie"
      />
      <Block
        src={require("../../images/landingPagePhotos/Balkony.jpg")}
        alt="Balurstrady przeszklone z stali nierdzewnej"
        wrapper="wrapper"
        text="Zastanawiasz się pewnie, dlaczego miałbyś wybrać akurat naszą firmę? Przede wszystkim Ślusarstwo Siarkiewicz to firma doświadczona z profesjonalną załogą. Na rynku jesteśmy od wielu lat. Z naszych usług korzystają deweloperzy, osoby fizyczne oraz firmy stawiające na jakość. W naszej galerii zdjęć możesz zobaczyć owoce naszej pracy, które potwierdzą, że to my jesteśmy firmą, której szukasz. Jeśli jednak jesteś wymagającym klientem, którego to nie przekonuje, zadzwoń lub napisz a my krok po kroku opiszemy Ci jak powstają nasze produkty oraz dlaczego Ślusarstwo Siarkiewicz powinno zająć się twoim zleceniem."
        title="Dlaczego my?"
        photoTitle="Balustrady ze stali nierdzewnej "
      />
    </main>
  );
};
export default Home;
