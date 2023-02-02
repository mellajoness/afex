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
              <div className={styles.prod}>Soybean (SBBS)</div>
              <div className={styles.prod}>₦30,834.59</div>
             </div>

             <div className={styles.prodDiv}>
              <div className={styles.prod}>Soybean (SBBS)</div>
              <div className={styles.prod}>,834.59</div>
             </div>

             <div className={styles.prodDiv}>
              <div className={styles.prod}>Maize(SMAZ)</div>
              <div className={styles.prod}>₦67630</div>
             </div>

             <div className={styles.prodDiv}>
              <div className={styles.prod}>Soybean (SBBS)</div>
              <div className={styles.prod}>₦30,834.59</div>
             </div>

             <div className={styles.prodDiv}>
              <div className={styles.prod}>Soybean (SBBS)</div>
              <div className={styles.prod}>,834.59</div>
             </div>

             <div className={styles.prodDiv}>
              <div className={styles.prod}>Maize(SMAZ)</div>
              <div className={styles.prod}>₦67630</div>
             </div>

             <div className={styles.prodDiv}>
              <div className={styles.prod}>Soybean (SBBS)</div>
              <div className={styles.prod}>₦30,834.59</div>
             </div>

             <div className={styles.prodDiv}>
              <div className={styles.prod}>Soybean (SBBS)</div>
              <div className={styles.prod}>,834.59</div>
             </div>

             <div className={styles.prodDiv}>
              <div className={styles.prod}>Maize(SMAZ)</div>
              <div className={styles.prod}>₦67630</div>
             </div>

             
          
          

            </div>
              
            
        </div>
     );
}
 
export default Footer;