export default {
    NodeEnv: (process.env.NODE_ENV ?? ''),
    Port: (process.env.PORT ?? 0),
    DbInfo: {
        Host: (process.env.DB_HOST ?? ''),
        Port: (process.env.DB_PORT ?? 0),
        User: (process.env.DB_USER ?? ''),
        Password: (process.env.DB_PASSWORD ?? ''),
    },
  } as const;