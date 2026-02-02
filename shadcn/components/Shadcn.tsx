"use client"
import * as React from 'react'
import {Calendar} from "@/components/ui/calendar"
export default function Shadcn() {
    const [date , setDate] = React.useState<Date | undefined>(new Date())
    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center">
            <div>
                Calender Component is shown below 
                <Calendar mode = "single" selected={date} className = "rounded-md border shadow-md" onSelect= "setDate" captionLayout = "dropdown"/>
            </div>
        </div>
    )
}