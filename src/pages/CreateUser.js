import React from 'react';
import { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import addUserData from './Redux/thunk/user/addUserData';
import deleteUser from './Redux/thunk/user/deleteUser';
import loadUsersData from './Redux/thunk/user/fetchUsers';

const CreateUser = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.product.users);
    useEffect(() => {
        dispatch(loadUsersData());
    }, [dispatch])
    console.log(users)
    const handleCreateUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };
        dispatch(addUserData(user))
    }
    return (
        <div className='min-h-screen bg-indigo-100 grid grid-cols-5 divide-x-2 divide-zinc-50'>
            <div className='col-span-2'>
                <form onSubmit={handleCreateUser} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' required type="text" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' required type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-span-3">
                {
                    users.map((user, i) => <div key={user._id} className='flex justify-between mx-2 border my-3 bg-slate-100 p-3'>
                        <h2 className='font-bold text-green-600'>{user.name}</h2>
                        <h5 className='font-semibold'>Email: {user.email}</h5>
                        <h5 className='text-blue-400'>ID:{i}</h5>
                        <button
                            onClick={()=> dispatch(deleteUser(user._id))}
                            className='btn btn-circle btn-sm btn-ghost'
                        ><FaTrash></FaTrash></button>
                    </div>)
                }
            </div>
        </div >
    );
};

export default CreateUser;