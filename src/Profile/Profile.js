import React from "react";
import Button from "react-bootstrap/Button";

const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <p> {props.bio} </p>
      <h1> {props.fullName}</h1>
      <h2> {props.profession}</h2>
      {props.children}
  
      <Button className="buttoncolor" onClick={()=> props.showAlert(props.fullName)}>Click on me</Button>
    </div>
  );
};

export default Profile;
