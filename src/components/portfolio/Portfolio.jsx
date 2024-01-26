import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import { featuredPortfolio,
} from "../../data";


export default function Portfolio() {
  const [selected,setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];


  useEffect(()=>{

  },[selected])
  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
          {list.map((item) => (
            <PortfolioList title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}
            />
          ))}
      </ul>
      <div className="container">
      <div className="item">
        <img src="assets/man.jpeg" alt="B1" />
        <h3>Banking App</h3>
        </div><div className="item">
        <img src="assets/man.jpeg" alt="B1" />
        <h3>Banking App</h3>
        </div><div className="item">
        <img src="assets/man.jpeg" alt="B1" />
        <h3>Banking App</h3>
        </div><div className="item">
        <img src="assets/man.jpeg" alt="B1" />
        <h3>Banking App</h3>
        </div><div className="item">
        <img src="assets/man.jpeg" alt="B1" />
        <h3>Banking App</h3>
        </div><div className="item">
        <img src="assets/man.jpeg" alt="B1" />
        <h3>Banking App</h3>
        </div>
      </div>
      
    </div>
  )
}
