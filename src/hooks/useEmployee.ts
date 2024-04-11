import {employeeService} from "@/services/employeeService";
import {useQueryClient, useMutation, useQuery} from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useFetchSummary = () => {
  const query = useQuery({
    queryKey: ["summary"],
    queryFn: employeeService.fetchSummary,
  });

  return query;
};

export const useCheckIn = (onSuccess?: () => void, onError?: (error: AxiosError) => void) => {
  const client = useQueryClient();
  const mutate = useMutation({
    mutationFn: employeeService.create,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["summary"] });
      onSuccess?.();
    },onError(err) {
      const error = err as AxiosError;
      onError?.(error)
    },
  });
  
  return mutate;
}
