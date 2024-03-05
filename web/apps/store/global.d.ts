declare module '*.md' {
  const text: string;
  export default text;
}
declare module '*.png';
declare module '*.webp';

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    DISCORD_CLIENT_ID: string;
    DISCORD_CLIENT_SECRET: string;
    PORT: number;
    EDGE_CONFIG: string;
    STAGING?: string;
  }
}
