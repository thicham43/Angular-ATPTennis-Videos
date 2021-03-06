const fetch = require("node-fetch");

const API_KEY = process.env.GOOGLE_API_KEY;
const ROOT_URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet,id&order=date&maxResults=50"
const CHANNEL_ID = "UCY_5h5zaSwN7Or4kIJDYNXA";

exports.handler = async () => {
  try {
    const data = await (await fetch(`${ROOT_URL}&channelId=${CHANNEL_ID}&key=${API_KEY}`)).json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch(e) {
    return {
      statusCode: 500,
      body: 'Error while getting videos from Youtube channel',
    };
  }
};