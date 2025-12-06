import app from "./app.js"; // if using ESM
import chalk from "chalk"; //apply styling for console logs

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${chalk.green(PORT)}`);
});