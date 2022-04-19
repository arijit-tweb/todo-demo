import { useEffect, useState } from "react"

export const useDocumnetTitle = title => {
    const [document_title, setDoucmentTitle] = useState(`Todo App - ${title}`);
    useEffect(()=>{
        document.title = document_title;
    },[document_title]);

    // this for setting title dynamically 
    return [document_title, setDoucmentTitle];
};