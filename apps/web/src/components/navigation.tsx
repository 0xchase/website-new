"use client"

import * as React from "react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const projects: { title: string; href: string; description: string }[] = [
  {
    title: "Procedural Audio",
    href: "/projects/procedural-audio",
    description: "Novel audio generation and processing tools",
  },
  {
    title: "Luthier",
    href: "/projects/luthier",
    description: "Handcrafted musical instruments",
  },
  {
    title: "Bookbinding",
    href: "/projects/bookbinding",
    description: "Traditional bookbinding techniques and restoration",
  },
  {
    title: "Other",
    href: "/projects/other",
    description: "Miscellaneous projects and experiments",
  },
]

const music: { title: string; href: string; description: string }[] = [
  {
    title: "Albums",
    href: "/music/albums",
    description: "Complete album releases and collections",
  },
  {
    title: "Film Scores",
    href: "/music/film-scores",
    description: "Original music for film and media",
  },
  {
    title: "Performances",
    href: "/music/performances",
    description: "Piano compositions and performances",
  },
  {
    title: "Studio",
    href: "/music/studio",
    description: "Recording studio and production work",
  },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex items-center justify-between gap-4 max-w-2xl px-6 py-2">
        <Link
          href="/"
          className="min-w-0 font-mono text-sm text-black dark:text-white hover:text-foreground transition-colors cursor-pointer flex items-center"
        >
          <span className="truncate">$ {pathname}&thinsp;</span>
          <span className="shrink-0 animate-pulse inline-block w-2 h-4 bg-current"></span>
        </Link>
        <NavigationMenu className="shrink-0">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/research">Research</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px] max-w-[90vw]">
                  {projects.map((project) => (
                    <ListItem
                      key={project.title}
                      title={project.title}
                      href={project.href}
                    >
                      {project.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Music</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px] max-w-[90vw]">
                  {music.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/blog">Blog</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
