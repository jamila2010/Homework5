import React from 'react'
import {useEffect, useState} from 'react'

function UseHook(api) {
    const [data, setData]=useState(null)
    const [pending, setPending]= useState(false)
    const [error, setError]=useState(null)

    useEffect(()=>{
        const fetchData=async ()=>{
            setPending(true)

            try{
                const res= await fetch(api)

                if(!res.ok){
                    throw new Error(res.statusText + " " +res.status)
                }

                const data = await res.json()
                setData(data)
                
                setPending(false)
                console.log("Fetched data:", data);
            }catch({message}){
                setError(message)
                setPending(false)
            }
        }
        fetchData()
    }, [api])

    const formData=(form)=>{
        const newData= new FormData(form)
        const newUser={}
        for(let [key, value] of newData.entries()) newUser[key]=value
        setData((prev)=> prev? [...prev, newUser]: [newUser])
    }

  return {data, error, pending, formData}
}

export {UseHook}
