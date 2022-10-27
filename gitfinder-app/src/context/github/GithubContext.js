import { createContext, useReducer } from "react";
import React from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
        users:[],
        user: {},
        repositories: [],
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)
    const searchUsers = async (text) => {
        setLoading();
        try{
            const params = new URLSearchParams({
                q: text,
            })
            const response = await fetch(`${GITHUB_URL}/search/users?${params}`, { 
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    },
                })
                const {items} = await response.json();
                dispatch({
                    type: 'GET_USERS',
                    payload: items,
                })
        }
        catch (err){
            console.log(err);
        }
    }
    const searchUser = async (userName) => {
        setLoading();
        try{
            const response = await fetch(`${GITHUB_URL}/users/${userName}`, { 
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    },
                })
                if (response.status === 404){
                    window.location = '/notfound';
                }
                else{
                const user = await response.json();
                dispatch({
                    type: 'GET_USER',
                    payload: user,
                })
            }
        }
        catch (err){
            console.log(err);
        }
    }
    const searchRepositories = async (userName) => {
        setLoading();
        try{
            const response = await fetch(`${GITHUB_URL}/users/${userName}/repos`, { 
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    },
                })
                if (response.status === 404){
                    window.location = '/notfound';
                }
                else{
                const data = await response.json();
                dispatch({
                    type: 'GET_REPOS',
                    payload: data,
                })
            }
        }
        catch (err){
            console.log(err);
        }
    }
    const clearUsers = () => dispatch({type:'CLEAR_USERS'})
    const setLoading = () => dispatch({type:'SET_LOADING'})
    return <GithubContext.Provider value={{users: state.users, loading:state.loading, user:state.user,searchUsers, searchUser, clearUsers, repositories: state.repositories, searchRepositories}}>
            {children}
        </GithubContext.Provider>
}

export default GithubContext;