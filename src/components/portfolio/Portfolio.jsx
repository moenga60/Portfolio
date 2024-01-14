import './portfolio.scss'

export default function Portfolio() {
  return (
    <div className='portfolio' id="portfolio">
      <h1 className='active'>Portfolio</h1>
      <ul>
        <li>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <h3>Banking App</h3>
          {/* <img src="assets/bank.jpg" alt="" /> */}

        </div>
      </div>
      
    </div>
  )
}
