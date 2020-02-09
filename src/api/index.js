const API_BASE_ADDRESS = 'http://localhost:4000';

export default class Api {
    static getCountryLists() {
        // const uri = API_BASE_ADDRESS + "/users";
        const uri = 'https://restcountries.eu/rest/v2/all';
        return fetch(uri, {
            method: 'GET'
        });
    }
}