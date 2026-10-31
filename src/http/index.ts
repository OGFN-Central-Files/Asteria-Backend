import app from "./server";

const PORT = 8080; // ← your requested port
app.listen(PORT, () => {
  console.log(`[HTTP] Asteria server listening on :${PORT}`);
});
