import React, { act, FC } from "react";
import { User, Transaction } from "../types";
import { Table } from "../Table/Table";
/*
  Problem Breakdown
    Input data: you have a list of transaction and users.
    Output data: you need the total number of transactions and the total number of transaction and the total amount of those transactions
    Users wihtout transactions should also be included in the report.

    DataStracture: we can  use a hashmap to store the aggreated results. This will allow you to update and access the totals efficiently.

    Loop through the transactions once to aggregate the total.
    Use another loop to generate the final reportm incorporating users who had no transactions. 

    Time complexity

    Agggregate transactions : O(T) T is transactions
    Generateing the report : O(U) U is users
    Overall Complexity : O(T+U)
*/

interface SalesReportProps {
  users: User[];
  transactions: Transaction[];
}

interface ReportData {
  totalAmount: number;
  totalTransactions: number;
}

export const SalesReport: FC<SalesReportProps> = ({ users, transactions }) => {
  const transactionsHashMap: { [key: number]: ReportData } = {};
  transactions.forEach((transaction) => {
    if (!transactionsHashMap[transaction.userId]) {
      transactionsHashMap[transaction.userId] = {
        totalAmount: 0,
        totalTransactions: 0,
      };
    }
    transactionsHashMap[transaction.userId].totalAmount += transaction.amount;
    transactionsHashMap[transaction.userId].totalTransactions += 1;
  });

  let totalTransaction = 0;
  let totalAmount = 0;
  const report = users.map((user) => {
    const userData = transactionsHashMap[user.id] || {
      totalAmount: 0,
      totalTransactions: 0,
    };
    totalAmount += userData.totalAmount;
    totalTransaction += userData.totalTransactions;
    return {
      userId: user.id,
      userName: user.first,
      ...userData,
    };
  });

  return (
    <>
      <Table
        initialData={report}
        headers={Object.keys(report[0])}
        footer={{ totalAmount, totalTransaction }}
      />
    </>
  );
};
