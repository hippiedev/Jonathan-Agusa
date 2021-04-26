import React from 'react';
import Helmet from 'react-helmet';
import './Layout.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout({ children }) {
    return (
        <div className="Layout" >
        <Helmet>
        <script src="https://kit.fontawesome.com/8c8a5b4cb9.js" crossorigin="anonymous"></script>
        </Helmet>
           <Header /> 
           {children}
           <Footer />
        </div>
    )
}

export default Layout
