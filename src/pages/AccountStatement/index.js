import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import RowAndColumnSpacing from "../../components/Grid";

const Index = () => {
  const [total, setTotal] = useState(0);
  const accStatement = [
    {
      date: "12-09-21",
      debitStatement: "Receipt",
      creditStatement: "",
      Credit: 0,
      Debit: 950,
    },
    {
      date: "20-05-18",
      debitStatement: "Receipt",
      creditStatement: "",
      Credit: 0,
      Debit: 995,
    },
    {
      date: "12-09-22",
      debitStatement: "",
      creditStatement: "Dental Hygeine Regular",
      Credit: 5000,
      Debit: 0,
    },
  ];

  useEffect(() => {
    let debit = 0,
      credit = 0;
    accStatement.forEach((cash) => {
      console.log(cash);
      debit += cash?.Debit;
      credit += cash?.Credit;
    });
    const res = credit - debit;
    console.log(debit);
    setTotal(credit - debit);
  }, []);
  return (
    <div className="font-sans">
      <h1 className="text-2xl border-2 border-2 border-solid font-bold border-t-indigo-500 text-center w-3/4 m-auto p-2 rounded-md">
        Account Statement
      </h1>
      <div className="font-sans text-lg grid grid-cols-5 w-3/4 m-auto gap-4 border-2 border-solid font-bold border-t-indigo-500 p-2 rounded-md">
        <div className="">Date</div>
        <div>Debit Statement</div>
        <div>Credit Statement</div>
        <div>Debit</div>
        <div>Credit</div>
      </div>
      <div className="grid grid-cols-5 w-3/4 m-auto gap-4 border-2 border-solid border-b-indigo-500 p-2 rounded-md">
        {accStatement.map((entry) => {
          return (
            <>
              <div className="">{entry?.date}</div>
              <div>{entry?.debitStatement}</div>
              <div>{entry.creditStatement}</div>
              <div>{entry?.Debit}</div>
              <div>{entry?.Credit}</div>
            </>
          );
        })}
      </div>

      <div className="grid grid-cols-2 w-2/4 m-auto gap-4 border-2 border-solid border-b-indigo-500 p-2 rounded-md">
        <div>Total</div>
        <div>{total}</div>
      </div>
    </div>
  );
};

export default Index;
