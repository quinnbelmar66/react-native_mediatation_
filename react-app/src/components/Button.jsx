import React from 'react';
import {StyleSheet} from 'react';
import './components.css';


// Makes a button with custom style and text
function ButtonTemplate({text, style}) {
  return (
    <button style={style} className="box">
        <h1 style={styles.text}> {text} </h1>
    </button>

  );
}


const styles = {
text: {
    fontSize: 24,
    fontWeight: "bold", 
    textAlign: "center",
    color: "white",
},
}

export default ButtonTemplate;


