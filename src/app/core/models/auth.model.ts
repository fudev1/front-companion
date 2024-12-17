export interface DiscordUser {
    id: string;
    username: string;
    global_name: string;
    email: string;
    avatar: string;
    locale: string;
    banner_color: string | null;
    last_login: string;
}

export interface AuthTokens {
    access_token: string;
    refresh_token: string;
}

export interface AuthResponse {
    user: DiscordUser;
    tokens: AuthTokens;
}

