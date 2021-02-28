import { useState } from 'react';
import { css } from '@emotion/css';

import './testimonial.styles.scss';

const Testimonial = () => {
    const quotes = {
        0: {
            quote: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo hendrerit.”',
            client:'@danielmaciel'
        },
        1: {
            quote: '“Ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo hendrerit.”',
            client:'@fernando'
        },
        2: {
            quote: '“Dolor sit amet, consectetur adipiscing elit. Etiam commodo hendrerit.”',
            client:'@joao'
        },
        3: {
            quote: '“Consectetur adipiscing elit. Etiam commodo hendrerit.”',
            client:'@maria'
        }
    }

    const [currentQuote, setCurrentQuote] = useState(quotes[0]);
    const [active, setActive] = useState(0);

    const handleSetClick = (event) => {
        const index = event.target.getAttribute('data-quote');

        setCurrentQuote(quotes[index]);
        setActive(index)
    }
    return( 
        <div className='Testimonial'>
            <p>
                { currentQuote.quote }
            </p>
            <small>{ currentQuote.client }</small>
            <div className={css`
                display: flex;
                span {
                    height: 20px;
                    width: 20px;
                    margin: 18px 0;
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }

                span::before {
                    content: "";
                    height: 9px;
                    width: 9px;
                    background-color: #8C8C8C;
                    border-radius: 50%;
                    transition: background-color 0.3s ease;
                }

                span:hover::before{
                    background-color: #fff;
                }

                span[data-quote="${active}"]::before{
                    background-color: #fff;
                }
            `}>
                {Object.keys(quotes).map(index => (
                    <span
                        onClick={event => handleSetClick(event)}
                        data-quote={index}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default Testimonial;