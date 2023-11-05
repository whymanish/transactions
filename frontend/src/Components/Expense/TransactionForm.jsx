import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        date: '',
        volume: '',
        deepakVolume: '',
        manishVolume: '',
        euroPrice: '',
        euroAdded: '',
        addingFees: '',
        totalEuroWithFees: '',
        usdtBuyingPrice: '',
        usdtPurchased: '',
        usdtSellingPrice: '',
        profitEarned: '',
        profitDivision: '',
        profitSentToDeepak: '',
        profitSentToManish: '',
        profitSentToHarsh: '',
    });

    const [errors, setErrors] = useState({}); // State to manage form validation errors
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/transactions', formData);
            if (response.status === 201) {
                console.log('Transaction created successfully');
                navigate('/transactionlist'); // Navigate to the TransactionList page
            } else {
                console.error('Failed to create transaction');
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = () => {
        const validationErrors = {};
        // Perform form validation here
        if (!formData.date) {
            validationErrors.date = 'Date is required';
        }
        if (!formData.volume) {
            validationErrors.volume = 'Volume is required';
        }
        if (!formData.deepakVolume) {
            validationErrors.deepakVolume = 'Deepak Volume is required';
        }
        if (!formData.manishVolume) {
            validationErrors.manishVolume = 'Manish Volume is required';
        }
        if (!formData.euroPrice) {
            validationErrors.euroPrice = 'Euro Price is required';
        }
        if (!formData.euroAdded) {
            validationErrors.euroAdded = 'Euro Added is required';
        }
        if (!formData.addingFees) {
            validationErrors.addingFees = 'Adding Fees is required';
        }
        if (!formData.totalEuroWithFees) {
            validationErrors.totalEuroWithFees = 'Total Euro With Fees is required';
        }
        if (!formData.usdtBuyingPrice) {
            validationErrors.usdtBuyingPrice = 'USDT Buying Price is required';
        }
        if (!formData.usdtPurchased) {
            validationErrors.usdtPurchased = 'USDT Purchased is required';
        }
        if (!formData.usdtSellingPrice) {
            validationErrors.usdtSellingPrice = 'USDT Selling Price is required';
        }
        if (!formData.profitEarned) {
            validationErrors.profitEarned = 'Profit Earned is required';
        }
        if (!formData.profitDivision) {
            validationErrors.profitDivision = 'Profit Division is required';
        }
        if (!formData.profitSentToDeepak) {
            validationErrors.profitSentToDeepak = 'Profit Sent To Deepak is required';
        }
        if (!formData.profitSentToManish) {
            validationErrors.profitSentToManish = 'Profit Sent To Manish is required';
        }
        if (!formData.profitSentToHarsh) {
            validationErrors.profitSentToHarsh = 'Profit Sent To Harsh is required';
        }



        if (Object.keys(validationErrors).length === 0) {
            // If there are no validation errors, submit the form
            handleSubmit();
        } else {
            // If there are validation errors, set them in the state
            setErrors(validationErrors);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-full max-w-6xl p-6 m-auto dark:bg-gray-800">
                <h2 className="text-center text-2xl mt-4 font-bold">Transactions Data</h2>
                <form className="mt-4">
                    <div className="grid lg:grid-cols-6 lg:gap-4">
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                Date
                            </label>
                            <input
                                type="text"
                                name="date"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                                placeholder="Enter Data"
                                value={formData.date}
                                onChange={handleInputChange}
                            />
                            {errors.date && <div className="text-red-500">{errors.date}</div>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                Volume
                            </label>
                            <input
                                type="text"
                                name="volume"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                                placeholder="Enter Data"
                                value={formData.volume}
                                onChange={handleInputChange}
                            />
                            {errors.volume && <div className="text-red-500">{errors.volume}</div>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                Deepak's Volume
                            </label>
                            <input
                                type="text"
                                name="deepakVolume"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                                placeholder="Enter Data"
                                value={formData.deepakVolume}
                                onChange={handleInputChange}
                            />
                            {errors.deepakVolume&& <div className="text-red-500">{errors.deepakVolume}</div>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                Manish's Volume
                            </label>
                            <input
                                type="text"
                                name="manishVolume"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                                placeholder="Enter Data"
                                value={formData.manishVolume}
                                onChange={handleInputChange}
                            />
                            {errors.manishVolume && <div className="text-red-500">{errors.manishVolume}</div>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                Euro Price
                            </label>
                            <input
                                type="text"
                                name="euroPrice"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                                placeholder="Enter Data"
                                value={formData.euroPrice}
                                onChange={handleInputChange}
                            />
                            {errors.euroPrice && <div className="text-red-500">{errors.euroPrice}</div>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                Euro Added
                            </label>
                            <input
                                type="text"
                                name="euroAdded"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                                placeholder="Enter Data"
                                value={formData.euroAdded}
                                onChange={handleInputChange}
                            />
                            {errors.euroAdded && <div className="text-red-500">{errors.euroAdded}</div>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                Adding Fees
                            </label>
                            <input
                                type="text"
                                name="addingFees"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                                placeholder="Enter Data"
                                value={formData.addingFees}
                                onChange={handleInputChange}
                            />
                            {errors.addingFees && <div className="text-red-500">{errors.addingFees}</div>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                               Total Euro With Fees
                            </label>
                            <input
                                type="text"
                                name="totalEuroWithFees"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                                placeholder="Enter Data"
                                value={formData.totalEuroWithFees}
                                onChange={handleInputChange}
                            />
                            {errors.totalEuroWithFees && <div className="text-red-500">{errors.totalEuroWithFees}</div>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                USDT Buying Price
                            </label>
                            <input
                                type="text"
                                name="usdtBuyingPrice"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                                placeholder="Enter Data"
                                value={formData.usdtBuyingPrice}
                                onChange={handleInputChange}
                            />
                            {errors.usdtBuyingPrice && <div className="text-red-500">{errors.usdtBuyingPrice}</div>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                USDT Purchased
                            </label>
                            <input
                                type="text"
                                name="usdtPurchased"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                                placeholder="Enter Data"
                                value={formData.usdtPurchased}
                                onChange={handleInputChange}
                            />
                            {errors.usdtPurchased && <div className="text-red-500">{errors.usdtPurchased}</div>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                USDT Selling Price
                            </label>
                            <input
                                type="text"
                                name="usdtSellingPrice"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                                placeholder="Enter Data"
                                value={formData.usdtSellingPrice}
                                onChange={handleInputChange}
                            />
                            {errors.usdtSellingPrice && <div className="text-red-500">{errors.usdtSellingPrice}</div>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Profit Earned
                            </label>
                            <input
                                type="text"
                                name="profitEarned"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                                placeholder="Enter Data"
                                value={formData.profitEarned}
                                onChange={handleInputChange}
                            />
                            {errors.profitEarned && <div className="text-red-500">{errors.profitEarned}</div>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                               Profit Division
                            </label>
                            <input
                                type="text"
                                name="profitDivision"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                                placeholder="Enter Data"
                                value={formData.profitDivision}
                                onChange={handleInputChange}
                            />
                            {errors.profitDivision && <div className="text-red-500">{errors.profitDivision}</div>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                               Profit Sent To Deepak
                            </label>
                            <input
                                type="text"
                                name="profitSentToDeepak"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                                placeholder="Enter Data"
                                value={formData.profitSentToDeepak}
                                onChange={handleInputChange}
                            />
                            {errors.profitSentToDeepak && <div className="text-red-500">{errors.profitSentToDeepak}</div>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                Profit sent to Manish
                            </label>
                            <input
                                type="text"
                                name="profitSentToManish"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                                placeholder="Enter Data"
                                value={formData.profitSentToManish}
                                onChange={handleInputChange}
                            />
                            {errors.profitSentToManish && <div className="text-red-500">{errors.profitSentToManish}</div>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                Profit Sent To Harsh
                            </label>
                            <input
                                type="text"
                                name="profitSentToHarsh"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                                placeholder="Enter Data"
                                value={formData.profitSentToHarsh}
                                onChange={handleInputChange}
                            />
                            {errors.profitSentToHarsh && <div className="text-red-500">{errors.profitSentToHarsh}</div>}
                        </div>

                        {/* Add similar code for other form fields with validation */}
                    </div>
                </form>
                <div className="flex justify-center mt-6">
                    <button
                        className="w-1/2 px-6 py-4 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-xl hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                        onClick={handleFormSubmit}
                    >
                        Submit
                    </button>
                </div>
                {/* Social Media Login */}
                <div className="flex justify-center mt-6">
                    <button
                        className="w-1/2 px-6 py-4 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-xl hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                    >
                        Check Data
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
