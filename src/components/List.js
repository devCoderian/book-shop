import './CSS/DataViewDemo.css';
import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import useProduct from '../hooks/useProduct';
import useActions from '../hooks/useActions';

export default function List(){

    let products = useProduct();
    const {addToOrder, remove, removeAll, searchValue} = useActions();
  
    const renderGridItem = (data) => {
        return (
            <div className="p-col-12 p-md-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{data.category}</span>
                        </div>
                    </div>
                    <div className="product-grid-item-content">
                    <img src={`${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                    <Tooltip target=".product-name" />
                        <div className="product-name p-text-nowrap p-text-truncate" data-pr-tooltip={data.title}>{data.title}</div>
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" onClick= {()=>{
                             addToOrder(data.id);
                        }}></Button>
                    </div>
                </div>
            </div>
        );
    }

       const renderHeader = () => {
        return (
            <div className="p-grid p-nogutter"style={{height:'58px'}}>
                
                <span className = "title">상품 리스트 </span>
                <input className="list-serach" style={{paddingLeft:"10px"}} placeholder="상품명을 검색하세요." type="text" 
                  onChange={(e) => searchValue(e)} />
             
            </div>
        );
    }

    const header = renderHeader();

    return (
        <div className="dataview-demo">
            <div className="card">
                <DataView value={products}  header = {header}
                        itemTemplate={renderGridItem} paginator rows={9}
                       />
            </div>
        </div>
    );
    }