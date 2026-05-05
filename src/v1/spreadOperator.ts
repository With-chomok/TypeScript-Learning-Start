// spread and rest operator -----------


// Spread Operator ------------------- 
const friends = [ 'rahim', 'karim']
const schoolFriends = [ 'kayes', 'payes', 'mayes']
const collagefriends = ['selle', 'pelle', 'melle']


friends.push(...schoolFriends,...collagefriends)
console.log(friends);
const user = {name: "dipol", phoneNum: "01321321"};

const otherInfo = {hobby: 'song', favouriteColor: " nevblue"}

const userInfo = {...user, ...otherInfo}
console.log(userInfo);


// Rest Operator ----------------- 


const sendInvite = (...friendss: string[]) => {
    friendss.forEach((friend :string => console.log(`sent invitaiton to ${friend}`)))
}
