import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {UserProvider} from './contexts/user.context'
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
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