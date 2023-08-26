import React from 'react'
import PropTypes from 'prop-types'
export default function Carousel(props){
    return(
    <div className="container-fill">
        <div id="carouselExampleCaptions" className="carousel slide" style={{ height: '60vh' }} >
          <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner "style={{ height: '100%' }}>
          <div className="carousel-item active"style={{ height: '100%' }}>
            <img src="https://images.unsplash.com/photo-1553744562-96972ff3cd46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80" className="  d-block w-100 h-100 " alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>{props.heading}</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item"style={{ height: '100%' }}>
            <img src="https://images.unsplash.com/photo-1492552296703-4ec0a2fb3715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=897&q=80" className=" d-block w-100 h-100 " alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>{props.heading}</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item"style={{ height: '100%' }}>
            <img src="https://images.unsplash.com/photo-1455273869115-6aa7725e64ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=851&q=80" className=" d-block w-100 h-100 " alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}