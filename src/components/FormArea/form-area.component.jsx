import Form from '../Form/form.component';
import './form-area.styles.scss';

const FormArea = () => (
    <div className='Form-Area'>
        <div className='form-area-content'>
            <div className='form-area-content-description'>
                <div className='center-element'>
                    <h2 className='form-title'>Fale Conosco.</h2>
                    <span className='form-social'>
                        <a className='form-social-link' href="./"><i className="fab fa-facebook-square"></i></a>
                        <a className='form-social-link' href="./"><i className="fab fa-instagram"></i></a>
                        | <span>REDES SOCIAIS</span>
                    </span>
                </div>
            </div>
            <Form />
        </div>
    </div>
);

export default FormArea;