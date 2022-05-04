import { useQueries, useQuery, useQueryClient } from 'react-query';
import Header from '../../common/components/Header';

const Series = () => {

    const queryClient = useQueryClient();
    console.log(queryClient);
    console.log(queryClient.getQueryData("movies"));
    console.log(queryClient.getQueryData("genres"));
    
    return ( 
        <div>
            <Header bannerMovie={null} ></Header>
            <p>Series</p>
        </div>
     );
}
 
export default Series;