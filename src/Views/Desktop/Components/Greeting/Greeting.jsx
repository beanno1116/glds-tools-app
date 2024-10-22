import styles from './greeting.module.css';

const Greeting = ({name}) => {

  const formatGreeting = () => {
    let date = new Date();
    let hour = date.getHours();    
    if (hour > 0 && hour < 11) {
      return <span className={styles.greeting_containter}><h1>Good morning</h1><h1 className={styles.greeting_name}>{name}!</h1></span>
    } else if (hour > 11 && hour < 16) {
      return <span className={styles.greeting_containter}><h1>Good afternoon</h1><h1 className={styles.greeting_name}>{name}!</h1></span>
    }else {
      return <span className={styles.greeting_containter}><h1>Good evening</h1><h1 className={styles.greeting_name}>{name}!</h1></span>
    }
  }


  return (
    <section className={styles.desktop_greeting}>
      <h1>{formatGreeting()}</h1>
    </section>
  );
}

export default Greeting;