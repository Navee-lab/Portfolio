import React from "react";

function Footer() {
  return (
    <footer className="w-full fixed bottom-0 bg-white dark:bg-dark-mode py-2 w-full py-2 text-center bg-[#e6e6fa]">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-xs text-dark-content dark:text-light-content">
          {"Telukala Naveena Sahu "}
          <a
            className="font-medium"
            href="https://github.com/Navee-lab"
            target="_blank"
            rel="noreferrer noopener"
          >
            github - Navee-lab
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
