"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-orange-600 p-6 space-y-10">

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center text-xl">
        <Button variant="ghost">Ghost</Button>
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button size="sm" className="h-8 px-2">XS (Custom)</Button>
        <Button size="default">Default</Button>
        <Button size="icon">I</Button>
        <Button size="lg">LG</Button>
        <Button size="sm">SM</Button>
      </div>

      {/* Card */}
      <div className="flex justify-center">
        <Card className="w-full max-w-sm bg-black text-white border-zinc-800">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-white">Login</h2>
                <CardDescription>
                  Enter your email to access your account.
                </CardDescription>
              </div>
              <Button variant="link" className="text-blue-400 p-0 h-auto">
                Sign Up
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="bg-zinc-900 border-zinc-700"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  className="bg-zinc-900 border-zinc-700"
                />
              </div>
            </form>
          </CardContent>

          <CardFooter className="justify-center border-t border-zinc-800 mt-4 pt-4">
            <p className="text-sm text-gray-400 cursor-pointer hover:text-white transition-colors">
              Login with Google
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* Separator */}
      <div className="flex items-center justify-center gap-4 text-white">
        <h1 className="font-medium">Hello Hassaan!</h1>
        <Separator orientation="vertical" className="h-8 bg-zinc-700" />
        <h1 className="font-medium text-zinc-400">We are learning shadcn</h1>
      </div>

      {/* Accordion */}
      <div className="max-w-xl mx-auto text-white">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-zinc-800">
            <AccordionTrigger className="hover:text-orange-500">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400">
              Yes. It follows WAI-ARIA standards and works with keyboard.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-zinc-800">
            <AccordionTrigger className="hover:text-orange-500">
              Is it customizable?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400">
              Fully. You control Tailwind, styles, and structure.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Navigation Menu */}
      <div className="flex justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-zinc-900">
                Docs
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 bg-black border border-zinc-800 rounded-md">
                  <ListItem title="Introduction" href="#">
                    Re-usable components built with Tailwind CSS.
                  </ListItem>
                  <ListItem title="Installation" href="#">
                    Learn how to setup shadcn with Next.js.
                  </ListItem>
                  <ListItem title="Typography" href="#">
                    Headings, paragraphs, and text utilities.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

    </div>
  )
}

/**
 * ListItem component for NavigationMenu 
 * This is usually manually defined in shadcn projects.
 */
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-900 hover:text-accent-foreground focus:bg-zinc-900 focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-orange-500">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-zinc-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"