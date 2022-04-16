import React, { useEffect, useMemo, useState } from 'react'
import { FaEdit, FaRegSave, FaSave } from 'react-icons/fa';
import { GrAddCircle } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalFilter, Loading, ReactTable } from '../../components'
import { UserActions } from '../../redux/actions';
import { UserSelector } from '../../redux/selectors';
import { Columns } from './Columns';
import { Actions, Input } from './style';

export const UserTable = () => {
  const [keyword, setKeyword] = useState("");
  const [skipPageReset, setSkipPageReset] = useState(false)

  const dispatch = useDispatch();
  const { users, loading } = useSelector(UserSelector.selectUser);
  console.log("users",users)

  const [originalData, setOriginalData] = useState(null)
  const [filteredData, setFilteredData] = useState([]);

  const onGenderChange = (e) => {
    const fitered = originalData.filter(user => user.gender === e.target.value);
    setFilteredData(!fitered.length > 0 ? originalData : fitered)
  }

  useEffect(() => {
    dispatch(UserActions.getUsers());
  }, [dispatch])

  useEffect(() => {
    if (users) {
      const _data = users?.map((data, i) => {
        return {
          first: data?.name?.first,
          last: data?.name?.last,
          email: data?.email,
          cell: data?.cell,
          gender: data?.gender,
          // editing: i === 2 ? true : false,
          editing: data?.editing,
          actions: (
            <Actions>
              <GrAddCircle onClick={() => {}} />
              <FaEdit onClick={() => onEditButtonClicked(data?.email, data.editing)} />
              <MdDelete onClick={() => { }} />
            </Actions>
          )
        }
      })
      setOriginalData(_data)
      setFilteredData(_data);
    }
  }, [users])

  const onEditButtonClicked = (email,editing) => {
    // let clone = [...filteredData]
    // clone[i].editing = !clone[i].editing
    // setFilteredData(clone)
    setSkipPageReset(true)
    
    setFilteredData((filterData) => {
      return filterData?.map((data,i) => {
        console.log("email",email == data.email)
        return email == data.email ?  {
          first: <Input type="text" defaultValue={data?.first} />,
          last: data?.last,
          email: data?.email,
          cell: data?.cell,
          gender: data?.gender,
          // editing: i === index ? true : false,
          // editing: data?.editing,
          actions: (
            <Actions>
              <GrAddCircle onClick={() => {}} />
              <FaSave onClick={() => onEditButtonClicked(null, data.editing)} />
              <MdDelete onClick={() => {  }} />
            </Actions>
          )
        }
        :
        {
          first: data?.first,
          last: data?.last,
          email: data?.email,
          cell: data?.cell,
          gender: data?.gender,
          // editing: i === index ? true : false,
          // editing: data?.editing,
          actions: (
            <Actions>
              <GrAddCircle onClick={() => {}} />
              <FaEdit onClick={() => onEditButtonClicked(data.email, data.editing)} />
              <MdDelete onClick={() => { }} />
            </Actions>
          )
        }
      })
    })
    
  }


  const columns = useMemo(() => Columns, [])
  const data = useMemo(() => filteredData, [filteredData])

  useEffect(() => {
    setSkipPageReset(false)
  }, [filteredData])



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
              skipPageReset={skipPageReset}
            />
          </>
      }
    </div>
  )
}