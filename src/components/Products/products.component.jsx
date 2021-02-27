import React from 'react';
import './producst.styles.scss';

class Products extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            products: [
                {
                    title: 'Garrafa 100ml',
                    description: 'Lorem ipsum dolor sit amet'   
                },
                {
                    title: 'Garrafa 350ml',
                    description: 'Lorem ipsum dolor sit amet'   
                }
            ]
        }
    }

    render(){
        const { products } = this.state;
        return(
            <main className='Products'>
                <div className='products-content'>
                    <h2 className='products-title'> Produtos </h2>
                    <p className='products-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper, tortor sed vehicula.</p>
                </div>
                <div className='products-content list-products'>
                   {
                       products.map(product => <p>{product.title}</p>)
                   }
                </div>
            </main>
        );
    }
} 
 
export default Products;