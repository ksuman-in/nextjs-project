import * as React from "react";

import { cn } from "@/ui/lib/utils";

type SlotProps = {
  "data-slot"?: string;
};

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & SlotProps
>(({ className, "data-slot": dataSlot, ...props }, ref) => (
  <div
    ref={ref}
    data-slot={dataSlot ?? "card"}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & SlotProps
>(({ className, "data-slot": dataSlot, ...props }, ref) => (
  <div
    ref={ref}
    data-slot={dataSlot ?? "card-header"}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & SlotProps
>(({ className, "data-slot": dataSlot, ...props }, ref) => (
  <div
    ref={ref}
    data-slot={dataSlot ?? "card-title"}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & SlotProps
>(({ className, "data-slot": dataSlot, ...props }, ref) => (
  <div
    ref={ref}
    data-slot={dataSlot ?? "card-description"}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & SlotProps
>(({ className, "data-slot": dataSlot, ...props }, ref) => (
  <div
    ref={ref}
    data-slot={dataSlot ?? "card-content"}
    className={cn("p-6 pt-0", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & SlotProps
>(({ className, "data-slot": dataSlot, ...props }, ref) => (
  <div
    ref={ref}
    data-slot={dataSlot ?? "card-footer"}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
