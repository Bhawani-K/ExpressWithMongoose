const app = require("./app");

const PORT = process.env.PORT || 7000;

/* Listening to the port and logging the message. */
app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});
