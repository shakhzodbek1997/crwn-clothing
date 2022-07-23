import { Routes, Route } from 'react-router-dom';
import Authentication from './routes/authentiaction/authentiation.components';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication/>} />
        <Route path='checkout' element={<Checkout/>} />
      </Route>
    </Routes>
  );
};

export default App;





// import {Routes, Route} from 'react-router-dom';
// import Navigation from './routes/navigation/navigation.component';
// import Authentication from './routes/authentiaction/authentiation.components';
// import Home from './routes/home/home.component';


// const Shop = () => {
//   return (
//     <h1>I am The Shop PAGE!</h1>
//   )
// }

// const App = () => {
//   return(
//     <Routes>
//       <Route path='/' element={<Navigation />}>
//         <Route index element={<Home />}/>
//         <Route path='shop' element={<Shop />}/>
//         <Route path='auth' element={<Authentication />}/>
//       </Route>
//     </Routes>
//   );
// };

// export default App;