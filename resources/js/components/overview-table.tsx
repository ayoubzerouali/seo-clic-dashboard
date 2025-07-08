import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownRight, Minus, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TablePagination } from "@/components/table-pagination";
import { useState } from "react";

interface TableItem {
    id: string;
    [key: string]: any;
}

interface OverviewTableProps<T extends TableItem> {
    data: T[];
    columns: {
        header: string;
        accessorKey: string;
        cell?: (item: T) => React.ReactNode;
    }[];
    title?: string;
}

export function OverviewTable<T extends TableItem>({
    data,
    columns,
    title,
}: OverviewTableProps<T>) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedData = data.slice(startIndex, startIndex + pageSize);

    return (
        <div className="space-y-4">
            {title && <h3 className="text-lg font-medium">{title}</h3>}
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {columns.map((column) => (
                                <TableHead key={column.accessorKey}>{column.header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedData.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        ) : (
                            paginatedData.map((item) => (
                                <TableRow key={item.id}>
                                    {columns.map((column) => (
                                        <TableCell key={`${item.id}-${column.accessorKey}`}>
                                            {column.cell
                                                ? column.cell(item)
                                                : item[column.accessorKey]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
            <TablePagination
                totalItems={data.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                onPageSizeChange={setPageSize}
            />
        </div>
    );
}

export function renderTrend(value: number) {
    if (value > 0) {
        return (
            <div className="flex items-center text-green-500">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                <span>+{value}</span>
            </div>
        );
    } else if (value < 0) {
        return (
            <div className="flex items-center text-red-500">
                <ArrowDownRight className="mr-1 h-4 w-4" />
                <span>{value}</span>
            </div>
        );
    } else {
        return (
            <div className="flex items-center text-muted-foreground">
                <Minus className="mr-1 h-4 w-4" />
                <span>0</span>
            </div>
        );
    }
}

export function renderKeywordBadge(position: number) {
    if (position <= 3) {
        return <Badge className="bg-green-500">Top 3</Badge>;
    } else if (position <= 10) {
        return <Badge variant="secondary">Top 10</Badge>;
    } else if (position <= 30) {
        return <Badge variant="outline">Top 30</Badge>;
    } else {
        return <Badge variant="destructive">30+</Badge>;
    }
}

export function renderLink(url: string) {
    return (
        <Button variant="ghost" size="sm" className="h-8 px-2" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-3 w-3" />
                <span className="underline">View</span>
            </a>
        </Button>
    );
}

