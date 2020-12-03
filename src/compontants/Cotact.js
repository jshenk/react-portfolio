import React from "react";
import Menu from "./Menu";
import Stanley from "../images/stanley.jpg";
import { NetlifyForm, Honeypot } from "react-netlify-forms";

function Contact() {
  return (
    <div>
      <div className="mb-6 md:p-6 md:bg-gray-800 md:text-white">
        <Menu />
      </div>
      <div className="container mx-auto text-left">
        <h1 className="mb-4 text-gray-800 text-6xl">Give a Shout</h1>
        <p className="mb-5 text-xl">My secretary, Stanley, is standing by!</p>
      </div>
      <div className="flex container mx-auto mt-10 mb-10 shadow p-10">
        <div className="md:w-1/3 text-left md:pr-10">
          <img src={Stanley} alt="stanley" />
        </div>

        <div className="md:w-2/3 text-left">
          <NetlifyForm name="contact" action="/thanks" honeypotName="bot-field">
            {({ handleChange, success, error }) => (
              <>
                <Honeypot />
                {success && <p>Thanks for contacting us!</p>}
                {error && (
                  <p>
                    Sorry, we could not reach our servers. Please try again
                    later.
                  </p>
                )}
                <p>
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mb-3"
                    type="text"
                    id="name"
                    name="name"
                  />
                </p>
                <p>
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mb-3"
                    type="text"
                    id="email"
                    name="email"
                  />
                </p>
                <p>
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner px-4 mb-3"
                    id="message"
                    name="message"
                  ></textarea>
                </p>
                <p>
                  <button
                    className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded"
                    type="submit"
                    action="/contact?success=true"
                  >
                    Send
                  </button>
                </p>
              </>
            )}
          </NetlifyForm>
          {/* <iframe title="contact me" className="m-auto w-full" src="https://docs.google.com/forms/d/e/1FAIpQLScLddfjqNZw1JPvvWW1KKfI_zj8ml43lMgtyna0ebggyNPJFA/viewform?embedded=true" width="1000" height="1000" frameborder="0" marginheight="0" marginwidth="0" margin="auto">Loading…</iframe> */}
        </div>
      </div>
    </div>
  );
}
export default Contact;
