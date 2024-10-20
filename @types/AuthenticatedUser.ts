export interface LoginResProps {
    token: string,
    user: {
        id: number | null, 
        fullName: string,
        createdAt: string,
        updatedAt: string
    } 
}