'use client';

import * as React from 'react';
import Link from 'next/link';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { type ColumnDef } from '@tanstack/react-table';
import { formatPrice, catchError, formatDate } from '@/utils';
import {
  Checkbox,
  Badge,
  DropdownMenu,
  DropdownMenuTrigger,
  Button,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from '@store/ui';
import { DataTable, DataTableColumnHeader } from '../data-table';
import type { Product } from '@store/db/types';

interface ProductsTableShellProps {
  products: Product[];
  storeId: string;
}

export function ProductsTableShell({
  products,
  //count, limit,
  storeId,
}: ProductsTableShellProps) {
  // const pageCount = Math.ceil(count / limit);

  const [isPending, startTransition] = React.useTransition();
  const [selectedRowIds, setSelectedRowIds] = React.useState<string[]>([]);

  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo<ColumnDef<Product, unknown>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => {
              table.toggleAllPageRowsSelected(!!value);
              setSelectedRowIds((prev) =>
                prev.length === products.length ? [] : products.map((row) => row.id),
              );
            }}
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => {
              row.toggleSelected(!!value);
              setSelectedRowIds((prev) =>
                value ? [...prev, row.original.id] : prev.filter((id) => id !== row.original.id),
              );
            }}
            aria-label="Select row"
            className="translate-y-[2px]"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: 'name',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
      },
      {
        accessorKey: 'category',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
        cell: ({ cell }) => {
          const category = cell.getValue() as Product['category'];

          return (
            <Badge variant="outline" className="capitalize">
              {category.name}
            </Badge>
          );
        },
      },
      {
        accessorKey: 'price',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Price" />,
        cell: ({ cell }) => formatPrice(cell.getValue() as number),
      },
      {
        accessorKey: 'inventory',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Inventory" />,
      },
      {
        accessorKey: 'rating',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Rating" />,
      },
      {
        accessorKey: 'createdAt',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Created At" />,
        cell: ({ cell }) => formatDate(cell.getValue() as Date),
        enableColumnFilter: false,
      },
      {
        id: 'actions',
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label="Open menu"
                variant="ghost"
                className="data-[state=open]:bg-muted flex h-8 w-8 p-0"
              >
                <DotsHorizontalIcon className="h-4 w-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/stores/${storeId}/products/${row.original.id}`}>Edit</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/product/${row.original.id}`}>View</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  startTransition(() => {
                    row.toggleSelected(false);

                    // toast.promise(
                    //   deleteProduct({
                    //     id: row.original.id,
                    //     storeId,
                    //   }),
                    //   {
                    //     loading: 'Deleting...',
                    //     success: () => 'Product deleted successfully.',
                    //     error: (err: unknown) => catchError(err),
                    //   },
                    // );
                  });
                }}
                disabled={isPending}
              >
                Delete
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
    [products, isPending, storeId],
  );

  function deleteSelectedRows() {
    // toast.promise(
    //   Promise.all(
    //     selectedRowIds.map((id) =>
    //       deleteProduct({
    //         id,
    //         storeId,
    //       }),
    //     ),
    //   ),
    //   {
    //     loading: 'Deleting...',
    //     success: () => {
    //       setSelectedRowIds([]);
    //       return 'Products deleted successfully.';
    //     },
    //     error: (err: unknown) => {
    //       setSelectedRowIds([]);
    //       return catchError(err);
    //     },
    //   },
    // );
  }

  return (
    <DataTable
      columns={columns}
      data={products}
      // pageCount={pageCount}
      // filterableColumns={[
      //   {
      //     id: 'category',
      //     title: 'Category',
      //     options: products.category.map((category) => ({
      //       label: `${category.charAt(0).toUpperCase()}${category.slice(1)}`,
      //       value: category,
      //     })),
      //   },
      // ]}
      searchableColumns={[
        {
          id: 'name',
          title: 'names',
        },
      ]}
      newRowLink={`/dashboard/stores/${storeId}/products/new`}
      deleteRowsAction={() => void deleteSelectedRows()}
    />
  );
}
