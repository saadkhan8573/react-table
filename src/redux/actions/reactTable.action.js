import { createAction } from "@reduxjs/toolkit";

export const globalFilter = createAction("table/filter",
function prepare(text) {
        return {
            payload : {
                text
            }
        }
    });

export const TableActions = {
    globalFilter
}