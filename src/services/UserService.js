import http from "../http-common";

class UserService {
    getAll() {
        return http.get("/admin/getUsers");
    }
}

export default new UserService();