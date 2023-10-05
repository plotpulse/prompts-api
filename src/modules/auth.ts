const { auth } = require("express-oauth2-jwt-bearer");
const audience = process.env.AUDIENCE;
const issuerBaseURL = process.env.ISSUER_BASE_URL;

export const jwtCheck = auth({
  audience: audience,
  issuerBaseURL: issuerBaseURL,
  tokenSigningAlg: "RS256",
});
