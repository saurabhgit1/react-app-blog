import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";

function TimesAgo({ timeStamp }) {
  let timeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <span>
      &nbsp;<i>{timeAgo || "Time not present"}</i>
    </span>
  );
}

export default TimesAgo;
