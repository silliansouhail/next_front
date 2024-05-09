import { unstable_noStore as noStore } from 'next/cache';

export const getReclamationData = async()=> {
    noStore()
    try {
        const res = await fetch('http://localhost:1337/api/reclamation-ofs/',{cache: 'no-store'})
    
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        const data = await res.json()

        return data
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the reclamation from strapi.');
    }
    
}
export const getStrapiUser = async()=>{
    noStore()
    try {
        const res = await fetch('http://localhost:1337/api/users/',{cache: 'no-store'})

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
    
        const data = await res.json()

        return data
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the users from strapi.');
    }
    
}