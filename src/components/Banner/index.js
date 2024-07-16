import styles from "./Banner.module.css";
import banner from "./banner.png";
import CategoriaBanner from "./CategoriaBanner";

function Banner() {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className={styles.banner}
    >
      <div className={styles.container}>
        <div className={styles.infosContainer}>
          <CategoriaBanner corFundo="#6BD1FF">FRONT END</CategoriaBanner>

          <div className={styles.infoContainer}>
            <h2 className={styles.titulo}>SEO com React</h2>

            <p className={styles.descricao}>
              Eu to aqui pra nesse vídeo dizer que a gente vai aprender a
              começar uma app inspirada no desenho Pokémon com Nextjs e React,
              ver algumas dicas sobre performance e de quebra conhecer uma
              plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22
              minutos nesse vídeo feito com todo o carinho do mundo construindo
              uma "Pokedex"!
            </p>
          </div>
        </div>

        <div className={styles.videoContainer}>
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/c8mVlakBESE?si=YUV2LcP8eIxAsGAs"
            title="Como fazer SEO com React, NextJS e Deploy estático feat. Dicas de Performance | Pokedex"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
