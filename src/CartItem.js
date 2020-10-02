import React from 'react';

class CartItem extends React.Component{
    // testing() {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //           resolve('done');
    //         },5000);
    //     })

    //     promise.then(() => {
    //         // setState acts like a synchronus call
    //         this.setState({ qty: this.state.qty + 10 });

    //         this.setState({ qty: this.state.qty + 10 });

    //         this.setState({ qty: this.state.qty + 10 });

    //         console.log('state', this.state);
    //     })
    // }
    increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log('this', this.state);
        // setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // setState form 2 - if prevState required use this
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }
    decreaseQuantity = () => {
        const { qty } = this.state;

        if (qty === 0) {
            return;
        }
        // setState form 2 - if prevState required use this
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    }
    render(){
        console.log('this.props', this.props);
        const { price, title, qty } = this.props.product;
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
                    onClick={this.increaseQuantity}
                  />
                  <img 
                    alt="decrease" 
                    className="actions-icons" 
                    src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"
                    onClick={this.decreaseQuantity}
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