import helmet from "helmet";
import { securityConfig } from "../Configs/security.js";

export const securityMiddleware = helmet.contentSecurityPolicy({
  directives: securityConfig.cspDirectives,
});
