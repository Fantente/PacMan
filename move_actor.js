// TODO
// We must pass a parameter who is the actor.
// function move_actor(actor);
// move_actor("pacman");
// move_actor("blinky");
function move_actor(){

// Everything which is PacManSomething must become ActorSomething.

    /*
    *
    * Animation
    *
    */

    var cosDelay   = 80; //controls the time between switching the costumes
    var costume    = ActorStorage.getItem("ActorConstume");
    var ActorLeft  = ActorStorage.getItem("ActorLeft");
    var ActorTop   = ActorStorage.getItem("ActorTop");
    var Direction  = ActorStorage.getItem("Direction");

    if(costume == 1){

        // var ActorLeft = ActorStorage.getItem("Left");

        if(ActorStorage.getItem("Direction") == "Right"){

            document.getElementById("packman").style =

                `position: absolute; left: ` + ActorLeft + `; top: ` + ActorTop + `; height: 16px; width: 14px; background: url(spritesheets/1.png) -472px 0px;`; // -Auf_1-Gerade_Rechts

        }else if(ActorStorage.getItem("Direction") == "Left"){

            document.getElementById("packman").style =

                `position: absolute; left: ` + ActorLeft + `; top: ` + ActorTop + `; height: 16px; width: 14px; background: url(spritesheets/1.png) -473px -16px;`; // -Auf_1-Gerade_Links

        }else if(ActorStorage.getItem("Direction") == "Up"){

            document.getElementById("packman").style =

                `position: absolute; left: ` + ActorLeft + `; top: ` + ActorTop + `; height: 16px; width: 14px; background: url(spritesheets/1.png) -473px -32px;`; // -Auf_1-Senkrecht_Oben

        }else if(ActorStorage.getItem("Direction") == "Down"){

            document.getElementById("packman").style =

                `position: absolute; left: ` + ActorLeft + `; top: ` + ActorTop + `; height: 16px; width: 14px; background: url(spritesheets/1.png) -473px -48px;`; // -Auf_1-Senkrecht_Unten

        }

        //`height: 16px; width: 14px; background: url(spritesheets/1.png) -489px 0px;`; // -Zu

        setTimeout(costumeDelay, cosDelay)

        function costumeDelay() {

            ActorStorage.setItem("ActorConstume", "2");

        }

    }else{

        // var ActorLeft = ActorStorage.getItem("Left");

        if(ActorStorage.getItem("Direction") == "Right"){

            document.getElementById("packman").style =

                `position: absolute; left: ` + ActorLeft + `; top: ` + ActorTop + `; height: 16px; width: 14px; background: url(spritesheets/1.png) -455px 0px;`; // -Auf_2-Gerade_Recht

        }else if(ActorStorage.getItem("Direction") == "Left"){

            document.getElementById("packman").style =

                `position: absolute; left: ` + ActorLeft + `; top: ` + ActorTop + `; height: 16px; width: 14px; background: url(spritesheets/1.png) -456px -16px;`; // -Auf_2-Gerade_Links

        }else if(ActorStorage.getItem("Direction") == "Up"){

            document.getElementById("packman").style =

                `position: absolute; left: ` + ActorLeft + `; top: ` + ActorTop + `; height: 16px; width: 14px; background: url(spritesheets/1.png) -456px -32px;`; // -Auf_2-Senkrecht_Oben

        }else if(ActorStorage.getItem("Direction") == "Down"){

            document.getElementById("packman").style =

                `position: absolute; left: ` + ActorLeft + `; top: ` + ActorTop + `; height: 16px; width: 14px; background: url(spritesheets/1.png) -456px -48px;`; // -Auf_2-Senkrecht_Unten
        }

        setTimeout(costumeDelay, cosDelay)

        function costumeDelay() {

            ActorStorage.setItem("ActorConstume", "1");

        }
    }

    document.getElementById("outputX").innerHTML = ActorLeft;
    document.getElementById("outputY").innerHTML = ActorTop;

}