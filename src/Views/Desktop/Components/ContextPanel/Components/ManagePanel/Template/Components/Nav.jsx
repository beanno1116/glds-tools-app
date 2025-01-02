import styles from '../panelTemplate.module.css';


const Button = ({className,content,icon,onClick,action=""}) => {

  const onClickEvent = (e) => {
    try {
      // TODO: add logging
      

      onClick && onClick(e,action);
    } catch (error) {
      console.error(error.message);
    }
  }

  const classNames = () => {
    let classNameStr = styles.nav_button;
    if (className) {
      classNameStr = `${classNameStr} ${styles.active}`;
    }
    return classNameStr;
  }

  return (
    <button type='button' className={classNames()} onClick={onClickEvent}>          
      {icon}
      {content}
    </button>
  )
}

const Nav = ({ children }) => {
  return (
    <nav className={styles.nav}>
      {children}
    </nav>
  );
}

Nav.Button = Button;

export default Nav;