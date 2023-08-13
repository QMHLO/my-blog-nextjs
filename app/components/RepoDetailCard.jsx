import React from "react";
import { VscCode } from "react-icons/vsc";
import { FcLink } from "react-icons/fc";
import { AiFillEye } from "react-icons/ai";
import { MdOutlineDescription } from "react-icons/md";

const RepoDetailCard = ({ data }) => {
  return (
    <div className="detail-block">
      <h3 className="text-5xl text-center mb-5">Details of Repository</h3>
      <div className="border-solid border-2 border-l-neutral-900 p-5 shadow-md">
        <h4 className="text-4xl">{data.name}</h4>
        <div className="flex items-center gap-x-3 my-3">
          <VscCode className="text-3xl" />
          <h5 className="text-2xl">{data.language}</h5>
        </div>
        {data.description && (
          <div className="flex md:items-center gap-x-3 my-2">
            <MdOutlineDescription className="text-3xl mt-1" />
            <p className="text-2xl">{data.description}</p>
          </div>
        )}
        <div className="flex md:items-center gap-x-3 my-2">
          <FcLink className="text-3xl mt-1" />
          <p className="text-2xl break-all">{data.git_url}</p>
        </div>
        <div className="flex items-center gap-x-3 my-2">
          <AiFillEye className="text-3xl mt-1" />
          <p className="text-2xl">{data.visibility}</p>
        </div>
      </div>
    </div>
  );
};

export default RepoDetailCard;
