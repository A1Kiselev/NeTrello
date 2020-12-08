import React from "react";

export const TreButton = ({btnText, onClick}) => {
  return (
    <button className="myBytton" onClick={onClick}>{btnText}</button>
  )
}

