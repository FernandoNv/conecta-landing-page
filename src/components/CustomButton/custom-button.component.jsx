import './custom-button.scss';

const CustomButton = ({ text, fitButton }) =>  (
    <button className={`Custom-Button ${fitButton && 'fit-button'}`}> { text } </button>
);
 
export default CustomButton;