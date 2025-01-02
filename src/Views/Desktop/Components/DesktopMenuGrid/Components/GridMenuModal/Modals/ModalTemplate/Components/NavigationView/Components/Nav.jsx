import styles from '../../../modalTemplate.module.css';

const ERROR_MSG = "[ERROR] [COMP:NavigationView>Nav";

const getNavButtons = (target) => {
  try {
    let parentMenuEle = target.parentElement;
    let navButtons = parentMenuEle.querySelectorAll("button");
    if (navButtons.length > 0) {
      return navButtons;
    }
    return [];
  } catch (error) {
    console.error(`${ERROR_MSG}] [FUNC:getNavButtons]`)
  }
}

const resetButtonCss = (target) => {
  try {
    let buttons = getNavButtons(target);
    buttons.forEach(button => {
      button.classList.remove(styles.active);
    });    
  } catch (error) {
    console.error(`${ERROR_MSG}] [FUNC:resetButtonCss] - ${error.message}`);
  }
}

const setButtonActive = (target) => {
  try {
    target.classList.add(styles.active);
  } catch (error) {
    console.error(`${ERROR_MSG}] [FUNC:resetButtonCss] - ${error.message} `)
  }
}

const Button = ({action,onClick,active=false,children}) => {


  const onClickEvent = (e) => {
    try {
      resetButtonCss(e.currentTarget);
      setButtonActive(e.currentTarget);
      if (onClick && e.currentTarget.dataset.action){
        onClick(e.currentTarget.dataset.action);
        return;
      }
      throw new Error("onClick property is undefined or null");
    } catch (error) {
      console.error(`${ERROR_MSG}>Button] [EVT:onClickEvent] - ${error.message}`);
    }
  }


  return (
    <button data-action={action} className={`${styles.modal_nav_menu_item} ${active ? styles.active : ""}`} onClick={onClickEvent}>
      {children}
    </button>
  )
}

const Nav = ({ children,...props }) => {  

  return (
    <div className={styles.modal_nav_wrapper}>
      <span className={styles.modal_nav_menu}>
        {children}
      </span>
    </div>
  );
}

Nav.Button = Button;

export default Nav;