import React, { useEffect } from "react";

function Functionlife({ num }) {
  // using useEffect .....(life cycle method runs )
  useEffect(() => {
    // console.log("component is mounted ");
    console.log("component is updated");
    return () => {
      console.log("component will unmount ");
    };
  }, [num]); //whenever the num value props changed then it will render

  return (
    <div>
      <h2>{num}</h2>
    </div>
  );
}

export default Functionlife;
