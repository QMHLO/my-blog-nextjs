"use client";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";


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

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Error Fetching Occurred.</p>;

  return (
    <div className="my-10">
      <h2 className="text-5xl py-5 mb-10 text-center">My Repositories</h2>
      <ul className="grid sm:grid-cols-1 md:grid-cols-2  gap-5">
        {data.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
