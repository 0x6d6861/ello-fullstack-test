import { environment } from './environment';

type ILogFunction = (...data: any[]) => void

class AppLogger {
    public log: ILogFunction;
    public debug: ILogFunction;
    public info: ILogFunction;
    public warn: ILogFunction;
    public error: ILogFunction;
    public logToServer: ILogFunction;
    /**
     * @constructor AppLogger
     */
    constructor() {
        /** Initializing the configuration of logger */
        /** Checking the environment */
        if (environment !== 'production') {
            this.log = console.log.bind(console);

            this.debug = console.debug.bind(console);

            this.info = console.info.bind(console);

            this.warn = console.warn.bind(console);

            this.error = console.error.bind(console);

            this.logToServer = this.error;
        } else {
            this.log = this.debug = this.info = this.warn = this.error = () => {};

            this.logToServer = (err: typeof Error) => {
                console.error(err); //
                /** TODO: API integration for logging to server or any custom logic in case of Production environment */
            };
        }
    }


    initLogger() {}
}

const logger = new AppLogger();

export { logger };
