export default {
  async fetch(request) {
    const url = new URL(request.url);

    let logMessage = "";

    if (request.method === "POST") {
      try {
        const body = await request.json();
        logMessage = body.message ?? "No message";
      } catch (e) {
        logMessage = "Invalid JSON";
      }
    } else {
      logMessage = url.searchParams.get("message") ?? "No message";
    }

    console.log("📥 Log received:", logMessage);

    return new Response(JSON.stringify({ status: "ok", message: logMessage }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
};
