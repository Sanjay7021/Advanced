import style1 from "./Home.module.css"

export default function Home() {
    return (
        <div className={style1.header}>
            <img src="../book1.png" alt="" />
            {/* <h1 style={{color:'white'}}>Welcome to MyShow</h1> */}
        </div>
    )
}