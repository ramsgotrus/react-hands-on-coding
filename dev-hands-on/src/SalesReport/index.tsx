import React, { act, FC, useMemo } from "react";
import { User, Transaction } from "../types";
import { Table } from "../Table/Table";
/*
    To efficiently generate a sales report in React with TypeScript, 
    where you need to calculate total transactions and amounts for each user, 
    you need to focus on optimizing your algorithm to ensure it scales well, 
    especially with large datasets. The key is to ensure your solution is efficient in 
    terms of time complexity and does not loop through the data more than necessary.
    Problem Breakdown
    Input data: you have a list of transaction and users.
    Output data: you need the total number of transactions and the total number of transaction 
    and the total amount of those transactions
    Users wihtout transactions should also be included in the report.

    DataStracture: we can  use a hashmap to store the aggreated results and retrieve user information in constant time
    rather than iterating the array. This will allow you to update and access the totals efficiently.

    Time complexity

    Agggregate transactions : O(T) T is transactions
    Iterating over the users to build a lookup map : O(U) U is users
    Overall Complexity : O(T+U)
*/

interface SalesReportProps {
  users: User[];
  transactions: Transaction[];
}

interface ReportData {
  userId: number;
  userName: string;
  totalAmount: 0;
  totalTransaction: 0;
}

export const SalesReport: FC<SalesReportProps> = ({ users, transactions }) => {
  const usersReport: ReportData[] = useMemo(() => {
    const userLookup: { [key: number]: { first: string } } = {};
    const transactionHashMap: { [key: number]: ReportData } = {};
    users.forEach((user) => {
      userLookup[user.id] = { first: user.first };
    });
    transactions.forEach((transaction) => {
      if (!transactionHashMap[transaction.userId]) {
        transactionHashMap[transaction.userId] = {
          userId: transaction.userId,
          userName: userLookup[transaction.userId].first,
          totalAmount: 0,
          totalTransaction: 0,
        };
      }
      transactionHashMap[transaction.userId].totalAmount += transaction.amount;
      transactionHashMap[transaction.userId].totalTransaction += 1;
    });
    return Object.values(transactionHashMap);
  }, [users, transactions]);
  return (
    <Table initialData={usersReport} headers={Object.keys(usersReport[0])} />
  );
};
