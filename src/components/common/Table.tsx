import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TableProps } from '@/types/table';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function BaseTable<T extends { id: string | number }>({
  data,
  columns,
  selectable = false,
  onRowSelect,
  pagination,
  onSort,
}: TableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(
    new Set()
  );
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });

  const handleSelectAll = (checked: boolean) => {
    const newSelected = checked
      ? new Set(data.map((row) => row.id))
      : new Set<string | number>();
    setSelectedRows(newSelected);
    onRowSelect?.(data.filter((row) => newSelected.has(row.id)));
  };

  const handleSelectRow = (id: string | number, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedRows(newSelected);
    onRowSelect?.(data.filter((row) => newSelected.has(row.id)));
  };

  const handleSort = (column: keyof T) => {
    const direction =
      sortConfig.key === column && sortConfig.direction === 'asc'
        ? 'desc'
        : 'asc';
    setSortConfig({ key: column, direction });
    onSort?.(column, direction);
  };

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            {selectable && (
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedRows.size === data.length}
                  onCheckedChange={(checked) =>
                    handleSelectAll(checked === true)
                  }
                />
              </TableHead>
            )}
            {columns.map((column) => (
              <TableHead
                key={String(column.accessorKey)}
                className={cn('cursor-pointer', column.className)}
                onClick={() => handleSort(column.accessorKey)}
              >
                {column.header}
                {sortConfig.key === column.accessorKey && (
                  <span className="ml-2">
                    {sortConfig.direction === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {selectable && (
                <TableCell>
                  <Checkbox
                    checked={selectedRows.has(row.id)}
                    onCheckedChange={(checked) =>
                      handleSelectRow(row.id, checked === true)
                    }
                  />
                </TableCell>
              )}
              {columns.map((column) => (
                <TableCell key={String(column.accessorKey)}>
                  {column.cell
                    ? column.cell(row)
                    : String(row[column.accessorKey])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {pagination && (
        <div className="flex items-center justify-between px-2 py-4">
          <p className="text-sm text-muted-foreground">
            Showing {(pagination.currentPage - 1) * pagination.pageSize + 1} to{' '}
            {Math.min(
              pagination.currentPage * pagination.pageSize,
              pagination.totalItems
            )}{' '}
            of {pagination.totalItems} entries
          </p>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                pagination.onPageChange(pagination.currentPage - 1)
              }
              disabled={pagination.currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                pagination.onPageChange(pagination.currentPage + 1)
              }
              disabled={
                pagination.currentPage * pagination.pageSize >=
                pagination.totalItems
              }
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
