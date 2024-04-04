import { Key, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const BookMovie = ({ moviesData, availBox, setAvailable, setHistory }: { moviesData: any, availBox: any, setAvailable: any, history: any, setHistory: any }) => {

    const params = useParams();
    const Id = Number(params.id);

    const navigation = useNavigate();

    console.log("called", moviesData[0].availBox1);

    const occupiSeat = (e: { target: { type: any; name: any; id: any; }; }) => {
        const { type, id } = e.target;
        console.log(id - 1, type);
        // (prev:any)=> [...prev,data]
        // setAvailable(availBox.map((item: any, key: number) => {
        //     if (key == id - 1) {
        //         availBox[key].packed = true;
        //         return [...availBox[key]];
        //     }
        // }))

        moviesData[Id - 1].availBox1.map((value, key) => {
            if (key == id - 1) {
                moviesData[Id - 1].availBox1[key].packed = true;
                return moviesData[Id - 1].availBox1;
            }
        })


        console.log("changed", moviesData);
    }
    const invoice = () => {
        let count = 0;
        moviesData[Id - 1].availBox1.map((item: any, key: any) => {
            if (moviesData[Id - 1].availBox1[key].packed == true) {
                count++;
            }
        })
        let data = { id: params.id, price: count };

        setHistory((prev: any) => [...prev, data]);
        navigation('/Invoice');

    }

    return (
        <div>

            <div style={{ display: "flex", flexDirection: 'column', justifyItems: 'center', justifyContent: "center" }}>
                {
                    moviesData.map((item: any, key: Key | null | undefined) => {
                        if (item.id == params.id) {
                            return (


                                <div className="card-img-top" key={key} style={{ backgroundColor: 'gray', color: 'white', width: '45%', marginLeft: '500px', marginTop: '10px', height: '150px', textAlign: 'center', fontSize: '40px' }}>
                                    <strong className="card-img-top">{item.name}</strong>
                                </div>

                            )
                        }
                    })

                }
                <div style={{ display: "flex", gap: '5px', marginTop: '100px', marginLeft: '500px' }}>

                    {
                        moviesData[Id - 1].availBox1.map((item: any, key: any) => {
                            return <div data-toggle="tooltip" data-placement="bottom" title={item.seat} style={{ backgroundColor: 'yellow', width: '5.5%' }}>
                                <input type="checkbox" id={item.seat} name="packed" value={availBox.packed} onChange={occupiSeat} style={{ width: '50%', height: '50%' }} disabled={moviesData[Id - 1].availBox1[key].packed == true ? true : false} />
                                {moviesData[Id - 1].availBox1[key].packed == true ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-octagon-fill" viewBox="0 0 16 16">
                                    <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
                                </svg> : <>&#128186;</>}
                            </div>
                        })
                    }
                </div>

            </div>
            <button type="button" data-toggle="tooltip" data-placement="top" title="Tooltip on top" onClick={invoice} style={{ width: '10%', marginTop: '10px', marginLeft: '800px' }} className="btn btn-success">Book</button>

        </div>
    )
}
export default BookMovie;