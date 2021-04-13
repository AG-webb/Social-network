import * as axios from 'axios';

let instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "37438a46-9c75-4b15-b91a-02b9b89b933a",
    },
});


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize} `)
        .then(response => {
            return response.data;
        });
    },

    deleteSubscribe (userId) {
        return instance.delete(`follow/${userId} `)
        .then(response => {
            return response.data;
        });
    },

    postSubscribe (userId) {
        return instance.post(`follow/${userId} `)
        .then(response => {
            return response.data;
        });
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data;
        });
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
        .then(response => {
            return response.data;
        });
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status})
        .then(response => {
            return response.data;
        });
    },

    uploadPhoto(photo) {
        const formData = new FormData();
        formData.append("image", photo);
        
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
        .then(response => { 
            return response.data;
        });
    },

    saveProfileInfo(profile) {
        return instance.put(`profile`, profile)
        .then(response => { 
            return response.data;
        });
    },
};

export const authAPI = {
    getAuthUser () {
        return instance.get(`auth/me`)
        .then(response => {
            return response.data;
        });
    },

    login (email, password, rememberMe, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
        .then(response => {
            return response.data;
        });
    },

    logout () {
        return instance.delete(`auth/login`)
        .then(response => {
            return response.data;
        });
    },
};

export const securityAPI = {
    getCaptchaUrl () {
        return instance.get(`/security/get-captcha-url`)
        .then(response => {
            return response.data;
        });
    },
};

