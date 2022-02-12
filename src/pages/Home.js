import React from "react";
import useTranslation from "../components/customHooks/translations";

export default function Home() {
  const translation = useTranslation();
  return (
    <div>
      <h5>Home Page</h5>
      <div>{translation.homePara}</div>
    </div>
  );
}
