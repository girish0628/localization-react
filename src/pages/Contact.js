import React from "react";
import useTranslation from "../components/customHooks/translations";

export default function Contact() {
  const translation = useTranslation();
  return (
    <div>
      <h5>Contact Page</h5>
      <p>{translation.formPara}</p>
      <div class="form-wrap">
        <div class="form-row">
          <label>{translation.name}</label>
          <input type="text" />
        </div>
        <div class="form-row">
          <label>{translation.age}</label>
          <input type="text" />
        </div>
        <div class="form-row">
          <label>{translation.address}</label>
          <input type="text" />
        </div>
        <div class="form-row">
          <label>{translation.contactNo}</label>
          <input type="text" />
        </div>
        <div class="form-row">
          <button class="btn">{translation.save}</button>
        </div>
      </div>
    </div>
  );
}
