import axios from 'axios';

export const hubspot = axios.create({
    baseURL: 'https://api.hsforms.com/submissions/v3/integration/'
});

export const fetchPost = axios.create({
    baseURL: 'https://azion-blog-stage.s3.amazonaws.com/posts/'
});
