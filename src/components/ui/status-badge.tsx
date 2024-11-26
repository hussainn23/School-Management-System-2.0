import { cn } from "@/lib/utils"
import { StatusBadgeProps } from "@/types/table"

const statusStyles = {
  'top-scored': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'poor-results': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  'moderate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium",
      statusStyles[status],
      className
    )}>
      {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
    </span>
  )
}

