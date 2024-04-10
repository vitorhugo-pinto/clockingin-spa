import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeftToLine, ArrowRightToLine, Clock, Laugh } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/AuthUseContext";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useCheckIn, useFetchSummary } from "@/hooks/useEmployee";
import { format, parseISO } from "date-fns";

export function EmployeePage() {
  const { clearAll, token, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!!token && role !== "ROLE_EMPLOYEE") {
      navigate("/admin/create-user");
    }
  });

  const { data, isLoading } = useFetchSummary();
  const { mutate } = useCheckIn();

  const handleClockIn = () => {
    const clockIn = format(new Date(Date.now()), "yyyy-MM-dd'T'HH:mm");
    mutate({
      timeStamp: clockIn,
      lunchBreak: false,
    });
  };

  const handleLogout = () => {
    clearAll();
    navigate("/login", { replace: true });
  };

  console.log(data?.workBalance);

  return (
    <Card className="w-1/4 h-fit mx-auto gap-2">
      <CardHeader>
        <CardTitle className="flex gap-2">
          <Clock className="size-6 text-emerald-500" />
          Clocking in
        </CardTitle>
        <CardDescription className="flex flex-col gap-2">
          Here's your clock ins summary
        </CardDescription>
        {data?.finishedShift && (
          <div className="flex items-center gap-1">
            <div>Congratulations, you are done for the day!</div>
            <Laugh className="animate-bounce text-amber-600" />
          </div>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex justify-evenly items-center">
          <span className="text-2xl underline">
            Today's date: {format(new Date(), "dd/MM/yyyy")}
          </span>
        </div>

        <div className="flex flex-row gap-3 justify-evenly items-start">
          <div>
            <Button onClick={handleClockIn} className="min-w-28 bg-emerald-600">
              Clock in
            </Button>
          </div>
          <div className="flex flex-col gap-1">
            {data?.checkPoints.map((checkPoint, idx) => {
              return (
                <div key={idx} className="flex flex-row gap-1 justify-center">
                  <span>
                    {!(idx % 2) && (
                      <ArrowRightToLine className="text-emerald-600" />
                    )}
                    {!!(idx % 2) && (
                      <ArrowLeftToLine className="text-red-600" />
                    )}
                  </span>
                  <span>{format(checkPoint.timeStamp, "HH:mm")}</span>
                </div>
              );
            })}
          </div>
        </div>

        {data?.workBalance! > 0 && (
          <>
            You are up(hours):{" "}
            {String(Math.floor(data?.workBalance! / 60)).padStart(2, "0")}:
            {String(data?.workBalance! % 60).padStart(2, "0")}
          </>
        )}
        {data?.workBalance! < 0 && (
          <>
            You are still missing(hours):{" "}
            {String(Math.floor(Math.abs(data?.workBalance!) / 60)).padStart(
              2,
              "0"
            )}
            :{String(Math.abs(data?.workBalance!) % 60).padStart(2, "0")}
          </>
        )}

        <Button onClick={handleLogout} className="min-w-28 bg-red-600">
          Logout
        </Button>
      </CardContent>
    </Card>
  );
}
