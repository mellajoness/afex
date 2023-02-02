import styles  from './scss/footer.module.scss'
import { useState } from 'react';

const Footer = () => {
        const [username,setUsername]=useState('');
    return ( 
        <div className={styles.parent}>
            <div className={styles.logoDiv}>
              Live Market
            </div>

            <div className={styles.content}>
             <div className={styles.prodDiv}>
              <div className={styles.prod}>Maze</div>
              <div className={styles.prod}>546536</div>
             </div>

             <div className={styles.prodDiv}>
              <div className={styles.prod}>Maze</div>
              <div className={styles.prod}>546536</div>
             </div>

             <div className={styles.prodDiv}>
              <div className={styles.prod}>Maze</div>
              <div className={styles.prod}>546536</div>
             </div>

             <div className={styles.prodDiv}>
              <div className={styles.prod}>Maze</div>
              <div className={styles.prod}>546536</div>
             </div>

             <div className={styles.prodDiv}>
              <div className={styles.prod}>Maze</div>
              <div className={styles.prod}>546536</div>
             </div>

             <div className={styles.prodDiv}>
              <div className={styles.prod}>Maze</div>
              <div className={styles.prod}>546536</div>
             </div>

             <div className={styles.prodDiv}>
              <div className={styles.prod}>Maze</div>
              <div className={styles.prod}>546536</div>
             </div>

             <div className={styles.prodDiv}>
              <div className={styles.prod}>Maze</div>
              <div className={styles.prod}>546536</div>
             </div>

             <div className={styles.prodDiv}>
              <div className={styles.prod}>rice</div>
              <div className={styles.prod}>546536</div>

              <div className={styles.prodDiv}>
              <div className={styles.prod}>beNS</div>
              <div className={styles.prod}>546536</div>
             </div>
             </div>


            </div>
              
            
        </div>
     );
}
 
export default Footer;