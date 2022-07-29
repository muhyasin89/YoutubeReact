import { useGetUsersQuery } from "../features/users/userApiSlice";
import {Link} from "react-router-dom"
import { Audio } from  'react-loader-spinner'

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
        content = <Audio
        height = "80"
        width = "80"
        radius = "9"
        color = 'green'
        ariaLabel = 'three-dots-loading'     
        wrapperStyle
        wrapperClass
      />
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