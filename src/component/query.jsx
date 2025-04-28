import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../util/button";
import { useNavigate } from "react-router";

const Query = ({ size }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const nav = useNavigate();

  // console.log(startDate?.getTime(), endDate?.getTime());
  return (
    <div className="mb-5 flex flex-col items-center md:flex-row gap-5 justify-between md:justify-center p-2 py-5 sticky top-0 bg-black w-full ">
      <div className="flex flex-col justify-between md:flex-row md:justify-normal gap-3 items-center text-neutral-400 md:w-[500px]">
        <p className="text-sm md:text-lg font-mono">Start Date : </p>
        <DatePicker
          className="bg-white rounded-lg text-black "
          showIcon
          toggleCalendarOnIconClick
          selected={startDate}
          isClearable
          closeOnScroll={true}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="flex flex-col justify-between md:flex-row md:justify-normal gap-3 items-center text-neutral-400 md:w-[500px]">
        <p className="text-sm md:text-lg font-mono">End Date :</p>
        <DatePicker
          className="bg-white rounded-lg text-black"
          showIcon
          toggleCalendarOnIconClick
          selected={endDate}
          isClearable
          closeOnScroll={true}
          onChange={(date) => setEndDate(date)}
        />
      </div>
      <div className="flex justify-between items-center gap-10">
        <Button
          text={"Search"}
          handleSubmit={() => {
            nav(`/${startDate?.getTime()}/${endDate?.getTime()}/${0}`);
          }}
        />
        <p className="text-black text-sm md:text-md font-mono bg-neutral-300 hover:bg-neutral-100 rounded-2xl px-4 p-2">{`Total : ${size}`}</p>
      </div>
    </div>
  );
};

export default Query;
