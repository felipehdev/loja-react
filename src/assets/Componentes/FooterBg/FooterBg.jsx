import React from "react";
import P from "../P/P";
import S from "./FooterBg.module.css";

const FooterBg = () => {
  return (
    <div className={S.footerBg}>
      <div className={S.footerDiv}>
        <P text="Testando suas habilidades em HTML, CSS e JS." />
        <P text="Linx Impulse" />
        <P text="2019" />
      </div>
    </div>
  );
};

export default FooterBg;
