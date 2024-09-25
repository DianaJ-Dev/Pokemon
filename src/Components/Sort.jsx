import React, { useState } from 'react';
import '../App.css';
import sort from '../img/sort.png';

export const Sort = ({ list, onOrderChange, selectOrder, setSelectOrder }) => {
    const [isOpen, setIsOpen] = useState(false);

    const orderAlphabetic = (selectedOrder) => {
        const orderedList = [...list].sort((a, b) => {
            if (selectedOrder === 'asc') {
                return a.name.localeCompare(b.name);
            } else if (selectedOrder === 'id') {
                return a.id - b.id; 
            }
            return 0;
        });

        setSelectOrder(selectedOrder);
        onOrderChange(orderedList);
        setIsOpen(false);
    };

    return (
        <div className="sort-container">
            <img 
                src={sort} 
                alt="sort" 
                className="sort-icon" 
                onClick={() => setIsOpen(prev => !prev)} 
            />
            {isOpen && ( 
                <div className="sort-options">
                    <div onClick={() => orderAlphabetic('asc')}>A-Z</div>
                    <div onClick={() => orderAlphabetic('id')}>Id</div>
                </div>
            )}
        </div>
    );
};
