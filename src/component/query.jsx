import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../util/button";
const Query = ({ startDate, endDate, setStartDate, setEndDate }) => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="mb-5 flex flex-col items-center md:flex-row gap-5 justify-between md:justify-around p-2 py-5 sticky top-0 bg-black w-full ">
      <div className="flex flex-col justify-between md:flex-row md:justify-normal gap-3 items-center text-neutral-400 md:w-[500px]">
        <p className="text-xl md:text-xl font-mono">Start Date : </p>
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
        <p className="text-xl md:text-xl font-mono">End Date :</p>
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
      <Button text={"Search"} />
    </div>
  );
};

export default Query;
