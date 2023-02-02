import {useState,CSSProperties, useEffect } from 'react';
import styles from '../dashboard/scss/sellTable.module.scss';
import DotLoader from "react-spinners/DotLoader";
import _ from 'lodash';
import { GET_SERVICE } from '../../services/backend';

const override: CSSProperties = {
    display: "block",
    marginTop: "0 auto",
    borderColor: "red",
  };
 
const SellTable = () => {
    const [loading,setLoading,]=useState(false);
    const [mismatchError,setMismatchError]=useState('');
    const [color, setColor] = useState("green");
    const [product,setProduct]=useState([]);

    useEffect(()=>{
      getProduct()
    },[])

  const getProduct=async()=>{ 
      const endpoint =  `/api/v1/users`;
      console.log('endpoint',endpoint)
      setLoading(!loading)
        try {
          const response = await GET_SERVICE(endpoint)
          .then(response => response.json())
          .then(data=> {
              console.log('users',data)
            setLoading(loading)
          if(data)
             {
              setProduct(data)
             }
          else
            {
              setMismatchError(data.message)
            }
        })
       }
          catch (e:any) {
            setLoading(loading)
            setMismatchError('Kindly check internet connections')
            return e.response;
            }
  }; 

      

    return ( 
         <div  className={styles.parent}>
         <div className="table-responsive">  
          <div style={{display:'flex',justifyContent:'center',marginTop:'0em'}}><DotLoader color={color} loading={loading} cssOverride={override} size={20}/></div>    
         <table className="table">
          <thead className={styles.tablerow}>
           <tr>
              <th className={styles.tablehead} scope="col">
                Products
              </th>

              <th className={styles.tablehead} scope="col">
                Quantity
              </th>

              <th className={styles.tablehead} scope="col">
                 Bid Price
              </th>
              <th></th>
           </tr>
          </thead>
          <tbody>

          {product.map((prod:any,index:any) =>
           <tr key={index}>
             <td className={styles.tabledata}>{prod.security_code}</td>
             <td className={styles.tabledata}>467</td>
             <td className={styles.tabledataPrice}>{prod.price}</td>
             <td>
                <div className={styles.buyBox}>Buy</div>
             </td>
          </tr>
          )}
         </tbody>
         </table>
         </div>
         </div>
     );
}
 
export default SellTable;