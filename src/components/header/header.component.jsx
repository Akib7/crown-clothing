import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
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
// }); //mapStateToProps and connectare used anywhere we are going to use anywhere we need properties from our reducers

const mapStateToStoreProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToStoreProps)(Header); //connect is higher order component which gets two props
