var ws = null;
function connect() {
    ws = new WebSocket('wss://eventsub.wss.twitch.tv/ws?keepalive_timeout_seconds=30');
    // Listen for the connection open event then call the subscribe function
    ws.addEventListener('open', function(event) {
        console.log('Connection to server opened');
    });
    // Listen for the close connection event
    ws.addEventListener('close', function(event) {
        console.log('Connection closed');
        connect();
    });
    // Listen for connection errors
    ws.addEventListener('error', function(event) {
        console.log('Connection error', event);
    });
    // Listen for new messages arriving at the client
    ws.addEventListener('message', function(event) {
        console.log('New message', event.data);
        var event_data = JSON.parse(event.data);

        if (event_data.metadata.message_type === "session_welcome") {
            var websocket_id = event_data.payload.session.id;
            fetch('https://api.twitch.tv/helix/eventsub/subscriptions', {
                method: 'POST',
                headers: {
                    'Client-ID': CLIENT_ID,
                    'Authorization': 'Bearer ' + AUTHENTICATION_CODE,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "type": "channel.channel_points_custom_reward_redemption.add",
                    "version": "1",
                    "condition": {
                        "broadcaster_user_id": USER_DATA.id
                    },
                    "transport": {
                        "method": "websocket",
                        "session_id": websocket_id
                    }
                })
            }).then(function(response) {
                console.log('HELIX EVENTSUB RESPONSE:', response);
                return response.json();
            }).then(function(response) {
                console.log(response);
            }).catch(function(error) {
                console.log(error);
            });
            fetch('https://api.twitch.tv/helix/eventsub/subscriptions', {
                method: 'POST',
                headers: {
                    'Client-ID': CLIENT_ID,
                    'Authorization': 'Bearer ' + AUTHENTICATION_CODE,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "type": "channel.channel_points_custom_reward_redemption.update",
                    "version": "1",
                    "condition": {
                        "broadcaster_user_id": USER_DATA.id
                    },
                    "transport": {
                        "method": "websocket",
                        "session_id": websocket_id
                    }
                })
            }).then(function(response) {
                console.log('HELIX EVENTSUB RESPONSE:', response);
                return response.json();
            }).then(function(response) {
                console.log(response);
            }).catch(function(error) {
                console.log(error);
            });
            fetch('https://api.twitch.tv/helix/eventsub/subscriptions', {
                method: 'POST',
                headers: {
                    'Client-ID': CLIENT_ID,
                    'Authorization': 'Bearer ' + AUTHENTICATION_CODE,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "type": "channel.subscribe",
                    "version": "1",
                    "condition": {
                        "broadcaster_user_id": USER_DATA.id
                    },
                    "transport": {
                        "method": "websocket",
                        "session_id": websocket_id
                    }
                })
            }).then(function(response) {
                console.log('HELIX EVENTSUB RESPONSE:', response);
                return response.json();
            }).then(function(response) {
                console.log(response);
            }).catch(function(error) {
                console.log(error);
            });
            fetch('https://api.twitch.tv/helix/eventsub/subscriptions', {
                method: 'POST',
                headers: {
                    'Client-ID': CLIENT_ID,
                    'Authorization': 'Bearer ' + AUTHENTICATION_CODE,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "type": "channel.subscription.gift",
                    "version": "1",
                    "condition": {
                        "broadcaster_user_id": USER_DATA.id
                    },
                    "transport": {
                        "method": "websocket",
                        "session_id": websocket_id
                    }
                })
            }).then(function(response) {
                console.log('HELIX EVENTSUB RESPONSE:', response);
                return response.json();
            }).then(function(response) {
                console.log(response);
            }).catch(function(error) {
                console.log(error);
            });
            fetch('https://api.twitch.tv/helix/eventsub/subscriptions', {
                method: 'POST',
                headers: {
                    'Client-ID': CLIENT_ID,
                    'Authorization': 'Bearer ' + AUTHENTICATION_CODE,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "type": "channel.follow",
                    "version": "2",
                    "condition": {
                        "broadcaster_user_id": USER_DATA.id,
                        "moderator_user_id": USER_DATA.id
                    },
                    "transport": {
                        "method": "websocket",
                        "session_id": websocket_id
                    }
                })
            }).then(function(response) {
                console.log('HELIX EVENTSUB RESPONSE:', response);
                return response.json();
            }).then(function(response) {
                console.log(response);
            }).catch(function(error) {
                console.log(error);
            });
            fetch('https://api.twitch.tv/helix/eventsub/subscriptions', {
                method: 'POST',
                headers: {
                    'Client-ID': CLIENT_ID,
                    'Authorization': 'Bearer ' + AUTHENTICATION_CODE,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "type": "channel.raid",
                    "version": "1",
                    "condition": {
                        "to_broadcaster_user_id": USER_DATA.id
                    },
                    "transport": {
                        "method": "websocket",
                        "session_id": websocket_id
                    }
                })
            }).then(function(response) {
                console.log('HELIX EVENTSUB RESPONSE:', response);
                return response.json();
            }).then(function(response) {
                console.log(response);
            }).catch(function(error) {
                console.log(error);
            });
            fetch('https://api.twitch.tv/helix/eventsub/subscriptions', {
                method: 'POST',
                headers: {
                    'Client-ID': CLIENT_ID,
                    'Authorization': 'Bearer ' + AUTHENTICATION_CODE,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "type": "channel.goal.progress",
                    "version": "1",
                    "condition": {
                        "broadcaster_user_id": USER_DATA.id
                    },
                    "transport": {
                        "method": "websocket",
                        "session_id": websocket_id
                    }
                })
            }).then(function(response) {
                console.log('HELIX EVENTSUB RESPONSE:', response);
                return response.json();
            }).then(function(response) {
                console.log(response);
            }).catch(function(error) {
                console.log(error);
            });
            fetch('https://api.twitch.tv/helix/eventsub/subscriptions', {
                method: 'POST',
                headers: {
                    'Client-ID': CLIENT_ID,
                    'Authorization': 'Bearer ' + AUTHENTICATION_CODE,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "type": "channel.shoutout.receive",
                    "version": "1",
                    "condition": {
                        "broadcaster_user_id": USER_DATA.id,
                        "moderator_user_id": USER_DATA.id
                    },
                    "transport": {
                        "method": "websocket",
                        "session_id": websocket_id
                    }
                })
            }).then(function(response) {
                console.log('HELIX EVENTSUB RESPONSE:', response);
                return response.json();
            }).then(function(response) {
                console.log(response);
            }).catch(function(error) {
                console.log(error);
            });
        } else if (event_data.metadata.message_type === "notification") {
            console.log(event_data);
            if (event_data.metadata.subscription_type === "channel.channel_points_custom_reward_redemption.add") {
                console.log(event_data.payload.event.user_name);
                fetch('https://api.twitch.tv/helix/users?id=' + event_data.payload.event.user_id, {
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
                    document.getElementById('notification').style.backgroundImage = 'url(' + response.data[0].profile_image_url + ')';
                    document.getElementById('notification').innerHTML = response.data[0].display_name + ' redeemed ' + event_data.payload.event.reward.title + '!';
                }).catch(function(error) {
                    console.log(error);
                });
            } else if (event_data.metadata.subscription_type === "channel.subscribe" || event_data.metadata.subscription_type === "channel.subscription.gift") {
                fetch('https://api.twitch.tv/helix/users?id=' + event_data.payload.event.user_id, {
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
                    document.getElementById('notification').style.backgroundImage = 'url(' + response.data[0].profile_image_url + ')';
                    if (event_data.metadata.subscription_type === "channel.subscribe") {
                        document.getElementById('notification').innerHTML = response.data[0].display_name + ' just subscribed!';
                    } else if (event_data.metadata.subscription_type === "channel.subscription.gift") {
                        document.getElementById('notification').innerHTML = response.data[0].display_name + ' just gifted subs!';
                    }
                }).catch(function(error) {
                    console.log(error);
                });
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
                    var youtube_followers = document.getElementById('youtube_followers').value;
                    if (youtube_followers) {
                        youtube_followers = parseInt(youtube_followers);
                    } else {
                        youtube_followers = 0;
                    }
                    var youtube_subscribers = document.getElementById('youtube_subscribers').value;
                    if (youtube_subscribers) {
                        youtube_subscribers = parseInt(youtube_subscribers);
                    } else {
                        youtube_subscribers = 0;
                    }
                    for (var i = 0; i < response.data.length; ++i) {
                        var data = response.data[i];
                        if (data.type === 'new_subscription_count') {
                            document.getElementById('current_subscribers').innerHTML = (data.current_amount + youtube_subscribers);
                            document.getElementById('target_subscribers').innerHTML = data.target_amount;
                        } else if (data.type === 'follower') {
                            document.getElementById('current_followers').innerHTML = (data.current_amount + youtube_followers);
                            document.getElementById('target_followers').innerHTML = data.target_amount;
                        }
                    }
                }).catch(function(error) {
                    console.log(error);
                });
            } else if (event_data.metadata.subscription_type === "channel.follow") {
                fetch('https://api.twitch.tv/helix/users?id=' + event_data.payload.event.user_id, {
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
                    document.getElementById('notification').style.backgroundImage = 'url(' + response.data[0].profile_image_url + ')';
                    document.getElementById('notification').innerHTML = response.data[0].display_name + ' just followed!';
                }).catch(function(error) {
                    console.log(error);
                });
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
                    var youtube_followers = document.getElementById('youtube_followers').value;
                    if (youtube_followers) {
                        youtube_followers = parseInt(youtube_followers);
                    } else {
                        youtube_followers = 0;
                    }
                    var youtube_subscribers = document.getElementById('youtube_subscribers').value;
                    if (youtube_subscribers) {
                        youtube_subscribers = parseInt(youtube_subscribers);
                    } else {
                        youtube_subscribers = 0;
                    }
                    for (var i = 0; i < response.data.length; ++i) {
                        var data = response.data[i];
                        if (data.type === 'new_subscription_count') {
                            document.getElementById('current_subscribers').innerHTML = (data.current_amount + youtube_subscribers);
                            document.getElementById('target_subscribers').innerHTML = data.target_amount;
                        } else if (data.type === 'follower') {
                            document.getElementById('current_followers').innerHTML = (data.current_amount + youtube_followers);
                            document.getElementById('target_followers').innerHTML = data.target_amount;
                        }
                    }
                }).catch(function(error) {
                    console.log(error);
                });
            } else if (event_data.metadata.subscription_type === "channel.raid") {
                fetch('https://api.twitch.tv/helix/users?id=' + event_data.payload.event.to_broadcaster_user_id, {
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
                    document.getElementById('notification').style.backgroundImage = 'url(' + response.data[0].profile_image_url + ')';
                    document.getElementById('notification').innerHTML = response.data[0].display_name + ' just raided with ' + event_data.payload.event.viewers + 'viewers!';
                }).catch(function(error) {
                    console.log(error);
                });
            } else if (event_data.metadata.subscription_type === "channel.goal.progress") {
                var youtube_followers = document.getElementById('youtube_followers').value;
                if (youtube_followers) {
                    youtube_followers = parseInt(youtube_followers);
                } else {
                    youtube_followers = 0;
                }
                var youtube_subscribers = document.getElementById('youtube_subscribers').value;
                if (youtube_subscribers) {
                    youtube_subscribers = parseInt(youtube_subscribers);
                } else {
                    youtube_subscribers = 0;
                }
                if (event_data.payload.event.type === 'new_subscription_count') {
                    document.getElementById('current_subscribers').innerHTML = (event_data.payload.event.current_amount + youtube_subscribers);
                    document.getElementById('target_subscribers').innerHTML = event_data.payload.event.target_amount;
                } else if (event_data.payload.event.type === 'follow') {
                    document.getElementById('current_followers').innerHTML = (event_data.payload.event.current_amount + youtube_followers);
                    document.getElementById('target_followers').innerHTML = event_data.payload.event.target_amount;
                }
            } else if (event_data.metadata.subscription_type === "channel.shoutout.receive") {
                fetch('https://api.twitch.tv/helix/users?id=' + event_data.payload.event.from_broadcaster_user_id, {
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
                    document.getElementById('notification').style.backgroundImage = 'url(' + response.data[0].profile_image_url + ')';
                    document.getElementById('notification').innerHTML = response.data[0].display_name + ' just gave us a shoutout!';
                }).catch(function(error) {
                    console.log(error);
                });
            }
        }
    });
}
function manually_close_websocket() {
    ws.close();
}

function displayNotification() {
    document.getElementById('notification').style.display = 'block';
    setTimeout(function() {
        document.getElementById('notification').style.display = 'none';
    }, 30000);
}
