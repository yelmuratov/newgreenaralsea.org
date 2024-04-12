// import React from 'react';
import { makePayment } from '../redux/reducers/paysys';
import {useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setModal } from '../redux/reducers/paysys';
import ClipLoader from "react-spinners/ClipLoader";

const DonateInfoPage = () => {
    const dispatch = useAppDispatch();
    const donationDetails = useAppSelector(state => state.paysys.donationDetails);
    const transActionDetails = useAppSelector(state => state.paysys.transActionDetails);

    const handleEdit = () => {
        dispatch(setModal({modalType: 'donation', isOpen: true}));
        dispatch(setModal({modalType: 'confirmation', isOpen: false}));
    }

    const handleDonation = () => {
        dispatch(makePayment(transActionDetails));
    }
    const isOpen = useAppSelector(state => state.paysys.confirmationModal);
    const isDonationLoading = useAppSelector(state => state.paysys.isDonationLoading);

    if(!isOpen) return null;
  return (
    <div className="fixed  z-50 inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-xl font-semibold mb-4 text-center">Review Your Donation</h1>
        <ul className="mb-4">
          <li className="mb-2"><strong>Amount:</strong> ${donationDetails.amount}</li>
          <li className="mb-2"><strong>Display Name:</strong> {donationDetails.display_name}</li>
          <li className="mb-2"><strong>Email:</strong> {donationDetails.email}</li>
          <li className="mb-2"><strong>Message:</strong> {donationDetails.message || ''}</li>
          <li className="mb-2"><strong>Anonymous:</strong> <i className={`fa-solid ml-2 fa-${donationDetails.anonymous?"check text-[green]":"xmark text-[red]"}`}></i></li>
          <li className="mb-2"><strong>Gift:</strong> <i className={`fa-solid ml-2 fa-${donationDetails.is_gift?"check text-[green]":"xmark text-[red]"}`}></i></li>
        </ul>
        <div className="flex justify-between">
          <button onClick={handleEdit}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
          <button onClick={handleDonation} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            {isDonationLoading ? <ClipLoader
            color={'white'}
            loading={true}
            size={25}
            aria-label="Loading Spinner"
            data-testid="loader"
      />: 'Donate'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateInfoPage;
