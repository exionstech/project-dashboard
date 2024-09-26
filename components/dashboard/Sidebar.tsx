"use client";
import React from "react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Bell,
  Users,
  LayoutGrid,
  DollarSign,
  Handshake,
  User2,
  Lock,
  Mail,
  Send,
  FileText,
  Settings,
  Folder,
  BarChart,
  PieChart,
  Clock,
  Cog,
  BellRing,
  Link2,
  Globe,
  ExternalLink,
  Home,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "../global/Logo";

export default function Sidebar() {
  const sidebarLinks = [
    {
      title: "Dashboard",
      link: [
        {
          title: "Overview",
          href: "/dashboard/overview",
          icon: Home,
        }
      ],
    },
    {
      title: "Clients & Projects",
      link: [
        {
          title: "Clients",
          href: "/dashboard/clients",
          icon: Users, // Icon for Clients
        },
        {
          title: "Projects",
          href: "/dashboard/projects",
          icon: LayoutGrid, // Icon for Projects
        },
      ],
    },
    {
      title: "Finance",
      link: [
        {
          title: "Invoices",
          href: "/dashboard/clients/invoices",
          icon: DollarSign, // Icon for Invoices
        },
        {
          title: "Payments",
          href: "/dashboard/payments",
          icon: Handshake, // Icon for Payments
        },
      ],
    },
    {
      title: "Team",
      link: [
        {
          title: "Members",
          href: "/dashboard/clients/members",
          icon: User2, // Icon for Team Members
        },
        {
          title: "Roles",
          href: "/dashboard/roles",
          icon: Lock, // Icon for Roles
        },
      ],
    },
    {
      title: "Communication",
      link: [
        {
          title: "Emails",
          href: "/dashboard/clients/emails",
          icon: Mail, // Icon for Emails
        },
        {
          title: "Bulk-Emails",
          href: "/dashboard/bulk-emails",
          icon: Send, // Icon for Bulk Emails
        },
      ],
    },
    {
      title: "Portfolio",
      link: [
        {
          title: "Generate Portfolio",
          href: "/dashboard/clients/portfolio",
          icon: FileText, // Icon for Generate Portfolio
        },
      ],
    },
    {
      title: "Brand",
      link: [
        {
          title: "Settings",
          href: "/dashboard/clients/brand-settings",
          icon: Settings, // Icon for Brand Settings
        },
        {
          title: "File Manager",
          href: "/dashboard/file-manager",
          icon: Folder, // Icon for File Manager
        },
      ],
    },
    {
      title: "Reports",
      link: [
        {
          title: "Reports Progress",
          href: "/dashboard/clients/reports-progress",
          icon: BarChart, // Icon for Reports Progress
        },
        {
          title: "Financial Summary",
          href: "/dashboard/financial-summary",
          icon: PieChart, // Icon for Financial Summary
        },
        {
          title: "Time Tracking",
          href: "/dashboard/time-tracking",
          icon: Clock, // Icon for Time Tracking
        },
      ],
    },
    {
      title: "Settings",
      link: [
        {
          title: "Account Settings",
          href: "/dashboard/clients/account-settings",
          icon: Cog, // Icon for Account Settings
        },
        {
          title: "Notifications",
          href: "/dashboard/notifications",
          icon: BellRing, // Icon for Notifications
        },
        {
          title: "Integrations",
          href: "/dashboard/integrations",
          icon: Link2, // Icon for Integrations
        },
      ],
    },
  ];

  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Logo href="/dashboard" title="Project Pro"/>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
        <ScrollArea className="h-[440px] w-full rounded-md border p-4">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {sidebarLinks.map((section, i) => (
              <div key={i}>
                <div className="text-muted-foreground mb-2 font-bold ">
                  {section.title}
                </div>
                {section.link.map((item, j) => {
                  const Icon = item.icon;
                  const isActive = item.href === pathname;
                  return (
                    <Link
                      key={j}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                        isActive && " bg-muted text-primary"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            ))}
            <Link
              href="/"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              )}
            >
              <ExternalLink className="h-4 w-4" />
              Live Website
            </Link>
          </nav>
</ScrollArea>


        </div>
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
          <Button size="sm" className="w-full">
                Logout
              </Button>

          </Card>
        </div>
      </div>
    </div>
  );
}
