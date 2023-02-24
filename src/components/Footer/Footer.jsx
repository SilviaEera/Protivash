import React from "react";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        background: "#52be80",
        height: "50px",
        width: "100%",
        position: "fixed",
        left: "0",
        right: "50%",
        bottom: "0",
        marginTop: "100px",
      }}
    >
      <div className="footerWrapper container">
        <p
          className="footerDetails"
          style={{
            color: "white",
            textAlign: "center",
            padding: "10px 0",
          }}
        >
          This website was created by{" "}
          <span style={{ color: "#de2e2e" }}>Parrot</span>
          <span style={{ color: "#082708" }}>Soft</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
