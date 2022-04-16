import React, { useEffect, useMemo, useState } from 'react'
import { FaEdit, FaRegSave } from 'react-icons/fa';
import { MdOutlineLaunch } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GlobalFilter, Loading, ReactTable } from '../../components'
import { UserActions } from '../../redux/actions';
import { UserSelector } from '../../redux/selectors';
import { Columns } from './Columns';
import { Actions, Input } from './style';

export const UserReactTable = () => {
    const [keyword, setKeyword] = useState("");
    const [email, setEmail] = useState("");
    const [userEdit, setUserEdit] = useState({
        first: "",
        last: "",
        email: "",
        cell: "",
        gender: ""
    })
    const dispatch = useDispatch();
    // const { users, loading } = useSelector(state => state.userReducers);
    const { users, loading } = useSelector(UserSelector.selectUser);

    const [filteredData, setFilteredData] = useState([]);

    const onGenderChange = (e) => {
        const fitered = users.filter(user => user.gender === e.target.value);
        setFilteredData(!fitered.length > 0 ? users : fitered)
    }

    useEffect(() => {
        dispatch(UserActions.getUsers());
    }, [dispatch])

    useEffect(() => {
        if (users) {
            setFilteredData(users);
        }
    }, [users])

    // useEffect(() => {
    //     if (keywords) {
    //         const filtered = filteredData.filter(user =>
    //         (
    //             user.email.toLowerCase().includes(keywords.toLowerCase()) ||
    //             user.name.first.toLowerCase().includes(keywords.toLowerCase()) ||
    //             user.name.last.toLowerCase().includes(keywords.toLowerCase())
    //         ));
    //         setFilteredData(keywords === "" ? users : filtered)
    //     } else {
    //         setFilteredData(users)
    //     }
    // }, [keywords])


    const EditChange = (event) => {
        const { name, value } = event.target;
        setUserEdit((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const deleteUser = (data) => {
        // TableData = [...TableData.filter(val => val.email !== data.email)];
        // console.log(data,TableData)
    }

    const isEditable = () => {
        return filteredData?.map((data, i) => {
            return data.email === email ? {
                first: <Input type="text" name="first" value={userEdit.first} onChange={EditChange} />,
                last: <Input type="text" name="last" value={userEdit.last} onChange={EditChange} />,
                email: <Input type="email" name="email" value={userEdit.email} onChange={EditChange} />,
                cell: <Input type="tel" name="cell" value={userEdit.cell} onChange={EditChange} />,
                gender: <select name="gender" value={userEdit?.gender} onChange={EditChange}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>,
                isEditing: false,
                actions: (
                    <Actions>
                        <FaRegSave onClick={() => (
                            setEmail(""),
                            setUserEdit({
                                first: "",
                                last: "",
                                email: "",
                                cell: "",
                                gender: ""
                            })
                        )} />
                    </Actions>
                )
            }
                :
                {
                    first: data?.name?.first,
                    last: data?.name?.last,
                    email: data?.email,
                    cell: data?.cell,
                    gender: data?.gender,
                    isEditing: false,
                    actions: (
                        <Actions>
                            <NavLink to={`/user/${data.email}`}>
                                <MdOutlineLaunch />
                            </NavLink>
                            <FaEdit onClick={() => (
                                console.log("::::::Data", this),
                                setEmail(data.email),
                                setUserEdit({
                                    first: data?.name?.first,
                                    last: data?.name?.last,
                                    email: data?.email,
                                    cell: data?.cell,
                                    gender: data?.gender,
                                })
                            )} />
                            <MdDelete onClick={() => deleteUser(data)} />
                        </Actions>
                    )
                }
        })
    }

    let TableData = isEditable()

    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => TableData, [TableData])

    return (
        <div>
            {
                loading ?
                    <Loading />
                    :
                    <>
                        <GlobalFilter
                            setKeyword={setKeyword}
                            keyword={keyword}
                            placeholder={'Search Data...'}
                        />
                        <ReactTable
                            columns={columns}
                            data={data}
                            onGenderChange={onGenderChange}
                            keyword={keyword}
                        />
                    </>
            }
        </div>
    )
}