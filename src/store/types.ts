export type User = {
    sub: number;
    worker_name: string;
    worker_surname: string;
    email: string;
    role: number;
}

export type LoginResponse = {
    message: string;
    access_token: string;
    user: User
}

export interface ILoginForm {
    email: string
    password: string
}

export interface Session {
    sub: number;
    worker_name: string;
    worker_surname: string;
    email: string;
    role: number;
}