import './custom-button.styles.scss';

const CustomButton = ({ text, fitButton, darkColor }) =>  (
    <button className={`Custom-Button ${fitButton && 'fit-button'} ${darkColor && 'dark-color'}`}> { text } </button>
);
 
export default CustomButton;