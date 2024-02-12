// Header.tsx
import React from "react";
import Image from "next/image";
import WSSymbol from '../images/W&S_Symbol.png';

const Header: React.FC = () => {
  return (
    <header className= "bg-white">
      {/* Your header content goes here */}
      <h1>This is the header</h1>
      <Image className="w-[140px] h-[94px]" src={WSSymbol} alt="W&S Symbol" width={140} height={94} />

    </header>
  );
};

export default Header;
