import { createContext,useState } from "react";


const DATABASE_ID = "6850456700249605ad59";
const COLLECTION_ID = '685045780035db1ebdd7';
export const BooksContext = createContext()

export function BooksProvider({children}){
    const [books,setBooks] = useState([]);
    
    async function fetchBooks(){
        try{

        }catch(error){
            console.log(error.message)
        }
    }

    async function fetchBookById(id){
        try{

        }catch(error){
            console.log(error.message);
        }
    }

    async function createBook(data){
        try{

        }catch(error){
            console.log(error.message)
        }
    }

    async function deleteBook(id){
        try{

        }catch(error){
            console.log(error.message)
        }
    }

    return(
        <BooksContext.Provider
        value={{books,fetchBooks,fetchBookById,deleteBook,createBook}}
        >
            {children}
        </BooksContext.Provider>
    )

}
export default BooksProvider