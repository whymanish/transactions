import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/transactions')
            .then((response) => {
                setTransactions(response.data);
            })
            .catch((error) => {
                console.error('Failed to fetch data:', error);
            });
    }, []);

    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-6 text-[#C5C5C5]'>"Revolut Transactions"</h2>
            <div className='flex justify-center'>
            <div className='grid lg:grid-cols-3 gap-8'>
            {transactions.map((transaction) => (
                <Card key={transaction._id} transaction={transaction} /> 
            ))}
            </div>
            </div>
        </div>
    );
};

export default TransactionList;
