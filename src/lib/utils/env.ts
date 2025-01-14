// local dependencies
import * as deployment from './deployment';

export const OBJECT_STORE_CREDS = 'OBJECT_STORE_CREDS';
export const OBJECT_STORE_BUCKET = 'OBJECT_STORE_BUCKET';
export const AUTH0_DOMAIN = 'AUTH0_DOMAIN';
export const AUTH0_CUSTOM_DOMAIN = 'AUTH0_CUSTOM_DOMAIN';
export const AUTH0_CONNECTION = 'AUTH0_CONNECTION';
export const AUTH0_CLIENT_SECRET = 'AUTH0_CLIENT_SECRET';
export const AUTH0_CALLBACK_URL = 'AUTH0_CALLBACK_URL';
export const AUTH0_API_CLIENTID = 'AUTH0_API_CLIENTID';
export const AUTH0_API_CLIENTSECRET = 'AUTH0_API_CLIENTSECRET';
export const AUTH0_AUDIENCE = 'AUTH0_AUDIENCE';
export const MYSQLHOST = 'MYSQLHOST';
export const MYSQLPORT = 'MYSQLPORT';
export const MYSQLUSER = 'MYSQLUSER';
export const MYSQLPASSWORD = 'MYSQLPASSWORD';
export const MYSQLDATABASE = 'MYSQLDATABASE';
export const NUMBERS_SERVICE = 'NUMBERS_SERVICE';
export const NUMBERS_SERVICE_USER = 'NUMBERS_SERVICE_USER';
export const NUMBERS_SERVICE_PASS = 'NUMBERS_SERVICE_PASS';
export const SLACK_WEBHOOK_URL = 'SLACK_WEBHOOK_URL';
export const PRIMARY_INSTANCE = 'PRIMARY_INSTANCE';
export const SMTP_HOST = 'SMTP_HOST';
export const SMTP_PORT = 'SMTP_PORT';
export const SMTP_USER = 'SMTP_USER';
export const SMTP_PASS = 'SMTP_PASS';
export const SMTP_REPLY_TO = 'SMTP_REPLY_TO';


const DEFAULT = [
    MYSQLHOST, MYSQLPORT, MYSQLUSER, MYSQLDATABASE,
];

const PROD = [
    OBJECT_STORE_CREDS, OBJECT_STORE_BUCKET,
    AUTH0_DOMAIN, AUTH0_CUSTOM_DOMAIN, AUTH0_CONNECTION, AUTH0_CLIENT_SECRET,
    AUTH0_CALLBACK_URL, AUTH0_API_CLIENTID, AUTH0_API_CLIENTSECRET,
    AUTH0_AUDIENCE,
    MYSQLHOST, MYSQLPORT, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE,
    NUMBERS_SERVICE, NUMBERS_SERVICE_USER, NUMBERS_SERVICE_PASS,
    SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_REPLY_TO,
    // optional - not required for prod
    // SLACK_WEBHOOK_URL,
    // PRIMARY_INSTANCE,
];

export function confirmRequiredEnvironment() {
    if (deployment.isProdDeployment()) {
        PROD.forEach(checkEnv);
    }
    else {
        DEFAULT.forEach(checkEnv);
    }
}


function checkEnv(env: string) {
    if (!process.env[env]) {
        throw new Error('Missing required environment variable ' + env);
    }
}
