import React from "react";

const ImageComponent = (props) => {
  return <img style={{width:"1.5rem"}} src={props.src} alt={props.src} />;
};

export default ImageComponent;