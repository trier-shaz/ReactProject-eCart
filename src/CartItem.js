import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }
    render(){
        const { price, title, qty } = this.state;
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
                  />
                  <img 
                    alt="decrease" 
                    className="actions-icons" 
                    src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg" 
                  />
                  <img 
                    alt="delete" 
                    className="actions-icons" 
                    src="https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg" 
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