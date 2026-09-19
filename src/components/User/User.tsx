import { use } from "react";
import type { UserType } from "../../types/UserType";


interface userProps {
  userPromise: Promise<UserType[]>;
}

const User = ({userPromise}:userProps) => {

    const users = use(userPromise);
    console.log(users) ;


    return (
        <div>
            <h2>user: </h2>
        </div>
    );
};

export default User;