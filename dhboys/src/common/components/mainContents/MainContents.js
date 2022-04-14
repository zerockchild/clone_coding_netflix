import React from 'react';
import DisplayMovies from './DisplayMovies';
import PropTypes from 'prop-types';

const MainContents = ({ contentsList }) => {
    console.log('contentsList', contentsList);
    // contentsList.map((contents) => console.log(contents?.data?.results));
    return (
        <div className='container'>
            {contentsList.map((contents) => <DisplayMovies key={contents?.data?.total_pages} contents={contents?.data} />)}
        </div>
    );
};

MainContents.propTypes = {
  contentsList: PropTypes.array.isRequired,
};

export default MainContents;