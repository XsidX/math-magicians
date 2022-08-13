import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Header = () => (
  <header className="h-14 px-3 md:w-3/4 absolute top-0 left-0 right-0 z-50 flex items-center md:gap-5 text-stone-400 text-lg font-medium">
    <nav className="w-full">
      <ul className="flex items-center gap-5 text-stone-500 justify-between md:justify-start prevent-select">
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? 'text-orange-500 md:pb-1 md:border-b border-orange-400 md:text-stone-400 transition duration-150 ease-in'
                : ''
            }
            to="home"
          >
            <FontAwesomeIcon icon={solid('house')} className="md:hidden" />
            <h2 className="hidden md:inline">Math Magicians</h2>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? 'text-orange-500 md:pb-1 md:border-b border-orange-500 md:text-stone-400 transition duration-150 ease-in'
                : ''
            }
            to="/calculator"
          >
            <FontAwesomeIcon icon={solid('equals')} className="md:hidden" />
            <h2 className="hidden md:inline">Standard Calculator</h2>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? 'text-orange-500 md:pb-1 md:border-b border-orange-500 md:text-stone-400 transition duration-150 ease-in'
                : ''
            }
            to="/all-conversions"
          >
            <FontAwesomeIcon icon={solid('qrcode')} className="md:hidden" />
            <h2 className="hidden md:inline">Conversions</h2>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'text-orange-500' : '')}
            to="/history"
          >
            <FontAwesomeIcon
              icon={solid('clock-rotate-left')}
              className="md:hidden"
            />
          </NavLink>
        </li>
        <li>
          <FontAwesomeIcon
            icon={solid('ellipsis-vertical')}
            className="md:hidden"
          />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
