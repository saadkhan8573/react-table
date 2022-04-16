
export const Columns = [
    {
        Header: "First Name",
        accessor: 'first',
        // Cell: ({ row }) => {

        //     let { editing, first } = row.original
        //     let firstName = first;

        //     if (editing) {
        //         // if (row.id == abc()) {
        //         return <input type="text" defaultValue={firstName} />
        //     } else {
        //         return first
        //     }
        // }
    },
    {
        Header: "Last Name",
        accessor: 'last',
        disableFilters: true,
        // Cell: ({ row }) => {

        //     let { editing, last } = row.original
        //     let firstName = last;

        //     if (editing) {
        //         // if (row.id == abc()) {
        //         return <input type="text" defaultValue={firstName} />
        //     } else {
        //         return last
        //     }
        // }
    },
    {
        Header: "Email",
        accessor: "email",
        // Cell: ({ row }) => {

        //     let { editing, email } = row.original
        //     let firstName = email;

        //     if (editing) {
        //         // if (row.id == abc()) {
        //         return <input type="text" defaultValue={firstName} />
        //     } else {
        //         return email
        //     }
        // }
    },
    {
        Header: "Phone",
        accessor: "cell",
        disableFilters: true,
        // Cell: ({ row }) => {

        //     let { editing, cell } = row.original
        //     let firstName = cell;

        //     if (editing) {
        //         // if (row.id == abc()) {
        //         return <input type="tel" defaultValue={firstName} />
        //     } else {
        //         return cell
        //     }
        // }
    },
    {
        Header: "Gender",
        accessor: "gender",
        disableFilters: true,
        // Cell: ({ row }) => {

        //     let { editing, gender } = row.original
        //     let firstName = gender;

        //     if (editing) {
        //         // if (row.id == abc()) {
        //         return <select name="" id="">
        //             <option value="">Select</option>
        //             <option value="">Male</option>
        //             <option value="">Female</option>
        //         </select>
        //     } else {
        //         return gender
        //     }
        // }
    },
    // {
    //     Header: "Actions",
    //     columns: [
    //         {
    //             Header: "Add",
    //             id: 'add',
    //             accessor: 'gender',
    //             Cell: ({ row }) => (<Icon> <GrAddCircle onClick={() => console.log("Its Clicked", row.original)} /></Icon>),
    //             disableFilters: true
    //         },
    //         {
    //             Header: "Edit",
    //             id: 'edit',
    //             accessor: 'gender',
    //             Cell: ({ row }) => (<Icon><FaEdit onClick={() => console.log("Its Clicked", row.original)} /></Icon>),
    //             disableFilters: true
    //         },
    //         {
    //             Header: "Delete",
    //             id: 'delete',
    //             accessor: 'gender',
    //             Cell: ({ row }) => (<DeleteIcon><MdDelete onClick={() => console.log("Its Clicked", row.original)} /></DeleteIcon>),
    //             disableFilters: true
    //         },
    //     ],

    // }
    {
        Header: "Actions",
        disableFilters: true,
        accessor : "actions",
        // accessor: ( row ) => {
        //     console.log("rowwwwww",row)
        //     return <button onClick={() => (
        //         console.log(row.editing),
        //         row.editing = !row.editing,
        //         console.log(row.editing)
        //     )}>Edit</button>
        //     // return <button onClick={() => abc(row.id)}>Edit</button>
        // },
        // Cell: ({ row }) => {
        //     let { editing } = row.original;
        //     return <button onClick={() => editing = !editing}>Edit</button>
        //     // return <button onClick={() => abc(row.id)}>Edit</button>
        // }
    },
]