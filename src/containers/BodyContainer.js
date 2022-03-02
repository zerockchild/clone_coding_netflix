import Body from "../components/body/Body";
import axios from "axios";
import { useEffect } from "react";

const BodyContainer = () => {

    const {REACT_APP_TMDB_KEY} = process.env;

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${REACT_APP_TMDB_KEY}&language=ko&page=1`);
            console.log(data);
        };
        
        getData();

    },[REACT_APP_TMDB_KEY]);

    return (
        <Body />
    )

}

export default BodyContainer;