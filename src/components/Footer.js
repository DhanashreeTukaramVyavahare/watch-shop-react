import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} WatchShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
