import { BellIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { UserNav } from "@/components/user-nav";
import { Badge } from "@/components/ui/badge";

export function TopNav() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="relative w-full flex-1 md:w-auto md:flex-none">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full pl-8 md:w-[300px] lg:w-[400px]"
          />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="relative"
                aria-label="Notifications"
              >
                <BellIcon className="h-4 w-4" />
                <Badge
                  className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px]"
                  variant="destructive"
                >
                  5
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px]">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {notifications.map((notification, i) => (
                <DropdownMenuItem key={i} className="cursor-pointer">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {notification.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {notification.time}
                    </p>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <UserNav />
        </div>
      </div>
    </div>
  );
}

const notifications = [
  {
    title: "New Lead Generated",
    description: "A new lead has been added to your list.",
    time: "5 minutes ago",
  },
  {
    title: "Keyword Position Drop",
    description: "Your keyword 'SEO analytics' dropped 5 positions.",
    time: "1 hour ago",
  },
  {
    title: "Competitor Updated Title",
    description: "Your competitor updated their product title.",
    time: "3 hours ago",
  },
  {
    title: "SEO Audit Completed",
    description: "Your website audit is ready for review.",
    time: "Yesterday",
  },
  {
    title: "Weekly Report Ready",
    description: "Your weekly SEO performance report is available.",
    time: "2 days ago",
  },
];