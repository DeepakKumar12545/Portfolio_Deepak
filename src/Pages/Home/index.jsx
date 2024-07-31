import React from 'react'
import './home.css'
import Card from '../Card'
import Carousel from '../../Component/Carousel'

export default function Home() {
  return (
    <div classNameName='home '>
      <section className='homeSection'>
        <div className="content">
          <h1>Web Developer</h1>
          <small>Deepak Kumar</small>
        </div>
      </section>
      {/* this section is carousel section */}
      <section className='container py-3'>
        <Carousel />
      </section>
      {/* this section is card style */}
      <section className='cardHome container py-3 '>
        <div className="row">
          <div className="col-12">
            <h3 className='py-2'>Meet Our Experts</h3>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-4">
                <Card cardName='Tigona master' cardImg='images/sadimage.jpg' />
              </div>
              <div className="col-4">
                <Card cardName='Mehusus kiya' cardImg='images/greenGirl.jpg' />
              </div>
              <div className="col-4">
                <Card cardName='Estuna ehur' cardImg='images/beautyGirl.jpg' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- form section start --> */}
      <section className="form my-4" id="form">
        <div className="container">
          <h1 className="h1 my-3">about you think</h1>
          <div className="form_box">
            <div className="form_image">
              <div className="img"><img src="Images/dark-souls.jpg" alt="whiteimage" /></div>
            </div>
            <div className="form_input px-4">
              <form>
                <div className="container-fluid d-flex justify-content-center my-4">
                  <div className="row ">
                    <div className="col-lg-6">
                      <div className="name input">
                        <input required type="text" placeholder="enter name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="number input">
                        <input type="number" placeholder="enter number" />
                      </div>
                    </div>
                    <div className="col-12 my-2">
                      <div className="email input">
                        <input required type="email" placeholder="enter email" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form_check ">
                  <h4>Gender</h4>
                  <div className="checkbox py-2">
                    <label for="male">Male</label>
                    <input type="radio" name="gender" />
                    <label for="female">Female</label>
                    <input type="radio" name="gender" />
                  </div>
                  <label for="lang">Select Language</label>
                  <select name="lang" id="lang">
                    <option value="hindi">Hindi</option>
                    <option value="eng">English</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="button_box">
                  <button type="submit" className="btn btn-success">sumbit</button>
                  <button type="reset" className="btn btn-danger">Reset</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- form section end --> */}

    </div>
  )
}
