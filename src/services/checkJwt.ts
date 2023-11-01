import EnvVars from "../constants/EnvVars";
import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: EnvVars.Audience,
  issuerBaseURL: EnvVars.IssuerBaseUrl,
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
