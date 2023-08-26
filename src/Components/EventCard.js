import React from 'react'
// import PropTypes from 'prop-types'
export default function EventCard(){
    return(
    <div className="container-fluid my-3">
      <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card"style={{width: '18rem'}}>
              <img src="https://images.unsplash.com/photo-1560521166-117ca72366bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a href="#" class="btn btn-primary">Click here</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: '18rem'}}>
              <img src="https://images.unsplash.com/photo-1492551819678-53592808f45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=897&q=80" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a short card.</p>
                <a href="#" class="btn btn-primary">Click here</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: '18rem'}}>
              <img src="https://images.unsplash.com/photo-1489659639091-8b687bc4386e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTB8T0VIOXpWekFXMGN8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Click here</a>              
              </div>
            </div>
          </div>
    </div>
   </div>
  )
}