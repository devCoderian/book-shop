import { useState, useCallback, useEffect } from "react";
import AppStateContext from "../contexts/AppStateContext";
import  ProductService  from "../service/ProductService";

const AppStateProvider = ({children}) =>{
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState("");
    const productService = new ProductService();

    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []);

    useEffect(() => {
        let row= [];
        products.forEach((data)=>{
            if(data.title.toLocaleUpperCase().includes(search.toLocaleUpperCase())){
                row.push(data); 
                setProducts(row);
            }else{
                return;
            }
            //배열에 추가
           
        });
        if(search === ""){
            productService.getProducts().then(data => setProducts(data));
        }
        row= [];
        console.log(row);
  
    }, [search]);
    
    const searchValue = useCallback(
       (e)=>{
        setSearch(e.target.value);
        console.log(e.target.value)
       },[]
    )
    const addToOrder = useCallback(
        (id) => {
           setOrders((orders) =>{
                const check = orders.find(order =>order.id === id);
                if(check === undefined){
                    return [...orders, { id, quantity: 1}];
                }else{
                    return orders.map((order)=>{
                        if(order.id === id){
                            return{
                                id,
                                quantity: order.quantity +1,
                            };
                        }else{
                            return order;
                        }
                    })
                }
           });
        },
        [],
    )
    const remove = useCallback(
        (id) => {
            setOrders(orders => {
                return orders.filter(order => order.id !== id)
            })
        },
        [],
    )
    const removeAll = useCallback(() => {
        setOrders([]);
    },[])

    return <AppStateContext.Provider 
    value = {{
        // 객체안에서 useState사용
        products,
        orders,
        addToOrder,
        remove,
        removeAll,
        searchValue
    }}>
        {children}
    </AppStateContext.Provider>
}
// Provider에는 value 객체를 넣어줄 수 있음
export default AppStateProvider;