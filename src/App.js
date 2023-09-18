import "./App.css";
import { useState } from "react";
import blackImg from "./blackImg.jpg";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
// bakeryData.forEach((item) => {
//   item.image = process.env.PUBLIC_URL + "/" + item.image;
// });
/* ############################################################## */
// inspiration taken from github's 404 page
function App() {
  const [isActive, setIsActive] = useState(false);
  const [linkActive, setLinkActive] = useState(false);
  const [displayLightText, setDisplayLightText] = useState("");
  
  const handleClick = () => {
    // 👇️ toggle
    setIsActive(!isActive);

    // 👇️ or set to true
    setIsActive(true);
  };

  const handleLinkClick = () => {
    setLinkActive(linkActive ? linkActive : !linkActive);
    setDisplayLightText("Exit");
  };
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here 
        <a onFocus={handleLinkClick} style={{visibility: isActive ? "visible" : "hidden", color: linkActive ? "white" : "black"}} href="https://ohrtann19.github.io/errorfail/">
      <img src={blackImg} className="white-img" alt="test"/>
      </a>
  */

  return (
    <div className="App" style={{
      backgroundColor: isActive ? 'black' : 'white'
    }}>
     <img style={{visibility: isActive ? "visible" : "hidden"}} src={blackImg}  alt="a black square on a black background. You found a screen reader exit!"/>
      <h1 style={{visibility: isActive ? "hidden" : "visible"}}>Welcome</h1>
      <p style={{visibility: isActive ? "hidden" : "visible"}}><strong>Are you excited to be able to experience this piece of art?</strong></p>

      <p style={{visibility: isActive ? "hidden" : "visible"}}>
        This art is interactive in many ways. You must find a link to the next page. However,
      </p>
      <p style={{visibility: isActive ? "hidden" : "visible", fontSize:"8px"}}>no help will be provided because</p>
      <p style={{visibility: isActive ? "hidden" : "visible", fontSize:"4px"}}>you must find the exit on your own</p>
      <a style={{visibility: isActive ? "hidden" : "visible", fontSize:".25px", color: "black"}} href="https://ohrtann19.github.io/epicfail/">
        You found a magnification exit!
      </a>
      <p style={{visibility: isActive ? "hidden" : "visible", marginBottom:"0px"}}>Continue exploring in the dark:</p>

      
      <button style={{visibility: isActive ? "hidden" : "visible"}} onClick={handleClick}>Turn Off the Lights</button>
      <a onFocus={handleLinkClick} style={{visibility: isActive ? "visible" : "hidden", color: linkActive ? "white" : "black"}} href="https://ohrtann19.github.io/epicfail/">{displayLightText}</a>
    </div>
  );
}

export default App;

// // make sure that the filename case matches the URL.<br></br>
// // For root URLs (like <code>http://example.com/</code>) you must provide an
// // <code>index.html</code> file.

// import logo from './logo.svg';
// import whiteImg from './white.jpg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>test</p>
//         <img src={whiteImg} className="white-img" alt="test"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//         <img src={whiteImg} className="white-img" alt="test2"/>
//       </header>
//     </div>
//   );
// }

// export default App;
