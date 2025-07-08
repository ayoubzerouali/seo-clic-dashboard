import { BarChartBig, Database, Link2, Users } from "lucide-react";
import { StatCard } from "@/components/new/stat-card";
import { KeywordTrendsChart } from "@/components/new/keyword-trends-chart";
import { OverviewTable, renderTrend, renderKeywordBadge, renderLink } from
    "@/components/overview-table";
import { statsData, keywordTrendsData, topKeywordsData as keyData, recentLeadsData }
    from "@/data/dashboard-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import { type BreadcrumbItem } from '@/types';
import { PlaceholderPattern } from "@/components/ui/placeholder-pattern";
import { Suspense } from "react";
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
export default function Dashboard({ statData, topKeywordsData }: { statData: string, topKeywords: typeof keyData }) {
    console.log(topKeywordsData)
    return (
        <Suspense fallback={<Loading />}>
            <DashboardUi statData={statData} topKeywordsData={topKeywordsData} />
        </Suspense>
    )
}
export function Loading() {
    return (
        <>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="border-sidebar-border/70 dark:border-sidebar-border
                    relative aspect-video overflow-hidden rounded-xl border">
                    <PlaceholderPattern className="absolute inset-0 size-full
                        stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border
                    relative aspect-video overflow-hidden rounded-xl border">
                    <PlaceholderPattern className="absolute inset-0 size-full
                        stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border
                    relative aspect-video overflow-hidden rounded-xl border">
                    <PlaceholderPattern className="absolute inset-0 size-full
                        stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
            <div className="border-sidebar-border/70 dark:border-sidebar-border
                relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border
                md:min-h-min">
                <PlaceholderPattern className="absolute inset-0 size-full
                    stroke-neutral-900/20 dark:stroke-neutral-100/20 " />
            </div>
        </ >
    )
}

export function DashboardUi({ statData, topKeywordsData }) {
    console.log(topKeywordsData)
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />


            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                    <p className="text-muted-foreground">
                        Your SEO and lead generation overview at a glance.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <StatCard
                        title="Total Leads"
                        value={statsData[0].value}
                        description={statsData[0].description}
                        icon={<Users className="h-4 w-4" />}
                        trend={statsData[0].trend}
                    />
                    <StatCard
                        title="Ranking Keywords"
                        value={statData}
                        description={statsData[1].description}
                        icon={<BarChartBig className="h-4 w-4" />}
                        trend={statsData[1].trend}
                    />
                    <StatCard
                        title="Average Position"
                        value={statsData[2].value}
                        description={statsData[2].description}
                        icon={<Database className="h-4 w-4" />}
                        trend={statsData[2].trend}
                    />
                    <StatCard
                        title="Backlinks"
                        value={statsData[3].value}
                        description={statsData[3].description}
                        icon={<Link2 className="h-4 w-4" />}
                        trend={statsData[3].trend}
                    />
                </div>

                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                    <KeywordTrendsChart
                        data={keywordTrendsData}
                        title="Keyword Performance Trends"
                        description="Track position, volume, and clicks over time"
                    />
                </div>

                <Tabs defaultValue="keywords" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="keywords">Top Keywords</TabsTrigger>
                        <TabsTrigger value="leads">Recent Leads</TabsTrigger>
                    </TabsList>
                    <TabsContent value="keywords" className="space-y-4">
                        <OverviewTable
                            data={topKeywordsData}
                            columns={[
                                { header: "Keyword", accessorKey: "keyword" },
                                {
                                    header: "Position",
                                    accessorKey: "position",
                                    cell: (item) => renderKeywordBadge(item.position),
                                },
                                { header: "Volume", accessorKey: "volume" },
                                {
                                    header: "Difficulty",
                                    accessorKey: "difficulty",
                                    cell: (item) => {
                                        let color = "bg-green-500";
                                        if (item.difficulty > 70) color = "bg-red-500";
                                        else if (item.difficulty > 40) color = "bg-yellow-500";

                                        return (
                                            <div className="flex items-center gap-2">
                                                <span>{item.difficulty}</span>
                                                <div className="h-2 w-full max-w-[100px]
                                        rounded-full bg-muted">
                                                    <div
                                                        className={`h-full rounded-full
                                                    ${color}`}
                                                        style={{ width: `${item.difficulty}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        );
                                    },
                                },
                                {
                                    header: "Trend",
                                    accessorKey: "trend",
                                    cell: (item) => renderTrend(item.trend),
                                },
                                {
                                    header: "URL",
                                    accessorKey: "url",
                                    cell: (item) => renderLink(item.url),
                                },
                            ]}
                        />
                    </TabsContent>
                    <TabsContent value="leads" className="space-y-4">
                        <OverviewTable
                            data={recentLeadsData}
                            columns={[
                                { header: "Name", accessorKey: "name" },
                                { header: "Company", accessorKey: "company" },
                                { header: "Email", accessorKey: "email" },
                                { header: "Source", accessorKey: "source" },
                                { header: "Date Added", accessorKey: "dateAdded" },
                                {
                                    header: "Status",
                                    accessorKey: "status",
                                    cell: (item) => {
                                        const statusColors = {
                                            "New": "bg-blue-500",
                                            "Contacted": "bg-yellow-500",
                                            "Qualified": "bg-green-500",
                                            "Lost": "bg-red-500",
                                        };
                                        return (
                                            <Badge className={statusColors[
                                                item.status as keyof typeof statusColors]}>
                                                {item.status}
                                            </Badge>
                                        );
                                    },
                                },
                            ]}
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}


