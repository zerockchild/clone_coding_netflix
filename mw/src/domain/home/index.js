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
        return await Promise.all(itemKeys.map(itemKey => useAxios.get(`${itemKey.url}${REACT_APP_TMDB_KEY}${REACT_APP_TMDB_OPTIONS}`)));
            /* line 29: useQuery Options - select로 변경*/
            // .then((responses) => {
            //     const results = responses.map(each => each.data.results);
            //     return itemKeys.reduce((acc, curr, idx) => ({ ...acc, [curr.key]: results[idx] }), {});
            // });
    };

    const { data, isLoading, error } = useQuery('movies', fetcher, {
        retry: 0, 
        select: responses => {
            const results = responses.map(each => each.data.results);
            return itemKeys.reduce((acc, curr, idx) => ({ ...acc, [curr.key]: results[idx] }), {});
        },

        // onSuccess 실행전에 select가 먼저 실행된다. 때문에 data 파라미터는 select의 값은 리턴값이다.
        onSuccess: (data) => {
            console.log('onSuccess - Data', data);
            // const results = data.map(each => each.data.results);
            // console.log('results', results);
            // const movies = itemKeys.reduce((acc, curr, idx) => ({ ...acc, [curr.key]: results[idx] }), {});
            // console.log('movies', movies);
        },
    });
    const genre = useQuery('genres', async () => await useAxios.get(`genre/tv/list${REACT_APP_TMDB_KEY}${REACT_APP_TMDB_OPTIONS}`), { retry: 0, select: data => (data.data) });
    console.log(genre);
    
    /* line 18-33: Promise.all && useQuery로 변경 */
    // const results = useQueries(itemKeys.map(itemKey => ({
    //     queryKey: ["home", itemKey.key],
    //     queryFn: async () => await useAxios.get(`${itemKey.url}${REACT_APP_TMDB_KEY}${REACT_APP_TMDB_OPTIONS}`)
    // })));
    // console.log(results);
    console.log('data', data, isLoading, error);

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