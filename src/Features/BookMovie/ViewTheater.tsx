import { useState } from "react";
import * as emoji from 'node-emoji'

const ViewTheater = ({ moviesData }: { moviesData: any }) => {
    const [ID, setId] = useState(0);
    let Name = "";
    const getMovieName = (e: any) => {
        const { value, id, name } = e.target;
        console.log(value, id, name);
        setId(Number(value));
        // console.log(Id);
        Name=name;
    }
   
    return (

        <div style={{height:'85vh'}}>
        <div style={{ backgroundColor: 'gray', color: 'white', width: '70%', marginLeft: '300px', height: '150px', marginTop: '10px', textAlign: 'center', fontSize: '40px' }}>
        <select className="btn btn-info" onChange={getMovieName}>
                <option value={0}>Choose Movie Name</option>
                {moviesData.map((item: any, key: any) => {
                    return (
                        <option className="dropdown-item" id={item.id} name={item.name} key={key} value={item.id}>{item.name}</option>
                    )
                })}
            </select>

        </div>
            

            {
                ID == 0 ?
                    <h2 style={{ color: "white" }}>&nbsp;&nbsp;Check seats availabilities by movie name</h2>
                    :
                    
                        <div style={{ display: "flex", gap: "10px", margin: "5px", justifyContent: "center" }}>
                            {
                                moviesData[ID - 1].availBox1.map((item: any) => {
                                    return <div data-toggle="tooltip" data-placement="left" title={item.seat} style={{ backgroundColor: item.packed == true ? 'red' : 'green', width: '8%', height: '100px', marginTop: '100px' }}>
                                        {item.packed == true ? "Booked" : "Empty"}
                                    </div>
                                })
                            }
                        </div>
                    // </div>
            }

            {/* 
            <div style={{backgroundColor:'gray',color:'white',width:'70%',marginLeft:'300px',height:'150px',marginTop:'10px',textAlign:'center',fontSize:'40px'}}>
                    Screen
            </div>
            <div style={{display:"flex",gap:"10px",margin:"5px",justifyContent:"center"}}>
           {
            availBox.map((item:any)=> {
                return <div data-toggle="tooltip" data-placement="left" title={item.seat} style={{ backgroundColor : item.packed==true ? 'red':'green',width: '8%',height:'100px',marginTop:'100px'}}>
                    {item.packed == true ? "Booked" : "Empty"}
                </div>
            })
           }
        </div> */}
        </div>


    )
}
export default ViewTheater;