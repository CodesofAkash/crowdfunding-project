"use client"
import React, { useState, useEffect } from 'react';
import PaymentPage from "@/components/PaymentPage";
import { useSearchParams } from 'next/navigation';

const MyAccount = () => {
    const searchParams = useSearchParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = searchParams.get('userData');
        if (userData) {
            try {
                const parsedUser = JSON.parse(userData);
                setUser(parsedUser);
            } catch (error) {
                console.error('Failed to parse userData:', error);
            }
        }
    }, [searchParams]);

    return (
        <>
            {user ? (
                <PaymentPage userData={user} />
            ) : (
                <div>Loading user data...</div>
            )}
        </>
    );
}

export default MyAccount;
