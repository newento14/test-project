import React from 'react';

const DummyTable = () => {
    return (
        <div className="relative overflow-x-auto mt-12 px-6">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        product
                    </th>
                    <th scope="col" className="px-6 py-3">
                        left in stock
                    </th>
                    <th scope="col" className="px-6 py-3">
                        category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        action
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        IPhone 15
                    </th>
                    <td className="px-6 py-4">
                        869
                    </td>
                    <td className="px-6 py-4">
                        Phone
                    </td>
                    <td className="px-6 py-4">
                        $1500
                    </td>
                    <td className="px-6 py-4">
                        <a className="font-medium text-blue-600 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        Apple MacBook Pro 13
                    </th>
                    <td className="px-6 py-4">
                        551
                    </td>
                    <td className="px-6 py-4">
                        Laptop
                    </td>
                    <td className="px-6 py-4">
                        $2000
                    </td>
                    <td className="px-6 py-4">
                        <a className="font-medium text-blue-600 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        Samsung Galaxy S23 Ultra
                    </th>
                    <td className="px-6 py-4">
                        1250
                    </td>
                    <td className="px-6 py-4">
                        Phone
                    </td>
                    <td className="px-6 py-4">
                        $1200
                    </td>
                    <td className="px-6 py-4">
                        <a className="font-medium text-blue-600 hover:underline">Edit</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    );
};

export default DummyTable;