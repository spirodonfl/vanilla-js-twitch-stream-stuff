function buildAuthorizationUrl() {
    var url = 'https://id.twitch.tv/oauth2/authorize?';
    url += 'response_type=token';
    url += '&client_id=' + CLIENT_ID;
    url += '&redirect_uri=' + RETURN_URL;
    url += '&scope=';
    url += encodeURIComponent('channel:manage:polls channel:read:polls channel:read:goals channel:read:redemptions channel:read:subscriptions moderator:read:followers moderator:read:shoutouts');
    return url;
}
function initiateConnection() {
    fetch("https://id.twitch.tv/oauth2/token", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }, 
        body: "client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + AUTHENTICATION_CODE + "&grant_type=client_credentials&redirect_uri=" + RETURN_URL
    }).then(function(response) {
        console.log(response);
        return response.json();
    }).then(function(response) {
        console.log('OAUTH TOKEN RESPONSE:', response);
        ACCESS_TOKEN = response.access_token;
        fetch('https://api.twitch.tv/helix/users', {
            method: 'GET',
            headers: {
                'Client-ID': CLIENT_ID,
                'Authorization': 'Bearer ' + AUTHENTICATION_CODE
            }
        }).then(function(response) {
            console.log('HELIX USERS RESPONSE:', response);
            return response.json();
        }).then(function(response) {
            console.log(response);
            USER_DATA = response.data[0];
            fetch('https://api.twitch.tv/helix/goals?broadcaster_id=' + USER_DATA.id, {
                method: 'GET',
                headers: {
                    'Client-ID': CLIENT_ID,
                    'Authorization': 'Bearer ' + AUTHENTICATION_CODE
                }
            }).then(function(response) {
                console.log('HELIX BROADCASTER RESPONSE:', response);
                return response.json();
            }).then(function(response) {
                console.log(response);
                for (var i = 0; i < response.data.length; ++i) {
                    var data = response.data[i];
                    if (data.type === 'new_subscription_count') {
                        document.getElementById('current_subscribers').innerHTML = data.current_amount;
                        document.getElementById('target_subscribers').innerHTML = data.target_amount;
                    } else if (data.type === 'follower') {
                        document.getElementById('current_followers').innerHTML = data.current_amount;
                        document.getElementById('target_followers').innerHTML = data.target_amount;
                    }
                }
            }).catch(function(error) {
                console.log(error);
            });
        }).catch(function(error) {
            console.log(error);
        });
    }).catch(function(error) {
        console.log(error);
    });
}
window.addEventListener('load', function () {
    if (document.location.hash !== '') {
        AUTHENTICATION_CODE = document.location.hash.split('#')[1].split('&')[0].split('=')[1];
    }
});
