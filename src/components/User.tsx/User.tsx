import { useState } from "react";

export interface User {
    isSubscribed: boolean;
    name: string;
}

const Demo = () => {

    const [user] = useState<User>({
        isSubscribed: true,
        name: 'Priyanka'
    });

    return (
        <>
            <div>
                {user.isSubscribed}
            </div></>
    )
}

export default Demo
