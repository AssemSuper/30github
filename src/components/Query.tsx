import { AxiosResponse } from "axios";
const getActivity = async (): Promise<void> => {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
    
}

const addActivity = (){

    
}
cont cancelActivity = async (endpoint:string): Promise<AxiosResponse<void>>  =>{
    const response= await axios.patch(endpoint,{state:'cancelled'},{headers:{'Content-Type':'application/json'}});
}