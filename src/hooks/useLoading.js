import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useLoading(){
    const isLoading = useContext(AppStateContext);

    return isLoading;
}