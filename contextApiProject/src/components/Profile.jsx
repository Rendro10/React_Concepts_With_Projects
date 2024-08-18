import React,{useContext} from 'react'
import userContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(userContext);
    
    if(!user){
        return(
            <div>Please Login</div>
        );
    }
    return(
        <div>
            Welcome {user.username} to our Website.
        </div>
    )
}

export default Profile


// import React, { useContext } from 'react';
// import UserContext from '../context/UserContext';

// const Profile = () => {
//     const { user } = useContext(UserContext);
    
//     if (!user) {
//         return (
//             <div>Please Login</div>
//         );
//     }

//     return (
//         <div>
//             Welcome {user.username} to our Website.
//         </div>
//     );
// };

// export default Profile;