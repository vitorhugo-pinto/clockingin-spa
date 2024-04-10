import {employeeService} from "@/services/employeeService";
import {useQueryClient, useMutation, useQuery} from "@tanstack/react-query";

export const useFetchSummary = () => {
  const query = useQuery({
    queryKey: ["summary"],
    queryFn: employeeService.fetchSummary,
  });

  return query;
};

export const useCheckIn = (onSuccess?: () => void) => {
  const client = useQueryClient();
  const mutate = useMutation({
    mutationFn: employeeService.create,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["summary"] });
      onSuccess?.();
    },
  });
  
  return mutate;
}
