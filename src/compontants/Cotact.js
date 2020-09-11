import React from 'react';

function Contact () {
  return (
    <div>
        <h1 className="container mx-auto font-black leading-none text-6xl text-left uppercase mb-10">Give a<br/>Shout<span className="bg-yellow-500 h-5 w-5 inline-block rounded-full"></span></h1>
        <div className="container mx-auto text-center">
          <iframe className="m-auto" src="https://docs.google.com/forms/d/e/1FAIpQLScLddfjqNZw1JPvvWW1KKfI_zj8ml43lMgtyna0ebggyNPJFA/viewform?embedded=true" width="1000" height="1000" frameborder="0" marginheight="0" marginwidth="0" margin="auto">Loading…</iframe>
        </div>
    </div>
  );
}
export default Contact;