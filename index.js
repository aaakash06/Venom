import venom from "venom-bot";
console.log("server running...");
let client;
venom
  .create({
    session: "fire-detection",
    multidevice: true,
    headless: "new",
    devtools: false,
    useChrome: true,
    browserArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
  })
  .then((venomClient) => {
    client = venomClient;
    console.log("Venom client is ready!");
    client.sendText("9811492186@c.us", "hi there");
  })
  .catch((err) => console.log("Error initializing Venom:", err));
