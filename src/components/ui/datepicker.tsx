"use client"

import * as PopoverPrimitive from "@radix-ui/react-popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import * as React from "react"

import { Button, ButtonProps } from "@/components/ui/button"
import { Calendar, CalendarProps } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Label } from "./label"

export interface DatePickerProps {
    value?: Date;
    // onChange: SelectRangeEventHandler | SelectSingleEventHandler | SelectMultipleEventHandler;
    onChange?: any;
    popoverProps?: PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>;
    calendarProps?: CalendarProps;
    buttonProps?: ButtonProps;
    placeholder?: string
    label?: string
}

export const DatePicker: React.FC<DatePickerProps> = (props) => {
    const { calendarProps, popoverProps, buttonProps, placeholder, label } = props

    const [value, onChange] = React.useState()

    return (
        <>
            <Label>{label}</Label>
            <div>

                <Popover {...popoverProps}>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[280px] justify-start text-left font-normal",
                                !value && "text-muted-foreground"
                            )}
                            {...buttonProps}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {value ? format(value, "PPP") : <span>{placeholder}</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            selected={value}
                            onSelect={(e: any) => {
                                console.log("first", e)
                                onChange(e)
                            }}
                            initialFocus
                            {...calendarProps}
                        />
                    </PopoverContent>
                </Popover>
            </div>

        </>
    )
}
