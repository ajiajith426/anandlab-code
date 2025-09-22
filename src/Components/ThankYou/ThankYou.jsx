import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ThankYou() {

  const gtmScript1 = document.createElement("script");
  gtmScript1.async = true;
  gtmScript1.src = "https://www.googletagmanager.com/gtag/js?id=AW-10841898141";

  const gtmScript2 = document.createElement("script");
  gtmScript2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-10841898141');
    `;

  const gtmScript5 = document.createElement("script");
  gtmScript5.innerHTML = `
      gtag('config', 'AW-10841898141/GDwECMeVpv0YEJ356LEo', {
        'phone_conversion_number': '+918035287579'
      });
  `;

  const gtmScript8 = document.createElement("script");
  gtmScript8.innerHTML = `
       gtag('config', 'AW-10841898141/QgvjCPu13tMZEJ356LEo', {
    'phone_conversion_number': '+918035287579'
      });
  `;

const gtmScript4 = document.createElement("script");
  gtmScript4.innerHTML = `
  gtag('event', 'conversion', {
    'send_to': 'AW-10841898141/k2ylCOPjl7MZEJ356LEo',
    'transaction_id': ''
  })`;

  // Append the script tags to the head of the document
  document.head.appendChild(gtmScript1);
  document.head.appendChild(gtmScript2);
  document.head.appendChild(gtmScript4);
 document.head.appendChild(gtmScript5);
  document.head.appendChild(gtmScript8);


  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div style={{ minHeight: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
      <img style={{ position: 'absolute', top: 0, left: 0 }} src="https://i.pinimg.com/originals/12/4d/e3/124de3d1b5e12f1d8fcec1685e634361.gif" width="100%" alt="" />
      <div style={{ zIndex: 1 }}>
        <img src="https://cdn-icons-png.flaticon.com/128/5442/5442020.png" width="150px" className='mb-4' alt='img' />
        <h1 >YOUR ORDER HAS BEEN RECEIVED</h1>
        <h3 style={{ color: "#1ecdb4" }} className='my-3'>Thank you for your payment, it’s processing</h3>
        <p className='mb-4'>You will receive an order confirmation email with details of your order and a link to track your process.</p>
        <Link to="/" style={{ color: '#fdb758' }}><b>Continue Order</b> <i className="fa fa-arrow-right"></i></Link>
      </div>
    </div>
  )
}

export default ThankYou