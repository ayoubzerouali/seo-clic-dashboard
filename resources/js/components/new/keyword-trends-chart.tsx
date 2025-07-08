import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface KeywordTrendsChartProps {
    data: any[];
    title: string;
    description?: string;
}

export function KeywordTrendsChart({
    data,
    title,
    description,
}: KeywordTrendsChartProps) {
    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && <p className="text-sm text-muted-foreground">
                    {description}</p>}
            </CardHeader>
            <CardContent>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 10,
                                left: 10,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3"
                                className="stroke-amber-50/10" />
                            <XAxis
                                dataKey="date"
                                className="text-xs text-muted-foreground"
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                className="text-xs text-muted-foreground"
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `${value}`}
                            />
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="rounded-lg border
                                            bg-background p-2 shadow-sm">
                                                <div className="grid grid-cols-2 gap-2">
                                                    {payload.map((entry) => (
                                                        <div key={entry.dataKey}
                                                            className="flex flex-col">
                                                            <span
                                                                className="text-xs
                                                                font-medium"
                                                                style={
                                                                    { color: entry.color }}
                                                            >
                                                                {entry.name}
                                                            </span>
                                                            <span className="text-xs
                                                            font-bold">{entry.value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="position"
                                name="Position"
                                stroke="var(--color-chart-1)"
                                strokeWidth={2}
                                dot={{ r: 0 }}
                                activeDot={{ r: 4, strokeWidth: 0 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="volume"
                                name="Volume"
                                stroke="var(--color-chart-2)"
                                strokeWidth={2}
                                dot={{ r: 0 }}
                                activeDot={{ r: 4, strokeWidth: 0 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="clicks"
                                name="Clicks"
                                stroke="var(--color-chart-3)"
                                strokeWidth={2}
                                dot={{ r: 0 }}
                                activeDot={{ r: 4, strokeWidth: 0 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
