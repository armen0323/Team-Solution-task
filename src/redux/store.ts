import { configureStore } from "@reduxjs/toolkit";

import * as reducers from "./exports.store";

export const store = configureStore({
        reducer: reducers.rootReducer,
        devTools: true,
    });

export type RootState = ReturnType<typeof reducers.rootReducer>;
export type AppDispatch = typeof store.dispatch;
