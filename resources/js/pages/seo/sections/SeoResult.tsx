import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle, XCircle, AlertCircle, Clock, FileSearch, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";


export function SeoResult() {
    return (
        <>
            <div className="grid gap-4 md:grid-cols-4">
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-center">
                            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                                <CheckCircle className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-medium">SEO Score</h3>
                            <div className="my-2 text-3xl font-bold">76/100</div>
                            <p className="text-xs text-muted-foreground">Above average</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-center">
                            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                                <Clock className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-medium">Page Speed</h3>
                            <div className="my-2 text-3xl font-bold">3.2s</div>
                            <p className="text-xs text-muted-foreground">Needs improvement</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-center">
                            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                                <FileSearch className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-medium">Issues Found</h3>
                            <div className="my-2 text-3xl font-bold">12</div>
                            <p className="text-xs text-muted-foreground">5 critical, 7 warnings</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-center">
                            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                                <Lightbulb className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-medium">Opportunities</h3>
                            <div className="my-2 text-3xl font-bold">8</div>
                            <p className="text-xs text-muted-foreground">Potential improvements</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="issues" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="issues">Issues</TabsTrigger>
                    <TabsTrigger value="onpage">On-Page SEO</TabsTrigger>
                    <TabsTrigger value="performance">Performance</TabsTrigger>
                </TabsList>
                <TabsContent value="issues" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Issues Found</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[400px] pr-4">
                                <Accordion type="multiple" className="space-y-2">
                                    {auditIssues.map((issue, index) => (
                                        <AccordionItem value={`issue-${index}`} key={index}>
                                            <AccordionTrigger className="py-2">
                                                <div className="flex items-center gap-2">
                                                    {issue.severity === "critical" ? (
                                                        <XCircle className="h-5 w-5 text-red-500" />
                                                    ) : issue.severity === "warning" ? (
                                                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                                                    ) : (
                                                        <Lightbulb className="h-5 w-5 text-blue-500" />
                                                    )}
                                                    <span>{issue.title}</span>
                                                    <Badge
                                                        variant={
                                                            issue.severity === "critical"
                                                                ? "destructive"
                                                                : issue.severity === "warning"
                                                                    ? "default"
                                                                    : "outline"
                                                        }
                                                        className="ml-2"
                                                    >
                                                        {issue.severity}
                                                    </Badge>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="pl-7">
                                                <div className="space-y-2">
                                                    <p className="text-muted-foreground">
                                                        {issue.description}
                                                    </p>
                                                    <div className="rounded-md bg-muted p-3">
                                                        <h4 className="mb-2 text-sm font-medium">
                                                            How to fix:
                                                        </h4>
                                                        <p className="text-sm text-muted-foreground">
                                                            {issue.solution}
                                                        </p>
                                                    </div>
                                                    {issue.affectedPages && (
                                                        <div>
                                                            <h4 className="mb-1 text-sm font-medium">
                                                                Affected pages:
                                                            </h4>
                                                            <ul className="space-y-1 text-sm text-muted-foreground">
                                                                {issue.affectedPages.map((page, i) => (
                                                                    <li key={i} className="truncate">
                                                                        {page}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="onpage" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>On-Page SEO Analysis</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium">Meta Information</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="font-medium">Title Tags</p>
                                                <p className="text-sm text-muted-foreground">
                                                    5 pages need optimization
                                                </p>
                                            </div>
                                            <Badge variant="outline" className="ml-auto">
                                                70%
                                            </Badge>
                                        </div>
                                        <Progress value={70} className="h-2" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="font-medium">Meta Descriptions</p>
                                                <p className="text-sm text-muted-foreground">
                                                    8 pages need descriptions
                                                </p>
                                            </div>
                                            <Badge variant="outline" className="ml-auto">
                                                55%
                                            </Badge>
                                        </div>
                                        <Progress value={55} className="h-2" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="font-medium">Header Tags</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Well structured
                                                </p>
                                            </div>
                                            <Badge variant="outline" className="ml-auto">
                                                90%
                                            </Badge>
                                        </div>
                                        <Progress value={90} className="h-2" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="font-medium">Image Alt Text</p>
                                                <p className="text-sm text-muted-foreground">
                                                    12 images missing alt text
                                                </p>
                                            </div>
                                            <Badge variant="outline" className="ml-auto">
                                                63%
                                            </Badge>
                                        </div>
                                        <Progress value={63} className="h-2" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium">Content Analysis</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="font-medium">Keyword Usage</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Good distribution
                                                </p>
                                            </div>
                                            <Badge variant="outline" className="ml-auto">
                                                85%
                                            </Badge>
                                        </div>
                                        <Progress value={85} className="h-2" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="font-medium">Content Length</p>
                                                <p className="text-sm text-muted-foreground">
                                                    3 pages need more content
                                                </p>
                                            </div>
                                            <Badge variant="outline" className="ml-auto">
                                                72%
                                            </Badge>
                                        </div>
                                        <Progress value={72} className="h-2" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="font-medium">Internal Linking</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Needs improvement
                                                </p>
                                            </div>
                                            <Badge variant="outline" className="ml-auto">
                                                58%
                                            </Badge>
                                        </div>
                                        <Progress value={58} className="h-2" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="font-medium">Mobile Optimization</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Fully responsive
                                                </p>
                                            </div>
                                            <Badge variant="outline" className="ml-auto">
                                                95%
                                            </Badge>
                                        </div>
                                        <Progress value={95} className="h-2" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="performance" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Performance Metrics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-medium">First Contentful Paint</h3>
                                            <Badge variant="outline">2.1s</Badge>
                                        </div>
                                        <Progress
                                            value={60}
                                            className="h-2"
                                            indicatorColor="bg-yellow-500"
                                        />
                                        <p className="text-sm text-muted-foreground">
                                            Needs improvement (2.1s)
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-medium">
                                                Largest Contentful Paint
                                            </h3>
                                            <Badge variant="outline">3.2s</Badge>
                                        </div>
                                        <Progress
                                            value={45}
                                            className="h-2"
                                            indicatorColor="bg-red-500"
                                        />
                                        <p className="text-sm text-muted-foreground">
                                            Poor (3.2s)
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-medium">
                                                Cumulative Layout Shift
                                            </h3>
                                            <Badge variant="outline">0.03</Badge>
                                        </div>
                                        <Progress
                                            value={90}
                                            className="h-2"
                                            indicatorColor="bg-green-500"
                                        />
                                        <p className="text-sm text-muted-foreground">
                                            Good (0.03)
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-medium">Time to Interactive</h3>
                                            <Badge variant="outline">3.8s</Badge>
                                        </div>
                                        <Progress
                                            value={40}
                                            className="h-2"
                                            indicatorColor="bg-red-500"
                                        />
                                        <p className="text-sm text-muted-foreground">
                                            Poor (3.8s)
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-medium">Total Blocking Time</h3>
                                            <Badge variant="outline">250ms</Badge>
                                        </div>
                                        <Progress
                                            value={70}
                                            className="h-2"
                                            indicatorColor="bg-yellow-500"
                                        />
                                        <p className="text-sm text-muted-foreground">
                                            Needs improvement (250ms)
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-medium">Page Size</h3>
                                            <Badge variant="outline">2.4MB</Badge>
                                        </div>
                                        <Progress
                                            value={50}
                                            className="h-2"
                                            indicatorColor="bg-yellow-500"
                                        />
                                        <p className="text-sm text-muted-foreground">
                                            Average (2.4MB)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </>
    )
}

const auditIssues = [
    {
        title: "Missing meta descriptions",
        severity: "critical",
        description:
            "8 pages on your site are missing meta descriptions. Meta descriptions provide search engines with a summary of your page content.",
        solution:
            "Add unique, compelling meta descriptions to each page, keeping them under 160 characters and including relevant keywords.",
        affectedPages: [
            "https://example.com/products",
            "https://example.com/services",
            "https://example.com/about",
            "https://example.com/blog/post-1",
        ],
    },
    {
        title: "Slow page loading time",
        severity: "critical",
        description:
            "Your homepage takes 3.2 seconds to load, which is slower than the recommended 2 seconds. Slow loading times negatively impact user experience and search rankings.",
        solution:
            "Optimize images, enable browser caching, minify CSS/JavaScript, and consider using a content delivery network (CDN).",
        affectedPages: ["https://example.com/"],
    },
    {
        title: "Low text-to-HTML ratio",
        severity: "warning",
        description:
            "Several pages have a low text-to-HTML ratio (under 10%), which may indicate excessive code or insufficient content.",
        solution:
            "Increase the amount of useful text content relative to HTML code by removing unnecessary markup and adding more valuable content.",
        affectedPages: [
            "https://example.com/gallery",
            "https://example.com/contact",
        ],
    },
    {
        title: "Missing alt text for images",
        severity: "warning",
        description:
            "12 images on your site lack alt text, making them inaccessible to users with screen readers and harder for search engines to understand.",
        solution:
            "Add descriptive alt text to all images that conveys the purpose and content of the image using relevant keywords where appropriate.",
        affectedPages: [
            "https://example.com/products",
            "https://example.com/blog/post-2",
        ],
    },
    {
        title: "Duplicate title tags",
        severity: "critical",
        description:
            "3 pages have identical title tags, which can confuse search engines and reduce your visibility in search results.",
        solution:
            "Create unique, descriptive title tags for each page that accurately reflect the page content and include targeted keywords.",
        affectedPages: [
            "https://example.com/products/category-1",
            "https://example.com/products/category-2",
            "https://example.com/products/category-3",
        ],
    },
];
