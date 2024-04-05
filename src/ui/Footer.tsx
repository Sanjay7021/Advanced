import { Link } from "react-router-dom"
import style from "./Footer.module.css"
export default function Footer() {
    return (
        <div className={style.navbar}>
            {/* <Link to ='/'>Home</Link> 
            <Link to ='/AboutUs'>AboutUs</Link> 
            <Link to ='EmpManager'>EmpManager</Link>  */}
            <Link to="/">@COPYRIGHT 2024</Link>
            {/* <a href="#" className={style.right}>Link</a> */}
        </div>
    )
}