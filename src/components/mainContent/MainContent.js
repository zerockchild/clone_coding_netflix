import DisplayMovieRow from "../displayMovieRow/DisplayMovieRow";
import {Container} from "./style/MainContentStyle";
import requests from "../../requests";
import {useEffect, useState} from "react";

function MainContent() {
    const [loading, setLoading] = useState(true);
    const [movieGenList, setMovieGenList] = useState({});
    const getMovieGenList = async () => {
        const json = await (
            await fetch(requests.fetchTvGenres)
        ).json()
        setMovieGenList(json.genres)
        setLoading(false)
    }

    useEffect(() =>{
        getMovieGenList();
    },[])
    return(
        <Container>
            <DisplayMovieRow request = {requests.fetchTopRated} title="Top Rate"/>
            {loading ? null:<div>
            {movieGenList.map((genres)=> (
                <DisplayMovieRow request={requests.fetchDiscoverTv + genres.id} title={genres.name}/>
            ))}</div>}
        </Container>
    )
}

export default MainContent;
