import React from "react";
import { Link } from "react-router-dom";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between border-solid border-2 border-rose-600">
      <header className="flex justify-between p-1 border-solid border-2 border-indigo-600 h-10">
        <h1 className="font-bold">No Filter</h1>
      </header>

      <div className="flex flex-1 p-1 border-solid border-2 border-rose-600">
        {children}
      </div>

      <footer className="">
        <ul className="flex justify-between p-1 border-solid border-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
          <li>
            <Link to="/user/42">Profile</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
