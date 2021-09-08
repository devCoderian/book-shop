import List from "./List";
import Order from "./Order";
import { ProgressSpinner } from 'primereact/progressspinner';
import useProduct from "../hooks/useProduct";

export default function Contents(){
    let products = useProduct();
    // const isLoding = useLoading();
    //products.length===0
    if(products.length===0){
        return (
        <>
        <div style = {{width:'100vw', height:'100vh'}}>
            <div style={{height: '100vh', display:'flex' ,justifyContent:'center', alignItems:'center'}}>
                <ProgressSpinner />
            </div>
        </div>
        </>
        )
    }else{
    return  <>
    <div className="p-d-flex p-ai-start">
        <List/><Order/></div>
    </>;
    }

};