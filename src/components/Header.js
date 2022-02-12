import React from "react";
import HeaderNav from "./HeaderNav";
import LanguageHandler from "./LanguageHandler";
import useTranslation from "./customHooks/translations";

export default function Header() {
  const translation = useTranslation();
  return (
    <div
      style={{
        background: "#d1d1d2",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 10px 0 0"
      }}
    >
      <div>
        <HeaderNav />
      </div>
      <div>
        <span>{translation.changeLanguage}</span> &nbsp;
        <LanguageHandler />
      </div>
    </div>
  );
}
