import React from 'react'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import './galery.css'

export default function Gallery() {

    return (
            <div className=''>
                <LightGallery
                 elementClassNames="d-flex"
                    plugins={[lgThumbnail, lgZoom]}
                >
                    <a className='res' href="images/beautyGirl.jpg">
                        <img alt="img2" src="images/beautyGirl.jpg" />
                    </a>
                    <a className='res' href="images/beautyGirl.jpg">
                        <img alt="img2" src="images/beautyGirl.jpg" />
                    </a>
                    <a className='res' href="images/beautyGirl.jpg">
                        <img alt="img2" src="images/beautyGirl.jpg" />
                    </a>
                    <a className='res' href="images/greenGirl.jpg">
                        <img alt="img1" src="images/greenGirl.jpg" />
                    </a>
                    <a className='res' href="images/greenGirl.jpg">
                        <img alt="img1" src="images/greenGirl.jpg" />
                    </a>

                </LightGallery>
            </div>
    )
}

