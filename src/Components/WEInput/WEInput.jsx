/* eslint-disable react/display-name */
import { forwardRef,useRef } from 'react';

// Import UI Compoents
import ClearButton from './components/ClearButton';
import StatusIndicator from './components/StatusIndicator';

import { themes } from '../../themeing/theme';


import styles from './weInput.module.css';


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
const defaultCSS = themes.filter(theme => theme.name === themeName)[0].textField;





/**
 * 
 * @param {*} param0 
 * @returns 
 */
const WEInput = forwardRef(({ name,value, onChange, status = 'idle',inputType="text",style={}, ...props },ref) => {

  const idStr = useRef(Math.floor(Math.random() * 1000)).current;
  const containerRef = useRef(null);

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


  const onClearInputClickEvent = (e) => {
    const evnt = {
      target: {
        value: ""
      }
    }
    onChange(evnt);
  }

  const onBlurHandler = (e) => {
    props.onBlur && props.onBlur(e);
  }

  const onChangeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onChange && onChange(e);
  }
  const onClickHandler = (e) => {
    e.preventDefault();        
  }

  const onResetHandler = (e) => {
    props.onReset && props.onReset(e);
  }

  return (
    <div ref={containerRef} className={styles.container} style={containerStyle()}>
      
      {(status === "busy") && <StatusIndicator className={styles.status} />}
      {(status === "idle" && value !== "" && !props.disabled) && <ClearButton className={styles.close_btn} onClick={(e) => onClearInputClickEvent(e)} />}

      <input
        ref={ref}
        type={inputType}
        id={`${name}-${idStr}`}
        name={name}
        className={`${styles.text_field} ${props.size ? styles[props.size] : ""}`}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        disabled={props.disabled}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        required={props?.required || false}
      />

      <label className={styles[props.size]} htmlFor={`${name}-${idStr}`} aria-label={`${props?.name ? props.name : "a"} text input`}>
        {props.placeholder}
      </label>

    </div>    
  )
})

export default WEInput;