import React from 'react';
import Helmet from 'react-helmet';
import './Layout.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout(props) {
    let description = props.description ? props.description : "My name is Jonathan Agusa and this is my portfolio site";
    let title = props.title ? props.title : "Jonathan";
    let image = props.image ? props.image : "https://res.cloudinary.com/creattors/image/upload/v1620837673/IMG_-5jiov6_myc7ss.jpg";
    
    return (
        <div className="Layout" >
        <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content={description}
        />
        <meta name="twitter:image" content={image} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description} />
        <link rel="icon" href="../../images/icon.png" />
        <script src="https://kit.fontawesome.com/8c8a5b4cb9.js" crossorigin="anonymous"></script>
        </Helmet>
           <Header/> 
           {props.children}
           <Footer top={props.top} />
        </div>
    )
}

export default Layout
