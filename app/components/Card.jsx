import React from "react";
import Link from "next/link";
// import {LiaLaptopCodeSolid} from "react-icons/fa/LiaLaptopCodeSolid";
import { VscCode } from "react-icons/vsc";

const Card = ({ data }) => {
  return (
    <div className="shadow-md bg-slate-200 p-5 rounded-md mb-3">
      <li>
        <Link href={`repos/${data.name}`}>
          <h3 className="text-3xl font-bold mb-3 uppercase">{data.name}</h3>
          <p className="text-2xl mb-2">{data.description}</p>
          <div className="flex items-center gap-5">
            <VscCode className="text-3xl" />
            <span className="text-2xl text-green-800">{data.language}</span>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default Card;
