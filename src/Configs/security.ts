export const securityConfig = {
  cspDirectives: {
    defaultSrc: ["'self'"],
    objectSrc: ["'none'"],
    connectSrc: ["'self'", "http://localhost:3000", "https://localhost:3000"],
  },
};

