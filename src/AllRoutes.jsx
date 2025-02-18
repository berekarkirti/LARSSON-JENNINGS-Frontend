import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage.jsx';
import Loginpage from './Pages/Loginpage.jsx';
import WishListpage from './Pages/WishListpage.jsx';
import Search from './Pages/Search.jsx';
import Productpage from './Pages/Productpage.jsx';
import NotFound from './Components/NotFound.jsx';
import Descriptionpage from './Pages/Descriptionpage.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <PrivateRoute>
          <Homepage />
        </PrivateRoute>} />
      <Route path='/loginpage' element={<Loginpage />} />
      <Route path='/whishlistpage' element={
        <PrivateRoute>
          <WishListpage />
        </PrivateRoute>
      } />
      <Route path='/search' element={<Search />} />
      <Route path="/productpage" element={
        <PrivateRoute>
          <Productpage />
        </PrivateRoute>
      } />
      <Route path="/descriptionpage/:id" element={
        <PrivateRoute>
          <Descriptionpage />
        </PrivateRoute>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
