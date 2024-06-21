import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home';
import Abouti from './components/Pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Destinationdetail from './components/Pages/Destinationdetail';
import TourGuide from './components/Pages/TourGuide';
import Destination from './components/Pages/Destination';
import ToureList from './components/Pages/TourList';
import TourDeal from './components/Pages/TourDeal';
import BlogGrid from './components/Pages/BlogGrid';
import BlogDetails from './components/Pages/BlogDetails';
import Gallary from './components/Pages/Gallary';
import ToureDetails from './components/Pages/TourDetails';
import Contact from './components/Pages/Contact';
import Error from './components/Pages/Error';
import BookingProcess from './components/Pages/BookingProcess';

import Faqs from './components/Pages/Faqs';









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<Abouti />} />
                <Route path="destination" element={<Destination/>} />
                <Route path="destination-detail" element={<Destinationdetail/>} />
                <Route path="tour-guide" element={<TourGuide />} />
                <Route path="tour-list" element={<ToureList />} />
                <Route path="tour-deal" element={<TourDeal />} />
                <Route path="tour-detail" element={<ToureDetails />} />
                <Route path="blog-grid" element={<BlogGrid />} />
                <Route path="blog-detail" element={<BlogDetails/>} />
                <Route path="gallary" element={<Gallary/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="404" element={<Error/>} />
                <Route path="booking" element={<BookingProcess/>} />
                <Route path="faq" element={<Faqs/>} />
                
            </Routes>
            <Footer />
        </BrowserRouter>

    </>


);


