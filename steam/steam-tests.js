export async function testSteamAPI() {
  var output = '';

  var os = require('os');
  if (!greenworks) {
    output += 'Greenworks not support for ' + os.platform() + ' platform';
    return output;
  } else {
    if (!greenworks.init()) {
      output += 'Error on initializing steam API.';
      return output;
    } else {

      output += 'Steam API initialized successfully.' + '\n';

      output += 'Cloud enabled: ' + greenworks.isCloudEnabled() + '\n';
      output += 'Cloud enabled for user: ' + greenworks.isCloudEnabledForUser() + '\n';

      output += 'Greenworks.js version: ' + process.versions['greenworks'] + '\n';

      greenworks.on('steam-servers-connected', function() { output += 'connected' + '\n'; });
      greenworks.on('steam-servers-disconnected', function() { output += 'disconnected' + '\n'; });
      greenworks.on('steam-server-connect-failure', function() { output += 'connected failure' + '\n'; });
      greenworks.on('steam-shutdown', function() { output += 'shutdown' + '\n'; });

      let saveTextToFileProm = new Promise((resolve,reject) => {
        greenworks.saveTextToFile('test_file.txt', 'test_content',
        function() { resolve('Save text to file successfully' + '\n'); },
        function(err) { resolve('Failed on saving text to file' + '\n'); });
      });

      let readTextFromFileProm = new Promise((resolve,reject) => {
        greenworks.readTextFromFile('test_file.txt', function(message) {
          resolve('Read text from file successfully.' + '\n'); }, function(err) {
          resolve('Failed on reading text from file' + '\n'); });
      });

      let getCloudQuotaProm = new Promise((resolve,reject) => {
        greenworks.getCloudQuota( function() {
          resolve('Getting cloud quota successfully.' + '\n'); }, function(err) {
          resolve('Failed on getting cloud quota.' + '\n'); });
      });

      let activateAchievementProm = new Promise((resolve,reject) => {
        greenworks.activateAchievement('achievement', function() {
          resolve('Activating achievement successfully' + '\n'); }, function(err) {
          resolve('Failed on activating achievement.' + '\n'); });
      });

      let getNumberOfPlayersProm = new Promise((resolve,reject) => {
        greenworks.getNumberOfPlayers( function(a) {
          resolve('Number of players ' + a  + '\n'); }, function(err) {
          resolve('Failed on getting number of players' + '\n'); });
      });

      let getFriendCountProm = new Promise((resolve,reject) => {
        resolve('Numer of friends: ' + greenworks.getFriendCount(greenworks.FriendFlags.Immediate) + '\n');
      });

      let getFriendsProm = new Promise((resolve,reject) => {
        var friends = greenworks.getFriends(greenworks.FriendFlags.Immediate);
        var friends_names = [];
        for (var i = 0; i < friends.length; ++i)
          friends_names.push(friends[i].getPersonaName());
          resolve("Friends: [" + friends_names.join(',') + "]" + '\n');
      });

      return Promise.all([saveTextToFileProm, readTextFromFileProm, getCloudQuotaProm, activateAchievementProm, getNumberOfPlayersProm, getFriendCountProm, getFriendsProm]).then(results => { 
        return output + results.join("");
      });

    }
  }
}