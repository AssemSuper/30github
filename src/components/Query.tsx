import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
const [activity, setActivity] = useState(false);
const getActivity = async (): Promise<void> => {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
    
}

const addActivity = () =>{

    
}
const cancelActivity = async (endpoint:string): Promise<AxiosResponse<void>>  =>{
    const response= await axios.patch(endpoint,{state:'cancelled'},{headers:{'Content-Type':'application/json'}});
    return response;
}
useEffect(() => {

    setActivity(true);
    const storedActivities =JSON.parse(localStorage.getItem('activities') || '[]');
    
})