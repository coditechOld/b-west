import React from 'react';
import Header from "../components/Header";
import Store from "../components/Store";


class ProductItemPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            ...props

        }
    }

    render() {
        const {product, productFound, related_products} = this.state;
        const featuredProducts = related_products;
        if (productFound) {
            const {name, price, status, imageSrc, imageAlt, description} = product;
            return (

                <div className={'product-item'}>
                    <Header title={product.name} additionalClass={'product-item-header dark-pattern'}
                            actionButton={{
                                show: false
                            }}/>
                    <div className="container margin-top-80 margin-bottom-80">

                        <div  className={'row product'}>
                            <div className="col-sm-5">
                                <div className="items-in ">
                                    {status ? <div className="shop-tags" style={{
                                        backgroundColor: 'rgba(67, 125, 67, 0.65)',
                                        color: '#fff',
                                        fontSize: '1.5em'
                                    }}>{status}</div> : ""}
                                    <img src={imageSrc} className={'img-responsive'} alt={imageAlt}/>
                                </div>

                            </div>
                            <div className="col-sm-6 large-detail">
                                <h2 className="margin-top-0 margin-bottom-20">{name}</h2>
                                <div dangerouslySetInnerHTML={{__html: description}}/>
                                <hr/>
                                <div className="some-info no-border">

                                </div>
                                <div className="price">Price <br/><span

                                    className="font-crimson">$ {price}</span></div>


                                <div className="clearfix"/>

                            </div>
                        </div>


                    </div>
                    <div className="container margin-top-80 margin-bottom-80">
                        {
                            related_products.length > 0 ? (
                                <div className="heading-block text-center">
                                    <h3>RELATED PRODUCTS</h3>
                                    <hr className="color"/>
                                    {/*<span>Tell your Story</span>*/}
                                </div>
                            ) : ''
                        }

                        {
                            featuredProducts ? <Store {...{featuredProducts}}/> : null
                        }

                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={'product-item'}>
                    <Header title={'Page Not Found'} additionalClass={'product-item-header dark-pattern'}
                            actionButton={{
                                show: false
                            }}/>

                </div>
            )
        }

    }
}

export {ProductItemPage}