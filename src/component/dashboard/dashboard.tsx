import styles from '../dashboard/scss/dashboard.module.scss';
import Table from '../shared/table';
import UserCard from './userscard';
import Recent from './recent';
import BuyTable from './buyTable';
import SellTable from './sellTable';
const Dashboard = () => {
    return ( 
        <div className={styles.container} >
            <div className={styles.recentDiv}>
              <div  className={styles.recent}>
                 <Recent/>
              </div>
              <div className={styles.cardDiv}>
                 <UserCard/>
                 <div className={styles.tableRow}>
                    <BuyTable/>
                    <SellTable/>
                 </div>
                   <Table/>
              </div>
            </div>

            <div className={styles.TableDiv}>
                {/* <Table/> */}
            </div>
           
          
        </div>
     );
}
 
export default Dashboard;