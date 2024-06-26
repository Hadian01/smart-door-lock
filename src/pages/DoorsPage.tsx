"use client";
import DoorsTemplate from "@/components/templates/DoorsTemplate";
import { Door } from "@/interfaces/Types";
import { fetchDoors } from "@/services/doorService";
import { useCallback, useEffect, useState } from "react";
import getTokenService from "@/services/authService";
import { useRouter } from "next/navigation";

const DoorsPage = () => {
    const token = getTokenService();
    const router = useRouter();
    const [doors, setDoors] = useState<Door[]>([]);

    const getDoors = useCallback(async () => {
        try {
            const doorsData = await fetchDoors();
            setDoors(doorsData);
        } catch (error) {
            console.error("Error fetching door details:", error);
        }
    }, []);
    useEffect(() => {
        if (!token) {
            router.push('/login');
        }
        getDoors();
    }, [getDoors]);

    return (
        <DoorsTemplate doors={doors} refreshDoors={getDoors} />
    );
}

export default DoorsPage;