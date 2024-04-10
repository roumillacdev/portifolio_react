import styles from './Banner.module.css';
import minhaFoto from 'assets/minha_foto.png';
import circuloColorido from 'assets/circulo_colorido.png';

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Desenvolvedor React
                </h1>
                <p className={styles.paragrafo}>
                    Olá! Me chamo Diogo Roumillac, um profissional do desenvolvimento web e recentemente me aventurei no mundo React. Estou animado para compartilhar meu aprendizado e explorar novas oportunidades no desenvolvimento de interfaces incríveis.
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />                

                <img 
                    className={styles.minhaFoto} 
                    src={minhaFoto}
                    alt='Foto do Diogo'
                
                
                />
            </div>

        </div>
    )
}