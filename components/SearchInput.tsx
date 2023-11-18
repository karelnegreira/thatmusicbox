"use client";

import qs from 'query-string'; // package for querying data
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import useDebounce from "@/hooks/useDebounce";
import Input from './Input';

const SearchInput = () => {
    
    const router = useRouter();
    const [value, setValue] = useState<string>("");
    const debouncedValue = useDebounce<string>(value, 500);

    useEffect(() => {

        const query = {
            title: debouncedValue,
        };

        const url = qs.stringifyUrl({
            url: '/search', 
            query: query
        });

        router.push(url);

    }, [debouncedValue, router]);


  return (
    <Input 
        placeholder="What song or audio are you looking for?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default SearchInput