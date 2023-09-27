export default {
  NodeEnv: process.env.NODE_ENV ?? "",
  Port: process.env.PORT ?? 0,
  DbUrl: process.env.DB_URL ?? '',
} as const;
