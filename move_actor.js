// TODO
// We must pass a parameter who is the actor.
// function move_actor(actor);
// move_actor("pacman");
// move_actor("blinky");
function move_actor(actor){

    // Prepare the variables to load the values from the GameStorage
    GameStorageActorCostume    = actor + "Costume";
    GameStorageActorLeft       = actor + "Left";
    GameStorageActorTop        = actor + "Top";
    GameStorageActorDirection  = actor + "Direction";

    /*
     *
     * Animation
     *
     */

    // The abstraction happens here
    var cosDelay       = 80; //controls the time between switching the costumes
    var ActorCostume   = GameStorage.getItem(GameStorageActorCostume);
    var ActorLeft      = GameStorage.getItem(GameStorageActorLeft);
    var ActorTop       = GameStorage.getItem(GameStorageActorTop);
    var ActorDirection = GameStorage.getItem(GameStorageActorDirection);

    if(ActorCostume == 1){

        // TODO
        // We come twice here, before going to else
        // Can it be because of the cosDelay?
        // Try await

        // var ActorLeft = GameStorage.getItem("Left");

        if(ActorDirection == "Right"){

            document.getElementById("packman").style =

                `position: absolute; left: ` + ActorLeft + `; top: ` + ActorTop + `; height: 16px; width: 14px; background: url(spritesheets/1.png) -472px 0px;`; // -Auf_1-Gerade_Rechts

        }else if(ActorDirection == "Left"){

            document.getElementById("packman").style =

                `position: absolute; left: ` + ActorLeft + `; top: ` + ActorTop + `; height: 16px; width: 14px; background: url(spritesheets/1.png) -473px -16px;`; // -Auf_1-Gerade_Links

        }else if(ActorDirection == "Up"){

            document.getElementById("packman").style =

                `position: absolute; left: ` + ActorLeft + `; top: ` + ActorTop + `; height: 16px; width: 14px; background: url(spritesheets/1.png) -473px -32px;`; // -Auf_1-Senkrecht_Oben

        }else if(ActorDirection == "Down"){

            document.getElementById("packman").style =

                `position: absolute; left: ` + ActorLeft + `; top: ` + ActorTop + `; height: 16px; width: 14px; background: url(spritesheets/1.png) -473px -48px;`; // -Auf_1-Senkrecht_Unten

        }

        //`height: 16px; width: 14px; background: url(spritesheets/1.png) -489px 0px;`; // -Zu

        // https://stackoverflow.com/questions/9184702/settimeout-not-delaying-a-function-call
        setTimeout(function() { costumeDelay(actor); }, cosDelay);

        function costumeDelay(actor) {

            GameStorageActorCostume = actor + "Costume";

            GameStorage.setItem(GameStorageActorCostume, "2");

        }

    }else{

        // TODO
        // We come twice here, before going to 1
        // Can it be because of the cosDelay?
        // Try await

        // var ActorLeft = GameStorage.getItem("Left");

        if(ActorDirection == "Right"){

            document.getElementById("packman").style =

                `position: absolute; left: ` + ActorLeft + `; top: ` + ActorTop + `; height: 16px; width: 14px; background: url(spritesheets/1.png) -455px 0px;`; // -Auf_2-Gerade_Recht

        }else if(ActorDirection == "Left"){

            document.getElementById("packman").style =

                `position: absolute; left: ` + ActorLeft + `; top: ` + ActorTop + `; height: 16px; width: 14px; background: url(spritesheets/1.png) -456px -16px;`; // -Auf_2-Gerade_Links

        }else if(ActorDirection == "Up"){

            document.getElementById("packman").style =

                `position: absolute; left: ` + ActorLeft + `; top: ` + ActorTop + `; height: 16px; width: 14px; background: url(spritesheets/1.png) -456px -32px;`; // -Auf_2-Senkrecht_Oben

        }else if(ActorDirection == "Down"){

            document.getElementById("packman").style =

                `position: absolute; left: ` + ActorLeft + `; top: ` + ActorTop + `; height: 16px; width: 14px; background: url(spritesheets/1.png) -456px -48px;`; // -Auf_2-Senkrecht_Unten
        }

        // https://stackoverflow.com/questions/9184702/settimeout-not-delaying-a-function-call
        setTimeout(function() { costumeDelay(actor); }, cosDelay);

        function costumeDelay(actor) {

            GameStorageActorCostume = actor + "Costume";

            GameStorage.setItem(GameStorageActorCostume, "1");

        }
    }

    document.getElementById("outputX").innerHTML = ActorLeft;
    document.getElementById("outputY").innerHTML = ActorTop;

}