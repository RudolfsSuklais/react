import React from "react";

function Card({username = "RS", post = "Not assigned yet"}){
    //console.log(props);
    
    return(
        <div>
                <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, amet!
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                {post}
            </div>
            </figcaption>
        </div>
        </figure>
        </div>
    )
}

export default Card