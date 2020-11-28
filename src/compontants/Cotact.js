import React from 'react';
import Menu from './Menu';
import Stanley from '../images/stanley.jpg'

function Contact () {
  return (
    <div>
      <div class="mb-6 md:p-6 md:bg-gray-800 md:text-white">
      <Menu />
      </div>
      <div className="flex container mx-auto mt-10">
        <div className="md:w-1/3 text-left">
        <h1 className="mb-4 text-gray-800 text-6xl">Give a Shout</h1>
        <p className="mb-5 text-xl">My secretary, Stanley, is standing by!</p>
        <img src={Stanley} alt="stanley" />
        </div>

        <div className="md:w-2/3 text-left">
          <iframe title="contact me" className="m-auto w-full" src="https://docs.google.com/forms/d/e/1FAIpQLScLddfjqNZw1JPvvWW1KKfI_zj8ml43lMgtyna0ebggyNPJFA/viewform?embedded=true" width="1000" height="1000" frameborder="0" marginheight="0" marginwidth="0" margin="auto">Loading…</iframe>
        </div>
      </div>

    </div>
  );
}
export default Contact;

