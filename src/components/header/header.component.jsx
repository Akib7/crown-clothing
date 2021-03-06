import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import { selectCartHidden } from "../../redux/cart/cart.selectors";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to={"/"}>
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to={"/shop"}>
        SHOP
      </Link>
      <Link className="option" to={"/shop"}>
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to={"/signin"}>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

// const mapStateToStoreProps = (state) => ({
//   currentUser: state.user.currentUser, //state = rootReducer
// }); //mapStateToProps and connect are used anywhere we are going to use anywhere we need properties from our reducers

const mapStateToStoreProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
}); //instead of state, using 'createStructuredSelector'
//it will automatically point to the respective selectors in the properties.

export default connect(mapStateToStoreProps)(Header); //connect is higher order component which gets two props
