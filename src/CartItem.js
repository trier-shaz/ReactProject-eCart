import React from 'react';

class CartItem extends React.Component{
    render(){
        console.log('this.props', this.props);
        const { price, title, qty } = this.props.product;
        const { 
            product, 
            onIncreaseQuantity, 
            onDecreaseQuantity, 
            onDeletProduct 
        } = this.props
        return (
            <div className="cart-item">
              <div className="left-block">
                <img style={styles.image}/>
              </div>
              <div className="right-block">
                <div style={ { fontSize: 25 } }>{title}</div>
                <div style={ { color: '#777' } }>Rs {price}</div>
                <div style={ { color: '#777' } }>Qty: {qty}</div>
                <div className="cart-item-actions">
                  {/* Buttons */}    
                  <img 
                    alt="increase" 
                    className="actions-icons" 
                    src="https://www.flaticon.com/svg/static/icons/svg/1828/1828926.svg"
                    onClick={() => onIncreaseQuantity(product)}
                  />
                  <img 
                    alt="decrease" 
                    className="actions-icons" 
                    src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"
                    onClick={() => onDecreaseQuantity(product)}
                  />
                  <img 
                    alt="delete" 
                    className="actions-icons" 
                    src="https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg" 
                    onClick={() => onDeletProduct(product.id)}
                  />
                </div>
              </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 120,
        width: 120,
        borderRadius: 6,
        background: '#ccc'
    }
}

export default CartItem;