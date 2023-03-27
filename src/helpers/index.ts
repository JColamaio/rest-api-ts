// auth helpers
import crypto from 'crypto';
const SECRET = process.env.SECRET

export const authentication = (salt: string, password: string): string => {
    return crypto.createHmac('sha256', [salt,password].join('/')).update(String(SECRET)).digest('hex');
};

export const randomizer = () => crypto.randomBytes(128).toString('base64');
