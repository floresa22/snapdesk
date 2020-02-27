import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Background from './backgroundSVG/Background';
import Logo from './backgroundSVG/Logo';

const OrgCheck = props => {
  // maints a local copy of the org Inpput field
  const [org, setOrg] = useState('');

  return (
    <div className="leading-normal tracking-normal text-white gradient flex flex-col min-h-screen ">
      <div className="pt-24 flex-grow">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center relative ">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <Logo />
            <h1 className="my-4 text-3xl font-bold leading-tight">
              Enter your organization name to join your SnapDesk space
            </h1>
            <form
              className="mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              method="GET"
              action="/api/organizations/validate"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-l font-bold mb-2"
                  htmlFor="Organization"
                >
                  Organization
                </label>
                <input
                  className="mx-auto shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Organization"
                  type="text"
                  placeholder="Organization"
                  onChange={event => setOrg(event.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="mx-auto bg-red-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <img
              className="w-full md:w-4/5 z-50"
              src="../../img/people-search.png"
            />
          </div>
        </div>
      </div>
      <Background />
    </div>
  );
};

export default OrgCheck;
