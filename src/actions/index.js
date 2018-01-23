import axios from 'axios';

const URL = 'https://api-react-course.herokuapp.com/api/v1/users';

export const fetchComments = () => {
  const request = axios.get(URL);

  return {
    type: 'FETCH_COMMENTS',
    payload: request
  };
};