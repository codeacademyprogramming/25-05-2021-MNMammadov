class ApiClient {
    getPizzas() {
        return fetch('https://mnmammadov.github.io/pizza-db.json')
            .then((res) => res.json());
    }
}

const apiClient = new ApiClient();

export { apiClient };
