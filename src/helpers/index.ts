// auth helpers
import crypto from 'crypto';
const SECRET = process.env.SECRET

export const randomizer = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt,password].join('/')).update(String(SECRET)).digest('hex');
};

