import * as styles from "@/styles/font.css.ts";
import Button from '@/components/Button'; // Button 컴포넌트를 import

const Home = () => {

    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div>
            <div>
                <div className={styles.mainFont}>This is text with the DNFBitBitv2 font.</div>
                <div className={styles.numFont}>This is text with the PixelAEBold font.</div>
                <div className={styles.loadingFont}>This is text with the DOSPilgiMedium font.</div>
                <div className={styles.loadingNum}>This is text with the Chonkly font.</div>


                <Button onClick={handleClick} size="small" color="cancel">
                    취소
                </Button>
                <Button onClick={handleClick} size="small" color="confirm">
                    확인
                </Button>
                <Button onClick={handleClick} size="large" color="signUp">
                    Sign Up
                </Button>
            </div>
        </div>
    );
};

export default Home;
