import {userService} from "@/services/userService";
import {useQueryClient, useMutation} from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useCreateUser = (onSuccess?: () => void, onError?: (error: AxiosError) => void) => {
  const client = useQueryClient();
  const mutate = useMutation({
    mutationFn: userService.create,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["usersList"] });
      onSuccess?.();
    },onError(err) {
      const error = err as AxiosError;
      onError?.(error)
    },
  });

  return mutate;
};