import React from 'react';
import Menu from './Menu';

function Contact () {
  return (
    <div>
      <div class="pt-10 pr-10">
      <Menu />
      </div>
      <div className="flex container mx-auto mt-10">
        <h1 className="mb-4 text-gray-800 text-6xl">Give a Shout</h1>
        <div className="w-2/3 text-left">
          <iframe className="m-auto" src="https://docs.google.com/forms/d/e/1FAIpQLScLddfjqNZw1JPvvWW1KKfI_zj8ml43lMgtyna0ebggyNPJFA/viewform?embedded=true" width="1000" height="1000" frameborder="0" marginheight="0" marginwidth="0" margin="auto">Loading…</iframe>
        </div>
      </div>

    </div>
  );
}
export default Contact;