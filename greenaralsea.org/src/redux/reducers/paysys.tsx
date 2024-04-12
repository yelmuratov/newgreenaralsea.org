import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "../../axios/api";

const  initialState: PaysysState = {
  donationModal: false,
  confirmationModal: false,
  isDonationFailed: false,
  isDonationLoading: false,
  donationDetails: {
    amount: '',
    display_name: '',
    email: '',
    message: '',
    anonymous: false,
    is_gift: false,
    payment_method: 1,
  },
  transActionDetails:{
    VENDOR_ID: 'string',
    MERCHANT_TRANS_ID: "",
    MERCHANT_TRANS_AMOUNT: "",
    MERCHANT_CURRENCY: "",
    MERCHANT_TRANS_NOTE: "",
    MERCHANT_TRANS_DATA:"",
    MERCHANT_TRANS_RETURN_URL: "",
    SIGN_TIME: '',
    SIGN_STRING: ""
  },
}

export const createDonation = createAsyncThunk(
  "fetch/CreateDonate",
  async (data:IDonationDetails) => {
    const response = await axios('donation/create/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data,
    });
    console.log(response.data);
    return response.data;
  }
)

interface ITransactionDetails {
  VENDOR_ID: string;
  MERCHANT_TRANS_ID: string;
  MERCHANT_TRANS_AMOUNT: string;
  MERCHANT_CURRENCY: string;
  MERCHANT_TRANS_NOTE: string;
  MERCHANT_TRANS_DATA: string;
  MERCHANT_TRANS_RETURN_URL: string;
  SIGN_TIME: string;
  SIGN_STRING: string;
}

// Define the createAsyncThunk
export const makePayment = createAsyncThunk(
  'payment/makePayment', // Action type prefix
  async (data: ITransactionDetails, { rejectWithValue }) => {
    try {
      const proxyUrl = import.meta.env.VITE_APP_PROXY_URL; // CORS Proxy
      const payUrl = import.meta.env.VITE_APP_PAYMENT_URL; // Your target URL
      const formData = new URLSearchParams({
        VENDOR_ID: data.VENDOR_ID,
        MERCHANT_TRANS_ID: `${data.MERCHANT_TRANS_ID}`,
        MERCHANT_TRANS_AMOUNT: `${data.MERCHANT_TRANS_AMOUNT}`,
        MERCHANT_CURRENCY: "sum",
        MERCHANT_TRANS_NOTE: "",
        MERCHANT_TRANS_DATA: "",
        MERCHANT_TRANS_RETURN_URL: "https://greenaralsea.org/",
        SIGN_TIME: `${data.SIGN_TIME}`,
        SIGN_STRING: `${data.SIGN_STRING}`
      });

      const response = await axios.post(proxyUrl + payUrl, formData);

      if (response.status === 200) {
        const url = `${payUrl}?${formData.toString()}`;
        // Redirect the user to the payment page or a success page
        window.location.href = url; // Ensure this is the intended URL for redirection
        return response.data;
      } else {
        return rejectWithValue('Failed to make payment');
      }
    } catch (error) {
      return rejectWithValue(error|| 'Unknown error occurred');
    }
  }
);


export const paysysSlice = createSlice({
  name: 'paysys',
  initialState,
  reducers: {
    setModal: (state, action:{payload:{modalType:string,isOpen:boolean}}) => {
      if(action.payload.modalType === 'donation'){
        state.donationModal = action.payload.isOpen;
      }else if(action.payload.modalType === 'confirmation'){
        state.confirmationModal = action.payload.isOpen;
      }
    },
    setTDonaionDetails: (state, action:{payload:IDonationDetails}) => {
      state.donationDetails = action.payload;
    }
  },
    extraReducers: (builder) => {
      builder.addCase(createDonation.fulfilled, (state, action) => {
        state.transActionDetails = action.payload;
      }),
      builder.addCase(makePayment.pending, (state) => {
        state.isDonationLoading = true;
      }),
      builder.addCase(makePayment.fulfilled, (state) => {
        state.isDonationLoading = false;
      }),
      builder.addCase(makePayment.rejected, (state) => {
        state.isDonationFailed = true;
        state.isDonationLoading = false;
      })
    },
});


export const {setModal,setTDonaionDetails}  = paysysSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default paysysSlice.reducer