import React, { useState, useEffect } from 'react';

import { themes } from '../../themeing/theme';


import styles from './weButton.module.css';


// const defaultCSS = {
//   backgroundColor: "#102A43",
//   borderColor: "#486581",
//   borderRadius: ".25rem",
//   errorColor: "#ED6A5A",
//   successColor: "#0CCE6B",
//   onFocusBorderColor: "#102A43",
//   onFocusBackgrounColor: "#102A43",
//   fontSize: "1rem",
//   fontFamily: "'Secular One', sans-serif",
//   color: "snow"
// }

const themeName = "default";
// const themeName = "lite";
// const themeName = "benstheme";
const defaultCSS = themes.filter(theme => theme.name === themeName)[0].button;

const WEButton = ({ children, type="solid", onClick, disabled = false, style, ...props }) => {



  const containerStyle = () => {

  
    const themeStyles = {};
    const styleObj = {};
    const propStyleObj = style ? style : {}; 

    const defaultCssKeys = Object.keys(defaultCSS);
    const propStyleKeys = Object.keys(propStyleObj);  
    if (propStyleKeys.length !== 0){
      for (const key in propStyleObj) {
        const filterResulta = defaultCssKeys.filter(k => key === k);
        if (filterResulta.length > 0) {
          let styleStr = `--${key}`
          themeStyles[styleStr] = propStyleObj[key];
        }else{
          styleObj[key] = propStyleObj[key];
        }

      }
      return {...themeStyles,...styleObj};
    }

    for (const key in defaultCSS) {
      if (Object.hasOwnProperty.call(defaultCSS, key)) {
        const style = defaultCSS[key];
        let keystr = `--${key}`;
        styleObj[keystr] = style;        
      }
    }
    console.log(styleObj);    
    return styleObj;
  }

  const containerClassNames = () => {
    let classNames = [styles.we_button];
    switch (type) {
      case "outline":
        return [...classNames,styles.outline].join(" ");      
      default:
        return styles.we_button;
    }
  }


  const handleOnClickEvent = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    onClick && onClick(e);
  }

  return (
    <button
      disabled={disabled}
      style={containerStyle()}      
      className={containerClassNames()}
      onClick={handleOnClickEvent}
      {...props}
    >
      {children}
    </button>
  );
};

export default WEButton;