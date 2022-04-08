import React from 'react';
import { useQuery } from 'react-query';
import { loadTopRatedAPI } from '../../../apis/movie';
import DisplayMovies from './DisplayMovies';
import PropTypes from 'prop-types';

const MainContents = ({ contents }) => {

    console.log('contents', contents);
    // 받은 contents를 reduce 해서 하나의 배열로 만들고 뿌려주기

    return (
        <div>
            <DisplayMovies />
        </div>
    );
};

MainContents.propTypes = {
  contents: PropTypes.object.isRequired,
};

export default MainContents;