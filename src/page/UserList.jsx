import { useGetUsersQuery } from "../features/users/userApiSlice";
import {Link} from "react-router-dom"

const UserList = () => {
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery()

    let content
    if(isLoading){
        content = "<p> Loading .... </p>"
    }else if(isSuccess){
        content = (
            <section className="users">
                <h1>Users</h1>
                <ul>
                    {users.map((user, i) => {
                        return <li key={i}>{user.username}</li>
                    })}
                </ul>
                <Link to="/welcome">Back to Welcome</Link>
            </section>
        )
    }
}