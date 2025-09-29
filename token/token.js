import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

function generateApiKey(clientName, expiresIn = "30d") {
  const payload = {
    client: clientName,
  };
  const token = jwt.sign(payload, SECRET, { expiresIn });
  return token;
}

const apiKey = generateApiKey("Project");
console.log("JWT API Key:", apiKey);
