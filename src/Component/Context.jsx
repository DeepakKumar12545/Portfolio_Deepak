import React, { useEffect, useReducer } from "react";
import Reducer from "./Reducer";


const AppContext = React.createContext();

let Api = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
    isLoading: true,
    query: "css",
    nbPages: 0,
    page: 0,
    hits: []

}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initialState)

    const fetchApiData = async (url) => {

        dispatch({ type: "SET_LOADING" });

        try {
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits
                },
            });
        } catch (error) {
            console.log(error, 'some erroe oucred');
        }
    }

    // to remove post
    const removePost = (post_id) => {
        console.log('click remove', post_id);
        dispatch({
            type: "REMOVE_POST",
            payload: post_id
        })
    }

    // to call the serachpost
    const SearchPost = (searchQuery)=>{
        dispatch({type: "SEARCH_QUERY",payload:searchQuery});
    }

    useEffect(() => {
        fetchApiData(`${Api}query=${state.query}&page=${state.page}`);
    }, [state.query]);


    return (
        <AppContext.Provider value={{ ...state, removePost,SearchPost }} >{children}</AppContext.Provider>
    );
}


export { AppProvider, AppContext }