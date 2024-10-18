const moment = require("moment");

// Format messages
function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format("h:mm a"), // e.g., 3:30 pm
  };
}

module.exports = formatMessage;
