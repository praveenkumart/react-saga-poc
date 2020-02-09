const API_BASE_ADDRESS = 'http://localhost:4000';

export default class Api {
    static getUsers() {
        // const uri = API_BASE_ADDRESS + "/users";
        const uri = "https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json";

        return fetch(uri, {
            method: 'GET'
        });
    }
}