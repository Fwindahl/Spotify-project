export const authEndpoint = 'https://accounts.spotify.com/authorize';
export const clientId = '8297cad7fab544b789a9da9acc340cea';
export const liveURL = 'https://windahls-spotify.herokuapp.com/';
export const devURL = 'http://localhost:3000/';
export const redirectURL = liveURL;
export const scopes = [
	'ugc-image-upload',
	'user-modify-playback-state',
	'user-read-playback-state',
	'user-read-currently-playing',
	'user-follow-modify',
	'user-follow-read',
	'user-read-recently-played',
	'user-read-playback-position',
	'user-top-read',
	'playlist-read-collaborative',
	'playlist-modify-public',
	'playlist-read-private',
	'playlist-modify-private',
	'app-remote-control',
	'streaming',
	'user-read-email',
	'user-read-private',
	'user-library-modify',
	'user-library-read'
];

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;
