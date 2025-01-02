import WEFormRow from './Components/WEFormRow';
import styles from './weForm.module.css';

const WEForm = ({ layout="flex",children,...props }) => {

  const classNames = () => {
    try {
      let classNamesStr = styles.we_form;
      if (layout === "flex") {
        classNamesStr = `${classNamesStr}`;
      }else {
        classNamesStr = `${classNamesStr} ${styles.grid}`;
      }

      return classNamesStr;
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <form className={classNames()} style={props.style} autoComplete="off">
      <input type="text" autoComplete="off" style={{display:"none"}}></input>
      {children}
    </form>
  );
}

WEForm.Row = WEFormRow;

export default WEForm;