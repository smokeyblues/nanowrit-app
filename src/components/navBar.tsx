import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu";
  import { Button } from "@/components/ui/button";
  import { ModeToggle } from "@/components/mode-toggle";

export function NavBar() {
  return (
    <NavigationMenu className="md:container md:mx-auto pt-10">
        <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink href="/dashboard">Enter</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <ModeToggle />
        </NavigationMenuItem>
    </NavigationMenu>
  )
}

