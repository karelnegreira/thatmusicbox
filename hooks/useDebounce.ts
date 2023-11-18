import {useState, useEffect} from 'react';

//this hook makes a delay at displaying results of a search by 500 miliseconds

function useDebounce<T>(value: T, delay?: number) : T {
    const [debounceValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay || 500);

        return (() => {
            clearTimeout(timer);
        })
    }, [value, delay])

    return debounceValue;
};

export default useDebounce;