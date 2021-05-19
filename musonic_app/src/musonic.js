// this file will containe all the logics related to our spotify clone" Musonic"

// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#   --- LINK FOR ALL SORTS OF DOCUMENTATION RELATED TO SPOTIFY

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "64c49dcd01dc417ba3e2c264026bc758";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// Login url to authenticate user via spotify api
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;