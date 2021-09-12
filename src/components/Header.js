import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
export default function Header(){
    const items = [
        {
            label: 'SHOP IAN',
            icon: 'pi pi-fw pi-paypal'
        }
    ];

    const end = <InputText placeholder="Search" type="text" />;
    return (
        <>
              <Menubar model={items} />
         </>
    );
    
    
}