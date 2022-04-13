import MainContent from "./MainContent";

function Home() {

    const { REACT_APP_TMDB_API_URL, REACT_APP_TMDB_LANGUAGE, REACT_APP_TMDB_KEY, REACT_APP_TMDB_OPTIONS, REACT_APP_TMDB_THUMBNAIL_IMAGE_URL } = process.env;

    return (
        <div>
            <MainContent/>
        </div>
    );
}

export default Home;