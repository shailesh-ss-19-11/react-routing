import { useDispatch,useSelector } from "react-redux"
import { changeTheName } from "../store/action";
import { Link } from "react-router-dom";
export const Home = ()=>{
    const dispatch = useDispatch();
    const mystate = useSelector((state)=>state.ChangeName)
    return(
        <>
        <ul>
            <li>
                <Link to="/admin/posts">posts</Link>
            </li>
            <li>
                <Link to="/admin/users">users</Link>
            </li>
        </ul>
            {mystate}
            <button className="btn btn-primary m-4" onClick={()=>dispatch(changeTheName())}>changename🙌</button>
        </>
    )
}