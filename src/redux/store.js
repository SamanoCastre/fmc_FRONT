import { configureStore } from "@reduxjs/toolkit";
import { commonSlice } from "./reducer";
import { fmcValueSlice } from './reducer';
import { contentSlice } from "./reducer";
import { contactSlice } from "./reducer";
import { visitorSlice } from "./reducer";
import { userSlice } from "./reducer";
import { modalSlice } from "./reducer";

import { carouselSlice } from "./reducer";

export const store = configureStore({
    reducer: {
        common_state : commonSlice.reducer,
        fmc_value_state : fmcValueSlice.reducer,
        carousel_state : carouselSlice.reducer,
        content_state : contentSlice.reducer,
        contact_state : contactSlice.reducer,
        visitor_state : visitorSlice.reducer,
        user_state : userSlice.reducer,
        modal_state : modalSlice.reducer,
    }
});