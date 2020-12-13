const os = require("os");
const fs = require("fs");
const crypto = require("crypto");

const data = require("./data");

var userdata = data("tejas", 2020, "BE");
var user = os.userInfo();
const password = crypto
  .createHmac("sha256", "secret")
  .update("Prograd")
  .digest("hex");

fs.appendFileSync("message.txt", "PERSONAL DETAILS" + "\n");

fs.appendFileSync(
  "message.txt",
  "name ->                " + userdata.name + "\n"
);
fs.appendFileSync(
  "message.txt",
  "year ->                " + userdata.Year + "\n"
);
fs.appendFileSync(
  "message.txt",
  "qualification ->       " + userdata.Qualification + "\n"
);
fs.appendFileSync(
  "message.txt",
  "username ->            " + user.username + "\n"
);

fs.appendFileSync("message.txt", "password ->            " + password + "\n");
