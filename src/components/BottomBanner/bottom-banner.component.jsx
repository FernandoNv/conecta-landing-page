import CustomButton from "../CustomButton/custom-button.component";
import { ReactComponent as ImageGuarana } from '../../images/lata-guarana.svg';

import './bottom-banner.styles.scss';
const BottomBanner = () => (
    <div className='BottomBanner'>
        <div className='bottom-banner-content'>
            <ImageGuarana className='bottom-banner-image-large' />
            <ImageGuarana className='bottom-banner-image-medium' />
            <ImageGuarana className='bottom-banner-image-small' />
            <h2 className='bottom-banner-title'> Quer experimentar? </h2>
            <CustomButton text='Aqui um CTA' darkColor />
        </div>
    </div>
);
 
export default BottomBanner;