import React from 'react'
import { Button, IndexButton } from './style'

export const HandleTableButtons = ({ gotoPage, previousPage, nextPage, pageCount, canPreviousPage, canNextPage, pageIndex }) => {
    return (
        <>
            <Button  bgColor={'white'} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</Button>
            <Button  bgColor={'white'} onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</Button>
            {
                pageIndex !== 0 && <p>...</p>
            }
            {
                [...Array(pageCount)].map((_, i) => {
                    return (
                        <React.Fragment key={i}>
                            {
                                pageIndex === i - 1 && <Button  bgColor={'white'} onClick={() => gotoPage(i)} >{i + 1}</Button>
                            }
                            {
                                pageIndex === i && <Button color={'white'} bgColor={'red'} onClick={() => gotoPage(i)} >{i + 1}</Button>
                            }
                            {
                                pageIndex === i + 1 && <Button  bgColor={'white'} onClick={() => gotoPage(i)} >{i + 1}</Button>
                            }
                        </React.Fragment>
                    )

                })
            }
            {
                pageIndex !== pageCount - 1 && <p>...</p>
            }

            <Button  bgColor={'white'} onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</Button>
            <Button  bgColor={'white'} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</Button>
        </>
    )
}