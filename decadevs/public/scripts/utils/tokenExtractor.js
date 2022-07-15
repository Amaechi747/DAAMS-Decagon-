function extractToken(resource, data) {
  if (resource === "url") {
    return data.split("=")[1];
  }
}
export { extractToken };
