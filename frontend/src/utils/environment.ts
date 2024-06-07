/** @format */

const { VITE_BACKEND_URL, VITE_NODE_ENV = '' } = import.meta.env;

const environment: string = VITE_NODE_ENV.toLowerCase();
const apiBaseUrl = VITE_BACKEND_URL;

///console.log(import.meta.env)
export { environment, apiBaseUrl };
