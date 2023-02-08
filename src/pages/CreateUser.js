import React from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useAddUsersMutation } from '../app/features/api/apiSlice';

const CreateUser = () => {
    const [postUser, { isLoading, isSuccess, isError }] = useAddUsersMutation();

    const handleCreateUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.phone.value;
        const userRole = e.target.userRole.value;
        const userGender = e.target.userGender.value;
        const user = { name, email, number, userRole, userGender };
        try {
            postUser(user);
            e.target.reset();
        } catch (error) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        if (isLoading) {
            toast.loading("Posting...", { id: "addUser" });
        }
        if (isSuccess) {
            toast.success("User added", { id: "addUser" });

        }
    }, [isLoading, isSuccess])
    return (
        <div className='min-h-screen bg-indigo-100'>
            <div className='w-96 mx-auto pt-5'>
                <form onSubmit={handleCreateUser} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' required type="text" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone number</span>
                        </label>
                        <input name='phone' required type="text" placeholder="user phone" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' required type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className='flex justify-start items-center gap-1'>
                        <h1 className='font-semibold mr-3'>Role: </h1>
                        <input type="radio" id='user' name="userRole" value="user" className="radio radio-info" checked />
                        <label htmlFor="user">user</label>
                        <input type="radio" id='seller' name="userRole" value="seller" className="radio radio-info ml-3" />
                        <label htmlFor="seller">seller</label>
                    </div>
                    <div className='flex justify-start items-center gap-1'>
                        <h1 className='font-semibold mr-3'>Gender: </h1>
                        <input type="radio" id='female' name="userGender" value="female" className="radio radio-info" checked />
                        <label htmlFor="female">female</label>
                        <input type="radio" id='male' name="userGender" value="male" className="radio radio-info ml-3" />
                        <label htmlFor="male">male</label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        </div >
    );
};

export default CreateUser;