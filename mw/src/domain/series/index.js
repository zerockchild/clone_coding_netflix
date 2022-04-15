import { useQueries, useQuery, useQueryClient } from 'react-query';

const Series = () => {

    const queryClient = useQueryClient();
    console.log(queryClient);
    console.log(queryClient.getQueryData("movies"));
    console.log(queryClient.getQueryData("genres"));

    return ( 
        <div>

        </div>
     );
}
 
export default Series;