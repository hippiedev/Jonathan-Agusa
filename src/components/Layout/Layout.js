import React from 'react';
import Helmet from 'react-helmet';
import './Layout.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import image from '../../images/manhattan.jpg';

function Layout({ children }) {
    let description = "My name is Jonathan Agusa and this is my portfolio site";
    let title = "Jonathan"; 
    return (
        <div className="Layout" >
        <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content={description}
        />
        <meta name="twitter:image" content={image} />
        <script src="https://kit.fontawesome.com/8c8a5b4cb9.js" crossorigin="anonymous"></script>
        </Helmet>
           <Header /> 
           {children}
           <Footer />
        </div>
    )
}

export default Layout
