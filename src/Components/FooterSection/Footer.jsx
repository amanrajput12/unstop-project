import React, { useContext } from "react";
import { FaAsymmetrik, FaLeanpub } from "react-icons/fa6";
import { GiOnTarget } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsFillBarChartLineFill, BsBagCheck } from "react-icons/bs";
import { Menucontext } from "../Context/MenuContext";
const Footer = () => {
  const {menu,setMenu} =useContext(Menucontext)
  return (
    <>    { menu? '':
    <div className="pt-2 pb-3 flex justify-around fixed bottom-0 bg-white max-w-sm w-full ">
      <div className="hover:bg-slate-700 hover:text-white rounded-md " >
        <FaAsymmetrik />
        <p>Unstop</p>
      </div>
      <div className="hover:bg-slate-700 hover:text-white rounded-md ">
        <FaLeanpub />
        <p>Learn</p>
      </div>
      <div className="hover:bg-slate-700 hover:text-white rounded-md ">
        <GiOnTarget />
        <p>Practise</p>
      </div>
      <div className="hover:bg-slate-700 hover:text-white rounded-md ">
        <HiOutlineLightBulb />
        <p>Mentorship</p>
      </div>
      <div className="hover:bg-slate-700 hover:text-white rounded-md ">
        <BsFillBarChartLineFill />
        <p>Complete</p>
      </div>
      <div className="hover:bg-slate-700 hover:text-white rounded-md ">
        <BsBagCheck />
        <p>Jobs</p>
      </div>
    </div>
    }
    </>

  );
};

export default Footer;
