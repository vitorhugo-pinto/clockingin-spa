import { format } from "date-fns";
import { useState, useEffect } from "react";

export const Clocker = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p> Time : {format(date, "HH:mm")}</p>
    </div>
  );
};
