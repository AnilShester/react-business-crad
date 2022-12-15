import React from 'react'

function CardInfo() {
  return (
    <div className="info-container">
      <p className="card-name">Laura Smith</p>
      <p className="card-job"> Frontend Developer</p>
      <p className="card-site">
        <a href="#">LuraSmith.Website</a>
      </p>
      <div className="buttons">
        <button id="email-btn">
          <i class="fa-sharp fa-solid fa-envelope"></i>
          <span className="btn-text">Email</span>
        </button>
        <button id="linkedin-btn">
          <i class="fa-brands fa-linkedin"></i>
          <span>LinkedIn</span>
        </button>
      </div>
      <h3 className="info-section">About</h3>
      <p className="info-detail">
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
      <h3 className="info-section">Interest</h3>
      <p className="info-detail">
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  )
}

export default CardInfo
