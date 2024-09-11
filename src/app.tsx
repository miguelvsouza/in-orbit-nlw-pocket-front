import { CreateGoal } from "./components/create-goal"
import { EmptyGoals } from "./components/empty-goals"
import { Summary } from "./components/summary"
import { Dialog } from "./components/ui/dialog"
import { useQuery } from "@tanstack/react-query"
import { getWeekSummary } from "./http/get-week-summary"

export function App() {
  const { data: summary } = useQuery({
    queryKey: ["summary"],
    queryFn: getWeekSummary,
    staleTime: 1000 * 60, // 60 seconds
  })

  return (
    <Dialog>
      {summary?.total && summary.total > 0 ? <Summary /> : <EmptyGoals />}
      <CreateGoal />
    </Dialog>
  )
}
