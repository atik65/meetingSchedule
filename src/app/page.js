"use client";

import Image from "next/image";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublicIcon from "@mui/icons-material/Public";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import DatePick from "@/components/DatePick";
import TimeSlot from "@/components/TimeSlot";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState(new Date());
  const handleDate = (date) => {
    setDate(date);
  };

  return (
    <div className="parent ">
      <div className="left">
        <div
          className="rounded-full border-gray-500 border-2 w-10
        h-10 flex items-center justify-center cursor-pointer hover:bg-gray-200
        mb-3
        "
        >
          <ArrowBackIcon
            style={{
              fontSize: "40px",
              color: "gray",
            }}
          />
        </div>

        <p className="text-sm mb-2">Dev Team</p>
        <h2 className="text-xl font-bold mb-2"> Test </h2>
        <p className="mb-2 text-gray-600">
          <AccessTimeIcon /> 30 min{" "}
        </p>
        {/* <p className="mb-2 text-gray-600">
          <CalendarMonthIcon /> 11:30am -12:00pm, Saturday July 29, 2023{" "}
        </p>

        <p className="mb-2 text-gray-600">
          <PublicIcon /> Asia/Dhaka
        </p> */}

        <p className="text-gray-600">Hello</p>
      </div>
      <div className="right ">
        <div>
          <h3 className="mb-4 font-sm text-xl">Select Date and Time</h3>
          <DatePick date={date} handleDate={handleDate} />
        </div>
        <div>
          <TimeSlot date={date} />
        </div>
      </div>
    </div>
  );
}
