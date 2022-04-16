import React from 'react'
import { Select } from './style'

export const GenderFilter = ({ onGenderChange, filterValues }) => {
    return (
        <>
            <Select onChange={onGenderChange}>
                <option value="">Select</option>
                {
                    filterValues.map((filterValue, i) => (
                        <option key={i} value={filterValue}>{filterValue}</option>
                    ))
                }
            </Select>
        </>
    )
}
