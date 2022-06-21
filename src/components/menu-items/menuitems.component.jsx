import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import "./menuitems.styles.scss";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

const MenuItems = ({ title, imageUrl, size, linkUrl, router }) => (
  // console.log(router);
  <div
    className={`${size} menu-item`}
    onClick={() => router.navigate(`${router.location.pathname}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItems);
