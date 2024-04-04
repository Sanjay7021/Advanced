import { useNavigate } from "react-router-dom"
import style from "./BookMovie.module.css";

const ViewMovie =  ({moviesData}) => {
    const navigation = useNavigate();
   const navigate = (id:any) => {
        console.log("called",id)
        navigation(`/BookMovie/${id}`);
   }
    return (
        <div style={{display:"flex",gap:"10px",margin:"5px",justifyContent:"center"}}>
           {
            moviesData.map((ele, index) => {
                return (
                    <div className={`card ${style.boxShadow}`}  style={{ width: '18rem',backgroundColor:"whitesmoke"}} key={index} >
                        <img src={ele.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><strong>{ele.name}</strong></h5>
                            <p className="card-text">{ele.description}</p>
                            <span><strong>Genre:</strong> {ele.genre.join(",")}</span><br />
                            <span><strong>TicketPrice:</strong> {ele.price}/pr. person</span>
                            <br />
                            <span><strong>Show Time</strong> {ele.time}</span><br />

                            <button className="btn btn-primary" id={JSON.stringify(ele.id)} name ={JSON.stringify(ele.id)} onClick={()=>navigate(ele.id)}>Book</button>
                        </div>
                    </div>
                )
            })
        }
     </div>
    )
}
export default ViewMovie;
