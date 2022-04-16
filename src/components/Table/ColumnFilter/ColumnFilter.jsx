import React from 'react'

export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column;
    return (
        <>
            <input
                type="text"
                value={filterValue || ""}
                onChange={(e) => setFilter(e.target.value)}
            />
        </>
    )
}