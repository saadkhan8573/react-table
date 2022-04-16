import React from 'react'
import { Button } from './style'

export const ColumnOrderChange = ({sortedColumns,setColumnOrder}) => {
    return (
        <>
            <Button onClick={() => {
                setColumnOrder(sortedColumns)
            }}>Change Column Order</Button>
        </>
    )
}
