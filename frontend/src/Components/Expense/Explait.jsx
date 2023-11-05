import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Explait = () => {
  const [formData, setFormData] = useState({
    date: "",
    volume: "",
    deepakVolume: "",
    manishVolume: "",
    euroPrice: "",
    euroAdded: "",
    addingFees: "",
    totalEuroWithFees: "",
    usdtBuyingPrice: "",
    usdtPurchased: "",
    usdtSellingPrice: "",
    profitEarned: "",
    profitDivision: "",
    profitSentToDeepak: "",
    profitSentToManish: "",
    profitSentToHarsh: "",
  });

  const [errors, setErrors] = useState({}); // State to manage form validation errors
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [secretToken, setSecretToken] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/transactions",
        formData
      );
      if (response.status === 201) {
        console.log("Transaction created successfully");
        navigate("/transactionlist"); // Navigate to the TransactionList page
      } else {
        console.error("Failed to create transaction");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
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
      validationErrors.date = "Date is required";
    }
    if (!formData.volume) {
      validationErrors.volume = "Volume is required";
    }
    if (!formData.deepakVolume) {
      validationErrors.deepakVolume = "Deepak Volume is required";
    }
    if (!formData.manishVolume) {
      validationErrors.manishVolume = "Manish Volume is required";
    }
    if (!formData.euroPrice) {
      validationErrors.euroPrice = "Euro Price is required";
    }
    if (!formData.euroAdded) {
      validationErrors.euroAdded = "Euro Added is required";
    }
    if (!formData.addingFees) {
      validationErrors.addingFees = "Adding Fees is required";
    }
    if (!formData.totalEuroWithFees) {
      validationErrors.totalEuroWithFees = "Total Euro With Fees is required";
    }
    if (!formData.usdtBuyingPrice) {
      validationErrors.usdtBuyingPrice = "USDT Buying Price is required";
    }
    if (!formData.usdtPurchased) {
      validationErrors.usdtPurchased = "USDT Purchased is required";
    }
    if (!formData.usdtSellingPrice) {
      validationErrors.usdtSellingPrice = "USDT Selling Price is required";
    }
    if (!formData.profitEarned) {
      validationErrors.profitEarned = "Profit Earned is required";
    }
    if (!formData.profitDivision) {
      validationErrors.profitDivision = "Profit Division is required";
    }
    if (!formData.profitSentToDeepak) {
      validationErrors.profitSentToDeepak = "Profit Sent To Deepak is required";
    }
    if (!formData.profitSentToManish) {
      validationErrors.profitSentToManish = "Profit Sent To Manish is required";
    }
    if (!formData.profitSentToHarsh) {
      validationErrors.profitSentToHarsh = "Profit Sent To Harsh is required";
    }

    // Add validation for other fields as well

    if (Object.keys(validationErrors).length === 0) {
      // If there are no validation errors, open the secret token modal
      setIsModalOpen(true);
    } else {
      // If there are validation errors, set them in the state
      setErrors(validationErrors);
    }
  };

  const handleSecretTokenSubmit = () => {
    // Check if the secret token is correct (you may need to implement a server-side check)
    if (secretToken === "YOUR_SECRET_TOKEN") {
      // If the token is correct, submit the form
      handleSubmit();
    } else {
      console.error("Invalid secret token");
    }
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl p-6 m-auto dark:bg-gray-800">
        <h2 className="text-center text-2xl mt-4 font-bold">
          Transactions Data
        </h2>
        <form className="mt-4">{/* Your form fields here */}</form>
        <div className="flex justify-center mt-6">
          <button
            className="w-1/2 px-6 py-4 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-xl hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
        {/* Social Media Login */}
        <Link to="/transactionlist">
          <div className="flex justify-center mt-6">
            <button className="w-1/2 px-6 py-4 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-xl hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Check Previous Data
            </button>
          </div>
        </Link>
      </div>

      {/* Secret Token Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-6 w-96">
            <h2 className="text-2xl font-bold mb-4">Enter Secret Token</h2>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Secret Token"
              value={secretToken}
              onChange={(e) => setSecretToken(e.target.value)}
            />
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md"
                onClick={handleSecretTokenSubmit}
              >
                Submit
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded-md"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explait;
