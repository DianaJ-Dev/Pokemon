import { useState } from "react"
import { FavoriteContext } from "./FavoriteContext";

export const FavoriteProvider = ({ children }) => {

    const [favoriteList, setFavoritelist] = useState([]);

    return (
        <FavoriteContext.Provider value={{ favoriteList, setFavoritelist }}>
            { children }
        </FavoriteContext.Provider>
    )
}