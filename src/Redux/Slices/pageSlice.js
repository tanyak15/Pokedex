import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,

  loading: false,
  totalPages: 0,
  error: null,
};

const pageSlice = createSlice({
  name: "page",
  initialState: initialState,
  reducers: {
    // action creators
    setPageSuccess: (state, action) => {
      state.page = 1;
      state.loading = false;
      state.totalPages = action.payload;
    },
    setPageRequest: (state) => {
      state.loading = true;
    },
    setPageFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    incrementPage: (state) => {
      if (state.totalPages === 0 || state.page == 0) {
        console.log("set page not called");
      } else if (state.page > 0 && state.page < state.totalPages) {
        state.page += 1;
      } else {
        state.page = state.totalPages;
      }
      console.log();
    },
    decrementPage: (state) => {
      if (state.totalPages === 0 || state.page === 0) {
        console.log("set page not called");
      } else if (state.page <= state.totalPages && state.page > 1) {
        state.page -= 1;
      } else {
        state.page = 1;
      }
    },
    jumpToPage: (state, action) => {
      if (state.page <= state.totalPages && state.page >= 1) {
        state.page = action.payload;
      }
      // 1 2 3 4 5 6
      // jab bhe onclick pe click hoga or diapatch call hoga - dispatch(jumpToPage(5))
    },
  },
});

export const {
  setPageSuccess,
  setPageRequest,
  setPageFail,
  incrementPage,
  decrementPage,
  jumpToPage,
} = pageSlice.actions;
export default pageSlice.reducer;
// export const pageReducer = pageSlice.reducer;
