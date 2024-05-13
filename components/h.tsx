import cn from 'clsx'
import type { ReactElement, ReactNode } from 'react'

type HType = 'blue'

const classes: Record<HType, string> = {
  blue: cn(
    'nx-bg-blue-100 nx-text-blue-900 dark:nx-border-blue-200/30 dark:nx-bg-blue-900/30 dark:nx-text-blue-200',
  ),
}

type HProps = {
  type?: HType
  children: ReactNode
}

export function H({ children, type = 'blue' }: HProps): ReactElement {
  return (
    <div
      className={cn(
        'nx-inline nx-overflow-x-auto nx-rounded-lg nx-py-0.5 nx-px-3',
        'contrast-more:nx-border-current contrast-more:dark:nx-border-current',
        classes[type],
      )}
    >
      {children}
    </div>
  )
}
