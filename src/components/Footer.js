import React, { useState, useEffect } from "react";

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <p>© {new Date().getFullYear()} Kehinde Imani. All rights reserved.</p>
      <p><span>{dateTime}</span></p>
    </footer>
  );
};

export default Footer;
