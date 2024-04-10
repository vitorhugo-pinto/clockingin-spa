import { summaryType, createCheckPointType, summaryTypeResponse } from "@/types/employeeType";
import { api } from "@/lib/api";

async function fetchSummary(): Promise<summaryType | null> {
  try {
    const response = await api.get<summaryTypeResponse>("/check-point/summary");
    console.log(response.data.data);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function createCheckPoint(
  createCheckPoint: createCheckPointType,
): Promise<createCheckPointType | null> {
  try {
    const response = await api.post<createCheckPointType>("/check-point/clock-in", createCheckPoint);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export const employeeService = {
  fetchSummary: fetchSummary,
  create: createCheckPoint,
};
