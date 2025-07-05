import React from "react";

function Footer(props) {
    console.log(props);
    
  return (
  <>
    <h1>{props.dishName}</h1>
  </>
  );
}

export default Footer;
