const env = process.env;

export default {
    port: env.PORT || 8080,
    host: env.HOST || 'localhost',
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }
};

