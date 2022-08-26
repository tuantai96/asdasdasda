export default class UsersService {

    getUserSmall() {
        return fetch('data/users-small.json').then(res => res.json()).then(d => d.data);
    }

    getUser() {
        return fetch('data/users.json').then(res => res.json()).then(d => d.data);
    }

    getUserWithOrdersSmall() {
        return fetch('data/users-orders-small.json').then(res => res.json()).then(d => d.data);
    }

}