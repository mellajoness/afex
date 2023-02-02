import { NavLink, useNavigate } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import {BsGraphUp}  from "react-icons/bs";
import {MdOutlinePeopleAlt} from  "react-icons/md";
import {AiOutlineFile} from  "react-icons/ai";
import {FiSettings}  from  "react-icons/fi";
import { IoBagHandleOutline } from 'react-icons/io5'
import styles from '../layout/scss/sidebar.module.scss';
import Header from "./header";
import Footer from "./footer";
 
const SideMenu = ({children}:any) => {
  const overviewItem={
   
      items:[
        {
          path:'/dashboard',
          name:'Overview',
          icon:<RiDashboardLine style={{fontSize:'1.4em'}} />
        },
        {
          path:'/Market',
          name:'Market',
          icon:<BsGraphUp style={{fontSize:'1.4em'}}/>
        },
        {
          path:'/Portfolio',
          name:'Portfolio',
          icon:<IoBagHandleOutline style={{fontSize:'1.4em'}}/>
        },
        {
          path:'/Community',
          name:'Community',
          icon:<MdOutlinePeopleAlt style={{fontSize:'1.4em'}} />
        },
        {
          path:'/Report',
          name:'Reports',
          icon:<AiOutlineFile style={{fontSize:'1.4em'}}/>
        }, 
        {
          path:'/settings',
          name:'Settings',
          icon:<FiSettings style={{fontSize:'1.4em'}}/>
        }, 
    ]
    };





    let navigate = useNavigate();
    const logOut=()=>{
      navigate(
        "/",
    )}

    return ( 
      <div>
        <Header/>
        <div style={{display:'flex'}}>
          <div className={styles.parent} >       
            <div>
              {overviewItem.items.map((item,index)=>
              <NavLink to={item.path}  key={index} className={styles.link} style={({ isActive }) => ({ color: isActive ? '#D71E0E' : "#647787" })}>  
                <div className={styles.iconpagename}>
                  <div className={styles.icon}>{item.icon}</div>
                  <div  className={styles.pageName}>{item.name}</div>
                </div>  
              </NavLink>
            )}
            </div>
          </div>
          <main className={styles.main}>{children}</main>
        </div>
        <Footer/>
      </div>  
     );
}
 
export default SideMenu;