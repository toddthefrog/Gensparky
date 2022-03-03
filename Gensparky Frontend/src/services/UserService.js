import axios from 'axios';

const USERS_REST_API_URL = 'http://localhost:8080/users';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }

    addUser(user){
        return axios.post(USERS_REST_API_URL, user);
    }

    deleteUser(id){
        return axios.delete(USERS_REST_API_URL + `/${id}`);
    }
    
    updateUser(user,id){
        return axios.put(USERS_REST_API_URL + `/${id}`, user);
    }
}

export default new UserService();