class Environment {
    public get apiEndpoint(): string {
        console.log(process.env);
        return process.env.REACT_APP_API_ENDPOINT || '';
    }
}
export default new Environment();