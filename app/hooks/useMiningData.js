"use client"

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMiningData } from "../utils/api";

export const useMiningData = () => {
    const [filterParams, setFilterParams] = useState({})
    const { data, isLoading } = useQuery(['miningData'], getMiningData);

    return{
        data,
        isLoading,
    }

}