"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const times = [
  {
    id: 1,
    time: "9:00 AM",
  },
  {
    id: 2,
    time: "9:30 AM",
  },
  {
    id: 3,
    time: "10:00 AM",
  },
  {
    id: 4,
    time: "10:30 AM",
  },

  {
    id: 5,
    time: "11:00 AM",
  },
  {
    id: 6,
    time: "11:30 AM",
  },
  {
    id: 7,
    time: "12:00 PM",
  },
  {
    id: 8,
    time: "12:30 PM",
  },

  {
    id: 9,
    time: "1:00 PM",
  },

  {
    id: 10,
    time: "1:30 PM",
  },
  {
    id: 11,
    time: "2:00 PM",
  },

  {
    id: 12,
    time: "2:30 PM",
  },
];

const TimeSlot = ({ date }) => {
  const router = useRouter();
  const [confirmId, setConfirmId] = useState(null);

  const handleConfirmId = (id) => {
    setConfirmId(id);
  };

  const handleConfirm = () => {
    router.push("/confirm");
  };

  return (
    <div>
      <h1 className="mb-3">
        {days[new Date(date).getDay()]}, {months[new Date(date).getMonth()]}{" "}
        {new Date(date).getDate()}
      </h1>

      <div>
        {times.map((time) => (
          <div className="w-60 flex" key={time.id}>
            <button
              onClick={() => handleConfirmId(time.id)}
              className={
                confirmId == time.id
                  ? "border-2 rounded text-blue-500 font-semibold py-2 mb-3 w-1/2 mr-3"
                  : "border-2 rounded text-blue-500 font-semibold py-2 mb-3 w-full"
              }
            >
              {time.time}
            </button>

            {confirmId === time.id && (
              <div className=" w-auto justify-between items-center">
                <button
                  onClick={handleConfirm}
                  className="border-2 rounded text-blue-500 font-semibold py-2 mb-3 w-full px-5"
                >
                  Confirm
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlot;
