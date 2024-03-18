import React from "react";
//design card using tailwind css
const data = [
  {
    image: "https://ntvb.tmsimg.com/assets/p31064_v_h10_ao.jpg?w=1280&h=720",
    name: "Catch Me If You Can",
    about:
      "An FBI agent makes it his mission to put cunning con man Frank Abagnale Jr. behind bars. But Frank not only eludes capture, he revels in the pursuit.",
      knowmore:true
  },
  {
    image:
      "https://facts.net/wp-content/uploads/2023/06/37-facts-about-the-movie-uncut-gems-1687439491.jpg",
    name: "Uncut Gems",
    about:
      "With his debts mounting and angry collectors closing in, a fast-talking New York City jeweler risks everything in hopes of staying afloat and alive.",
      knowmore:false
  },
  {
    image:
      "https://facts.net/wp-content/uploads/2023/10/35-facts-about-the-movie-the-pursuit-of-happyness-1696475087.jpg",
    name: "The Pursuit of Happyness",
    about:
      "A newly single father determined to lift himself and his son out of poverty works his way up from the bottom at a stock brokerage firm.",
      knowmore:true
  },
];

function Cards() {
    function handleClick(){
    alert('hey');
    }
  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elemnet, index) => (
        <div className="w-52 bg-zinc-100  rounded-md  overflow-hidden">
          <div className="w-full h-35 bg-zinc-500">
            <img src={elemnet.image}></img>
          </div>
          <div className="w-full px-3 py-4">
            <h3 className="font-semibold">{elemnet.name}</h3>
            <p className="text-xs mt-4">{elemnet.about}</p>
            <button onClick={handleClick} className={`px-4 py-1 text-xs rounded ${elemnet.knowmore ?"bg-sky-700":"bg-red-700"} text-zinc-100 mt-3`}>{elemnet.knowmore ?'Know More' :'Nothing More'}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
