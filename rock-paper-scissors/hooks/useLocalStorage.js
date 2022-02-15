import {useState, useEffect} from "react";

export default function useLocalStorage(key, defaultValue){
    const init = (key)=>{
        try{
            const jsonValue = localStorage.getItem(key)
            if(jsonValue != null) return JSON.parse(jsonValue)

            localStorage.setItem(key, JSON.stringify(defaultValue))
            return defaultValue
        }catch{
            return defaultValue
        }

    }
        const [value, setValue] = useState(0)

    useEffect(()=>{
        setValue(init(key));
    },[]);
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    },[key,value])

    return [value, setValue]
}