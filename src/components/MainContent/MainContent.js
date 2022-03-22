import DisplayMovieRow from "../displayMovieRow/DisplayMovieRow";
import {Container} from "./style/MainContentStyle";
import requests from "../../requests";
import {useEffect, useState} from "react";
import ModalMovieDetails from "../modalMovieDetails/ModalMovieDetails";

function MainContent() {
    const [loading, setLoading] = useState(true);
    const [movieGenList, setMovieGenList] = useState({});
    const [isOpen, setOpen] = useState(false);
    const getMovieGenList = async () => {
        const json = await (
            await fetch(requests.fetchTvGenres)
        ).json()
        setMovieGenList(json.genres)
        setLoading(false)
    }
    const modalOpen = () =>{
        console.log('parent')
        setOpen(true);
    }
    const modalClose = () =>{
        console.log('parent')
        setOpen(false);
    }
    useEffect(() =>{
        getMovieGenList();
    },[])
    return(
        <Container>
            <DisplayMovieRow request = {requests.fetchTopRated} title="Top Rate" isOpen = {modalOpen}/>
            <ModalMovieDetails isOpen={isOpen} isClose={modalClose}/>
            {loading ? null:<div>
            {movieGenList.map((genres)=> (
                <DisplayMovieRow request={requests.fetchDiscoverTv + genres.id} title={genres.name} isOpen = {modalOpen}/>
            ))}</div>}
        </Container>
    )
}

export default MainContent;
