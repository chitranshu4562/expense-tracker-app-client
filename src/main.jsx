import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {SnackbarProvider} from "notistack";
import {Provider} from "react-redux";
import store from "./redux-store/store.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
            <App />
        </SnackbarProvider>
    </Provider>
  </StrictMode>,
)
