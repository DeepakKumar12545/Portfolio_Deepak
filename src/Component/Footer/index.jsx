import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div>
      <footer className='container-fluid px-5 py-5'>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-4">
              <div className="leftSide">
                <div className="fLogo py-3">
                  <h4 className=''>Deepak <span className=''>Devloper</span></h4>
                </div>
                <p>
                  Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
                </p>
                <p>Code licensed MIT, docs CC BY 3.0.</p>
                <p>Currently v5.0.2.</p>
                <p>Analytics by Fathom.</p>
              </div>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-4">
                  <div className="linkText">
                    <h3>Links</h3>
                    <ul className='liGap'>
                      <li>Home</li>
                      <li>Docs</li>
                      <li>Examples</li>
                      <li>Themes</li>
                      <li>Blog</li>
                    </ul>
                  </div>
                </div>
                <div className="col-4">
                  <div className="guidesText">
                    <h3>Guides</h3>
                    <ul className='liGap'>
                      <li>Getting started</li>
                      <li>Starter Template</li>
                      <li>Webpack</li>
                      <li>Parcel</li>
                    </ul>
                  </div>
                </div>
                <div className="col-4">
                  <div className="projectsText">
                    <h3>Projects</h3>
                    <ul className='liGap'>
                      <li>BootStarp 5</li>
                      <li>BootStarp 4</li>
                      <li>Icons</li>
                      <li>RFS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="closing">
          <small className='d-flex justify-content-center'>&copy;copy right reserve 2024</small>
        </div>
      </footer>
    </div>
  )
}
