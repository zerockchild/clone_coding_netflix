const ItemList = ({ itemKeys, movieData }) => {

    const { REACT_APP_TMDB_THUMBNAIL_IMAGE_URL } = process.env;

    return (
        <div>
            {itemKeys.map((itemKey) => {
                return (
                    <div className="row" key={itemKey.key}>
                        <h2>{itemKey.title}</h2>
                        <div className="row__posters">
                            {movieData[itemKey.key].map((movie, idx) =>
                                (idx >= 10 && <img key={movie.id} className="row__poster row__posterLarge" src={`${REACT_APP_TMDB_THUMBNAIL_IMAGE_URL}${movie.poster_path}`} alt="" />)
                            )}
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
}

export default ItemList;