import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useActions(){
    const {addToOrder, remove, removeAll, searchValue} = useContext(AppStateContext);

    //상태를 주는게 아니라 함수를 준다.
    return  {addToOrder, remove, removeAll, searchValue};
}