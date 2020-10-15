import React, { useState } from "react";
import styles from "./block.module.scss";
const Block = ({ text, src, title, wrapper, photoTitle }) => {
  const [open, setOpen] = useState(false);
  return (
    <section className={styles[wrapper]}>
      {open ? (
        <div className={styles.fullImgWrapper}>
          <div className={styles.navWrapper}>
            <button
              className={styles.closeBtnImg}
              onClick={() => setOpen(false)}
            >
              x
            </button>
            <figcaption className={styles.photoTitle}>{photoTitle}</figcaption>
          </div>
          <button
            onClick={() => setOpen(false)}
            className={styles.bgCloseBtn}
          ></button>
          <figure>
            <img className={styles.fullImg} src={src} alt={`${title}`} />
          </figure>
        </div>
      ) : (
        ""
      )}
      <article
        className={styles.text}
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="300"
      >
        <header className={styles.title}>{title}</header>
        {text}

        <button onClick={() => setOpen(true)} className={styles.btn}>
          <img className={styles.img} src={src} alt={`${title} `} />
        </button>
      </article>
    </section>
  );
};
export default Block;
