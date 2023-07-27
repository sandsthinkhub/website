"use client";
import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

function sidebar() {
  return (
    <div className="sticky left-0 top-0  p-3 flex flex-col h-screen border-r-2 gap-3 border-gray-500 w-52 items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="my-4">Navigation</h1>
        <Link
          className="px-8 py-3 bg-indigo-100 rounded-md border-1 border-gray-400 hover:bg-indigo-50"
          href={"/admin"}
        >
          Dashboard
        </Link>
        <Link
          className="px-8 py-3 bg-indigo-100 rounded-md border-1 border-gray-400 hover:bg-indigo-50"
          href={"/admin/internships"}
        >
          Internship
        </Link>
        <Link
          className="px-8 py-3 bg-indigo-100 rounded-md border-1 border-gray-400 hover:bg-indigo-50"
          href={"/admin/courses"}
        >
          Course
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <span>User Name</span>
          <span>user email</span>
        </div>
        <button
          className="px-8 py-3 text-white bg-gray-700 rounded-md border-1 border-gray-400 hover:bg-gray-600"
          onClick={() => {
            signOut;
          }}
        >
          LogOut
        </button>
      </div>
    </div>
  );
}

export default sidebar;