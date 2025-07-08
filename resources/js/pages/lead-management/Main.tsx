import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { TablePagination } from "@/components/table-pagination";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  BarChart2,
  CalendarClock,
  CheckCircle,
  ChevronDown,
  Download,
  Edit,
  ExternalLink,
  Filter,
  MailCheck,
  MailX,
  MessageCircle,
  Phone,
  PieChart,
  Plus,
  Search,
  Share2,
  Star,
  Tag,
  Trash2,
  User2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

export  function LeadsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [activeLeadId, setActiveLeadId] = useState<string | null>(null);

  const activeLead = leadsData.find((lead) => lead.id === activeLeadId);

  return (
    <div className="space-y-8">


      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <PieChart className="mx-auto h-6 w-6 text-primary" />
              <h3 className="mt-2 text-lg font-medium">Total Leads</h3>
              <div className="mt-1 text-3xl font-bold">1,234</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Tag className="mx-auto h-6 w-6 text-primary" />
              <h3 className="mt-2 text-lg font-medium">Lead Score Avg.</h3>
              <div className="mt-1 text-3xl font-bold">72/100</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <CheckCircle className="mx-auto h-6 w-6 text-primary" />
              <h3 className="mt-2 text-lg font-medium">Qualified Leads</h3>
              <div className="mt-1 text-3xl font-bold">487</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <BarChart2 className="mx-auto h-6 w-6 text-primary" />
              <h3 className="mt-2 text-lg font-medium">Conversion Rate</h3>
              <div className="mt-1 text-3xl font-bold">12.4%</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Leads</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Lead
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search leads..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Contact</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leadsData.slice(0, pageSize).map((lead) => (
                      <TableRow
                        key={lead.id}
                        className={activeLeadId === lead.id ? "bg-muted/50" : ""}
                        onClick={() => setActiveLeadId(lead.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${lead.name}`} alt={lead.name} />
                              <AvatarFallback>{lead.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{lead.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {lead.email}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{lead.company}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress
                              value={lead.score}
                              className="h-2 w-16"
                              indicatorColor={
                                lead.score >= 75
                                  ? "bg-green-500"
                                  : lead.score >= 50
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              }
                            />
                            <span className="text-xs">{lead.score}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              lead.status === "Qualified"
                                ? "default"
                                : lead.status === "New"
                                ? "secondary"
                                : lead.status === "Contacted"
                                ? "outline"
                                : "destructive"
                            }
                          >
                            {lead.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{lead.lastContact}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <MailCheck className="mr-2 h-4 w-4" />
                                Mark as Contacted
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Mark as Qualified
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <TablePagination
                totalItems={leadsData.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                onPageSizeChange={setPageSize}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lead Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={leadStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {leadStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value, name) => [`${value}: ${name}`, 'Status']}
                    />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Lead Sources</h3>
                {leadSourceData.map((source, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>{source.name}</span>
                      <span className="font-medium">{source.value}%</span>
                    </div>
                    <Progress
                      value={source.value}
                      className="h-1.5"
                      indicatorColor={source.color}
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {activeLead && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Lead Profile</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => setActiveLeadId(null)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${activeLead.name}`} alt={activeLead.name} />
                    <AvatarFallback>{activeLead.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">{activeLead.name}</h3>
                    <p className="text-muted-foreground">{activeLead.title}</p>
                    <p className="text-sm text-muted-foreground">{activeLead.company}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Contact Information</h4>
                  <div className="rounded-md border p-3 text-sm">
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{activeLead.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{activeLead.phone || "Not available"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <a
                          href={`https://${activeLead.company.toLowerCase().replace(/\s+/g, '')}.com`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {activeLead.company.toLowerCase().replace(/\s+/g, '')}.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Lead Details</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="rounded-md border p-2">
                      <p className="text-xs text-muted-foreground">Status</p>
                      <Badge
                        variant={
                          activeLead.status === "Qualified"
                            ? "default"
                            : activeLead.status === "New"
                            ? "secondary"
                            : activeLead.status === "Contacted"
                            ? "outline"
                            : "destructive"
                        }
                        className="mt-1"
                      >
                        {activeLead.status}
                      </Badge>
                    </div>
                    <div className="rounded-md border p-2">
                      <p className="text-xs text-muted-foreground">Score</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Progress
                          value={activeLead.score}
                          className="h-2 w-12"
                          indicatorColor={
                            activeLead.score >= 75
                              ? "bg-green-500"
                              : activeLead.score >= 50
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }
                        />
                        <span className="font-medium">{activeLead.score}/100</span>
                      </div>
                    </div>
                    <div className="rounded-md border p-2">
                      <p className="text-xs text-muted-foreground">Source</p>
                      <p className="mt-1 font-medium">{activeLead.source}</p>
                    </div>
                    <div className="rounded-md border p-2">
                      <p className="text-xs text-muted-foreground">Last Contact</p>
                      <p className="mt-1 font-medium">{activeLead.lastContact}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 md:col-span-2">
                <Tabs defaultValue="timeline">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="timeline">Timeline</TabsTrigger>
                    <TabsTrigger value="notes">Notes</TabsTrigger>
                    <TabsTrigger value="tasks">Tasks</TabsTrigger>
                  </TabsList>
                  <TabsContent value="timeline" className="space-y-4 pt-4">
                    <div className="relative space-y-4 pl-6">
                      <div className="absolute left-0 top-0 bottom-0 border-l border-muted-foreground/20"></div>
                      {[
                        {
                          type: "Email",
                          icon: <Mail className="h-4 w-4" />,
                          title: "Email Sent",
                          description: "Follow-up email regarding product demo",
                          date: "2025-07-10 10:32 AM",
                        },
                        {
                          type: "Status",
                          icon: <Tag className="h-4 w-4" />,
                          title: "Status Changed",
                          description: "Status updated from New to Contacted",
                          date: "2025-07-08 2:15 PM",
                        },
                        {
                          type: "Call",
                          icon: <Phone className="h-4 w-4" />,
                          title: "Call Completed",
                          description: "Initial discovery call - 15 minutes",
                          date: "2025-07-08 1:45 PM",
                        },
                        {
                          type: "Email",
                          icon: <Mail className="h-4 w-4" />,
                          title: "Email Received",
                          description: "Inquiry about product pricing",
                          date: "2025-07-05 11:20 AM",
                        },
                        {
                          type: "Created",
                          icon: <User2 className="h-4 w-4" />,
                          title: "Lead Created",
                          description: "Added to the system from website form",
                          date: "2025-07-05 10:48 AM",
                        },
                      ].map((item, i) => (
                        <div key={i} className="relative">
                          <div className="absolute -left-6 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-background">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          </div>
                          <div className="rounded-md border p-3">
                            <div className="flex items-center gap-2">
                              <div className="rounded-full bg-muted p-1">
                                {item.icon}
                              </div>
                              <div className="font-medium">{item.title}</div>
                              <Badge variant="outline" className="ml-auto">
                                {item.type}
                              </Badge>
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {item.description}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {item.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="notes" className="space-y-4 pt-4">
                    <div className="flex items-center gap-2">
                      <Input placeholder="Add a new note..." className="flex-1" />
                      <Button size="sm">Add Note</Button>
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          content:
                            "Lead expressed interest in Enterprise plan. Will need to follow up with detailed pricing breakdown and case studies.",
                          author: "John Doe",
                          date: "2025-07-10",
                        },
                        {
                          content:
                            "Initial call went well. Lead has a team of 50+ and is looking for a solution to replace their current vendor in Q3.",
                          author: "Sarah Johnson",
                          date: "2025-07-08",
                        },
                      ].map((note, i) => (
                        <div key={i} className="rounded-md border p-3">
                          <p className="text-sm">{note.content}</p>
                          <div className="mt-2 flex items-center justify-between">
                            <p className="text-xs font-medium">{note.author}</p>
                            <p className="text-xs text-muted-foreground">{note.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="tasks" className="space-y-4 pt-4">
                    <div className="flex items-center gap-2">
                      <Input placeholder="Add a new task..." className="flex-1" />
                      <Button size="sm">Add Task</Button>
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          title: "Send follow-up email",
                          dueDate: "2025-07-15",
                          completed: false,
                          priority: "High",
                        },
                        {
                          title: "Schedule product demo",
                          dueDate: "2025-07-20",
                          completed: false,
                          priority: "Medium",
                        },
                        {
                          title: "Prepare custom quote",
                          dueDate: "2025-07-25",
                          completed: false,
                          priority: "Medium",
                        },
                        {
                          title: "Initial discovery call",
                          dueDate: "2025-07-08",
                          completed: true,
                          priority: "High",
                        },
                      ].map((task, i) => (
                        <div key={i} className="flex items-center gap-3 rounded-md border p-3">
                          <input
                            type="checkbox"
                            checked={task.completed}
                            className="h-4 w-4 rounded border-muted"
                            readOnly
                          />
                          <div className="flex-1">
                            <p className={`text-sm ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                              {task.title}
                            </p>
                            <div className="mt-1 flex items-center gap-2">
                              <CalendarClock className="h-3 w-3 text-muted-foreground" />
                              <p className="text-xs text-muted-foreground">
                                Due: {task.dueDate}
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant={
                              task.priority === "High"
                                ? "destructive"
                                : task.priority === "Medium"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {task.priority}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

const leadsData = [
  {
    id: "1",
    name: "John Smith",
    title: "Marketing Director",
    company: "Tech Solutions Inc.",
    email: "john.smith@techsolutions.com",
    phone: "+1 (555) 123-4567",
    score: 85,
    status: "Contacted",
    source: "Website",
    lastContact: "2025-07-10",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    title: "SEO Specialist",
    company: "Digital Marketing Agency",
    email: "sarah.j@digitalmarketing.com",
    phone: "+1 (555) 987-6543",
    score: 92,
    status: "Qualified",
    source: "LinkedIn",
    lastContact: "2025-07-08",
  },
  {
    id: "3",
    name: "Michael Brown",
    title: "E-commerce Manager",
    company: "Online Retail Ltd.",
    email: "m.brown@onlineretail.com",
    phone: "+1 (555) 456-7890",
    score: 78,
    status: "New",
    source: "Referral",
    lastContact: "2025-07-05",
  },
  {
    id: "4",
    name: "Emily Davis",
    title: "Content Strategist",
    company: "Media Group",
    email: "emily.davis@mediagroup.com",
    phone: "+1 (555) 234-5678",
    score: 65,
    status: "Contacted",
    source: "Google Search",
    lastContact: "2025-07-02",
  },
  {
    id: "5",
    name: "David Wilson",
    title: "CTO",
    company: "Tech Innovators",
    email: "david@techinnovators.com",
    phone: "+1 (555) 345-6789",
    score: 95,
    status: "Qualified",
    source: "Webinar",
    lastContact: "2025-06-30",
  },
  {
    id: "6",
    name: "Jennifer Lee",
    title: "Digital Strategist",
    company: "Strategy Partners",
    email: "jennifer@strategypartners.com",
    phone: "+1 (555) 567-8901",
    score: 45,
    status: "Lost",
    source: "Cold Email",
    lastContact: "2025-06-28",
  },
  {
    id: "7",
    name: "Robert Chen",
    title: "Product Marketing",
    company: "Global Solutions",
    email: "robert.c@globalsolutions.com",
    phone: "+1 (555) 678-9012",
    score: 72,
    status: "New",
    source: "Trade Show",
    lastContact: "2025-06-25",
  },
];

const leadStatusData = [
  { name: "New", value: 30, color: "#818cf8" }, // Indigo
  { name: "Contacted", value: 40, color: "#fbbf24" }, // Amber
  { name: "Qualified", value: 20, color: "#34d399" }, // Emerald
  { name: "Lost", value: 10, color: "#f87171" }, // Red
];

const leadSourceData = [
  { name: "Website", value: 35, color: "bg-blue-500" },
  { name: "LinkedIn", value: 25, color: "bg-sky-500" },
  { name: "Referral", value: 20, color: "bg-green-500" },
  { name: "Google Search", value: 15, color: "bg-yellow-500" },
  { name: "Other", value: 5, color: "bg-purple-500" },
];

// Missing icon imports for the lead profile section
const Mail = (props: any) => <lucide.Mail {...props} />;
const Globe = (props: any) => <lucide.Globe {...props} />;
