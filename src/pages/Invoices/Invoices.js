import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccountStatement from "../Statements/accountStatement.js";
import Stack from "@mui/material/Stack";

const Invoices = () => {
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const generateContent = (value) => {
    setContent(value);
  };
  return (
    <div>
      <div className="flex justify-evenly w-1/2 m-auto pt-[50px]">
        <TextField
          helperText="Please Enter the Patient Id"
          id="demo-helper-text-misaligned"
          label="ID"
          onChange={(e) => handleChange(e)}
        />
        <div className="">
          <Button mr="2px" variant="contained">
            Generate Invoices
          </Button>
          <Button variant="contained">Get Invoices</Button>
          <Button
            variant="contained"
            onClick={() => generateContent("Account_Statement")}
          >
            Account Statement
          </Button>
        </div>
      </div>

      <div>{content === "Account_Statement" ? <AccountStatement /> : null}</div>
    </div>
  );
};

export default Invoices;
