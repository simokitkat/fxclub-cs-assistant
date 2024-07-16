require("dotenv").config();
const http = require("http");
const Groq = require("groq-sdk");
const { URLSearchParams } = require("url");

const PORT = process.env.PORT || 3000;
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const server = http.createServer(async (req, res) => {
  if (req.url === "/get-groq-chat-completion" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString(); // convert Buffer to string
    });

    req.on("end", async () => {
      const requestData = JSON.parse(body);
      try {
        const chatCompletion = await groq.chat.completions.create({
          messages: requestData.messages,
          model: requestData.model,
        });

        // Set CORS headers
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        );

        // Send the response back to the frontend
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(chatCompletion));
      } catch (error) {
        console.error("Error:", error);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        );
        res.writeHead(500);
        res.end(JSON.stringify({ message: "Internal server error" }));
      }
    });
  } else if (req.method === "OPTIONS") {
    // Handle CORS preflight request
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.writeHead(204); // No Content
    res.end();
  } else {
    // Not found or unsupported method
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Resource not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
