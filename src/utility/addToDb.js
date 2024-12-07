// import { toast } from "react-toastify";
const getList = (list) => {
    const readListJson = localStorage.getItem(list);
    if(readListJson) {
        return JSON.parse(readListJson);
    }else {
        return [];
    }
};

const addToList = (id, list) =>{
    const storedList = getList(list);
    if(storedList.includes(id)){
        console.log("This book is already in your read list");
        //const notify = toast.warn("This book is already in your read list");
        
    }
    else{
        storedList.push(id);
        console.log("Product added to read list successfully");
        //const notify = toast.success("Book added to read list successfully");

        localStorage.setItem(list, JSON.stringify(storedList));
    }
};

export {addToList, getList}