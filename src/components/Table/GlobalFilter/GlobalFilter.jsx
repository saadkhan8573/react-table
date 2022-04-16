import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAsyncDebounce } from 'react-table';
import { Main } from './style';

export const GlobalFilter = ({ keyword, setKeyword,placeholder }) => {

    const onChange = (event) => {
        setKeyword(event.target.value)
    }
    console.log("keyword", keyword)
    return (
        <>
            <Main>
                <input
                    type="text"
                    value={keyword}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </Main>
        </>
    )
}
