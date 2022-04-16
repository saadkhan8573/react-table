import React from 'react'
import { Input } from './style'

export const PageNumber = ({gotoPage,pageCount}) => {
    return (
        <>
            <Input
                type="number"
                onChange={(e) => {
                    gotoPage(e.target.value ? Number(e.target.value - 1) : 0)
                }}
                max={pageCount}
                min={1}
                defaultValue={1}
            />
        </>
    )
}