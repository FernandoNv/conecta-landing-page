import React from 'react';
import CustomButton from '../CustomButton/custom-button.component';
import FormInput from '../FormInput/form-Input.component';

import './form.styles.scss';

class Form extends React.Component {
    state = { 
        nome: '',
        telefone: '',
        email: '',
        assunto: '',
        mensagem: '',
    }

    handleOnChange = (event) => {
        //save the current state of the input so it can be sent using the form
    }

    render() { 
        return ( 
            <form className='Form'>
                <FormInput type='text' label='NOME' placeholder='Nome'/>
                <FormInput type='tel' label='TELEFONE' placeholder='(21) 00000-0000'/>
                <FormInput type='email' label='EMAIL' placeholder='email@email.com.br'/>
                <FormInput select label='ASSUNTO' />
                <FormInput textarea label='MENSAGEM' placeholder='Escreva aqui sua mensagem'/>
                <CustomButton text='Aqui um CTA' fitButton/>
            </form>
        );
    }
}
 
export default Form;