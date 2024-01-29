const targetURL = 'https://localhost:7206'
const PROXY_CONFIG = [
  {
    context: [
      "/api/user",
      "/api/recipes",
      "/api/ingredients",
      "/api/favorites",
      "/api/comments",
      "/weatherforecast",
      "/_configuration",
      "/.well-known",
      "/Identity",
      "/connect",
      "/ApplyDatabaseMigrations",
      "/_framework"
    ],
    target: targetURL,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }

]

module.exports = PROXY_CONFIG;
