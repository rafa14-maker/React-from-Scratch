import axios from 'axios';

const instance = axios.create({
   baseURL : 'https://react-my-burger-f2e21-default-rtdb.firebaseio.com/'
});

export default instance;