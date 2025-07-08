
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewTable, renderTrend, renderKeywordBadge } from
    "@/components/overview-table";
import { Badge } from "@/components/ui/badge";

export function KeywordResultTabs({ keywords }) {
    const getKeywordData = () => {
        //return topKeywordsData.filter(
        //    (keyword) =>
        //        keyword.keyword.toLowerCase().includes(searchTerm.toLowerCase()) &&
        //        keyword.difficulty >= difficultyRange[0] &&
        //        keyword.difficulty <= difficultyRange[1] &&
        //        keyword.volume >= volumeRange[0] &&
        //        keyword.volume <= volumeRange[1]
        //);
        return keywords

    };
    return (
        <Tabs defaultValue="table" className="space-y-4">
            <TabsList>
                <TabsTrigger value="table">Table View</TabsTrigger>
                <TabsTrigger value="cloud">Keyword Cloud</TabsTrigger>
                <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
            </TabsList>
            <TabsContent value="table" className="space-y-4">
                <OverviewTable
                    data={getKeywordData()}
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
                            cell: (item) => renderTrend(item.trend_delta),
                        },
                        {
                            header: "Intent",
                            accessorKey: "intent",
                            cell: () => {
                                const intents = ["Informational", "Commercial",
                                    "Transactional", "Navigational"];
                                const intent = intents[Math.floor(Math.random()
                                    * intents.length)];
                                const colors = {
                                    "Informational": "bg-blue-500",
                                    "Commercial": "bg-purple-500",
                                    "Transactional": "bg-green-500",
                                    "Navigational": "bg-yellow-500"
                                };

                                return (
                                    <Badge className={colors[intent as keyof typeof colors]}>
                                        {intent}
                                    </Badge>
                                );
                            },
                        },
                    ]}
                />
            </TabsContent>
            <TabsContent value="cloud" className="space-y-4">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex flex-wrap gap-2 p-4">
                            {getKeywordData().map((keyword) => (
                                <Badge
                                    key={keyword.id}
                                    variant="outline"
                                    className="text-sm transition-all
                                            hover:bg-muted"
                                    style={{
                                        fontSize: `${Math.max(0.8,
                                            Math.min(2, keyword.volume / 5000))}
                                                    rem`,
                                        padding: '0.5rem',
                                    }}
                                >
                                    {keyword.keyword}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="suggestions" className="space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Related Keywords</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Keyword</TableHead>
                                    <TableHead>Similarity</TableHead>
                                    <TableHead>Volume</TableHead>
                                    <TableHead>Add</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {getKeywordData().slice(0, 5).map((keyword) => (
                                    <TableRow key={`sugg-${keyword.id}`}>
                                        <TableCell className="font-medium">
                                            {`${keyword.keyword} alternative`}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-full max-w-[100px]
                                                rounded-full bg-muted">
                                                    <div
                                                        className="h-full rounded-full
                                                        bg-green-500"
                                                        style={{
                                                            width: `${70 +
                                                                Math.floor(Math.random()
                                                                    * 30)}%`
                                                        }}
                                                    ></div>
                                                </div>
                                                <span className="text-xs">High</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {Math.floor(keyword.volume * 0.7)}
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="ghost" size="sm">
                                                + Add
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
