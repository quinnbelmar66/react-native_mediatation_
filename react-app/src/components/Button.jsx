import React from 'react';
import {StyleSheet} from 'react';
import { useNavigate } from 'react-router-dom';
import './components.css';


// Makes a button with custom style and text, navigates to page provided
function ButtonTemplate({text, style, page}) {

const navigate = useNavigate();

  return (
    <button style={style} className="box" onClick={() => { navigate(page)}}>
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


