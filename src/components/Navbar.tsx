"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

import Link from "next/link";

export const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem active={active} setActive={setActive} item="Home" />
        </Link>

        <MenuItem active={active} setActive={setActive} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/music-theory">Basic Music Theory</HoveredLink>
            <HoveredLink href="/advance-composition">
              Advanced Composition
            </HoveredLink>
            <HoveredLink href="/song-writing">Song Writing</HoveredLink>
            <HoveredLink href="/music-production">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href="contact-us">
          <MenuItem active={active} setActive={setActive} item="Contact Us" />
        </Link>
      </Menu>
    </div>
  );
};
