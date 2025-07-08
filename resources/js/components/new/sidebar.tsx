import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  BarChart3,
  Search,
  FileSearch,
  ShoppingBag,
  Users,
  UserPlus,
  PieChart,
  FileSpreadsheet,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  title: string;
  isCollapsed: boolean;
}

function SidebarLink({ to, icon, title, isCollapsed }: SidebarLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-all",
          isActive ? "bg-muted text-primary" : "text-muted-foreground",
          isCollapsed && "justify-center px-2"
        )
      }
    >
      {icon}
      {!isCollapsed && <span>{title}</span>}
    </NavLink>
  );
}

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "flex h-full flex-col border-r bg-card transition-all duration-300",
        isCollapsed ? "w-14" : "w-64"
      )}
    >
      <div className="flex h-14 items-center justify-between border-b px-3 py-2">
        {!isCollapsed && (
          <span className="text-xl font-bold text-primary">SEO Dashboard</span>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="ml-auto"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </Button>
      </div>

      <ScrollArea className="flex-1 py-2">
        <nav className="grid gap-1 px-2">
          <SidebarLink
            to="/dashboard"
            icon={<BarChart3 size={20} />}
            title="Dashboard"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            to="/keyword-research"
            icon={<Search size={20} />}
            title="Keyword Research"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            to="/seo-audit"
            icon={<FileSearch size={20} />}
            title="SEO Audit"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            to="/product-optimization"
            icon={<ShoppingBag size={20} />}
            title="Product Optimization"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            to="/competitor-intelligence"
            icon={<Users size={20} />}
            title="Competitor Intelligence"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            to="/lead-generation"
            icon={<UserPlus size={20} />}
            title="Lead Generation"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            to="/leads-management"
            icon={<PieChart size={20} />}
            title="Leads Management"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            to="/reports"
            icon={<FileSpreadsheet size={20} />}
            title="Reports & Export"
            isCollapsed={isCollapsed}
          />
        </nav>
      </ScrollArea>

      <div className="border-t p-4">
        <div className="flex items-center justify-between">
          {!isCollapsed && <span className="text-xs text-muted-foreground">© 2025 SEO Pro</span>}
          <ThemeToggle isCollapsed={isCollapsed} />
        </div>
      </div>
    </div>
  );
}