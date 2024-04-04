const Invoice = ({total,setTotal,history,moviesData}:{total:any,setTotal:any,history:any,moviesData:any}) => {
    let finalCount=0;
    history.map((item:any)=>{
        finalCount += item.price*moviesData[item.id-1].price;
    })
    setTotal(finalCount);

    return (
        <>
        <div style={{backgroundColor:'green',width:'10%',height:'10%',float:'right'}}>
            Total Fair: {total}
        </div>
         <div style={{display:'flex',justifyContent:'center'}}>
           {history.map((item:any)=>{
            return <div style={{width:'20%',height:'auto',backgroundColor:'gray',margin:'8px',padding:'8px',border:'1px',borderRadius:'8px'}}>
            <p>
            {moviesData[item.id-1].name}
            </p>
            <strong>Price: {moviesData[item.id-1].price}</strong><br />
            <strong>Total Price</strong>:{item.price*moviesData[item.id-1].price}&nbsp; 
            <strong style={{float:'right'}}>Persons:{item.price}</strong>
          </div>
          })}
        </div>
        </>
    )
}
export default Invoice;