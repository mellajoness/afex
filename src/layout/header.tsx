import styles  from './scss/header.module.scss'
import {ReactComponent as AfexIcon} from "../assets/fxlogo.svg";
import  Search from "../assets/icons/search.svg";
import {AiOutlineDown, AiOutlineRight} from  "react-icons/ai";
import { useState } from 'react';

const Header = () => {
        const [username,setUsername]=useState('');
    return ( 
        <div className={styles.parent}>
            <div className={styles.logoDiv}>
              <div className={styles.logo}><AfexIcon/></div>
            </div>

            <div className={styles.content}>
              <div className={styles.switch}>
             
              </div>

              <div className={styles.searchDiv}>
                <div className="form-check form-switch">
                   <input className="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" defaultChecked/> 
              </div>
                <div className={styles.borderOne}/>
                <div className={styles.arrowDiv}>
                  <AiOutlineRight style={{fontSize:'1.3em',color:'#333333',paddingLeft:'0.3em'}}/>
                </div>
               <div className={styles.cashParent}>
                <div className={styles.cashDiv}>
                  <div className={styles.title}>CASH BALANCE</div>
                  <div  className={styles.amount}><span>₦</span>8,374,763</div>
                </div>

                <div className={styles.cashDiv}>
                  <div className={styles.title}>SECURITIES VALUE</div>
                  <div  className={styles.amount}><span className={styles.naira}>₦</span>8,374,763</div>
                </div>

                <div className={styles.cashDiv}>
                  <div className={styles.title}>LOAN BALANCE</div>
                  <div  className={styles.amount}><span>₦</span>8,374,763</div>
                </div>
               </div>
               <div className={styles.border}/>
                
                 <div className={styles.dropDiv}>
                   <div className={styles.box}>Demo</div>
                   <AiOutlineDown style={{fontSize:'1.3em',color:'#333333',paddingLeft:'0.3em'}}/>
                 </div> 
              </div>  

            </div>
              
            
        </div>
     );
}
 
export default Header;