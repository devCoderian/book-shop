import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { ProductService } from '../service/ProductService'
import { Rating } from 'primereact/rating';
import './DataViewDemo.css';
import { Tooltip } from 'primereact/tooltip';
import useProduct from '../hooks/useProduct';
import useActions from '../hooks/useActions';
import { InputText } from 'primereact/inputtext';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function List(){

    let products = useProduct();
    // const {products} = useContext(AppStateContext);
    // const [products, setProducts] = useState(null);
    const {addToOrder, remove, removeAll, searchValue} = useActions();
    // cosnt [searchValue, setSearchList ] =useState(null);
    // const [search, setSearch] = useState(null);
    
    let productsCopy = [];
  
    const renderGridItem = (data) => {
        return (
            <div className="p-col-12 p-md-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{data.category}</span>
                        </div>
                        {/* <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span> */}
                    </div>
                    <div className="product-grid-item-content">
                    <img src={`${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                    <Tooltip target=".product-name" />
                        <div className="product-name p-text-nowrap p-text-truncate" data-pr-tooltip={data.title}>{data.title}</div>
                        {/* <div className="product-description">{data.name}</div> */}
                        {/* <Rating value={data.rating} readOnly cancel={false}></Rating> */}
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">${data.price}</span>
                        {/* <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button> */}
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
                <input className="list-serach" style={{paddingLeft:"10px"}} placeholder="검색" type="text" 
                  onChange={(e) => searchValue(e)} />
                  {/* onChange={(e) => searchValue(e)}  */}
                 {/* <button onClick ={(e) => searchValue(e)}>검색</button> */}
              
              
             
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