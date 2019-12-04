import accessEnv from "#root/helpers/accessEnv";

import app from "./app";

const PORT = accessEnv("PORT", 9000);

app.listen(PORT, () => {
  console.info(`Nine News Coding Challenge listening on port ${PORT}`);
});
