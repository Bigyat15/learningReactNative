import { createContext,useState } from "react";


const DATABASE_ID = "6850456700249605ad59";
const COLLECTION_ID = '685045780035db1ebdd7';
export const BooksContext = createContext()

export function BooksProvider({children}){
    const [books,setBooks] = useState([]);
    
    async function fetchBooks(){
        try{

        }catch(Error){
            console.log(Error.message)
        }
    }

    async function fetchBookById({children}){
        try{

        }catch(Error){
            console.log(Error.message);
        }
    }

    async function createBook({children}){
        try{

        }catch(Error){
            console.log(Error.message)
        }
    }

    async function deleteBook({children}){
        try{

        }catch(Error){
            console.log(Error.message)
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