import { useNavigate } from "react-router-dom"
import style from "./BookMovie.module.css";
// import { json } from "node:stream/consumers";
import * as emoji from 'node-emoji'
import { useState } from "react";

const ViewMovie = ({ moviesData }) => {
    const [flag, setFlag] = useState(0);

    const navigation = useNavigate();
    const navigate = (id: any) => {
        console.log("called", id)
        navigation(`/BookMovie/${id}`);
    }
    console.log(navigation);
    console.log(emoji.get('unicorn'))
    emoji.get(':unicorn:')
    const change = (id:number) => {
        if (flag === 0) {
            setFlag(1);
            moviesData[id-1].liked = true;
        } else {
            setFlag(0);
            moviesData[id-1].liked = false;
        }
        console.log( moviesData[id-1].liked);
    }

    return (
        <div style={{ display: "flex", gap: "20px", margin: "5px", justifyContent: "center", flexWrap: "wrap"}}>
            {
                moviesData.map((ele, index) => {
                    return (
                        <div className={`card ${style.boxShadow}`} style={{ width: '22rem', backgroundColor: "black", color: 'white' }} key={index} >
                            <img src={ele.image} className="card-img-top" height='100%' alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"><strong style={{ textDecoration: 'underline' }}>{ele.name}

                                   </strong>
                                   
                                   </h5>
                                   <button
                                        type="button"
                                        className="btn toggle-btn"
                                        data-toggle="tooltip"
                                        data-placement="bottom" 
                                        title="Add To WisList"
                                        onClick={()=>change(ele.id)}
                                    >
                                        {ele.liked == false ? "💚" : emoji.get('heart')}
                                    </button>
                                <p className="card-text">{ele.description}</p>
                                <span><strong>Genre:</strong> {ele.genre.join(", ")}</span><br />
                                <span><strong>TicketPrice:</strong> {ele.price} 💸/pr. person</span>
                                <br />
                                <span><strong>Show Time</strong> {ele.time}</span><br />

                                <button className="btn btn-outline-info" id={JSON.stringify(ele.id)} name={JSON.stringify(ele.id)} onClick={() => navigate(ele.id)} style={{ color: 'white', outlineColor: 'white' }}>Book</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ViewMovie;
