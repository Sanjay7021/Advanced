import { useNavigate } from "react-router-dom"
import style1 from "./Home.module.css"

export default function Home() {
    const navigation = useNavigate();
    if(navigation.state == 'load'){
        console.log("load state")
    }
    console.log(navigation);
    return (
        <div className={style1.header} style={{height:'85vh'}}>
            <img src="../book1.png" alt="" />
            {/* <h1 style={{color:'white'}}>Welcome to MyShow</h1> */}
        </div>
    )
}