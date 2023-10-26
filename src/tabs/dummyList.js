import React from 'react';

const DummyList = () => {
    const items = ['IPhone 15', 'Apple MacBook Pro 13', 'Samsung Galaxy S23 Ultra'];

    return (
        <div className="flex flex-col justify-center">
            <h2 className="font-bold text-3xl">Product list</h2>
            <ul>
                {items.map((item, index) => (
                    <li className="text-xl" key={index}>&#x2022;{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default DummyList;
