import styles from '../dashboard/scss/usercard.module.scss';
import {AiOutlineSearch} from  "react-icons/ai";
import { useState } from 'react';
const UserCard = () => {
 
    return ( 
        <div className={styles.parent}>
          <div className={styles.firstRow}>
             <div className={styles.board}>Board</div>
             <div className={styles.active}>X-Traded</div>
             <div className={styles.otc}>OTC</div>
             <div className={styles.otc}>FI</div>
             <div className={styles.otc}>Derivatives</div>
          </div>

          <div className={styles.firstRow}>
             <div className={styles.board}>Product</div>
             <div className={styles.active}>All</div>
             <div className={styles.otc}>SMAZ</div>
             <div className={styles.otc}>SBBS</div>
             <div className={styles.otc}>SPRL</div>
             <div className={styles.otc}>SGNG</div>
             <div className={styles.otc}>SSNG</div>
             <div className={styles.otc}>SSGM</div>
             <div className={styles.otc}>FETC</div>
             <div className={styles.otc}>SCOC</div>
          </div>
             
        </div>
     );
}
 
export default UserCard;