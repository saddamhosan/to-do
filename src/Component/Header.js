import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from './firebase.init';

const Header = () => {
const handleSignOut = () => {
  signOut(auth);
};
const [user] = useAuthState(auth);

    return (
      <div class="navbar bg-base-100 px-16 font-serif">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink className="text-lg font-bold " to="/">
                  addTask
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg font-bold " to="/allTask">
                  All Task
                </NavLink>
              </li>
              <li>
                {user?.uid ? (
                  <button onClick={handleSignOut} className="text-lg font-bold">
                    Log Out
                  </button>
                ) : (
                  <NavLink className="text-lg font-bold " to="/login">
                    Login
                  </NavLink>
                )}
              </li>
              <li>
                {user?.uid ? (
                  <p className="font-bold text-gray-400">{user.displayName}</p>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
          <Link to="/" class="text-blue-500 font-bold text-2xl">
            To Do
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <NavLink className="text-lg font-bold " to="/">
                addTask
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg font-bold " to="/allTask">
                All Task
              </NavLink>
            </li>
            <li>
              {user?.uid ? (
                <button onClick={handleSignOut} className="text-lg font-bold">
                  Log Out
                </button>
              ) : (
                <NavLink className="text-lg font-bold " to="/login">
                  Login
                </NavLink>
              )}
            </li>
            <li>
              {user?.uid ? (
                <p className="font-bold text-gray-400">{user.displayName}</p>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Header;