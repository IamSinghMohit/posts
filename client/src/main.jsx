import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { store, persistor } from "./store/index.js";
import { Provider } from "react-redux";
import Spinner from "./components/spinner.jsx";
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
  
          <BrowserRouter>
            <App />
          </BrowserRouter>

        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
