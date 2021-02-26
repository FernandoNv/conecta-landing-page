import { ReactComponent as ImageGuarana } from '../../images/lata-guarana.svg';
import CustomButton from '../CustomButton/custom-button.component';
import Header from '../Header/header.component';
import './home-banner.styles.scss';

const HomeBanner = () => (
    <div className='container'>
        <div className='Home-Banner'>
            <Header />
            <div className='home-banner-content-area'>
                <div className='home-banner-content'>
                    <ImageGuarana className='home-banner-image'/>
                </div>
                <div className='home-banner-content'>
                    <h1 className='home-banner-title'>Aqui um título <br/> de duas linhas</h1>
                    <CustomButton text='Aqui um CTA' />
                </div>
            </div>
        </div>
    </div>
);
 
export default HomeBanner;