export default async function apiCall(method: string, path: string, data?: any) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');

    if (data && data instanceof FormData) {
        headers.append('Content-Type', 'multipart/form-data');
        const responseModel: Response = await fetch(`${process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3001'}/${path}`, {
            method,
            body: data,
        });
        return responseModel.json();
    }

    headers.append('Content-Type', 'application/json');

    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3001'}/${path}`, {
        method: method.toUpperCase(),
        mode: 'no-cors',
        headers: headers,
        body: JSON.stringify(data),
    });
    return response.json();
}
