"use client"
import { useState } from "react";

export const useActiveContent = () => {
    const [isActive, setIsActive] = useState('table');
    const onSwitch = (key) => setIsActive(key);
    const isTableView = isActive === 'table';

    return {
        isActive,
        onSwitch,
        isTableView
    }

}