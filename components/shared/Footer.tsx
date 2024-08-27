import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <h3 className="h3-bold">eVento</h3>
        </Link>

        <p>2024 e-Vento. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
