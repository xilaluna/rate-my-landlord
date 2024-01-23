import type { User } from "@clerk/nextjs/server";


const filterUserInfo = (user: User) => {
    return {id: user.id, username: user.username, imageUrl: user.imageUrl, firstName: user.firstName, lastName: user.lastName}
}

export default filterUserInfo;