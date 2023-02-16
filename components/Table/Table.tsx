import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline"
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table"

import { IconsXs, IconsSm } from "components/Icons"
import { AddOrEditModal } from "components/Modal/Modal"
import { GlobalFilter } from "hooks/useGlobalFilter"
import { TableProps } from "interfaces"

export const Table = ({ columns, data, hooks, addRow, type }: TableProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
    setGlobalFilter,
    preGlobalFilteredRows,
    state,
  }: any = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    hooks,
    useGlobalFilter,
    useSortBy,
    usePagination
  )
  return (
    <div className="darkmode flex h-[83vh] max-h-[83vh] min-h-[83vh] flex-col rounded-xl">
      <div className="h-[94%]">
        <div className="flex items-center justify-between px-4">
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            setGlobalFilter={setGlobalFilter}
            globalFilter={state.globalFilter}
          />
          <AddOrEditModal option="add" addRow={addRow} type={type} />
        </div>
        <table {...getTableProps()} className="w-full p-4">
          <thead>
            {headerGroups.map((headerGroup: any, i: number) => (
              <tr
                key={i}
                className="h-8 border-b border-gray-200"
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column: any, i: number) => (
                  <th
                    key={i}
                    className={`pl-3 text-left capitalize ${
                      column.Header === "id" && "w-12"
                    }`}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <button>
                      {column.isSortedDesc ? (
                        <IconsXs
                          Icon={ChevronDownIcon}
                          props={`dark:text-white text-black`}
                        />
                      ) : column.isSorted ? (
                        <IconsXs
                          Icon={ChevronUpIcon}
                          props={`dark:text-white text-black`}
                        />
                      ) : (
                        ""
                      )}
                    </button>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page
              .map((row: any, i: number) => {
                prepareRow(row)
                return (
                  <tr key={i} {...row.getRowProps()}>
                    {row.cells.map((cell: any, i: number) => {
                      return (
                        <td key={i} className="p-3 " {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      )
                    })}
                  </tr>
                )
              })
              .slice(0, 9)}
          </tbody>
        </table>
      </div>

      <div className="mb-1 flex h-full items-end justify-between px-5">
        <div className="flex space-x-5">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <IconsSm
              Icon={ChevronDoubleLeftIcon}
              props={`dark:text-white text-black`}
            />
          </button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <IconsSm
              Icon={ChevronLeftIcon}
              props={`dark:text-white text-black`}
            />
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <IconsSm
              Icon={ChevronRightIcon}
              props={`dark:text-white text-black`}
            />
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <IconsSm
              Icon={ChevronDoubleRightIcon}
              props={`dark:text-white text-black`}
            />
          </button>
        </div>

        <span>
          <strong>
            Pagina {pageIndex + 1} de {pageOptions.length}
          </strong>
        </span>
      </div>
    </div>
  )
}
