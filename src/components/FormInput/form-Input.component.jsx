import './form-Input.styles.scss';

const FormInput = ({ label, placeholder, type, textarea, select}) => (
    <div className='FormInput'>
        <label htmlFor={label} className='form-input-label'>{ label.toUpperCase() }</label>
        {
                textarea 
            ? <textarea id={label} className='form-input form-input-textarea' placeholder={placeholder}></textarea>
            :   select 
            ? (
                <select className='form-input' name="select" required>
                    <option defaultValue disabled className='form-input-option' value="">Selecione um Assunto</option>
                    <option className='form-input-option' value="sugestao">Sugestão</option>
                    <option className='form-input-option' value="servico">Serviços</option>
                    <option className='form-input-option' value="outros">Outros</option>
                </select>
            )
            :<input id={label} 
                className={`form-input ${type === 'tel' ? 'form-input-tel': type === 'email' ? 'form-input-email': ''}`} 
                required 
                type={type} 
                placeholder={placeholder} />
        }
    </div>
);
 
export default FormInput;