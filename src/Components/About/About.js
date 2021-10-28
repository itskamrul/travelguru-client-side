import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'About -CareFast';
  }, []);

  return (
    <div className="container mt-5">
      <h1>About us</h1>
      <div>
        <p>
          Who we are - Bangladesh's most convenient online Fitness products
          CareFast.com, is brought to you by the Dadha & Company – one of
          Bangladesh’s most trusted pharmacies, with over 100 years’ experience
          in dispensing quality fitness product. At CareFast.com, we help you
          look after your own health effortlessly as well as take care of loved
          ones wherever they may reside in Bangladesh. You can buy and send
          product from any corner of the country - with just a few clicks of the
          mouse.
        </p>
        <p>
          What we do – Offer fast online access to fitness product with
          convenient home delivery At CareFast.com, we make a wide range of
          prescription medicines and other health products conveniently
          available all across Bangladesh. Even second and third tier cities and
          rural villages can now have access to the latest Fitness. Since we
          also offer generic alternatives to most medicines, online buyers c
        </p>
      </div>
    </div>
  );
};

export default About;
