import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import config from "../../utils/config";
import Storage from "../../utils/storage";
import BACKEND from "../../utils/backend";

export const createMember = createAsyncThunk('/auth/createMember', async (payload, thunkAPI) => {
  try {
    const { payload: {logo} } = thunkAPI.getState().auth;

    return new BACKEND().send({
      type: 'post',
      to: '/auth/company/signup',
      useAlert: true,
      payload: {...payload, companyLogo: logo}
    })

  } catch (error) {
    thunkAPI.rejectWithValue("An error occurred somewhere")
  }
})

const initialState = {
  model: {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    country: "",
    state: "",
    address: "",
    specialization: "",
    occupation: "",
    title: "",
    vcnNumber: "",
    membershipType: '',
    membershipPrice: '',
    tourAndExcursion: '',
    totalPayment: 0
  },
  loading: false,
  
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPayload: (state, {payload}) => {
      state.payload = {...state.payload, ...payload}
    }
  },
  extraReducers: (builder) => {
    /** Create member Builder **/
    builder.addCase(createMember.pending, (state) => {
        state.loading = true;
      })
      .addCase(createMember.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(createMember.rejected, (state) => {
        state.loading = false;
      });
    /** Create Member Builder |END| **/
  },

})

export const getAuthData = state => state.auth;
export const {
  setPayload,
} = authSlice.actions
export default authSlice.reducer;