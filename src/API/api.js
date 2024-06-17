import axios, * as others from 'axios';

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
const API_KEY = 'b1d7b512-e78c-489a-8b67-411e60aa9ca2';

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: baseURL,
        headers: {'API-KEY': API_KEY} 
    }
);

export const userAPI = {
    getUsers(currentPage, pageSize) { return instance.get(`users?page=${currentPage}&count=${pageSize}`)},
    unfollowUser(userId){ return instance.delete(`follow/${userId}`)},
    followUser(userId){ return instance.post(`follow/${userId}`)}
}

export const profileAPI = {
    getProfile(userId) { return instance.get(`profile/${userId}`)},
    getStatus(userId) { return instance.get(`profile/status/${userId}`) },
    updateStatus(status) { return instance.put(`profile/status`, { status: status }) }
}

export const authAPI = {
    authMe() {return instance.get(`auth/me`)}, 
    login(email, password, remember) {return instance.post(`auth/login`, {email, password, remember})},
    logout() {return instance.delete(`auth/login`)}
}