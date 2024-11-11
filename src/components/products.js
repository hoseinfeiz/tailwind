import React , {useState , useEffect} from "react";
        
const Products = () => {
    const[products , setProducts] = useState([])
    useEffect(()=>{
        const getData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:5000/graphql' , {
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                query: `query {
                getProduct {
                name
                price
                image
              }
            }`
        })
                
            })
            const data = await response.json()
            setProducts(data.data.getProduct)
          } catch (error) {
            console.log(error)
          }
        }
        getData()
    } , [])
    return (
       <>
       {console.log(products)}
        <div className="flex flex-row flex-wrap justify-center items-center">
             salam
             </div>
       </>
    );
};
export default Products;