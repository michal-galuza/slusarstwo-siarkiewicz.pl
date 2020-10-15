import React from "react";
import ResponsiveGallery from "react-responsive-gallery";
import photos from "./photosData";
import styles from "./Galery.module.scss";

const Galery = () => {
  const cols = { xs: 20, s: 20, m: 20, l: 24, xl: 30, xxl: 30 };
  const cols2 = { xs: 10, s: 10, m: 10, l: 12, xl: 15, xxl: 15 };
  const number = { xs: 1, s: 1, m: 2, l: 2, xl: 2, xxl: 2 };
  const number2 = { xs: 1, s: 1, m: 2, l: 2, xl: 2, xxl: 2 };
  return (
    <main className={styles.wrapper}>
      <section className={styles.section}>
        <header className={styles.title}>Balustrady</header>
        <figure>
          <ResponsiveGallery
            imagesStyle={styles.img}
            numOfImagesPerRow={number}
            imagesPaddingBottom={cols}
            colsPadding={cols2}
            useLightBox={true}
            images={photos.photos2}
          />
        </figure>
      </section>
      <section className={styles.section}>
        <header className={styles.title}>Ogrodzenia</header>
        <figure>
          <ResponsiveGallery
            imagesStyle={styles.img}
            numOfImagesPerRow={number2}
            imagesPaddingBottom={cols}
            colsPadding={cols2}
            useLightBox={true}
            images={photos.photos}
          />
        </figure>
      </section>
    </main>
  );
};

export default Galery;
