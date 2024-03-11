import * as styles from './index.css.ts';

const Home = () => {
  return (
    <div>
      <div>
        <div className={styles.fontStyle({ fontType: 'textFont' })}>
          This is text with the DNFBitBitv2 font.
        </div>
        <div className={styles.fontStyle({ fontType: 'numFont' })}>
          This is text with the PixelAEBold font.
        </div>
        <div className={styles.fontStyle({ fontType: 'loadingTextFont' })}>
          This is text with the DOSPilgiMedium font.
        </div>
        <div className={styles.fontStyle({ fontType: 'loadingNumFont' })}>
          This is text with the Chonkly font.
        </div>
      </div>
    </div>
  );
};

export default Home;
