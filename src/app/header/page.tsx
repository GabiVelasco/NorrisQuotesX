/**
 * Header component for the application.
 * This component represents the header section of the application, containing the logo and placeholder navigation links.
 * The navigation links included are just to show the structure of the site and are placeholders,
 * as they are not included in the current task.
 * @returns {ReactElement} The header element with logo and placeholder navigation links.
 */

import React from "react";
import Image from "next/image";
import WSSymbol from '../images/W&S_Symbol.png';

const Header: React.FC = () => {
  return (
    <header className="bg-white header flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <Image className="symbol w-50" src={WSSymbol} alt="W&S Symbol" width={160} height={160} />
      </div>
      <nav className="nav flex gap-8">
        <div className="">Projekte</div>
        <div className="">Über uns</div>
        <div className="">News</div>
        <div className=""><button className="kontakt">Kontakt</button></div>
      </nav>
    </header>
  );
};

export default Header;
