import React from 'react'
import { Select } from './style'

export const PageSize = ({ pageSize, setPageSize, Table }) => {
    return (
        <>
            <Select
                style={{ display: "inline-block" }}
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value)}
            >
                {
                    [10, 25, 50, Table.length].map((pagesize, i) => (
                        <option key={i} value={pagesize}> Show {pagesize === Table.length ? 'All' : pagesize}  </option>
                    ))
                }
            </Select>
        </>
    )
}