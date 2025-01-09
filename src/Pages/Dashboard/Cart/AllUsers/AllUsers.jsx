import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import { MdDeleteOutline } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        },
    });

    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/users/${id}`);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire("Deleted!", "User has been removed.", "success");
                    }
                } catch (error) {
                    Swal.fire("Error!", "Unable to delete the user.", "error");
                    console.error("Delete Error:", error);
                }
            }
        });
    };
    const handleMakeAdmin=(user)=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then((res)=>{
           if(res.data.modifiedCount>0){
            refetch()

            Swal.fire({
                position: "top-end",
                icon: "success",
                title:`${user.name} is now Admin`,
                showConfirmButton: false,
                timer: 1500
              });
           }
        })
    }

    return (
        <div className="py-4">
            <div className="flex justify-between items-center pb-4 border-b-2">
                <h2 className="text-3xl font-semibold">All Users</h2>
                <h2 className="text-xl">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto mt-6">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    {/* Table Head */}
                    <thead className="bg-orange-500 text-white">
                        <tr>
                            <th className="px-4 py-2 border">#</th>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Email</th>
                            <th className="px-4 py-2 border">Role</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {users.map((user, index) => (
                            <tr
                                key={user._id}
                                className={`text-center ${
                                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                }`}
                            >
                                <td className="px-4 py-2 border">{index + 1}</td>
                                <td className="px-4 py-2 border">{user.name}</td>
                                <td className="px-4 py-2 border">{user.email}</td>
                                <td className="px-4 py-2 border">
                                   {user.role==='admin' ? "Admin": <button onClick={()=>handleMakeAdmin(user)} className="text-red-600 hover:text-red-800 transition"
>                                   <FaUsers className="inline-block text-gray-600" />
                                    </button>} 
                                </td>
                                <td className="px-4 py-2 border">
                                    <button
                                        className="text-red-600 hover:text-red-800 transition"
                                        onClick={() => handleDeleteUser(user._id)}
                                    >
                                        <MdDeleteOutline className="inline-block text-2xl" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
