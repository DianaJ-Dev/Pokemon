import React from 'react';

export const Sort= ({ list, onOrderChange, selectOrder, setSelectOrder }) => {
    const orderAlphabetic = (e) => {
        const selectedOrder = e.target.value;

        const orderedList = [...list].sort((a, b) => {
            if (selectedOrder === 'asc') {
                return a.name.localeCompare(b.name);
            }  else if (selectedOrder === 'id') {
                return a.id - b.id; 
            }
            return 0;
            
        });

        setSelectOrder(selectedOrder);
        onOrderChange(orderedList);
    };

    return (
        <div>
            <select value={selectOrder} onChange={orderAlphabetic}>
                <option value='asc'>A-Z</option>
                <option value='id' >Id</option>
            </select>
        </div>
    );
};
