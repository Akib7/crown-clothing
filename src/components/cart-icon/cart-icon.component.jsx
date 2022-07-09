import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

const CartIcon = ({ itemCount, dispatch }) => (
  <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });
//Not using dispatch since the connect does not have a second
//argument

// const mapStateToProps = (state) => ({
//   itemCount: selectCartItemsCount(state),
// });
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
