import React from "react";
import { Link ,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Css/Home.css"
const Home = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((out)=>{
            setData([...out.products])
            return(()=>{console.log("Unmounting")})
        })
        
    },[])

    return (
        <>
           <div className="home">
        {
         data.map((item,ind)=>{
             return (
                 <Link to={`/card/${item.id}`}>
                 <div className="card">
                     <div className="img">
                         <img src={item.thumbnail} alt={item.title} />
                     </div>
                     <div className="details">
                         <h1>{item.title}</h1>
                         <h3>${item.price}</h3>
                         <p>Discount upto {item.discountPercentage}%</p>
                        <p>Rating {item.rating}</p>
                         
                     </div>
                 </div>
             </Link>
             );
         })
        }
                
                
               
           </div>
           <div className="footer">
            <table>
                <thead>
                    <tr>
                        <td>POPULAR LOCATIONS</td>
                        <td>TRENDING LOCATIONS</td>
                        <td>ABOUT US</td>
                        <td>E-Kart</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Kolkata</td>
                        <td>Bhubaneshwar</td>
                        <td>Tech@E-Kart</td>
                        <td>Blog</td>
                    </tr>
                    <tr>
                        <td>Mumbai</td>
                        <td>Hyderabad</td>
                        <td> </td>
                        <td>Help</td>
                    </tr>
                    <tr>
                        <td>Chennai</td>
                        <td>Chandigarh</td>
                        <td> </td>
                        <td>Sitemap</td>
                    </tr>
                    <tr>
                        <td>Pune</td>
                        <td>Nashik</td>
                        <td> </td>
                        <td>Legal & Privacy information</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td> </td>
                        <td>Vulnerability Disclosure Program</td>
                    </tr>
                </tbody>
            </table>
            <div className="follow-div">
                <div className="flwus">
                    <h3>FOLLOW US</h3>
                </div>
                <div className="flwicon">
                    <img src="./assets/facebook-app-symbol.png" alt="fb" />
                    <img src="./assets/instagram.png" alt="insta" />
                    <img src="./assets/twitter.png" alt="twitter" />
                    <img src="./assets/play.png" alt="play" />
                </div>
                <div className="flwstore">
                    <img className="playstore" src="" alt="playstore" /><br />
                    <img className="appstore" src="./assets/react.svg" alt="Appstore" />
                </div>
            </div>
         </div>

         <div className="endfooter">
            <div className="endftrsec1">
                <div className="logs">
                   
                </div>
                <div className="end">
                    <p>Help - Sitemap</p>
                    <p>All rights reserved &copy; 2006-2025 E-Kart</p>
                </div>
            </div>
        </div>
    </>
    );
};
export default Home;