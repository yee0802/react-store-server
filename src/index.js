import "dotenv/config";
import app from "./server.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`\n Server is running on http://localhost:${PORT}\n`);
});
