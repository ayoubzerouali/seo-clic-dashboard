import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { KeywordTrendsChart } from "@/components/new/keyword-trends-chart";
import { keywordTrendsData } from "@/data/dashboard-data";
import {
    Calendar,
    Clock,
    Download,
    FileDown,
    FileSpreadsheet,
    LineChart,
    Mail,
    MailQuestion,
    Printer,
    RefreshCw,
    Save,
    Share2,
    Table2,
} from "lucide-react";

export function Reports() {
    const [reportType, setReportType] = useState("seo");
    const [exportFormat, setExportFormat] = useState("pdf");

    return (
        <div className="space-y-8">


            <Tabs defaultValue="generate" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="generate">Generate Report</TabsTrigger>
                    <TabsTrigger value="schedule">Schedule Reports</TabsTrigger>
                    <TabsTrigger value="history">Report History</TabsTrigger>
                </TabsList>

                <TabsContent value="generate" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Create New Report</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="report-name">Report Name</Label>
                                        <Input
                                            id="report-name"
                                            placeholder="Enter a name for your report"
                                            defaultValue="SEO Performance Report"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Report Type</Label>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div
                                                className={`flex cursor-pointer flex-col items-center rounded-md border p-4 ${reportType === "seo" ? "border-primary bg-muted" : ""
                                                    }`}
                                                onClick={() => setReportType("seo")}
                                            >
                                                <LineChart className="mb-2 h-8 w-8 text-primary" />
                                                <span className="text-sm font-medium">SEO Performance</span>
                                            </div>
                                            <div
                                                className={`flex cursor-pointer flex-col items-center rounded-md border p-4 ${reportType === "leads" ? "border-primary bg-muted" : ""
                                                    }`}
                                                onClick={() => setReportType("leads")}
                                            >
                                                <MailQuestion className="mb-2 h-8 w-8 text-primary" />
                                                <span className="text-sm font-medium">Lead Generation</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Date Range</Label>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="rounded-md border p-2">
                                                <Label htmlFor="start-date" className="text-xs">
                                                    Start Date
                                                </Label>
                                                <div className="flex items-center">
                                                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                                                    <Input
                                                        id="start-date"
                                                        type="date"
                                                        defaultValue="2025-06-01"
                                                        className="border-0 p-0 shadow-none focus-visible:ring-0"
                                                    />
                                                </div>
                                            </div>
                                            <div className="rounded-md border p-2">
                                                <Label htmlFor="end-date" className="text-xs">
                                                    End Date
                                                </Label>
                                                <div className="flex items-center">
                                                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                                                    <Input
                                                        id="end-date"
                                                        type="date"
                                                        defaultValue="2025-07-01"
                                                        className="border-0 p-0 shadow-none focus-visible:ring-0"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Export Format</Label>
                                        <div className="grid grid-cols-3 gap-2">
                                            <div
                                                className={`flex cursor-pointer flex-col items-center rounded-md border p-2 ${exportFormat === "pdf" ? "border-primary bg-muted" : ""
                                                    }`}
                                                onClick={() => setExportFormat("pdf")}
                                            >
                                                <FileDown className="mb-1 h-4 w-4" />
                                                <span className="text-xs">PDF</span>
                                            </div>
                                            <div
                                                className={`flex cursor-pointer flex-col items-center rounded-md border p-2 ${exportFormat === "excel" ? "border-primary bg-muted" : ""
                                                    }`}
                                                onClick={() => setExportFormat("excel")}
                                            >
                                                <FileSpreadsheet className="mb-1 h-4 w-4" />
                                                <span className="text-xs">Excel</span>
                                            </div>
                                            <div
                                                className={`flex cursor-pointer flex-col items-center rounded-md border p-2 ${exportFormat === "csv" ? "border-primary bg-muted" : ""
                                                    }`}
                                                onClick={() => setExportFormat("csv")}
                                            >
                                                <Table2 className="mb-1 h-4 w-4" />
                                                <span className="text-xs">CSV</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium">Report Sections</h3>

                                    {reportType === "seo" ? (
                                        <div className="space-y-2 rounded-md border p-4">
                                            <div className="flex items-center space-x-2">
                                                <Switch id="overview" defaultChecked />
                                                <Label htmlFor="overview">Overview & Summary</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Switch id="keywords" defaultChecked />
                                                <Label htmlFor="keywords">Keyword Rankings</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Switch id="traffic" defaultChecked />
                                                <Label htmlFor="traffic">Traffic Analysis</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Switch id="backlinks" defaultChecked />
                                                <Label htmlFor="backlinks">Backlink Profile</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Switch id="competitors" defaultChecked />
                                                <Label htmlFor="competitors">Competitor Comparison</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Switch id="recommendations" defaultChecked />
                                                <Label htmlFor="recommendations">Recommendations</Label>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-2 rounded-md border p-4">
                                            <div className="flex items-center space-x-2">
                                                <Switch id="lead-overview" defaultChecked />
                                                <Label htmlFor="lead-overview">Lead Overview</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Switch id="lead-sources" defaultChecked />
                                                <Label htmlFor="lead-sources">Lead Sources</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Switch id="lead-quality" defaultChecked />
                                                <Label htmlFor="lead-quality">Lead Quality Analysis</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Switch id="conversion" defaultChecked />
                                                <Label htmlFor="conversion">Conversion Rates</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Switch id="lead-engagement" defaultChecked />
                                                <Label htmlFor="lead-engagement">Engagement Metrics</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Switch id="lead-list" defaultChecked />
                                                <Label htmlFor="lead-list">Lead List</Label>
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <h3 className="text-sm font-medium">Additional Options</h3>
                                        <div className="rounded-md border p-4">
                                            <div className="flex items-center space-x-2">
                                                <Switch id="include-charts" defaultChecked />
                                                <Label htmlFor="include-charts">Include Charts & Graphs</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Switch id="include-raw" defaultChecked />
                                                <Label htmlFor="include-raw">Include Raw Data</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Switch id="compare-previous" defaultChecked />
                                                <Label htmlFor="compare-previous">Compare with Previous Period</Label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-2">
                                        <Button variant="outline">
                                            <Save className="mr-2 h-4 w-4" />
                                            Save Settings
                                        </Button>
                                        <Button>
                                            <Download className="mr-2 h-4 w-4" />
                                            Generate Report
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="rounded-md border border-dashed p-4 text-center">
                                    <h3 className="text-xl font-bold">SEO Performance Report</h3>
                                    <p className="text-sm text-muted-foreground">
                                        June 1, 2025 - July 1, 2025
                                    </p>
                                </div>

                                <div className="rounded-md border p-4">
                                    <h3 className="mb-4 text-lg font-medium">Keyword Performance</h3>
                                    <KeywordTrendsChart
                                        data={keywordTrendsData}
                                        title="Keyword Performance Trends"
                                        description="Track position, volume, and clicks over time"
                                    />
                                </div>

                                <div className="flex justify-end gap-2">
                                    <Button variant="outline">
                                        <RefreshCw className="mr-2 h-4 w-4" />
                                        Refresh Preview
                                    </Button>
                                    <Button variant="outline">
                                        <Share2 className="mr-2 h-4 w-4" />
                                        Share
                                    </Button>
                                    <Button variant="outline">
                                        <Printer className="mr-2 h-4 w-4" />
                                        Print
                                    </Button>
                                    <Button>
                                        <Download className="mr-2 h-4 w-4" />
                                        Download
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="schedule" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Schedule Automated Reports</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="schedule-name">Report Name</Label>
                                        <Input
                                            id="schedule-name"
                                            placeholder="Enter a name for your scheduled report"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="report-template">Report Template</Label>
                                        <select
                                            id="report-template"
                                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                        >
                                            <option value="seo-weekly">SEO Weekly Performance</option>
                                            <option value="seo-monthly">SEO Monthly Overview</option>
                                            <option value="leads-weekly">Weekly Lead Generation</option>
                                            <option value="leads-monthly">Monthly Lead Analysis</option>
                                            <option value="custom">Custom Template</option>
                                        </select>
                                    </div>
                                </div>

                                <Separator />

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label>Frequency</Label>
                                        <div className="grid grid-cols-3 gap-2">
                                            <div className="flex flex-col items-center rounded-md border p-2">
                                                <input
                                                    type="radio"
                                                    id="daily"
                                                    name="frequency"
                                                    className="h-4 w-4"
                                                />
                                                <Label htmlFor="daily" className="mt-1 text-xs">
                                                    Daily
                                                </Label>
                                            </div>
                                            <div className="flex flex-col items-center rounded-md border bg-muted p-2">
                                                <input
                                                    type="radio"
                                                    id="weekly"
                                                    name="frequency"
                                                    className="h-4 w-4"
                                                    defaultChecked
                                                />
                                                <Label htmlFor="weekly" className="mt-1 text-xs">
                                                    Weekly
                                                </Label>
                                            </div>
                                            <div className="flex flex-col items-center rounded-md border p-2">
                                                <input
                                                    type="radio"
                                                    id="monthly"
                                                    name="frequency"
                                                    className="h-4 w-4"
                                                />
                                                <Label htmlFor="monthly" className="mt-1 text-xs">
                                                    Monthly
                                                </Label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Day & Time</Label>
                                        <div className="grid grid-cols-2 gap-2">
                                            <select
                                                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                defaultValue="1"
                                            >
                                                <option value="1">Monday</option>
                                                <option value="2">Tuesday</option>
                                                <option value="3">Wednesday</option>
                                                <option value="4">Thursday</option>
                                                <option value="5">Friday</option>
                                                <option value="6">Saturday</option>
                                                <option value="0">Sunday</option>
                                            </select>
                                            <div className="flex items-center rounded-md border px-3 py-2">
                                                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    type="time"
                                                    defaultValue="08:00"
                                                    className="border-0 p-0 shadow-none focus-visible:ring-0"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-2">
                                    <Label>Delivery Options</Label>
                                    <div className="rounded-md border p-4">
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    id="email-delivery"
                                                    className="h-4 w-4 rounded border-input"
                                                    defaultChecked
                                                />
                                                <Label htmlFor="email-delivery">Email Delivery</Label>
                                            </div>

                                            <div className="grid grid-cols-1 gap-2 pl-6 md:grid-cols-2">
                                                <Input
                                                    placeholder="Enter email address"
                                                    defaultValue="john.doe@example.com"
                                                />
                                                <Button variant="outline" size="sm">
                                                    <Mail className="mr-2 h-4 w-4" />
                                                    Add Recipient
                                                </Button>
                                            </div>

                                            <div className="flex flex-wrap gap-2 pl-6">
                                                <Badge variant="secondary" className="flex items-center gap-1">
                                                    john.doe@example.com
                                                    <button className="ml-1 rounded-full p-0.5 hover:bg-muted-foreground/20">
                                                        <X className="h-3 w-3" />
                                                    </button>
                                                </Badge>
                                                <Badge variant="secondary" className="flex items-center gap-1">
                                                    team@example.com
                                                    <button className="ml-1 rounded-full p-0.5 hover:bg-muted-foreground/20">
                                                        <X className="h-3 w-3" />
                                                    </button>
                                                </Badge>
                                            </div>

                                            <div className="space-y-2 pt-2">
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="checkbox"
                                                        id="cloud-storage"
                                                        className="h-4 w-4 rounded border-input"
                                                    />
                                                    <Label htmlFor="cloud-storage">Save to Cloud Storage</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="checkbox"
                                                        id="dashboard-alert"
                                                        className="h-4 w-4 rounded border-input"
                                                        defaultChecked
                                                    />
                                                    <Label htmlFor="dashboard-alert">Dashboard Alert</Label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end gap-2">
                                    <Button variant="outline">Cancel</Button>
                                    <Button>Schedule Report</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Active Scheduled Reports</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4 divide-y">
                                {[
                                    {
                                        name: "Weekly SEO Performance",
                                        schedule: "Monday at 8:00 AM",
                                        recipients: 2,
                                        nextReport: "2025-07-15",
                                        active: true,
                                    },
                                    {
                                        name: "Monthly Lead Analysis",
                                        schedule: "1st of month at 9:00 AM",
                                        recipients: 3,
                                        nextReport: "2025-08-01",
                                        active: true,
                                    },
                                    {
                                        name: "Competitor Analysis Report",
                                        schedule: "Friday at 4:00 PM",
                                        recipients: 1,
                                        nextReport: "2025-07-12",
                                        active: false,
                                    },
                                ].map((report, i) => (
                                    <div key={i} className="py-4 first:pt-0 last:pb-0">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="font-medium">{report.name}</h3>
                                                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="h-3.5 w-3.5" />
                                                        <span>{report.schedule}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Mail className="h-3.5 w-3.5" />
                                                        <span>{report.recipients} recipients</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-3.5 w-3.5" />
                                                        <span>Next: {report.nextReport}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Badge
                                                    variant={report.active ? "default" : "secondary"}
                                                    className="mb-2"
                                                >
                                                    {report.active ? "Active" : "Paused"}
                                                </Badge>
                                                <div className="flex justify-end gap-2">
                                                    <Button variant="ghost" size="sm">
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        variant={report.active ? "outline" : "default"}
                                                        size="sm"
                                                    >
                                                        {report.active ? "Pause" : "Activate"}
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="history" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Report History</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4 divide-y">
                                {[
                                    {
                                        name: "SEO Performance Report - June 2025",
                                        date: "2025-07-05 09:32 AM",
                                        type: "SEO Performance",
                                        size: "2.4 MB",
                                        pages: 15,
                                        generatedBy: "Scheduled",
                                    },
                                    {
                                        name: "Lead Generation Analysis - Q2 2025",
                                        date: "2025-07-02 02:15 PM",
                                        type: "Lead Generation",
                                        size: "3.7 MB",
                                        pages: 22,
                                        generatedBy: "Manual",
                                    },
                                    {
                                        name: "Competitor Tracking Report - June 2025",
                                        date: "2025-06-30 10:45 AM",
                                        type: "Competitor Analysis",
                                        size: "1.8 MB",
                                        pages: 10,
                                        generatedBy: "Scheduled",
                                    },
                                    {
                                        name: "Weekly SEO Summary - Week 26",
                                        date: "2025-06-28 08:00 AM",
                                        type: "SEO Performance",
                                        size: "1.2 MB",
                                        pages: 8,
                                        generatedBy: "Scheduled",
                                    },
                                    {
                                        name: "Product Optimization Opportunities",
                                        date: "2025-06-25 03:22 PM",
                                        type: "Product SEO",
                                        size: "4.5 MB",
                                        pages: 28,
                                        generatedBy: "Manual",
                                    },
                                ].map((report, i) => (
                                    <div key={i} className="py-4 first:pt-0 last:pb-0">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="font-medium">{report.name}</h3>
                                                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                                                    <span>{report.date}</span>
                                                    <span>•</span>
                                                    <span>{report.type}</span>
                                                    <span>•</span>
                                                    <span>{report.size}</span>
                                                    <span>•</span>
                                                    <span>{report.pages} pages</span>
                                                    <span>•</span>
                                                    <Badge variant="outline">{report.generatedBy}</Badge>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button variant="outline" size="sm">
                                                    <Share2 className="mr-2 h-4 w-4" />
                                                    Share
                                                </Button>
                                                <Button size="sm">
                                                    <Download className="mr-2 h-4 w-4" />
                                                    Download
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

// Missing icon import
const X = (props: any) => <lucide.X {...props} />;
