let friends = [
  {
    name: "Amit",
    age: 23,
  },
  {
    name: "abhishek",
    age: 26,
  },
];

function addFriend(friend, callback) {
  setTimeout(() => {
    friends.push(friend);
    console.log("friend added");
    callback();
  }, 2000);
}

function getFriends() {
  setTimeout(() => {
    let str = "";
    friends.forEach(function (friend) {
      str += `<li>${friend.name}</li>`;
    });
    document.getElementById("friends").innerHTML = str;
  });
}

let newFriend = {
  name: "rohit",
  age: 22,
};

addFriend(newFriend, getFriends);
