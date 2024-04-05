import React from 'react'
import style from "./BookMovie.module.css";
import { useNavigate } from 'react-router-dom';

export default function LikedMovies({ moviesData }: { moviesData: any }) {

    const navigation = useNavigate();
    const navigate = (id: any) => {
        console.log("called", id)
        navigation(`/BookMovie/${id}`);
    }
    let flag = 1;
    return (
        <div style={{ display: "flex", gap: "20px", margin: "5px", justifyContent: "center", flexWrap: "wrap",height:'100vh' }}>
            {
                moviesData.map((ele, index) => {
                    if (ele.liked == true) {
                        flag = 0;
                        return (
                            <div className={`card ${style.boxShadow}`} style={{ width: '22rem', backgroundColor: "black", color: 'white',height:"95%" }} key={index} >
                                <img src={ele.image} className="card-img-top" height='80%' alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"><strong style={{ textDecoration: 'underline' }}>{ele.name}

                                    </strong>

                                    </h5>
                                    {/* <button
                                    type="button"
                                    className="btn toggle-btn"
                                    onClick={()=>change(ele.id)}
                                >
                                    {ele.liked == false ? "💚" : emoji.get('heart')}
                                </button> */}
                                    <p className="card-text">{ele.description}</p>
                                    <span><strong>Genre:</strong> {ele.genre.join(", ")}</span><br />
                                    <span><strong>TicketPrice:</strong> {ele.price} 💸/pr. person</span>
                                    <br />
                                    <span><strong>Show Time</strong> {ele.time}</span><br />

                                    <button className="btn btn-outline-info" id={JSON.stringify(ele.id)} name={JSON.stringify(ele.id)} onClick={() => navigate(ele.id)} style={{ color: 'white', outlineColor: 'white' }}>Book</button>
                                </div>
                            </div>
                        )
                    }
                })
            }
            {
                   flag == 1 && <h1 style={{color:'white'}}>Please Marke Movies First...</h1>
            }
        </div>

    )
}
