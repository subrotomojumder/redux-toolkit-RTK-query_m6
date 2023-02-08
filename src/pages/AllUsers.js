import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import { useGetUsersQuery, useRemoveUsersMutation } from '../app/features/api/apiSlice';

const AllUsers = () => {
    const { data: users, isError, isLoading, isSuccess, error } = useGetUsersQuery(
        // null, 
        // {refetchOnMountOrArgChange: true}
    ); 

    const [removeUser, {isLoading: removeLoading, isSuccess: removeSuccess}] = useRemoveUsersMutation();

    // console.log(isError, isLoading, isSuccess, error)
   if(isLoading){
    return <h1 className='text-2xl'>Loading......</h1>
   }
   if(isError){
    return <h1 className='text-2xl'>Something want wrong!</h1>
   }
    return (
        <div>
            <h1 className="text-2xl">All users</h1>
            <div className="w-[500px] mx-auto">
                {
                    users?.map((user, i) => <div key={user._id} className='flex justify-between mx-2 border px-4 rounded-lg my-3 bg-slate-100 p-3'>
                        <h2 className='font-bold text-green-600'>{user.name}</h2>
                        <h5 className='font-semibold'>Email: {user.email}</h5>
                        <h5 className='text-blue-400'>ID:{i}</h5>
                        <button
                            onClick={() => removeUser(user._id)}
                            className='btn btn-circle btn-sm btn-ghost'
                        ><FaTrash></FaTrash></button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllUsers;