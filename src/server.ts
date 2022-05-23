import { app } from "./app";

const SERVER_PORT = process.env.PORT || "3000";

app.listen(SERVER_PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${SERVER_PORT}`)
})