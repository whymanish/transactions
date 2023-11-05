import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransactionForm from './Components/Expense/TransactionForm';
import TransactionList from './Components/Expense/TransactionList';
import Card from './Components/Expense/Card';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/transactionform" element={<TransactionForm/>} />
                <Route path="/transactionlist" element={<TransactionList/>} />
                <Route path="/" element={<TransactionForm/>} />
            </Routes>
        </Router>
    );
}

export default App;
