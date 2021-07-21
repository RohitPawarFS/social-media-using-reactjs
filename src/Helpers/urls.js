const API_Root = 'http://codeial.com:8000/api/v2';

export const APIUrls = {
  login: () => '${API_ROOT}/users/login',
  signup: () => '${API_ROOT}/users/signup',
  //   fetchPosts: () => 'http://3.14.12.187/',
  fetchPosts: (page = 1, limit = 5) =>
    '${API_ROOT}/posts?page=${page}&limit=${limit}',
};
