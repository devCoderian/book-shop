import React, { useState, useEffect, useContext } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { ProductService } from '../service/ProductService';
import { Rating } from 'primereact/rating';
import './DataViewDemo.css';
import { Tooltip } from 'primereact/tooltip';
import { InputText } from 'primereact/inputtext';
import AppStateContext from '../contexts/AppStateContext';
import useProduct from '../hooks/useProduct';
import useActions from '../hooks/useActions';
export default function List(){

    const products = useProduct();
    // const {products} = useContext(AppStateContext);
    // const [products, setProducts] = useState(null);
    const {addToOrder, remove, removeAll} = useActions();
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'},
    ];

    // const productService = new ProductService();

    // useEffect(() => {
    //     productService.getProducts().then(data => setProducts(data));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // const onSortChange = (event) => {
    //     const value = event.value;

    //     if (value.indexOf('!') === 0) {
    //         setSortOrder(-1);
    //         setSortField(value.substring(1, value.length));
    //         setSortKey(value);
    //     }
    //     else {
    //         setSortOrder(1);
    //         setSortField(value);
    //         setSortKey(value);
    //     }
    // }

    // const onClick = () =>{
    //     addToOrder(data.id);
    // }
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

    // const itemTemplate = (product, layout) => {
    //     if (!product) {
    //         return;
    //     }

    //     if (layout === 'list')
    //         return renderListItem(product);
    //     else if (layout === 'grid')
    //         return renderGridItem(product);
    // }

    // const renderHeader = () => {
    //     return (
    //         <div className="p-grid p-nogutter">
    //             <div className="p-col-6" style={{textAlign: 'left'}}>
    //                 <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange}/>
    //             </div>
    //             <div className="p-col-6" style={{textAlign: 'right'}}>
    //                 <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
    //             </div>
    //         </div>
    //     );
    // }


       const renderHeader = () => {
        return (
            <div className="p-grid p-nogutter"style={{height:'58px'}}>
                <div className="p-col-6" style={{textAlign: 'left', margin: '15px', fontWeight:'700', fontSize:'1.5em'}}>
                상품 리스트
                </div>
              
            </div>
        );
    }

    const header = renderHeader();

    return (
        <div className="dataview-demo">
            <div className="card">
                <DataView value={products} layout={layout} header = {header}
                        itemTemplate={renderGridItem} paginator rows={9}
                        sortOrder={sortOrder} sortField={sortField} />
            </div>
        </div>
    );
}