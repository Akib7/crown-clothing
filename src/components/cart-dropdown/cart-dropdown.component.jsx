import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import CartItem from "../cart-item/cart-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useNavigate } from "react-router-dom";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {/* {console.log(typeof cartItems)} */}

        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => navigate("/checkout")}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state),
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
