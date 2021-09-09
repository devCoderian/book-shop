import React, { useState, useEffect, useMemo } from 'react';
import { ListBox } from 'primereact/listbox';
import './Order.css';
import { Button } from 'primereact/button';
import useOrder from '../hooks/useOrder';
import useProduct from '../hooks/useProduct';
import useActions from '../hooks/useActions';
export default function Order(){
    const orders = useOrder();
    const products = useProduct();
    const {remove, removeAll} = useActions();
    console.log(orders);

  
    const cal = useMemo(() =>{
    
        return orders.map ((order, index) =>{
            const { id, quantity } = order;
            const product = products.find(item => item.id === id)
            console.log(quantity*product.price);
            return quantity*(product.price.toFixed(2));
        }).reduce((l, r)=> l+r, 0);
    },[orders, products]);

    if(orders.length === 0){
        return (
            <>
             <div className="p-d-flex p-ai-end" >
            <div className="cont-myitems">
            <strong className="tit-myitem">장바구니</strong>
            <ul className="list-item-staged">
                <li>
                   장바구니가 비어있습니다.
                </li>
            </ul>
            </div>
            </div>
        </>
        )
    }else{
    return (
        <>
        <div className="p-d-flex p-ai-end" >
        {/* <div className ="my-info"> */}
        <div className="cont-myitems">
        <strong className="tit-myitem">장바구니</strong>
        <ul className="list-item-staged">
            {orders.map((order, index) =>{
                const product = products.find(item => item.id === order.id)
                return(
                
                <li key = {index}>
                <span className="num-counter">
                {/* <button onClick = {()=> remove(order.id) }> */}
                    <i className="pi pi-minus-circle" onClick = {()=> remove(order.id) }></i>
                    {/* </button> */}
                </span>
                <img src={product.image} alt="" className="img-item" />
                <strong className="txt-item p-text-nowrap p-text-truncate" style={{width: '10rem'}}>{product.title}</strong>
                <span className="num-counter"> x {order.quantity}</span>
                {/* <span className="num-counter"> ${product.price*order.quantity}</span> */}
                {/* <span className="num-counter"><button onClick = {()=> remove(order.id) }>
                    <i className="pi pi-minus-circle" onClick = {()=> remove(order.id) }></i>
                    </button>
                </span> */}
                </li>
                )
            })
            }
        </ul>
      
        <strong className="txt-total">총금액 :${cal}</strong>
        
        {/* <button onClick={removeAll}>비우기</button> */}
        <div className="btn-div">
        <button onClick={removeAll} style ={{"width":"100%"}}>비우기</button>
        <button onClick={
            ()=>{alert(`주문이 완료되었습니다. 총금액: $${cal}` )}
        } style ={{"width":"100%"}}>주문</button>
        </div>
        </div>
        </div>
        {/* </div> */}
    </>
    )
    }
}
   