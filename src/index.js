import React from 'react';
import ReactDOM from 'react-dom/client';
// import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CategoriesProvider } from './contexts/categories.context';
import {UserProvider} from './contexts/user.context';

import reportWebVitals from "./reportWebVitals";
import { CartProvider } from './contexts/cart.context';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App/>
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();


// import React from 'react';
// import ReactDOM from "react-dom/client";
// import './index.scss';
// import App from './App';
// import {BrowserRouter} from 'react-router-dom'
// import reportWebVitals from "./reportWebVitals";


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );


// reportWebVitals();