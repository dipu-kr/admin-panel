import React from "react";

const transactionData = [
  {
    id: "01e4dsef",
    name: "john smith",
    ammount: 29.33,
    date: "02-05-2023",
  },
  {
    id: "02e4dsef",
    name: "virat kohli",
    ammount: 109,
    date: "02-05-2023",
  },
  {
    id: "03e4dsef",
    name: "ms dhoni",
    ammount: 94.56,
    date: "02-05-2023",
  },
  {
    id: "04e4dsef",
    name: "peter england",
    ammount: 26.22,
    date: "02-05-2023",
  },
  {
    id: "05e4dsef",
    name: "ritik verma",
    ammount: 9.23,
    date: "02-05-2023",
  },
  {
    id: "06e4dsef",
    name: "robbin hood",
    ammount: 39.77,
    date: "02-05-2023",
  },
  {
    id: "07e4dsef",
    name: "smith deo",
    ammount: 34.99,
    date: "02-05-2023",
  },
  {
    id: "08e4dsef",
    name: "john carlo",
    ammount: 23.44,
    date: "02-05-2023",
  },
  {
    id: "09e4dsef",
    name: "john carlo",
    ammount: 23.44,
    date: "02-05-2023",
  },
  {
    id: "010e4dsef",
    name: "john carlo",
    ammount: 23.44,
    date: "02-05-2023",
  },
  {
    id: "011e4dsef",
    name: "john carlo",
    ammount: 23.44,
    date: "02-05-2023",
  },
  {
    id: "012e4dsef",
    name: "john carlo",
    ammount: 23.44,
    date: "02-05-2023",
  },
  {
    id: "013e4dsef",
    name: "john carlo",
    ammount: 23.44,
    date: "02-05-2023",
  },
];

const RecentTransaction = () => {
  return (
    <div className="w-full">
      <div className="flex items-center p-2 border-b-2 border-gray-900">
        <p className="text-[13px]">Recent Transactions</p>
      </div>
      {transactionData?.map((val) => (
        <div className="flex justify-between items-center text-white text-[12px] border-t-2 border-b-2 border-gray-900 p-1 ">
          <div className="w-1/3 truncate">
            <p className="text-[#16a37f]">{val.id}</p>
            <p className="capitalize">{val.name}</p>
          </div>
          <p className="w-1/3 text-center">{val.date}</p>
          <div className="w-1/3 flex justify-end">
            <p className="w-[50px] bg-[#16a37f] py-1 shadow-lg rounded-sm text-center">
              ${val.ammount}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentTransaction;
