// TODO
// Seems to work only in Safari, not in Chrome
function OpeningSound() {
    var audio = new Audio("Opening.mp3");
    audio.play();
}

/*
*
* Keyboard
*
*
*   Introduction to Keyboard Events in JavaScript
*
*     https://www.section.io/engineering-education/keyboard-events-in-javascript/
*
*     https://www.w3schools.com/jsref/met_element_addeventlistener.asp
*
*/

// Add event listener on keydown
document.addEventListener('keydown', (event) => {

    GameStorage = window.localStorage;

    if(event.key != GameStorage.getItem("PreKeyname")){

        GameStorage.setItem("PreKeyname",GameStorage.getItem("lastPressedKey"));

    };

    GameStorage.setItem("lastPressedKey",event.key)

    document.getElementById("lastPressedKey").innerHTML = GameStorage.getItem("lastPressedKey");
    document.getElementById("PreKeyname").innerHTML = GameStorage.getItem("PreKeyname");
}, false);

function convertKeyDirection(lastPressedKey) {
    if (lastPressedKey == ArrowRight) {

        return "TurnRight"

    } else if(lastPressedKey == ArrowLeft) {

        return "TurnLeft"

    } else if( lastPressedKey == ArrowTop) {

        return "TurnUp"

    } else if(lastPressedKey == ArrowDown) {

        return "TurnDown"

    }
}

//Needed to be generalized in order to work with other characters


/*
    *
    * crossings_and_possible_directions [[x,y],[allowed_directions]]
    *
    * TODO
    *
    *     These are point definitions.
    *
    *     We need also line definition which allows up/down or left/right along the full length of a vertical or horizontal corridor.
    *
    *
    */
const crossings_and_possible_directions = [
    [  [  5,   4] , ["TurnDown","TurnRight"                    ]  ],
    [  [ 45,   4] , ["TurnDown","TurnRight","TurnLeft"         ]  ],
    [  [ 93,   4] , ["TurnDown",            "TurnLeft"         ]  ],
    [  [117,   4] , ["TurnDown","TurnRight"                    ]  ],
    [  [165,   4] , ["TurnDown","TurnRight","TurnLeft"         ]  ],
    [  [205,   4] , ["TurnDown",            "TurnLeft"         ]  ],

    [  [  5,  36] , ["TurnDown","TurnRight",           "TurnUp"]  ],
    [  [ 45,  36] , ["TurnDown","TurnRight","TurnLeft","TurnUp"]  ],
    [  [ 70,  36] , ["TurnDown","TurnRight","TurnLeft"         ]  ],
    [  [ 93,  36] , [           "TurnRight","TurnLeft","TurnUp"]  ],
    [  [117,  36] , [           "TurnRight","TurnLeft","TurnUp"]  ],
    [  [142,  36] , ["TurnDown","TurnRight","TurnLeft"         ]  ],
    [  [165,  36] , ["TurnDown","TurnRight","TurnLeft","TurnUp"]  ],
    [  [205,  36] , ["TurnDown",            "TurnLeft","TurnUp"]  ],

    [  [  5,  60] , [           "TurnRight",           "TurnUp"]  ],
    [  [ 45,  60] , ["TurnDown",            "TurnLeft","TurnUp"]  ],
    [  [ 70,  60] , [           "TurnRight",           "TurnUp"]  ],
    [  [ 93,  60] , ["TurnDown",            "TurnLeft"         ]  ],
    [  [117,  60] , ["TurnDown","TurnRight"                    ]  ],
    [  [142,  60] , [                       "TurnLeft","TurnUp"]  ],
    [  [165,  60] , ["TurnDown","TurnRight",           "TurnUp"]  ],
    [  [205,  60] , [                       "TurnLeft","TurnUp"]  ],

    [  [ 70,  84] , ["TurnDown","TurnRight"                    ]  ],
    [  [ 93,  84] , [          ,"TurnRight","TurnLeft","TurnUp"]  ],
    [  [117,  84] , [          ,"TurnRight","TurnLeft","TurnUp"]  ],
    [  [142,  84] , ["TurnDown",           ,"TurnLeft",        ]  ],

    [  [ 45, 108] , ["TurnDown","TurnRight","TurnLeft","TurnUp"]  ],
    [  [ 70, 108] , ["TurnDown",           ,"TurnLeft","TurnUp"]  ],
    [  [142, 108] , ["TurnDown","TurnRight",           "TurnUp"]  ],
    [  [165, 108] , ["TurnDown","TurnRight","TurnLeft","TurnUp"]  ],

    [  [ 70, 132] , ["TurnDown","TurnRight",           "TurnUp"]  ],
    [  [142, 132] , ["TurnDown",            "TurnLeft","TurnUp"]  ],

    [  [  5, 156] , ["TurnDown","TurnRight"                    ]  ],
    [  [ 45, 156] , ["TurnDown","TurnRight","TurnLeft","TurnUp"]  ],
    [  [ 70, 156] , [           "TurnRight","TurnLeft","TurnUp"]  ],
    [  [ 93, 156] , ["TurnDown",            "TurnLeft"         ]  ],
    [  [117, 156] , ["TurnDown","TurnRight"                    ]  ],
    [  [142, 156] , [           "TurnRight","TurnLeft","TurnUp"]  ],
    [  [165, 156] , ["TurnDown","TurnRight","TurnLeft","TurnUp"]  ],
    [  [205, 156] , ["TurnDown",            "TurnLeft"         ]  ],

    [  [  5, 180] , [           "TurnRight",           "TurnUp"]  ],
    [  [ 21, 180] , ["TurnDown",            "TurnLeft"         ]  ],
    [  [ 45, 180] , ["TurnDown","TurnRight",           "TurnUp"]  ],
    [  [ 69, 180] , ["TurnDown","TurnRight","TurnLeft"         ]  ],
    [  [ 93, 180] , [           "TurnRight","TurnLeft","TurnUp"]  ],
    [  [117, 180] , [           "TurnRight","TurnLeft","TurnUp"]  ],
    [  [141, 180] , ["TurnDown","TurnRight","TurnLeft"         ]  ],
    [  [165, 180] , ["TurnDown",            "TurnLeft","TurnUp"]  ],
    [  [189, 180] , ["TurnDown","TurnRight"                    ]  ],
    [  [205, 180] , [                       "TurnLeft","TurnUp"]  ],

    [  [  5, 204] , ["TurnDown","TurnRight"                    ]  ],
    [  [ 21, 204] , [           "TurnRight","TurnLeft","TurnUp"]  ],
    [  [ 45, 204] , [                       "TurnLeft","TurnUp"]  ],
    [  [ 69, 204] , [           "TurnRight",           "TurnUp"]  ],
    [  [ 93, 204] , ["TurnDown",            "TurnLeft"         ]  ],
    [  [117, 204] , ["TurnDown","TurnRight"                    ]  ],
    [  [141, 204] , [                       "TurnLeft","TurnUp"]  ],
    [  [165, 204] , [           "TurnRight",           "TurnUp"]  ],
    [  [189, 204] , [           "TurnRight","TurnLeft","TurnUp"]  ],
    [  [205, 204] , ["TurnDown",            "TurnLeft"         ]  ],

    [  [  5, 228] , [           "TurnRight",           "TurnUp"]  ],
    [  [ 93, 228] , [           "TurnRight","TurnLeft","TurnUp"]  ],
    [  [117, 228] , [           "TurnRight","TurnLeft","TurnUp"]  ],
    [  [205, 228] , [                       "TurnLeft","TurnUp"]  ],
];

