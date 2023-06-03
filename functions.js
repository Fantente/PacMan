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
    [  [  5,   4] , ["ArrowDown","ArrowRight"                      ]  ],
    [  [ 45,   4] , ["ArrowDown","ArrowRight","ArrowLeft"          ]  ],
    [  [ 93,   4] , ["ArrowDown",             "ArrowLeft"          ]  ],
    [  [117,   4] , ["ArrowDown","ArrowRight"                      ]  ],
    [  [165,   4] , ["ArrowDown","ArrowRight","ArrowLeft"          ]  ],
    [  [205,   4] , ["ArrowDown",             "ArrowLeft"          ]  ],

    [  [  5,  36] , ["ArrowDown","ArrowRight",            "ArrowUp"]  ],
    [  [ 45,  36] , ["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [ 70,  36] , ["ArrowDown","ArrowRight","ArrowLeft"          ]  ],
    [  [ 93,  36] , [            "ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [117,  36] , [            "ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [142,  36] , ["ArrowDown","ArrowRight","ArrowLeft"          ]  ],
    [  [165,  36] , ["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [205,  36] , ["ArrowDown",             "ArrowLeft","ArrowUp"]  ],

    [  [  5,  60] , [            "ArrowRight",            "ArrowUp"]  ],
    [  [ 45,  60] , ["ArrowDown",             "ArrowLeft","ArrowUp"]  ],
    [  [ 70,  60] , [            "ArrowRight",            "ArrowUp"]  ],
    [  [ 93,  60] , ["ArrowDown",             "ArrowLeft"          ]  ],
    [  [117,  60] , ["ArrowDown","ArrowRight"                      ]  ],
    [  [142,  60] , [                         "ArrowLeft","ArrowUp"]  ],
    [  [165,  60] , ["ArrowDown","ArrowRight",            "ArrowUp"]  ],
    [  [205,  60] , [                         "ArrowLeft","ArrowUp"]  ],

    [  [ 70,  84] , ["ArrowDown","ArrowRight"                      ]  ],
    [  [ 93,  84] , [           ,"ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [117,  84] , [           ,"ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [142,  84] , ["ArrowDown",            ,"ArrowLeft",         ]  ],

    [  [ 45, 108] , ["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [ 70, 108] , ["ArrowDown",            ,"ArrowLeft","ArrowUp"]  ],
    [  [142, 108] , ["ArrowDown","ArrowRight",            "ArrowUp"]  ],
    [  [165, 108] , ["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"]  ],

    [  [ 70, 132] , ["ArrowDown","ArrowRight",            "ArrowUp"]  ],
    [  [142, 132] , ["ArrowDown",             "ArrowLeft","ArrowUp"]  ],

    [  [  5, 156] , ["ArrowDown","ArrowRight"                      ]  ],
    [  [ 45, 156] , ["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [ 70, 156] , [            "ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [ 93, 156] , ["ArrowDown",             "ArrowLeft"          ]  ],
    [  [117, 156] , ["ArrowDown","ArrowRight"                      ]  ],
    [  [142, 156] , [            "ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [165, 156] , ["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [205, 156] , ["ArrowDown",             "ArrowLeft"          ]  ],

    [  [  5, 180] , [            "ArrowRight",            "ArrowUp"]  ],
    [  [ 21, 180] , ["ArrowDown",             "ArrowLeft"          ]  ],
    [  [ 45, 180] , ["ArrowDown","ArrowRight",            "ArrowUp"]  ],
    [  [ 69, 180] , ["ArrowDown","ArrowRight","ArrowLeft"          ]  ],
    [  [ 93, 180] , [            "ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [117, 180] , [            "ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [141, 180] , ["ArrowDown","ArrowRight","ArrowLeft"          ]  ],
    [  [165, 180] , ["ArrowDown",             "ArrowLeft","ArrowUp"]  ],
    [  [189, 180] , ["ArrowDown","ArrowRight"                      ]  ],
    [  [205, 180] , [                         "ArrowLeft","ArrowUp"]  ],

    [  [  5, 204] , ["ArrowDown","ArrowRight"                      ]  ],
    [  [ 21, 204] , [            "ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [ 45, 204] , [                         "ArrowLeft","ArrowUp"]  ],
    [  [ 69, 204] , [            "ArrowRight",            "ArrowUp"]  ],
    [  [ 93, 204] , ["ArrowDown",             "ArrowLeft"          ]  ],
    [  [117, 204] , ["ArrowDown","ArrowRight"                      ]  ],
    [  [141, 204] , [                         "ArrowLeft","ArrowUp"]  ],
    [  [165, 204] , [            "ArrowRight",            "ArrowUp"]  ],
    [  [189, 204] , [            "ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [205, 204] , ["ArrowDown",             "ArrowLeft"          ]  ],

    [  [  5, 228] , [            "ArrowRight",            "ArrowUp"]  ],
    [  [ 93, 228] , [            "ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [117, 228] , [            "ArrowRight","ArrowLeft","ArrowUp"]  ],
    [  [205, 228] , [                         "ArrowLeft","ArrowUp"]  ],
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

    var PacManLeft      = GameStorage.getItem("PacManLeft");
    var PacManTop       = GameStorage.getItem("PacManTop");
    var lastPressedKey  = GameStorage.getItem("lastPressedKey");
    var PacManDirection = GameStorage.getItem("PacManDirection");

    if (element){

        // element[1] contains the allwed directions in which PacMan can turn on this crossing
        var allowed_directions = element[1];

        // ?
        if ((element[0][0] == PacManLeft) &&
            (element[0][1] == PacManTop)){

            if (allowed_directions.includes(lastPressedKey)){

                return true;

            //}else if(AutoReturn == 1 ){

            //    return false;

            }else{

                return false;
/*
                //Only Direction Break when Previous Direction is not included in allowed_directions
                var lastPressedKeyOpposite = "ArrowLeft"
                if(lastPressedKey == "ArrowRight"){
                    lastPressedKeyOpposite = "ArrowLeft"
                }else if(lastPressedKey == "ArrowLeft"){
                    lastPressedKeyOpposite = "ArrowRight"
                }else if(lastPressedKey == "ArrowUp"){
                    lastPressedKeyOpposite = "ArrowDown"
                }else if(lastPressedKey == "ArrowDown"){
                    lastPressedKeyOpposite = "ArrowUp"
                }

                if (allowed_directions.includes(PreKeyname) && (PreKeyname != lastPressedKeyOpposite)){

                    //GameStorage.setItem("lastPressedKey",PreKeyname);
                    return false;
                        //do that except its PreKeyname is in relation to lastPressedKey ArrowLeft/ArrowRight or ArrowUp/ArrowDown
                }else{

                    GameStorage.setItem("PacManDirection","Break");

                }
                //GameStorage.setItem("lastPressedKey",Keyname);
*/
            }

        }else{ // WE ARE NOT AT A CROSSING SO WE MUST EXECUTE THE "BETWEEN CROSSINGS LOGIC"

            if ((PacManDirection == "Right") && (lastPressedKey == "ArrowLeft")){

                return true;

            }else if ((PacManDirection == "Left") && (lastPressedKey == "ArrowRight")){

                return true;

            }else if ((PacManDirection == "Up") && (lastPressedKey == "ArrowDown")){

                return true;

            }else if ((PacManDirection == "Down") && (lastPressedKey == "ArrowUp")){

                return true;

            // Below is continuing the movmement
            }else if ((PacManDirection == "Right") && (lastPressedKey == "ArrowRight")){

                return true;

            }

        }

    }else{

        alert("PROGRAM ERROR: Last time we got this error, the const crossings_and_possible_directions was missing a , in the middle of the array.");

    }

}