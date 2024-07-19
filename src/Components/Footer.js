import React from 'react';
import { FaLinkedin, FaTwitterSquare, FaInstagram, FaFacebook } from 'react-icons/fa';
import App from '../App';

function Footer() {
  return (
    <div className='background' style={{ backgroundColor: 'black', color: 'white' }}>
      <table style={{ width: '100%' }}>
        <tr>
          <td><img src="/path/to/silber-private-bank-logo.svg" alt="Silber Private Bank" style={{ marginRight: '10px', verticalAlign: 'middle', fontSize: '2em' }} /></td>
          <th style={{ textAlign: 'left' }}>Quick Links</th>
          <th style={{ textAlign: 'left' }}>Company</th>
          <th style={{ textAlign: 'left' }}>Follow US</th>
        </tr>
        <tr>
          <td></td> {/* Empty space */}
          <td style={{ textAlign: 'left' }}> our bank</td>
          <td style={{ textAlign: 'left' }}>Terms & Conditions</td>
          <td>
            <a href="https://www.facebook.com">
              <FaFacebook style={{ marginRight: '10px', backgroundColor: 'white', color: '#4267B2', borderRadius: '50%' }} />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitterSquare style={{ marginRight: '10px', backgroundColor: 'white', color: '#4267B2', borderRadius: '50%' }} />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram style={{ marginRight: '10px', backgroundColor: 'white', color: '#4267B2', borderRadius: '50%' }} />
            </a>
            <a href="https://www.linkedin.com">
              <FaLinkedin style={{ backgroundColor: 'white', color: '#4267B2', borderRadius: '50%' }} />
            </a>
          </td>
        </tr>
        <tr>
          <td></td> {/* Empty space */}
          <td style={{ textAlign: 'left' }}>Investment Research</td>
          <td style={{ textAlign: 'left' }}>Privacy Policy</td>
        </tr>
        <tr>
          <td></td> {/* Empty space */}
          <td style={{ textAlign: 'left' }}>Other Products</td>
          <td style={{ textAlign: 'left' }}>AML Policy</td>
        </tr>
        <tr>
          <td></td> {/* Empty space */}
          <td style={{ textAlign: 'left' }}>Financing</td>
          <td style={{ textAlign: 'left' }}>Latest News</td>
        </tr>
        <tr>
          <td></td> {/* Empty space */}
          <td style={{ textAlign: 'left' }}>Contact US</td>
        </tr>
      </table>
      <h3>Disclaimer:</h3>
      <p>"Silber Bank" "Silber Private Bank" and "Silber Bank Logo" are registered trademarks of Silber Private Bank IBC.</p>
      <p>This website is operated by Silber Private Bank with registration number Hy01123056, 1257 Bonovo Rd, KM, which is an authorized and regulated international private bank, with license number B2023105. Opening any deposit, savings, cryptocurrency or trading accounts with the bank is subject to approval, know your customer, AML and KYT and Travel Rule Procedures and registration to the website itself doesn't constitute account approval.</p>
      <p>We will not open accounts for residents of certain countries - for restricted countries, please consult our terms and conditions.</p>
      <p>Not all products are suitable foe all kinds of investors, information displayed on the website, including research available for registered users is general in nature and doesn't consider your personal investment objectives, your needs, or financial circumstances.</p>
      <p>Please make sure you fully understand all of our legal documents, terms and conditions and the risks involved in different products offered by the bank before you make any decision or action. You should seek independent advice.</p><br /><br />
      <div style={{ textAlign:'center' }}>@Copyright 2024 Silber Private Bank | All Right Reserved</div>
    </div>
  )
}

export default Footer;

