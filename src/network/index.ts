export const RestClient = {
    get: (url: string, params?: any) => {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}