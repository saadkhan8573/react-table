import React, { useEffect, useMemo } from 'react';
import {
    useTable,
    useSortBy,
    useGlobalFilter,
    usePagination,
    useColumnOrder,
    useAsyncDebounce
} from 'react-table';

// import { ColumnFilter } from './ColumnFilter';
import { PageSize } from './PageSize';
import { PageNumber } from './PageNumber';
import { HandleTableButtons } from './HandleTableButtons';
import { GenderFilter } from './GenderFilter';
import { ColumnOrderChange } from './ColumnOrderChange';
import { Main, TableFilters, Table, TableFooter } from './style';
import { styles } from './style';
import { GlobalFilter } from './GlobalFilter';

export const ReactTable = ({ columns, data, onGenderChange, keyword }) => {

    // const defaultColumn = useMemo(() => {
    //     return {
    //         Filter: ColumnFilter
    //     }
    // }, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        previousPage,
        nextPage,
        canNextPage,
        canPreviousPage,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        setGlobalFilter,
        prepareRow,
        setColumnOrder
    } = useTable({
        columns,
        data,
        autoResetPage: false,
    }, useGlobalFilter, usePagination, useColumnOrder)

    const { pageIndex, pageSize } = state;

    useEffect(() => {
        setGlobalFilter(keyword)
    }, [keyword])

    return (
        <>
            <Main>
                <TableFilters>
                    <ColumnOrderChange
                        sortedColumns={['first', 'last', 'gender', 'email', 'cell']}
                        setColumnOrder={setColumnOrder}
                    />
                    <GenderFilter
                        onGenderChange={onGenderChange}
                        filterValues={['male', 'female']}
                    />
                </TableFilters>
                <Table>
                    <thead {...getTableProps()}>
                        {
                            headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {
                                        headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps()}> {column.render('Header')}
                                                {/* <span>
                                                                {
                                                                    column.isSorted ? (column.isSortedDesc ? '<' : '^') : ''
                                                                }
                                                            </span> */}
                                                <div>
                                                    {column.canFilter ? column.render("Filter") : null}
                                                </div>
                                            </th>
                                        ))
                                    }
                                </tr>
                            ))
                        }

                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            page.map(row => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {
                                            row.cells.map(cell => {
                                                return (
                                                    <td  {...cell.getCellProps()}> {cell.render('Cell')} </td>
                                                )
                                            })
                                        }

                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
            </Main>

            <TableFooter>
                <p>page <strong> {pageIndex + 1}   </strong> of <strong> {pageCount} </strong> </p>
                <p>| Go to page</p>

                {/* Setting Direct page number to input field */}
                <PageNumber
                    gotoPage={gotoPage}
                    pageCount={pageCount}
                />

                {/* Selecting page Size */}
                <PageSize
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    Table={data}
                />

                {/* All Buttons, Next, prev, and page numbers etc */}
                <HandleTableButtons
                    gotoPage={gotoPage}
                    previousPage={previousPage}
                    nextPage={nextPage}
                    pageCount={pageCount}
                    canPreviousPage={canPreviousPage}
                    canNextPage={canNextPage}
                    pageIndex={pageIndex}
                />

            </TableFooter>

            {/* <styles.InheritTesting>
                <p>page <strong> {pageIndex + 1}   </strong> of <strong> {pageCount} </strong> </p>
                <p>| Go to page</p>

                <PageNumber
                    gotoPage={gotoPage}
                    pageCount={pageCount}
                />

                <PageSize
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    Table={data}
                />

                <HandleTableButtons
                    gotoPage={gotoPage}
                    previousPage={previousPage}
                    nextPage={nextPage}
                    pageCount={pageCount}
                    canPreviousPage={canPreviousPage}
                    canNextPage={canNextPage}
                    pageIndex={pageIndex}
                />

            </styles.InheritTesting> */}

        </>
    )
}