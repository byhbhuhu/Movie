import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Cardo from "./components/cardse"
import Nave from "./components/navo"
import kungfu from "./images/kungfu .jpeg"
import shrek from "./images/shrek.jpeg"
import despicable from "./images/despicable.jpeg"
import NotFound from "./components/notfound";




const App = () => {
    const send =(message)=>{
        console.log(message)
    }
    const carditem = [{title:'shrek', img:shrek ,description:'an animated film about an ogre named Shrek who goes on a quest to reclaim his swamp from fairy tale characters and save Princess Fiona, discovering true friendship and love along the way. It’s known for its humor and fairy tale parodies.'},
        {title:'despicable me',img:despicable ,description:'is an animated film about a clownfish named Marlin who embarks on a journey across the ocean to find his son, Nemo, who has been captured by a diver. Along the way, Marlin teams up with a forgetful fish named Dory, learning about courage and friendship.'},
        {title:'kung fu panda',img:kungfu ,description:'is an animated film about a supervillain named Gru who plans to steal the moon but ends up changing his ways after adopting three orphaned girls. With the help of his Minions, he learns about love and family.'}
    ];
  return (
    <div>
        <Nave/>
        {
            carditem.length ? (
                carditem.map((item,index)=>{
                    return(
                        <Cardo key={index} title={item.title} description={item.description} img={item.img} on={send}>
                            <h3>child</h3>
                        </Cardo>
                    );

                })) :  (<NotFound message= "not uploaded yet" color='danger' />)
        }
    </div>
  );
}

export default App;
