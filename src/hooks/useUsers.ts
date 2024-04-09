import {userService} from "@/services/userService";
import {useQueryClient, useMutation} from "@tanstack/react-query";

export const useCreateUser = (onSuccess?: () => void) => {
  const client = useQueryClient();
  const mutate = useMutation({
    mutationFn: userService.create,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["usersList"] });
      onSuccess?.();
    },
  });

  return mutate;
};