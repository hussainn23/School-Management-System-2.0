

import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/table';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    ChevronDown,
    ChevronUp,
    ChevronsUpDown,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

interface Column<T> {
    key: string;
    header: string;
    render?: (item: T) => React.ReactNode;
    sortable?: boolean;
}

interface ReusableTableProps<T> {
    data: T[];
    columns: Column<T>[];
    itemsPerPage?: number;
}

export default function ReusableTable<T>({
    data,
    columns,
    itemsPerPage = 10,
}: ReusableTableProps<T>) {
    const [sortConfig, setSortConfig] = useState<{
        key: string;
        direction: 'asc' | 'desc';
    } | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    

    const sortedData = React.useMemo(() => {
        const sortableItems = [...data];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [data, sortConfig]);

   

    // Pagination logic
    const pageCount = Math.ceil(sortedData.length / itemsPerPage);
    const paginatedData = sortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const requestSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'asc'
        ) {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className="w-full bg-gray-100">
            
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {columns.map((column) => (
                                <TableHead key={column.key}>
                                    {column.sortable ? (
                                        <Button
                                            variant="ghost"
                                            onClick={() =>
                                                requestSort(column.key)
                                            }
                                            className="hover:bg-transparent"
                                        >
                                            {column.header}
                                            {sortConfig?.key === column.key ? (
                                                sortConfig.direction ===
                                                'asc' ? (
                                                    <ChevronUp className="ml-2 h-4 w-4" />
                                                ) : (
                                                    <ChevronDown className="ml-2 h-4 w-4" />
                                                )
                                            ) : (
                                                <ChevronsUpDown className="ml-2 h-4 w-4" />
                                            )}
                                        </Button>
                                    ) : (
                                        column.header
                                    )}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedData.map((item, index) => (
                            <TableRow key={index}>
                                {columns.map((column) => (
                                    <TableCell key={column.key} >
                                        {column.render
                                            ? column.render(item)
                                            : item[column.key]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, pageCount))
                    }
                    disabled={currentPage === pageCount}
                >
                    Next
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
