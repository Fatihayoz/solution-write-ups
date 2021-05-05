function societyName(friends) {
    return friends.map(person => person[0].toUpperCase())
        .sort()
        .join('');
}


function societyName(friends) {
    let sortedFriends = friends.sort();
    let abbr = '';
    for (let i = 0; i < sortedFriends.length; i++) {
        abbr = abbr + sortedFriends[i][0];
    }
    return abbr;
}