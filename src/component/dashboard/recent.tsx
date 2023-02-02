import { useState } from "react";
import {AiOutlineSearch} from  "react-icons/ai";
import styles from '../dashboard/scss/recent.module.scss';
import  Search from "../../assets/fxtrendingup.svg";
import  Book from "../../assets/fxbook.svg";
import  Shape from "../../assets/fxshape.svg";
import  Eye from "../../assets/fxeye.svg";
import  Closed from "../../assets/fxclosed.svg";
import  Cancelled from "../../assets/fxcancelled.svg";
const Recent = () => {
  const [username,setUsername]=useState('');
    return ( 
        <div className={styles.parent}>
            <div className={styles.searchDiv}>
                <div className={styles.imgSearch}><AiOutlineSearch className={styles.iconSearch} /></div>
                <input className={styles.input} onChange={e => setUsername(e.target.value)} type='search'  value={username}  placeholder='Search'/>
            </div>
            <div className={styles.row}>
              <div className={styles.iconDiv}>
                <img src={Search} className={styles.iconSearch} alt="horse" />
              </div>
              <div className={styles.itemDiv}>
                <div className={styles.itemname}>Product view</div>
              </div>     
            </div>

            <div className={styles.rowActive}>
              <div className={styles.iconDiv}>
                <img src={Book} className={styles.iconSearch} alt="horse" />
              </div>
              <div className={styles.itemDiv}>
                <div className={styles.itemnameActive}>Order Book </div>
              </div>     
            </div>

            <div className={styles.row}>
              <div className={styles.iconDiv}>
                <img src={Shape} className={styles.iconSearch} alt="horse" />
              </div>
              <div className={styles.itemDiv}>
                <div className={styles.itemname}>Price History</div>
              </div>     
            </div>

            <div className={styles.row}>
              <div className={styles.iconDiv}>
                <img src={Eye} className={styles.iconSearch} alt="horse" />
              </div>
              <div className={styles.itemDiv}>
                <div className={styles.itemname}>Open Orders</div>
              </div>     
            </div>

            <div className={styles.row}>
              <div className={styles.iconDiv}>
                <img src={Closed} className={styles.iconSearch} alt="horse" />
              </div>
              <div className={styles.itemDiv}>
                <div className={styles.itemname}>Closed Orders</div>
              </div>     
            </div>

            <div className={styles.row}>
              <div className={styles.iconDiv}>
                <img src={Cancelled} className={styles.iconSearch} alt="horse" />
              </div>
              <div className={styles.itemDiv}>
                <div className={styles.itemname}>Cancelled Trades</div>
              </div>     
            </div>



        </div>
     );
}
 
export default Recent;