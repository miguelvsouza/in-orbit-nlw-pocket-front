import { Plus } from "lucide-react"
import { OutlineButton } from "./ui/outline-button"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getPendingGoals } from "../http/get-pending-goals"
import { completeGoal } from "../http/complete-goal"

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data: pendingGoals } = useQuery({
    queryKey: ["pending-goals"],
    queryFn: getPendingGoals,
  })

  async function handleCompleteGoal(goalId: string) {
    await completeGoal(goalId)

    queryClient.invalidateQueries({ queryKey: ["summary"] })
    queryClient.invalidateQueries({ queryKey: ["pending-goals"] })
  }

  return (
    <div className="flex flex-wrap gap-3">
      {pendingGoals?.map((pendingGoal) => {
        return (
          <OutlineButton
            key={pendingGoal.id}
            onClick={() => handleCompleteGoal(pendingGoal.id)}
            disabled={
              pendingGoal.completionCount >= pendingGoal.desiredWeeklyFrequency
            }
          >
            <Plus className="size-4 text-zinc-600" />
            {pendingGoal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
