import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo 
    fotoCapa={fotoCapa} 
    titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá, eu sou Diogo Roumillac</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Diogo Roumillac"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Um entusiasta do desenvolvimento web atualmente imerso no fascinante
        universo do React. Estou cursando Análise e Desenvolvimento de Sistemas,
        uma jornada educacional que tem sido alicerce para minha paixão
        crescente por criar experiências web dinâmicas e interativas .
      </p>
      <p className={styles.paragrafo}>
        Com uma base sólida em HTML, CSS e JavaScript, dei o passo natural em
        direção ao React para explorar suas capacidades excepcionais na
        construção de interfaces de usuário modernas. Acredito que a tecnologia
        não é apenas uma ferramenta, mas sim uma extensão da nossa criatividade,
        e é essa filosofia que me motiva a aprender e crescer constantemente .
      </p>
      <p className={styles.paragrafo}>
        O conceito de componentização no React tem sido especialmente empolgante
        para mim. A capacidade de criar blocos de construção reutilizáveis não
        apenas simplifica o desenvolvimento, mas também proporciona uma
        abordagem modular e escalável aos projetos. Estou animado por contribuir
        para a construção de aplicações mais eficientes e de fácil manutenção .
      </p>
      <p className={styles.paragrafo}>
        Explorando o uso do estado (state) no React, percebo como isso
        impulsiona a criação de interfaces responsivas e interativas. A
        flexibilidade proporcionada pelo React, em conjunto com JSX e
        propriedades (props), tem ampliado minha compreensão sobre a construção
        de interfaces de usuário intuitivas e eficazes .
      </p>
      <p className={styles.paragrafo}>
        Atualmente, estou envolvido na integração de APIs, uma etapa crucial no
        desenvolvimento web moderno. Aprender como o React facilita a
        manipulação de dados externos e sua exibição de maneira eficiente tem
        sido uma experiência enriquecedora .
      </p>
      <p className={styles.paragrafo}>
        Minha jornada como desenvolvedor React está apenas começando, mas estou
        animado com as possibilidades que essa tecnologia oferece. A sinergia
        entre meus estudos em Análise e Desenvolvimento de Sistemas e a prática
        no React está moldando meu caminho para uma carreira empolgante no
        desenvolvimento web .
      </p>
      <p className={styles.paragrafo}>
        Estou aberto a colaborações, aprendizado contínuo e desafios que me
        permitam expandir minhas habilidades. Vamos criar algo incrível juntos !
      </p>
    </PostModelo>
  );
}
