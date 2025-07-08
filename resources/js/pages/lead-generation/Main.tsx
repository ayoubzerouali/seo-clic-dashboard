import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TablePagination } from "@/components/table-pagination";
import {
    AlertCircle,
    ArrowUpDown,
    Check,
    CheckCircle,
    Download,
    FileSpreadsheet,
    Filter,
    Loader2,
    Mail,
    Search,
    UserPlus,
    Users,
    XCircle,
} from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export function LeadGeneration() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [isSearching, setIsSearching] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm) {
            setIsSearching(true);
            setTimeout(() => {
                setIsSearching(false);
                setHasSearched(true);
            }, 1500);
        }
    };

    return (
        <div className="space-y-8">
            <Tabs defaultValue="scraper" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="scraper">Lead Scraper</TabsTrigger>
                    <TabsTrigger value="enrichment">Lead Enrichment</TabsTrigger>
                    <TabsTrigger value="verification">Email Verification</TabsTrigger>
                </TabsList>

                <TabsContent value="scraper" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Find Leads</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSearch} className="space-y-4">
                                <div className="flex flex-col gap-4 sm:flex-row">
                                    <div className="relative flex-1">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            type="search"
                                            placeholder="Search by industry, keyword, or location..."
                                            className="pl-8"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                    <Button type="submit" disabled={isSearching}>
                                        {isSearching ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Searching...
                                            </>
                                        ) : (
                                            "Search"
                                        )}
                                    </Button>
                                </div>

                                <div className="rounded-md border p-4">
                                    <div className="space-y-4">
                                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="industry">Industry</Label>
                                                <select
                                                    id="industry"
                                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                >
                                                    <option value="">All Industries</option>
                                                    <option value="tech">Technology</option>
                                                    <option value="retail">Retail / E-commerce</option>
                                                    <option value="finance">Finance</option>
                                                    <option value="healthcare">Healthcare</option>
                                                    <option value="education">Education</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="location">Location</Label>
                                                <select
                                                    id="location"
                                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                >
                                                    <option value="">All Locations</option>
                                                    <option value="us">United States</option>
                                                    <option value="eu">Europe</option>
                                                    <option value="asia">Asia</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="company-size">Company Size</Label>
                                                <select
                                                    id="company-size"
                                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                >
                                                    <option value="">Any Size</option>
                                                    <option value="1-10">1-10 employees</option>
                                                    <option value="11-50">11-50 employees</option>
                                                    <option value="51-200">51-200 employees</option>
                                                    <option value="201-500">201-500 employees</option>
                                                    <option value="501+">501+ employees</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="data-source">Data Source</Label>
                                                <select
                                                    id="data-source"
                                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                >
                                                    <option value="all">All Sources</option>
                                                    <option value="linkedin">LinkedIn</option>
                                                    <option value="website">Company Websites</option>
                                                    <option value="directories">Business Directories</option>
                                                    <option value="social">Social Media</option>
                                                </select>
                                            </div>
                                        </div>

                                        <Separator />

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <Label>Lead Quality Threshold</Label>
                                                <span className="text-sm text-muted-foreground">Min. 70%</span>
                                            </div>
                                            <Slider defaultValue={[70]} min={0} max={100} step={1} />
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <Switch id="verified-only" />
                                            <Label htmlFor="verified-only">Show verified emails only</Label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    {isSearching && (
                        <Card>
                            <CardContent className="pt-6">
                                <div className="space-y-2 text-center">
                                    <Loader2 className="mx-auto h-8 w-8 animate-spin text-muted-foreground" />
                                    <h3 className="text-lg font-medium">Searching for leads...</h3>
                                    <Progress value={45} className="h-2 w-full" />
                                    <p className="text-sm text-muted-foreground">
                                        Scanning websites, social profiles and directories. This may take a moment.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {hasSearched && !isSearching && (
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle>Search Results</CardTitle>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm">
                                            <Filter className="mr-2 h-4 w-4" />
                                            Filter
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Download className="mr-2 h-4 w-4" />
                                            Export
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="rounded-md border">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-12">
                                                        <input type="checkbox" className="h-4 w-4 rounded border-muted" />
                                                    </TableHead>
                                                    <TableHead>Name</TableHead>
                                                    <TableHead>Title</TableHead>
                                                    <TableHead>Company</TableHead>
                                                    <TableHead>Email</TableHead>
                                                    <TableHead>Quality</TableHead>
                                                    <TableHead>Status</TableHead>
                                                    <TableHead className="text-right">Actions</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {leadResults.map((lead) => (
                                                    <TableRow key={lead.id}>
                                                        <TableCell>
                                                            <input type="checkbox" className="h-4 w-4 rounded border-muted" />
                                                        </TableCell>
                                                        <TableCell className="font-medium">{lead.name}</TableCell>
                                                        <TableCell>{lead.title}</TableCell>
                                                        <TableCell>{lead.company}</TableCell>
                                                        <TableCell>{lead.email}</TableCell>
                                                        <TableCell>
                                                            <div className="flex items-center gap-2">
                                                                <Progress
                                                                    value={lead.quality}
                                                                    className="h-2 w-16"
                                                                    indicatorColor={
                                                                        lead.quality >= 80
                                                                            ? "bg-green-500"
                                                                            : lead.quality >= 60
                                                                                ? "bg-yellow-500"
                                                                                : "bg-red-500"
                                                                    }
                                                                />
                                                                <span className="text-xs">{lead.quality}%</span>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Badge
                                                                variant={
                                                                    lead.status === "Verified" ? "default" :
                                                                        lead.status === "Pending" ? "secondary" :
                                                                            "destructive"
                                                                }
                                                            >
                                                                {lead.status}
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell className="text-right">
                                                            <Button variant="ghost" size="sm">
                                                                <UserPlus className="mr-2 h-4 w-4" />
                                                                Save
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>

                                    <TablePagination
                                        totalItems={leadResults.length}
                                        pageSize={pageSize}
                                        currentPage={currentPage}
                                        onPageChange={setCurrentPage}
                                        onPageSizeChange={setPageSize}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </TabsContent>

                <TabsContent value="enrichment" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Enrich Lead Data</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="rounded-md border-2 border-dashed border-muted p-10 text-center">
                                    <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center gap-2">
                                        <FileSpreadsheet className="h-10 w-10 text-muted-foreground" />
                                        <h3 className="text-xl font-medium">
                                            Upload lead list for enrichment
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Upload a CSV or Excel file with your leads. We'll add missing contact details, company information, and social profiles.
                                        </p>
                                        <Button className="mt-2" size="sm">
                                            Upload File
                                        </Button>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-2">
                                    <h3 className="text-lg font-medium">Enrichment Options</h3>
                                    <Card>
                                        <CardContent className="p-4">
                                            <div className="space-y-4">
                                                <div className="flex items-center space-x-2">
                                                    <Switch id="contact-details" defaultChecked />
                                                    <Label htmlFor="contact-details">Find missing contact details</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Switch id="social-profiles" defaultChecked />
                                                    <Label htmlFor="social-profiles">Add social profiles</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Switch id="company-data" defaultChecked />
                                                    <Label htmlFor="company-data">Enrich company data</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Switch id="tech-stack" defaultChecked />
                                                    <Label htmlFor="tech-stack">Identify technology stack</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Switch id="lead-scoring" defaultChecked />
                                                    <Label htmlFor="lead-scoring">Apply lead scoring</Label>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <Separator />

                                <div className="flex justify-end gap-2">
                                    <Button variant="outline">
                                        Save Settings
                                    </Button>
                                    <Button>
                                        Start Enrichment
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Enrichment Jobs</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Job Name</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Leads</TableHead>
                                        <TableHead>Enrichment Rate</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">Tech Companies 2025</TableCell>
                                        <TableCell>2025-07-10</TableCell>
                                        <TableCell>124</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Progress value={92} className="h-2 w-16" />
                                                <span>92%</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge>Completed</Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
                                                <Download className="mr-2 h-4 w-4" />
                                                Download
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Marketing Leads</TableCell>
                                        <TableCell>2025-07-05</TableCell>
                                        <TableCell>78</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Progress value={86} className="h-2 w-16" />
                                                <span>86%</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge>Completed</Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
                                                <Download className="mr-2 h-4 w-4" />
                                                Download
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Retail Prospects</TableCell>
                                        <TableCell>2025-07-01</TableCell>
                                        <TableCell>215</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Progress value={78} className="h-2 w-16" />
                                                <span>78%</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge>Completed</Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
                                                <Download className="mr-2 h-4 w-4" />
                                                Download
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="verification" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Email Verification</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-4">
                                        <div className="rounded-md border-2 border-dashed border-muted p-6 text-center">
                                            <div className="mx-auto flex flex-col items-center justify-center gap-2">
                                                <FileSpreadsheet className="h-8 w-8 text-muted-foreground" />
                                                <h3 className="text-lg font-medium">
                                                    Upload email list
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    CSV or Excel with email column
                                                </p>
                                                <Button className="mt-1" size="sm">
                                                    Upload File
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="text-sm font-medium">Or enter emails manually</h3>
                                            <Textarea
                                                placeholder="Enter emails separated by comma or new line..."
                                                className="min-h-[120px]"
                                            />
                                            <Button className="w-full">
                                                <Mail className="mr-2 h-4 w-4" />
                                                Verify Emails
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="rounded-md border p-4">
                                        <h3 className="mb-4 text-lg font-medium">Verification Details</h3>
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm">Verification Level</span>
                                                    <Badge variant="outline">Standard</Badge>
                                                </div>
                                                <select
                                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                >
                                                    <option value="basic">Basic (Syntax only)</option>
                                                    <option value="standard">Standard (MX + Syntax)</option>
                                                    <option value="deep">Deep (SMTP + MX + Syntax)</option>
                                                </select>
                                            </div>

                                            <div className="space-y-1">
                                                <Label htmlFor="verification-speed">Verification Speed</Label>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs text-muted-foreground">Slower</span>
                                                    <Slider defaultValue={[70]} min={0} max={100} step={10} />
                                                    <span className="text-xs text-muted-foreground">Faster</span>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <Switch id="remove-duplicates" defaultChecked />
                                                    <Label htmlFor="remove-duplicates">Remove duplicates</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Switch id="catch-all" defaultChecked />
                                                    <Label htmlFor="catch-all">Detect catch-all domains</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Switch id="role-based" defaultChecked />
                                                    <Label htmlFor="role-based">Flag role-based emails</Label>
                                                </div>
                                            </div>

                                            <div className="rounded-md bg-muted p-3">
                                                <div className="flex items-center gap-2">
                                                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                                                    <p className="text-xs text-muted-foreground">
                                                        Deep verification may take longer but provides the most accurate results.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                <div>
                                    <h3 className="mb-4 text-lg font-medium">Recent Verification Results</h3>
                                    <ScrollArea className="h-[300px]">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Email</TableHead>
                                                    <TableHead>Status</TableHead>
                                                    <TableHead>Type</TableHead>
                                                    <TableHead>Risk</TableHead>
                                                    <TableHead>Date Verified</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {verificationResults.map((result, i) => (
                                                    <TableRow key={i}>
                                                        <TableCell className="font-medium">{result.email}</TableCell>
                                                        <TableCell>
                                                            {result.status === "Valid" ? (
                                                                <div className="flex items-center text-green-500">
                                                                    <CheckCircle className="mr-1 h-4 w-4" />
                                                                    <span>Valid</span>
                                                                </div>
                                                            ) : result.status === "Invalid" ? (
                                                                <div className="flex items-center text-red-500">
                                                                    <XCircle className="mr-1 h-4 w-4" />
                                                                    <span>Invalid</span>
                                                                </div>
                                                            ) : (
                                                                <div className="flex items-center text-yellow-500">
                                                                    <AlertCircle className="mr-1 h-4 w-4" />
                                                                    <span>Risky</span>
                                                                </div>
                                                            )}
                                                        </TableCell>
                                                        <TableCell>
                                                            <Badge variant="outline">{result.type}</Badge>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className="flex items-center gap-2">
                                                                <Progress
                                                                    value={result.risk}
                                                                    className="h-2 w-16"
                                                                    indicatorColor={
                                                                        result.risk <= 20
                                                                            ? "bg-green-500"
                                                                            : result.risk <= 50
                                                                                ? "bg-yellow-500"
                                                                                : "bg-red-500"
                                                                    }
                                                                />
                                                                <span className="text-xs">{result.risk}%</span>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>{result.date}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </ScrollArea>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

const leadResults = [
    {
        id: "1",
        name: "John Smith",
        title: "Marketing Director",
        company: "Tech Solutions Inc.",
        email: "john.smith@techsolutions.com",
        quality: 92,
        status: "Verified",
    },
    {
        id: "2",
        name: "Sarah Johnson",
        title: "SEO Specialist",
        company: "Digital Marketing Agency",
        email: "sarah.j@digitalmarketing.com",
        quality: 85,
        status: "Verified",
    },
    {
        id: "3",
        name: "Michael Brown",
        title: "E-commerce Manager",
        company: "Online Retail Ltd.",
        email: "m.brown@onlineretail.com",
        quality: 78,
        status: "Pending",
    },
    {
        id: "4",
        name: "Emily Davis",
        title: "Content Strategist",
        company: "Media Group",
        email: "emily.davis@mediagroup.com",
        quality: 65,
        status: "Pending",
    },
    {
        id: "5",
        name: "David Wilson",
        title: "CTO",
        company: "Tech Innovators",
        email: "david@techinnovators.com",
        quality: 95,
        status: "Verified",
    },
    {
        id: "6",
        name: "Jennifer Lee",
        title: "Digital Strategist",
        company: "Strategy Partners",
        email: "jennifer@strategypartners.com",
        quality: 45,
        status: "Invalid",
    },
    {
        id: "7",
        name: "Robert Chen",
        title: "Product Marketing",
        company: "Global Solutions",
        email: "robert.c@globalsolutions.com",
        quality: 72,
        status: "Pending",
    },
];

const verificationResults = [
    {
        email: "john.smith@techsolutions.com",
        status: "Valid",
        type: "Personal",
        risk: 5,
        date: "2025-07-12",
    },
    {
        email: "info@company.com",
        status: "Risky",
        type: "Role-based",
        risk: 65,
        date: "2025-07-12",
    },
    {
        email: "sarah.johnson@example.com",
        status: "Invalid",
        type: "Personal",
        risk: 90,
        date: "2025-07-12",
    },
    {
        email: "michael.brown@realcompany.com",
        status: "Valid",
        type: "Personal",
        risk: 10,
        date: "2025-07-11",
    },
    {
        email: "sales@business.co",
        status: "Risky",
        type: "Role-based",
        risk: 50,
        date: "2025-07-11",
    },
    {
        email: "david.wilson@techfirm.io",
        status: "Valid",
        type: "Personal",
        risk: 15,
        date: "2025-07-11",
    },
    {
        email: "nonexistent@domain.com",
        status: "Invalid",
        type: "Personal",
        risk: 95,
        date: "2025-07-10",
    },
    {
        email: "emily.davis@agency.net",
        status: "Valid",
        type: "Personal",
        risk: 8,
        date: "2025-07-10",
    },
    {
        email: "support@company.org",
        status: "Risky",
        type: "Role-based",
        risk: 55,
        date: "2025-07-10",
    },
];
