import CustomButton from '../CustomButton/custom-button.component';

import './product-card.styles.scss';

const ProductCard = ({ title, imageUrl, description }) => (
    <div className='ProductCard'>
        <img className='product-card-image' src={imageUrl} alt={title} key={title} />
        <h3 className='product-card-title'>{ title }</h3>
        <p className='product-card-description'>{ description }</p>
        <CustomButton text='Aqui um CTA' />
    </div>
);
 
export default ProductCard;