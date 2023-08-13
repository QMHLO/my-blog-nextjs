"use client";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { ImSpinner6 } from "react-icons/im";

// async function fetchRepos() {
//   const response = await fetch("https://api.github.com/users/htetlinoo/repos");
//   const repos = await response.json();
//   return repos;
// }

const ReposPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("https://api.github.com/users/htetlinoo/repos")
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
  // const repos = await fetchRepos();

  if (isLoading)
    return (
      <ImSpinner6 className="absolute top-1/2 left-[45%] md:left-1/2 text-8xl animate-spin" />
    );
  if (!data) return <p>Error Fetching Occurred.</p>;

  return (
    <div className="my-10 w-full">
      <h2 className="text-5xl py-5 mb-10 text-center">My Repositories</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-max">
        {data.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default ReposPage;
