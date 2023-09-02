'use client'

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


import Profile from "@components/Profile";


const MyProfile = () => {
    const { data: session } = useSession();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}`);
            const data = await response.json();
            console.log('ZZZZZZ', data)
            setPosts(data);
        }

        if (session?.user.id) fetchPosts();

    }, [])

    const handleEdit = () => {

    }
    const handleDelete = async () => {

    }

    console.log('>>>>>', posts);

    return (
        <Profile
            name="My"
            desc="Welcome to you personal profile MyProfile"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile;