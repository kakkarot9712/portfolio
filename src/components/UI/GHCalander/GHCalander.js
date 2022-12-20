import Calander from "react-activity-calendar";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./GHCalander.css";
import ReactTooltip from "react-tooltip";
import { useCallback, useEffect } from "react";
import useHttp from "../../../hooks/useHttp";

const GHCalander = () => {
  let content = <h1>unknown Fetching error</h1>;

  const { isLoading, err, sendReq, data } = useHttp();

  const LastSixMonths = useCallback((contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    const shownMonths = 6;
    return contributions.contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
      const commitDate = date.getDate();
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth &&
        commitDate <= currentDay
      );
    });
  }, []);

  const labels = {
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    totalCount: "{{count}} contributions in {{year}}",
    tooltip: "<strong>{{count}} contributions</strong> on {{date}}",
    legend: {
      less: "Less",
      more: "More",
    },
  };

  useEffect(() => {
    sendReq(
      "https://github-contributions-api.jogruber.de/v4/kakkarot9712",
      LastSixMonths
    );
  }, [sendReq, LastSixMonths]);

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  if (err) {
    content = <h1>{err}</h1>;
  }

  if (!isLoading && data.length !== 0) {
    content = (
      <Calander
        username="kakkarot9712"
        labels={labels}
        weekStart={1}
        data={data}
        color="#ce2a56"
        children={<ReactTooltip html />}
        blockSize={30}
        blockRadius={5}
        blockMargin={5}
        fontSize={20}
      />
    );
  }

  if (data.length === 0 && !isLoading) {
    content = <h1>No Data Received</h1>;
  }

  return (
    <section className="center">
      <h1 className="cal-h1">
        My Github <span className="color-text">Stats</span>
      </h1>
      {content}
    </section>
  );
};

export default GHCalander;
