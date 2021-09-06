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
    let total = 0;

  
    const cal = useMemo(() =>{
    
        return orders.map ((order, index) =>{
            const { id, quantity } = order;
            const product = products.find(item => item.id === id)
            console.log(quantity*product.price);
            return quantity*product.price;
        }).reduce((l, r)=> l+r, 0);
    },[orders, products]);

    if(orders.length === 0){
        return (
            <>
            <div className="cont-myitems">
            <strong className="tit-myitem">장바구니</strong>
            <ul className="list-item-staged">
                <li>
                   장바구니가 비어있습니다.
                </li>
            </ul>
            </div>
        </>
        )
    }else{
    return (
        <>
        <div className="cont-myitems">
        <strong className="tit-myitem">장바구니</strong>
        <ul className="list-item-staged">
            {orders.map((order, index) =>{
                const product = products.find(item => item.id === order.id)
                return(
                
                <li key = {index}>
                <img src={product.image} alt="" className="img-item" />
                <strong className="txt-item">{product.title}</strong>
                <span className="num-counter"> x {order.quantity}</span>
                <span className="num-counter"> $ {product.price*order.quantity}</span>
                <span className="num-counter"><button onClick = {()=> remove(order.id) }>
                    <i className="pi pi-minus-circle"></i>
                    </button>
                </span>
                </li>
                )
            })
            }
        </ul>
      
        <strong className="txt-total">총금액 :${cal}</strong>
        <button onClick={removeAll}>비우기</button>
        <button onClick={
            ()=>{alert('주문서 만들기,검색기능 구현하기')}
        } style ={{"width":"100%"}}>주문</button>
        </div>
    </>
    )
    }
}
                 
{/* <div class="cont-myitems">
<strong class="tit-myitem">장바구니</strong>
<ul class="list-item-staged">
    <li>
        <img src="./src/images/Cool_Cola.png" alt="" class="img-item" />
        <strong class="txt-item">BLUEBAND</strong>
        <span class="num-counter">1</span>
    </li>
</ul>
<strong class="txt-total">총금액 : (나중에 달러 변환)원</strong>
<button onClick>비우기</button>
</div> */}