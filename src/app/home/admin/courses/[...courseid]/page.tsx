"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function page() {
  const [data, setData] = useState([]);
  const pathname = usePathname();
  const url = pathname?.split("/")[4];

  useEffect(() => {
    const find = async () => {
      //   const res = await fetch("/api/getCourseData");
      try {
        const url = pathname?.split("/")[4];
        console.log(url);
        const res = await fetch("/api/courseUsers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        });
        const response = await res.json();
        console.log(response);
        setData(response?.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    find();
  }, []);
  return (
    <>
      <h1>Course #{url} - Users List</h1>
      {data
        ? data.map((item: any, index) => (
            <div key={index} className="grid grid-cols-2 w-full justify-around">
              <div className=" col-span-1">{item?.Name}</div>
              <div className="col-span-1">{item?.Email}</div>
            </div>
          ))
        : "wait"}
    </>
  );
}

export default page;
