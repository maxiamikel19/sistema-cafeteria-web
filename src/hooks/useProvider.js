import { useContext } from "react";
import MainContext from "../providers/MainProvider";

const useProvider = () =>{
    return useContext(MainContext)
}

export default useProvider