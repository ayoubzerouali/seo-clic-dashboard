import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { OverviewTable, renderTrend, renderLink } from "@/components/overview-table";
import {
    // ArrowUpDown,
    // BarChart3,
    Globe,
    // Users,
    ExternalLink,
    PlusCircle,
    Bell,
    Trash2,
} from "lucide-react";
import { KeywordTrendsChart } from "@/components/new/keyword-trends-chart";
import {
    // topKeywordsData,
    keywordTrendsData
} from "@/data/dashboard-data";

export function CompetitorIntelligence() {
    const [competitorUrl, setCompetitorUrl] = useState("");
    const [competitors, setCompetitors] = useState([
        {
            id: "1",
            name: "Main Competitor",
            domain: "maincompetitor.com",
            trafficShare: 35,
            keywordsOverlap: 421,
            backlinks: 2547,
            tracked: true,
        },
        {
            id: "2",
            name: "Industry Leader",
            domain: "industryleader.com",
            trafficShare: 52,
            keywordsOverlap: 276,
            backlinks: 9842,
            tracked: true,
        },
        {
            id: "3",
            name: "Niche Player",
            domain: "nicheplayer.com",
            trafficShare: 18,
            keywordsOverlap: 192,
            backlinks: 1128,
            tracked: false,
        },
    ]);

    const handleAddCompetitor = (e: React.FormEvent) => {
        e.preventDefault();
        if (competitorUrl) {
            // Extract domain from URL
            const domain = competitorUrl
                .replace(/^https?:\/\//, "")
                .replace(/^www\./, "")
                .split("/")[0];

            // Check if already exists
            if (!competitors.some((comp) => comp.domain === domain)) {
                setCompetitors([
                    ...competitors,
                    {
                        id: (competitors.length + 1).toString(),
                        name: domain.charAt(0).toUpperCase() + domain.slice(1).split(".")[0],
                        domain,
                        trafficShare: Math.floor(Math.random() * 30) + 5,
                        keywordsOverlap: Math.floor(Math.random() * 300) + 100,
                        backlinks: Math.floor(Math.random() * 5000) + 500,
                        tracked: true,
                    },
                ]);
            }
            setCompetitorUrl("");
        }
    };

    const competitorKeywords = [
        {
            id: "1",
            keyword: "seo analysis tool",
            yourPosition: 8,
            competitorPosition: 3,
            gap: -5,
            volume: 4800,
            url: "https://maincompetitor.com/seo-tool",
        },
        {
            id: "2",
            keyword: "keyword research software",
            yourPosition: 4,
            competitorPosition: 7,
            gap: 3,
            volume: 12000,
            url: "https://maincompetitor.com/keyword-tool",
        },
        {
            id: "3",
            keyword: "competitor spy tool",
            yourPosition: 15,
            competitorPosition: 2,
            gap: -13,
            volume: 3600,
            url: "https://maincompetitor.com/competitor-analysis",
        },
        {
            id: "4",
            keyword: "seo dashboard",
            yourPosition: 5,
            competitorPosition: 9,
            gap: 4,
            volume: 6200,
            url: "https://maincompetitor.com/dashboard",
        },
        {
            id: "5",
            keyword: "backlink analyzer",
            yourPosition: 12,
            competitorPosition: 4,
            gap: -8,
            volume: 7800,
            url: "https://maincompetitor.com/backlinks",
        },
    ];

    const competitorProducts = [
        {
            id: "1",
            name: "SEO Intelligence Suite",
            price: "$99/mo",
            priceChange: "+$10",
            rating: 4.7,
            reviews: 328,
            features: ["Keyword Tracking", "Backlink Analysis", "Competitor Insights"],
            url: "https://maincompetitor.com/seo-suite",
        },
        {
            id: "2",
            name: "Keyword Research Tool Pro",
            price: "$49/mo",
            priceChange: "0",
            rating: 4.5,
            reviews: 215,
            features: ["Keyword Suggestions", "Volume Analysis", "Trend Tracking"],
            url: "https://maincompetitor.com/keyword-tool",
        },
        {
            id: "3",
            name: "Lead Generation Expert",
            price: "$79/mo",
            priceChange: "-$10",
            rating: 4.2,
            reviews: 186,
            features: ["Email Finder", "Contact Verification", "CRM Integration"],
            url: "https://maincompetitor.com/lead-gen",
        },
    ];

    return (
        <div className="space-y-8">

            <Card>
                <CardHeader>
                    <CardTitle>Add Competitor</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleAddCompetitor} className="flex flex-col gap-4 sm:flex-row">
                        <div className="relative flex-1">
                            <Globe className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="url"
                                placeholder="Enter competitor website URL..."
                                className="pl-8"
                                value={competitorUrl}
                                onChange={(e) => setCompetitorUrl(e.target.value)}
                            />
                        </div>
                        <Button type="submit">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Competitor
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-3">
                {competitors
                    .filter((comp) => comp.tracked)
                    .slice(0, 3)
                    .map((competitor) => (
                        <Card key={competitor.id}>
                            <CardHeader className="pb-2">
                                <div className="flex items-start justify-between">
                                    <CardTitle className="text-lg">{competitor.name}</CardTitle>
                                    <a
                                        href={`https://${competitor.domain}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {competitor.domain}
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <span>Traffic Share:</span>
                                            <span className="font-medium">{competitor.trafficShare}%</span>
                                        </div>
                                        <Progress value={competitor.trafficShare} className="h-1" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <span className="text-sm text-muted-foreground">
                                                Keywords
                                            </span>
                                            <p className="text-xl font-bold">
                                                {competitor.keywordsOverlap}
                                            </p>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-sm text-muted-foreground">
                                                Backlinks
                                            </span>
                                            <p className="text-xl font-bold">
                                                {competitor.backlinks.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-between">
                                        <Button variant="outline" size="sm">
                                            <Bell className="mr-2 h-3 w-3" />
                                            Alert
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => {
                                                setCompetitors(
                                                    competitors.map((comp) =>
                                                        comp.id === competitor.id
                                                            ? { ...comp, tracked: false }
                                                            : comp
                                                    )
                                                );
                                            }}
                                        >
                                            <Trash2 className="mr-2 h-3 w-3" />
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
            </div>

            <Tabs defaultValue="keywords" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="keywords">Keywords Compare</TabsTrigger>
                    <TabsTrigger value="products">Product Tracking</TabsTrigger>
                    <TabsTrigger value="backlinks">Backlink Analysis</TabsTrigger>
                </TabsList>

                <TabsContent value="keywords" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Keyword Gap Analysis: You vs. {competitors[0].name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <KeywordTrendsChart
                                data={keywordTrendsData}
                                title="Ranking Positions Over Time"
                                description="Average position changes for top keywords"
                            />

                            <div>
                                <h3 className="mb-4 text-lg font-medium">
                                    Competitor Keywords
                                </h3>
                                <OverviewTable
                                    data={competitorKeywords}
                                    columns={[
                                        { header: "Keyword", accessorKey: "keyword" },
                                        {
                                            header: "Your Position",
                                            accessorKey: "yourPosition",
                                            cell: (item) => (
                                                <Badge
                                                    variant={
                                                        item.yourPosition <= 3
                                                            ? "default"
                                                            : item.yourPosition <= 10
                                                                ? "secondary"
                                                                : "outline"
                                                    }
                                                >
                                                    {item.yourPosition}
                                                </Badge>
                                            ),
                                        },
                                        {
                                            header: "Competitor",
                                            accessorKey: "competitorPosition",
                                            cell: (item) => (
                                                <Badge
                                                    variant={
                                                        item.competitorPosition <= 3
                                                            ? "default"
                                                            : item.competitorPosition <= 10
                                                                ? "secondary"
                                                                : "outline"
                                                    }
                                                >
                                                    {item.competitorPosition}
                                                </Badge>
                                            ),
                                        },
                                        {
                                            header: "Gap",
                                            accessorKey: "gap",
                                            cell: (item) => renderTrend(item.gap),
                                        },
                                        { header: "Volume", accessorKey: "volume" },
                                        {
                                            header: "Competitor URL",
                                            accessorKey: "url",
                                            cell: (item) => renderLink(item.url),
                                        },
                                    ]}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="products" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Product Comparison</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {competitorProducts.map((product) => (
                                    <Card key={product.id} className="overflow-hidden">
                                        <div className="border-b bg-muted/40 p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-lg font-medium">
                                                        {product.name}
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <span>Rating: {product.rating}</span>
                                                        <span>•</span>
                                                        <span>{product.reviews} reviews</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="text-right">
                                                        <div className="text-lg font-bold">
                                                            {product.price}
                                                        </div>
                                                        {product.priceChange !== "0" && (
                                                            <div
                                                                className={
                                                                    product.priceChange.startsWith("+")
                                                                        ? "text-red-500"
                                                                        : "text-green-500"
                                                                }
                                                            >
                                                                {product.priceChange}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <Button variant="outline" size="sm" asChild>
                                                        <a
                                                            href={product.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <ExternalLink className="mr-1 h-3 w-3" />
                                                            View
                                                        </a>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <CardContent className="p-4">
                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="mb-2 text-sm font-medium">Features</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {product.features.map((feature, i) => (
                                                            <Badge key={i} variant="secondary">
                                                                {feature}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <Button size="sm">
                                                        <Bell className="mr-2 h-4 w-4" />
                                                        Track Price Changes
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="backlinks" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Backlink Analysis</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div className="grid gap-4 md:grid-cols-3">
                                    <Card>
                                        <CardContent className="pt-6">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold">
                                                    {competitors[0].backlinks.toLocaleString()}
                                                </div>
                                                <p className="text-xs text-muted-foreground">
                                                    Total Backlinks
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className="pt-6">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold">432</div>
                                                <p className="text-xs text-muted-foreground">
                                                    Referring Domains
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className="pt-6">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold">76</div>
                                                <p className="text-xs text-muted-foreground">
                                                    New Backlinks (30 days)
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div>
                                    <h3 className="mb-4 text-lg font-medium">
                                        Top Backlinks
                                    </h3>
                                    <OverviewTable
                                        data={[
                                            {
                                                id: "1",
                                                source: "industry-news.com",
                                                targetPage: "/competitor-tool-review",
                                                domainAuthority: 78,
                                                linkType: "Dofollow",
                                                discovered: "2025-07-02",
                                                url: "https://industry-news.com/competitor-tool-review",
                                            },
                                            {
                                                id: "2",
                                                source: "seo-tutorials.com",
                                                targetPage: "/best-tools",
                                                domainAuthority: 65,
                                                linkType: "Dofollow",
                                                discovered: "2025-06-28",
                                                url: "https://seo-tutorials.com/best-tools",
                                            },
                                            {
                                                id: "3",
                                                source: "marketing-blog.com",
                                                targetPage: "/reviews/seo-tools",
                                                domainAuthority: 72,
                                                linkType: "Dofollow",
                                                discovered: "2025-06-25",
                                                url: "https://marketing-blog.com/reviews/seo-tools",
                                            },
                                            {
                                                id: "4",
                                                source: "digital-weekly.com",
                                                targetPage: "/resources",
                                                domainAuthority: 69,
                                                linkType: "Nofollow",
                                                discovered: "2025-06-20",
                                                url: "https://digital-weekly.com/resources",
                                            },
                                            {
                                                id: "5",
                                                source: "tech-magazine.net",
                                                targetPage: "/seo-software-comparison",
                                                domainAuthority: 81,
                                                linkType: "Dofollow",
                                                discovered: "2025-06-15",
                                                url: "https://tech-magazine.net/seo-software-comparison",
                                            },
                                        ]}
                                        columns={[
                                            { header: "Source", accessorKey: "source" },
                                            { header: "Target Page", accessorKey: "targetPage" },
                                            {
                                                header: "Domain Authority",
                                                accessorKey: "domainAuthority",
                                                cell: (item) => {
                                                    let color = "bg-green-500";
                                                    if (item.domainAuthority < 50) color = "bg-red-500";
                                                    else if (item.domainAuthority < 70) color = "bg-yellow-500";

                                                    return (
                                                        <div className="flex items-center gap-2">
                                                            <span>{item.domainAuthority}</span>
                                                            <div className="h-2 w-full max-w-[60px] rounded-full bg-muted">
                                                                <div
                                                                    className={`h-full rounded-full ${color}`}
                                                                    style={{ width: `${item.domainAuthority}%` }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    );
                                                },
                                            },
                                            {
                                                header: "Link Type",
                                                accessorKey: "linkType",
                                                cell: (item) => (
                                                    <Badge variant={item.linkType === "Dofollow" ? "default" : "secondary"}>
                                                        {item.linkType}
                                                    </Badge>
                                                ),
                                            },
                                            { header: "Discovered", accessorKey: "discovered" },
                                            {
                                                header: "URL",
                                                accessorKey: "url",
                                                cell: (item) => renderLink(item.url),
                                            },
                                        ]}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