function is_change_of_direction_allowed(element){

    // AT CROSSINGS

    /*
     *
     * We have to check three things:
     *
     * 1. Are we on the right x
     *
     * 2. Are we on the right y
     *
     * 3. Is the chosen direction allowed
     *
     * If all these are OK, then we return true and allow the change of direction.
     *
     */
    //introduce a system to use the actor it's been requested from: var RequestingActor = 
    var ActorLeft      = GameStorage.getItem(RequestingActor + "Left");
    var ActorTop       = GameStorage.getItem(RequestingActor + "Top");
    if(RequestingActor == "PacMan") {
        var lastAction = convertKeyDirection(GameStorage.getItem("lastPressedKey")); //need a function convertKeyDirection to convert the KeyInpout by th user to a neutral direction; if it's an other actor we could use the neutral system straight - wouldn't need to convert
    } else {
        var lastAction = GameStorage.getItem(RequestingActor + "lastAction");
    }
    var ActorDirection = GameStorage.getItem("ActorDirection");

    if (element){

        // element[1] contains the allwed directions in which PacMan can turn on this crossing
        var allowed_directions = element[1];

        // ?
        if ((element[0][0] == ActorLeft) &&
            (element[0][1] == ActorTop)){

            if (allowed_directions.includes(lastAction)){

                return true;

            //}else if(AutoReturn == 1 ){

            //    return false;

            }else{

                return false;
/*
                //Only Direction Break when Previous Direction is not included in allowed_directions
                var lastActionOpposite = "TurnLeft"
                if(lastAction == "TurnRight"){
                    lastActionOpposite = "TurnLeft"
                }else if(lastAction == "TurnLeft"){
                    lastActionOpposite = "TurnRight"
                }else if(lastAction == "TurnUp"){
                    lastActionOpposite = "TurnDown"
                }else if(lastAction == "TurnDown"){
                    lastActionOpposite = "TurnUp"
                }

                if (allowed_directions.includes(PreKeyname) && (PreKeyname != lastActionOpposite)){

                    //GameStorage.setItem("lastAction",PreKeyname);
                    return false;
                        //do that except its PreKeyname is in relation to lastAction TurnLeft/TurnRight or TurnUp/TurnDown
                }else{

                    GameStorage.setItem("ActorDirection","Break");

                }
                //GameStorage.setItem("lastAction",Keyname);
*/
            }

        }else{ // WE ARE NOT AT A CROSSING SO WE MUST EXECUTE THE "BETWEEN CROSSINGS LOGIC"

            if ((ActorDirection == "Right") && (lastAction == "TurnLeft")){

                return true;

            }else if ((ActorDirection == "Left") && (lastAction == "TurnRight")){

                return true;

            }else if ((ActorDirection == "Up") && (lastAction == "TurnDown")){

                return true;

            }else if ((ActorDirection == "Down") && (lastAction == "TurnUp")){

                return true;

            // Below is continuing the movmement
            }else if ((ActorDirection == "Right") && (lastAction == "TurnRight")){

                return true;

            }

        }

    }else{

        alert("PROGRAM ERROR: Last time we got this error, the const crossings_and_possible_directions was missing a , in the middle of the array.");

    }

}