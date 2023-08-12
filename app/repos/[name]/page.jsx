"use client";
import RepoDetailCard from "../../components/RepoDetailCard";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";

const RepoSinglePage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(`https://api.github.com/repos/htetlinoo/${params.name}`)
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            setLoading(!isLoading);
          });
      } catch (err) {
        setData(err);
      }
    };
    fetchData();
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Error Fetching Occurred.</p>;

  return (
    <div className="my-10">
      <RepoDetailCard data={data} />
      <Link href="/repos" className="block mt-5">
        <button className="flex items-center bg-sky-300 gap-2 px-5 py-2">
          <IoArrowBackSharp />
          Back
        </button>
      </Link>
    </div>
  );
};

export default RepoSinglePage;
