import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faPiggyBank, faCreditCard, faDollarSign, faArchive, faCashRegister } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const benefits = [
  {
    icon: faMobileAlt,
    title: "Online Banking",
    description: "Access your account anytime, anywhere, with our advanced online banking application without compromising security."
  },
  {
    icon: faCashRegister,
    title: "Treasury Management",
    description: "Services and solutions that optimise an organisation's liquidity, manage its financials risks and handle its operations for cash and investments."
  },
  {
    icon: faPiggyBank,
    title: "No Account Opening Fees",
    description: "We don't charge any fees for personal account opening, and maintenance of any of our accounts is free to charge as well, as long as you meet minimum deposit standards."
  },
  {
    icon: faCreditCard,
    title: "Get Debit Card",
    description: "For our private banking clients, we are working on option to have a debit card associated with their account."
  },
  {
    icon: faDollarSign,
    title: "Term Deposits",
    description: "Earn interest on your funds deposited with our bank. We offer very attractive yield on both short term and long term term deposits."
  },
  {
    icon: faArchive,
    title: "Custodial Services",
    description: "Secure storage, safekeeping and management of financial assets, including securities, precious metals, virtual assets for individuals and institutions."
  }
];

const Middle = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Benefits Of Banking With Silber Private Bank</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', width: '90%', gap: '20px' }}>
          {benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', width: '45%' }}>
              <FontAwesomeIcon icon={benefit.icon} size="3x" style={{ marginRight: '20px' }} />
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '90%', gap: '20px' }}>
          {benefits.slice(2, 4).map((benefit, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', width: '45%' }}>
              <FontAwesomeIcon icon={benefit.icon} size="3x" style={{ marginRight: '20px' }} />
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '90%', gap: '20px' }}>
          {benefits.slice(4, 6).map((benefit, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', width: '45%' }}>
              <FontAwesomeIcon icon={benefit.icon} size="3x" style={{ marginRight: '20px' }} />
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <button style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none', borderRadius: '20px', backgroundColor: '#007bff', color: 'white' }}>Contact Us</button>
        <button style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: '2px solid #007bff', borderRadius: '20px', backgroundColor: 'white', color: '#007bff' }}>Get Started</button>
      </div>
    </div>
  );
}

export default Middle;
