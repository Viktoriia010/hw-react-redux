import { useDispatch } from "react-redux";
import "./User.css";
import { removeUser, changeStatus } from "../redux-toolkit/slices/userSlice";
function User({ user }: any) {
  const dispatch = useDispatch();
  const handlerRemove = (id: string) => {
    dispatch(removeUser(id));
  };
  const handlerStatus = (id: string) => {
    dispatch(changeStatus(id));
  };

  return (
    <div>
      <p className={user.isActive ? "success" : "error"}>
        <button onClick={() => handlerStatus(user.id)}>
          {user.isActive ? "block" : "unblock"}
        </button>
        {user.name}
        <button onClick={() => handlerRemove(user.id)}>Del</button>
      </p>
    </div>
  );
}

export default User;
