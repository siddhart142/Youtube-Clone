import { configureStore } from "@reduxjs/toolkit"
import appSlice from "./appSlice";

const store = configureStore(
    {
        reducer : {
            app: appSlicde
        }
    }
)

export default store;