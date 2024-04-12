import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { createDonation, setModal, setTDonaionDetails } from '../redux/reducers/paysys';

const DonateModal = () => {
  const [formData, setFormData] = useState({
    amount: '',
    display_name: '',
    email: '',
    message: '',
    anonymous: false,
    is_gift: false,
    payment_method: 1,
  });

  const [errors, setErrors] = useState({
    amount: '',
    display_name: '',
    email: '',
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
    }));
};

  const validateForm = () => {
    let valid = true;
    const newErrors = { amount: '', display_name: '', email: '' };

    if (!formData.amount) {
      newErrors.amount = 'Amount is required.';
      valid = false;
    } else if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0 || Number(formData.amount) < 1000){
      newErrors.amount = 'Please enter a valid amount.';
      valid = false;
    }

    if (!formData.display_name) {
      newErrors.display_name = 'Display name is required.';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(setModal({ modalType: 'donation', isOpen: false }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    onClose(); // Close the modal after submission  
    dispatch(setModal({ modalType: 'confirmation', isOpen: true }));
    dispatch(createDonation(formData));
    dispatch(setTDonaionDetails(formData));
  };

  const isOpen = useAppSelector(state => state.paysys.donationModal);

  if (!isOpen) return null;

  return (
    <div className="fixed  z-50 inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl transform transition-all max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Make a Donation</h2>
        <form onSubmit={handleSubmit} className="space-y-4 z-100">
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <div className="mt-1">
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                className={`mt-1 block w-full outline-none p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${errors.amount ? 'border-red-500' : ''}`}
              />
              {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Display Name</label>
            <div className="mt-1">
              <input
                type="text"
                name="display_name"
                value={formData.display_name}
                onChange={handleChange}
                placeholder="Your name or alias"
                className={`mt-1 outline-none p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${errors.display_name ? 'border-red-500' : ''}`}
              />
              {errors.display_name && <p className="text-red-500 text-xs mt-1">{errors.display_name}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`mt-1 outline-none p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message (Optional)</label>
            <div className="mt-1">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 outline-none p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                placeholder="Share your thoughts"
              ></textarea>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                name="anonymous"
                checked={formData.anonymous}
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label className="font-medium text-gray-700">Donate anonymously</label>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                name="is_gift"
                checked={formData.is_gift}
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label className="font-medium text-gray-700">This is a gift</label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Donate Now
            </button>
          </div>
        </form>
        <button
          onClick={onClose}
          className="mt-4 w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DonateModal;