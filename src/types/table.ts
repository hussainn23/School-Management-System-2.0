import { ReactNode } from 'react';

export interface Column<T> {
  header: string;
  accessorKey: keyof T;
  cell?: (row: T) => ReactNode;
  className?: string;
}


export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
  onSort?: (column: keyof T, direction: 'asc' | 'desc') => void;
  pagination?: {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    onPageChange: (page: number) => void;
  };
}

export interface TableHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export interface StatusBadgeProps {
  status: 'top-scored' | 'poor-results' | 'moderate';
  className?: string;
}

