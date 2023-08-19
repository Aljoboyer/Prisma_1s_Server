import { Profile, User } from "@prisma/client";
import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient()

const createUserService = async (data: User): Promise<User> => {
    const userResult = await prisma.user.create({data})

    return userResult
}

const profileCreateService = async (data: Profile): Promise<Profile>  => {
    const isExists = await prisma.profile.findUnique({where: {userId: data.userId}})
    if(isExists){
        const result = await prisma.profile.update({data: {bio: data.bio}, where: {userId: data.userId}})
        return result
    }
    else{
        const userResult = await prisma.profile.create({data})

        return userResult
    }
}

const userGetService = async () => {
    const result = await prisma.user.findMany({
        // select: {email: true} //For getting specific field from each data

        //For getting other table data which has relation with user
        include: {
            profile: true 
            //if user has multiple relation with multiple table those table name will be below one by one
        }
    });

    return result
}
export const userService = {
    createUserService,
    profileCreateService,
    userGetService
}