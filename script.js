let users = [
  {
    name: "Amisha Rathore",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    bio: "silent chaos in a loud world | not for everyone",
  },

  {
    name: "Amara Mehta",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
    bio: "main character energy | coffee > everything",
  },

  {
    name: "Isha Oberoi",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
    bio: "walking through dreams | late night thinker",
  },

  {
    name: "Ojin Oklawa",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    bio: "too glam to give a damn | filter free soul",
  },

  {
    name: "Riya Sharma",
    pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500",
    bio: "books, sunsets and soft music",
  },

  {
    name: "Arjun Verma",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    bio: "gym • code • repeat",
  },

  {
    name: "Neha Kapoor",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
    bio: "living one aesthetic day at a time",
  },
];

function showUsers(arr) {
  arr.forEach(function (user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = user.pic;
    image.classList.add("bg-img");

    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    content.appendChild(heading);
    content.appendChild(para);

    card.appendChild(image);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    document.querySelector(".cards").appendChild(card);
  });
}
showUsers(users);

let inp = document.querySelector(".inp");
let msg = document.querySelector(".not-found");
inp.addEventListener("input", function(det){
  //newUsers me array aayega 
  let newUsers = users.filter((user) => {
    return user.name.toLowerCase().startsWith(det.target.value.toLowerCase());
  });
  document.querySelector(".cards").innerHTML = "";
  if(newUsers.length === 0){
    msg.textContent = "User Not Found";
  }
  else{
    msg.textContent = "";
    showUsers(newUsers);
  }
})