import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Header = () => (
  <header className="h-14 absolute top-0 left-0 right-0 z-50 flex items-center">
    <h1 className="hidden">Math Magicians</h1>
    <nav className="w-full">
      <ul className="flex items-center justify-around gap-5 text-stone-500">
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'text-orange-500' : '')}
            to="home"
          >
            <FontAwesomeIcon icon={solid('house')} />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'text-orange-500' : '')}
            to="/calculator"
          >
            <FontAwesomeIcon icon={solid('equals')} />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'text-orange-500' : '')}
            to="/quote"
          >
            <FontAwesomeIcon icon={solid('quote-left')} />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'text-orange-500' : '')}
            to="/history"
          >
            <FontAwesomeIcon icon={solid('clock-rotate-left')} />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'text-orange-500' : '')}
            to="/about"
          >
            <FontAwesomeIcon icon={solid('ellipsis-vertical')} />
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
