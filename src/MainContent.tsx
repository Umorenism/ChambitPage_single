import React from "react";

interface MainContentProps {
  children?: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <main className="pt-10  border  bg-gray-100 min-h-screen">{children}</main>
  );
};

export default MainContent;
