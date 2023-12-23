// // store.ts
// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query/react";
// import { courseApi } from "./features/apiCourse";

// export const store = configureStore({
//   reducer: {
//     [courseApi.reducerPath]: courseApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(courseApi.middleware),
// });

// setupListeners(store.dispatch);
