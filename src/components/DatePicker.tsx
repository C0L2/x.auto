'use client'
import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ClassName } from './ui/types'

const DatePicker = ({
  date,
  setDate,
  children,
  asChild = false,
  disableFuture,
  triggerClassName,
}: {
  children: React.ReactNode
  date: Date | undefined
  asChild?: boolean
  setDate: (date: Date | undefined) => void
  disableFuture?: boolean
  triggerClassName?: ClassName
}) => {
  return (
    <Popover>
      <PopoverTrigger className={triggerClassName} asChild={asChild}>
        {children}
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          toDate={disableFuture ? new Date() : undefined}
          mode="single"
          selected={date}
          onSelect={(date) => {
            setDate(date)
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker
