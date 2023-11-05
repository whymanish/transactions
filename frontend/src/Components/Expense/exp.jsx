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
    // Add more validation rules for other fields as needed

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
      <div className="w-full max-w-4xl p-6 m-auto dark:bg-gray-800">
        <h2 className="text-center text-2xl mt-4 font-bold">Transactions Data</h2>
        <form className="mt-4">
          <div className="grid lg:grid-cols-4 lg:gap-4">
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
                name="Volume"
                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                placeholder="Enter Data"
                value={formData.volume}
                onChange={handleInputChange}
              />
              {errors.volume && <div className="text-red-500">{errors.volume}</div>}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Volume
              </label>
              <input
                type="text"
                name="Volume"
                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                placeholder="Enter Data"
                value={formData.volume}
                onChange={handleInputChange}
              />
              {errors.volume && <div className="text-red-500">{errors.volume}</div>}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Volume
              </label>
              <input
                type="text"
                name="Volume"
                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                placeholder="Enter Data"
                value={formData.volume}
                onChange={handleInputChange}
              />
              {errors.volume && <div className="text-red-500">{errors.volume}</div>}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Volume
              </label>
              <input
                type="text"
                name="Volume"
                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                placeholder="Enter Data"
                value={formData.volume}
                onChange={handleInputChange}
              />
              {errors.volume && <div className="text-red-500">{errors.volume}</div>}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Volume
              </label>
              <input
                type="text"
                name="Volume"
                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                placeholder="Enter Data"
                value={formData.volume}
                onChange={handleInputChange}
              />
              {errors.volume && <div className="text-red-500">{errors.volume}</div>}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Volume
              </label>
              <input
                type="text"
                name="Volume"
                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                placeholder="Enter Data"
                value={formData.volume}
                onChange={handleInputChange}
              />
              {errors.volume && <div className="text-red-500">{errors.volume}</div>}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Volume
              </label>
              <input
                type="text"
                name="Volume"
                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                placeholder="Enter Data"
                value={formData.volume}
                onChange={handleInputChange}
              />
              {errors.volume && <div className="text-red-500">{errors.volume}</div>}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Volume
              </label>
              <input
                type="text"
                name="Volume"
                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                placeholder="Enter Data"
                value={formData.volume}
                onChange={handleInputChange}
              />
              {errors.volume && <div className="text-red-500">{errors.volume}</div>}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Volume
              </label>
              <input
                type="text"
                name="Volume"
                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                placeholder="Enter Data"
                value={formData.volume}
                onChange={handleInputChange}
              />
              {errors.volume && <div className="text-red-500">{errors.volume}</div>}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Volume
              </label>
              <input
                type="text"
                name="Volume"
                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                placeholder="Enter Data"
                value={formData.volume}
                onChange={handleInputChange}
              />
              {errors.volume && <div className="text-red-500">{errors.volume}</div>}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Volume
              </label>
              <input
                type="text"
                name="Volume"
                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                placeholder="Enter Data"
                value={formData.volume}
                onChange={handleInputChange}
              />
              {errors.volume && <div className="text-red-500">{errors.volume}</div>}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Volume
              </label>
              <input
                type="text"
                name="Volume"
                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                placeholder="Enter Data"
                value={formData.volume}
                onChange={handleInputChange}
              />
              {errors.volume && <div className="text-red-500">{errors.volume}</div>}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Volume
              </label>
              <input
                type="text"
                name="Volume"
                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                placeholder="Enter Data"
                value={formData.volume}
                onChange={handleInputChange}
              />
              {errors.volume && <div className="text-red-500">{errors.volume}</div>}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Volume
              </label>
              <input
                type="text"
                name="Volume"
                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                placeholder="Enter Data"
                value={formData.volume}
                onChange={handleInputChange}
              />
              {errors.volume && <div className="text-red-500">{errors.volume}</div>}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Volume
              </label>
              <input
                type="text"
                name="Volume"
                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl"
                placeholder="Enter Data"
                value={formData.volume}
                onChange={handleInputChange}
              />
              {errors.volume && <div className="text-red-500">{errors.volume}</div>}
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
