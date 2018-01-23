import axios from 'axios';
import YTSearch from 'youtube-api-search';

import { FETCH_COMMENTS, FETCH_VIDEOS } from './types';

const URL = 'https://api-react-course.herokuapp.com/api/v1/users';
const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

export const fetchComments = () => {
  const request = axios.get(URL);

  return {
    type: FETCH_COMMENTS,
    payload: request
  };
};

export function fetchVideos(term) {
  return function(dispatch) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      dispatch({
        type: FETCH_VIDEOS,
        payload: videos
      });
    });
  }
}