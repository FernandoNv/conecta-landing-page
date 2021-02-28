import React from 'react';
import ProductCard from '../ProductCard/product-card.component';
import './products.styles.scss';

class Products extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            products: [
                {
                    //uma pequena gambiarra para poder inserir a imagem do produto
                    imageUrl: 'https://raw.githubusercontent.com/FernandoNv/conecta-landing-page/dab391944208ed2571e1508e72297214ca18cf16/src/images/garrafa-guarana.svg',
                    title: 'Garrafa 350ml',
                    description: 'Lorem ipsum dolor sit amet'   
                },
                {
                    imageUrl: 'https://raw.githubusercontent.com/FernandoNv/conecta-landing-page/dab391944208ed2571e1508e72297214ca18cf16/src/images/lata-guarana-pequena.svg',
                    title: 'Garrafa 100ml',
                    description: 'Lorem ipsum dolor sit amet'   
                }
            ]
        }
    }

    render(){
        const { products } = this.state;
        return(
            <main className='Products'>
                <section className='products-content'>
                    <h2 className='products-title'> Produtos </h2>
                    <p className='products-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris <br /> semper, tortor sed vehicula.</p>
                </section>
                <div className='products-content list-products'>
                   {
                       products.map(product => <ProductCard key={product.title} title={product.title} imageUrl={product.imageUrl} description={product.description} />)
                   }
                </div>
            </main>
        );
    }
} 
 
export default Products;