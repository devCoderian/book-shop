import React, { useState } from 'react';
import { ListBox } from 'primereact/listbox';
import './Order.css';
export default function Order(){
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [selectedGroupedCity, setSelectedGroupedCity] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    

    const countryTemplate = (option) => {
        return (
            <div className="country-item">
                <div>{option.name}<i style = {{position:'absolute', top:'15px', right:'30px', fontSize: '0.8em'}} className="pi pi-times"></i></div>
             
            </div>
        );
    }
    // marginLeft:'50px'


    return (
        <>
        <div class="cont-myitems">
        <strong class="tit-myitem">장바구니</strong>
        <ul class="list-item-staged">
            <li>
                <img src="./src/images/Cool_Cola.png" alt="" class="img-item" />
                <strong class="txt-item">BLUEBAND</strong>
                <span class="num-counter">1</span>
            </li>
        </ul>
        <strong class="txt-total">총금액 : (나중에 달러 변환)원</strong>
        </div>
    </>
    )
}
        {/* <div className="card">
            <h5>Single</h5>
            <ListBox value={selectedCity} options={cities} onChange={(e) => setSelectedCity(e.value)} optionLabel="name" style={{ width: '15rem' }} />

           
            <h5>Advanced with Templating, Filtering and Multiple Selection</h5>
           
         <ListBox value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} optionLabel="name"
                itemTemplate={countryTemplate} />

        </div> */}
   
                 
