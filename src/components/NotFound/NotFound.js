import React from 'react';
import image from '../../images/notfound.svg'
import Layout from '../Layout/Layout';
import {Link} from 'gatsby';
import './NotFound.scss'

function NotFound() {
    return (
        <Layout>
        <div className="NotFound">
            <div className="NotFoundContent">
            <img src={image} alt="Not Found" />
            <Link to="/"><div>Take me home</div></Link>
            </div>
        </div>
        </Layout>
    )
}

export default NotFound
