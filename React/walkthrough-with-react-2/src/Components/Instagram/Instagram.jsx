import { useState } from "react";
import instagram from "../../assets/instagram.png";
import "./Instagram.css";

function Instagram() {
    const [signin, setsignin] = useState(false);

  return (
    <>
        <img src={instagram} alt="instagram" className="instaimg" />
        <div className="container">
            {
                signin &&(
                        <>
                        <input type="text" placeholder="Mobile Number or Email" className="inputfield"/>
                        <input type="text" placeholder="Full Name" className="inputfield"/>
                        </>
                )
            }
            <input type="text" placeholder="Phone number, username or email" className="inputfield"/>
            <input type="password" placeholder="Password" className="inputfield"/>
            <button className="signbtn" onClick={()=> signin==false ? setsignin(true) : setsignin(false)}>Sign In</button>
            <p>Don't have account ?  <a href="">Sign Up </a></p>
        </div>
    </>
  );
}

export default Instagram;