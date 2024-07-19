import React from 'react';
import './App.css';

import fireflyImage1 from '../images/Firefly Wealth Management, money, asset 967.jpg';
import fireflyImage2 from '../images/Firefly International Corporate Banking 29939.jpg'
import fireflyImage3 from '../images/Firefly banking, financing 967.jpg'

const Body = () => {
  
  return (<React.Fragment>
    <div className="banner-1-bg">
      <div className="banner-left">
        <h1>Simplicity,Value<br/>& Convenience</h1>
        <p>Modern private bank,servicing all your needs in one<br/>place</p>
        <button className='apply-btn'>Apply Now</button>
      </div>
    </div>
    
    <div>
      <h1 className='explore-our-offers'>Explore Our Offerings...</h1>
      <div className="cards-container">
          <div className="card">
            <img alt="Bank" className="logo"  />
            <h3>Personal Banking</h3>
            <p>Wide range of services for every<br/>client.From savings tochecking<br/>
            accounts,loans-ensuring secure<br/>and efficient management of<br/>Personal finances</p>
         </div>
         <div className="card">
            <img alt="Corporate Banking" className="logo"  />
            <h3>Corporate Banking</h3>
            <p>Suite of services for small and<br/>medium business,ranging from<br/>cash management to stategic<br/>financing solutions.</p>
         </div>
         <div className="card">
            <img alt="Research" className="logo"  />
            <h3>Research</h3>
            <p>Access our first class Investment<br/>research delivered straight to<br/>your client portal on a daily basis,<br/>for the best investiment<br/>decisions.</p>
         </div>
         <div className="card">
            <img  alt="Card 4" className='logo' />
            <h3>Investments</h3>
            <p>Our clients can access large<br/>amount of different asset classes<br/>and strategies for optimal asset<br/>allocation.</p>
         </div>
         
      </div>
          
    </div>
    <div>
        <button className='create-account'>Ready To Create An Account?</button>
        <h1 className='h1'>Get Convenience & Security With Our</h1>
        <h1 className='h1'>Smart Banking System</h1>
        <div className="cards-container">
          <div className="card">
            <img src={fireflyImage1} alt="Card 1" />
            <h2>Wealth<br/>Management</h2>
            <p>Best way to grow your wealth,<br/>thru estate management,<br/>personalised strategies tailored to<br/>yor financial goals.</p>
         </div>
        <div className="card">
          <img src={fireflyImage2} alt="Card 2" />
           <h2>Virtual Assets Services</h2>
           <p>We are able to offer vast array of<br/>virtual asset services to our<br/>clients. including wallet and<br/>exchange services.</p>
        </div>
        <div className="card">
          <img src={fireflyImage3} alt="Card 3" />
          <h2>Exclusive Private Banking</h2>
          <p>Bespoke dedicated client services<br/> and privileged access to <br/>specialised financial services<br/> catering to your unique needs</p>
        </div>
        </div>
    </div>    
    <div className='banner-2-bg'>
      <div className='banner-right'>
        <h1>Get Your own<br/> Account Today!</h1>
        <p>Our online account opening takes just couple of<br/>minutes,and opens world of possibilities for our<br/>clients.</p>
        <button className='apply-btn'>Apply Now</button>
      </div>
    </div>
    </React.Fragment>);
};

export default Body;
