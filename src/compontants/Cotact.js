import React from 'react';

function Contact () {
  return (
    <div>
      <div className="flex container mx-auto mt-10">
        <h1 className="w-1/3 pr-10 font-black leading-none text-6xl text-left uppercase mb-10">Give a<br/>Shout<span className="bg-yellow-500 h-5 w-5 inline-block rounded-full"></span></h1>
        <div className="w-2/3 text-left">
          <iframe className="m-auto" src="https://docs.google.com/forms/d/e/1FAIpQLScLddfjqNZw1JPvvWW1KKfI_zj8ml43lMgtyna0ebggyNPJFA/viewform?embedded=true" width="1000" height="1000" frameborder="0" marginheight="0" marginwidth="0" margin="auto">Loading…</iframe>
        </div>
      </div>

    </div>
  );
}
export default Contact;