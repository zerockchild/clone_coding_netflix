import Header from "../../common/components/Header";
import Loading from "../../common/components/Loading";
import { useQueries, useQuery } from 'react-query';
import Error from "../../common/components/Error";
import ItemList from "../../common/components/ItemList";
import useAxios from "../../common/hooks/useAxios";

const Home = () => {

    const { REACT_APP_TMDB_KEY, REACT_APP_TMDB_OPTIONS } = process.env;
    const itemKeys = [{ key: "nowPlaying", title: "Now Playing", url: "movie/now_playing"},
        { key: "topRated", title: "Top Rated", url: "movie/top_rated"},
        { key: "popular", title: "Popular", url: "movie/popular"},
        { key: "upcoming", title: "Upcoming", url: "movie/upcoming"},
        { key: "weeklyTV", title: "Weekly TV", url: "trending/tv/week"}
    ];

    const fetcher = async () => {
        return await Promise.all(itemKeys.map(itemKey => useAxios.get(`${itemKey.url}${REACT_APP_TMDB_KEY}${REACT_APP_TMDB_OPTIONS}`)))
            // .then((responses) => {
            //     const results = responses.map(each => each.data.results);
            //     return itemKeys.reduce((acc, curr, idx) => ({ ...acc, [curr.key]: results[idx] }), {});
            // });
    };
    
    const { data, isLoading, error } = useQuery('movies', fetcher, { retry: 0, select: responses => { const results = responses.map(each => each.data.results); return itemKeys.reduce((acc, curr, idx) => ({ ...acc, [curr.key]: results[idx] }), {});} });
    const genre = useQuery('genres', async () => await useAxios.get(`genre/tv/list${REACT_APP_TMDB_KEY}${REACT_APP_TMDB_OPTIONS}`), { retry: 0, select: data => (data.data) });
    console.log(genre);
    
    // const results = useQueries(itemKeys.map(itemKey => ({
    //     queryKey: ["home", itemKey.key],
    //     queryFn: async () => await useAxios.get(`${itemKey.url}${REACT_APP_TMDB_KEY}${REACT_APP_TMDB_OPTIONS}`)
    // })));
    // console.log(results);
    console.log(data, isLoading, error);

    if (isLoading) return <Loading />;
    if (error) return <Error />;

    return (
        <div>
            {/* <!-- Top --> */}
            <Header bannerMovie={data.nowPlaying[0]} >
                {/* 모달 넣을 예정 */}
            </Header>
            {/* <!-- Body --> */}
            <ItemList itemKeys={itemKeys} movieData={data} />
        </div>
    );

}

export default Home;