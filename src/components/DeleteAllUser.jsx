import React from 'react'
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";
import { clearAlluser } from '../store/actions';

const DeleteAllUser = () => {
    const dispatch = useDispatch();
    return (
        <div style={{ display: 'flex', flexDirection: 'row-reverse', padding: 10 }}>
            <button
                className="btn add-btn"
                onClick={() => { dispatch(clearAlluser()) }}
            >
                DeleteAllUser
            </button>
        </div>
    )
}

export default DeleteAllUser