// Reset the Game
window.localStorage.clear();

// OpeningSound = function () {
//     var OpeningSound = new Audio("Opening.mp3");
//     audio.play();
// }

// TODO
// Seems to work only in Safari, not in Chrome
function OpeningSound() {
    var audio = new Audio("Opening.mp3");
    audio.play();
}

var tID; //we will use this variable to clear the setInterval()

function stopAnimate() {

    // alert(a);
    clearInterval(tID);

} //end of stopAnimate()

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

    var PacManLeft     = GameStorage.getItem("PacManLeft");
    var PacManTop      = GameStorage.getItem("PacManTop");
    var lastPressedKey = GameStorage.getItem("lastPressedKey");
    var Direction      = GameStorage.getItem("PacManDirection");

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

            if ((Direction == "Right") && (lastPressedKey == "ArrowLeft")){

                return true;

            }else if ((Direction == "Left") && (lastPressedKey == "ArrowRight")){

                return true;

            }else if ((Direction == "Up") && (lastPressedKey == "ArrowDown")){

                return true;

            }else if ((Direction == "Down") && (lastPressedKey == "ArrowUp")){

                return true;

            // Below is continuing the movmement
            }else if ((Direction == "Right") && (lastPressedKey == "ArrowRight")){

                return true;

            }

        }

    }else{

        alert("PROGRAM ERROR: Last time we got this error, the const crossings_and_possible_directions was missing a , in the middle of the array.");

    }

}

/*
 *
 * This is our PacMan Engine
 *
 */
function animateScript() {

    /**
     *
     * Activate the Labyrinth
     *
     */
    document.getElementById("labyrinth").style =

       `position: absolute; left: 5; top: 5; height: 248px; width: 225px; background: url(spritesheets/1.png) 0px 0px;`; // Labyrinth w/ Dots

    /*
     *
     * Why in localStorage?
     *
     *     Perhaps because it was difficult to address the PacMan position via CSS.
     *
     */
    GameStorage = window.localStorage;

    GameStorage.setItem("PacManConstume", "1");
    const interval = 50; // ms of interval for the setInterval() This can reduce the speed, good for debugging.

    /*
     *
     * Initial Coordinates
     *
     */
    GameStorage.setItem("PacManLeft"     , "105");
    GameStorage.setItem("PacManTop"      ,  "180");
    // If the step is not 1 some logic may stop working as control points may be skipped.
    GameStorage.setItem("Step"           , "1");
    GameStorage.setItem("PacManDirection", "Right");
    GameStorage.setItem("lastPressedKey" , "ArrowRight");

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

    /*
     *
     * Initial AutoReturn
     *
     */
    var AutoReturn = "ON";
    GameStorage.setItem("AutoReturn", AutoReturn);

    // TODO
    // Count if PacMan should resume(0) or stop(1) moving
    var BreakCounter = 0

    /*
     *
     * This is the global cycle of the game
     *
     */
    tID = setInterval(() => {

        /*
         *
         * Every Actor has an own section here commanding their logic.
         *
         */

        /*
         *
         * Actor PacMan
         *
         */

            /*
             *
             * Update the variables that might have changed below
             *
             */
            var PacManLeft     = GameStorage.getItem("PacManLeft");
            var PacManTop      = GameStorage.getItem("PacManTop");
            var Direction      = GameStorage.getItem("PacManDirection");
            var lastPressedKey = GameStorage.getItem("lastPressedKey");

            // document.getElementById("image").style.backgroundPosition =
            // `-${position}px 0px`;
            // We use the ES6 template literal to insert the variable "position".

            /*
             * Brain
             *
             * Set of Direction
             *
             *    Here we transion from lastPressedKey to Direction, if allowed.
             *
             */



            if((lastPressedKey == "ArrowRight") && crossings_and_possible_directions.some(is_change_of_direction_allowed)){

                GameStorage.setItem("PacManDirection", "Right");

            }else if((lastPressedKey == "ArrowLeft") && crossings_and_possible_directions.some(is_change_of_direction_allowed)){

                GameStorage.setItem("PacManDirection", "Left");

            }else if((lastPressedKey == "ArrowDown") && crossings_and_possible_directions.some(is_change_of_direction_allowed)){

                GameStorage.setItem("PacManDirection", "Down");

            }else if((lastPressedKey == "ArrowUp") && crossings_and_possible_directions.some(is_change_of_direction_allowed)){

                GameStorage.setItem("PacManDirection", "Up");

            }else if(lastPressedKey == " "){

                // GameStorage.setItem("Previous_Direction", Direction);
                // GameStorage.setItem("PacManDirection", "Break");

                // TODO
                // start and stop PacMan
                // THIS CANNOT BE HERE, HERE WE ONLY SET THE DIRECTION, DON OT EXECUTE IT
                if(BreakCounter == 0){

                    // TODO
                    // This is not correct use of this variable
                    GameStorage.setItem("lastPressedKey","Paused");

                    GameStorage.setItem("PacManDirection","Break");

                    BreakCounter = 1;
                }

                else{

                    GameStorage.setItem("PacManDirection",PreviousDirection);

                    // TODO
                    // This is a dangerous coupling
                    GameStorage.setItem("lastPressedKey","Arrow" + Direction);

                    BreakCounter = 0;
                }

            }

            // Publish the current direction
            document.getElementById("PacManDirection").innerHTML = GameStorage.getItem("PacManDirection");

            /*
             *
             * Brain
             *
             * Can I continue in the same direction?
             *
             */
            if (crossings_and_possible_directions.some(is_change_of_direction_allowed))
            {
                // We can continue.
            }else{
                GameStorage.setItem("PacManDirection","Break");
            }

            /*
             *
             * Motion Calculator
             *
             * AutoReturn is implemented here.
             *
             */

            // TODO
            // saves PacMan´s current diretion
            if(GameStorage.getItem("PacManDirection") != "Break"){

                PreviousDirection = GameStorage.getItem("PacManDirection")

            }

            //saves last direction-allowed keyname
            //if(crossings_and_possible_directions.some(is_change_of_direction_allowed)){
            //
            //    PreKeyname = GameStorage.getItem("lastPressedKey")
            //    GameStorage.setItem("PreKeyname",PreKeyname)
            //
            //}

            // Here happens the actual motion.
            //
            // TODO
            // What else is this doing?
            // It seems this protects the ends of the labyrinth, but the crossing logic must do this.
            // Check and remove if true.
            if(GameStorage.getItem("PacManDirection") == "Right"){

                // This creates the motion.
                // It is extracted from the logic below, which we think we do not need.
                var PacManLeft = GameStorage.getItem("PacManLeft");
                var PacManStep = GameStorage.getItem("Step");

                PacManLeft = parseFloat(PacManLeft) + parseFloat(PacManStep);

                GameStorage.setItem("PacManLeft", PacManLeft);

                // TODO
                // It seems we do not need these checks anymore, because they are handled by the
                // crossings array.
                // We will leave it for a bit and then delete it.
                // if(PacManLeft < 205){

                //     var PacManLeft = GameStorage.getItem("PacManLeft");
                //     var PacManStep = GameStorage.getItem("Step");

                //     PacManLeft = parseFloat(PacManLeft) + parseFloat(PacManStep);

                //     GameStorage.setItem("PacManLeft", PacManLeft);

                // }else {

                //     if(PacManTop == 108){

                //         GameStorage.setItem("PacManLeft", "-25")
                //         GameStorage.setItem("lastPressedKey", "ArrowRight")

                //     }else if(AutoReturn == "ON"){

                //         GameStorage.setItem("lastPressedKey", "ArrowLeft")

                //     }

                // }

            }else if(GameStorage.getItem("PacManDirection") == "Left"){

                //if(PacManLeft > 5){

                    var PacManLeft = GameStorage.getItem("PacManLeft");
                    var PacManStep = GameStorage.getItem("Step");

                    PacManLeft = parseFloat(PacManLeft) - parseFloat(PacManStep);

                    GameStorage.setItem("PacManLeft", PacManLeft);

                /* }else{

                    if(PacManTop == 108){

                        GameStorage.setItem("PacManLeft", "235")
                        GameStorage.setItem("lastPressedKey", "ArrowLeft")

                    }else if(AutoReturn == "ON"){

                        GameStorage.setItem("lastPressedKey", "ArrowRight")

                        }

                    }
                */
            }else if(GameStorage.getItem("PacManDirection") == "Up"){

                //if(PacManTop > 4){

                    var PacManTop = GameStorage.getItem("PacManTop");
                    var PacManStep = GameStorage.getItem("Step");

                    PacManTop = parseFloat(PacManTop) - parseFloat(PacManStep);

                    GameStorage.setItem("PacManTop", PacManTop);

                /*}else if(AutoReturn == "ON"){

                    GameStorage.setItem("lastPressedKey", "ArrowDown")

                }
                */
            }else if(GameStorage.getItem("PacManDirection") == "Down"){

                //if(PacManTop < 228){

                    var PacManTop = GameStorage.getItem("PacManTop");
                    var PacManStep = GameStorage.getItem("Step");

                    PacManTop = parseFloat(PacManTop) + parseFloat(PacManStep);

                    GameStorage.setItem("PacManTop", PacManTop);

                /*}else if(AutoReturn == "ON"){

                    GameStorage.setItem("lastPressedKey", "ArrowUp")

                }
                */
            }else if(GameStorage.getItem("PacManDirection") == "Break"){

                // TODO
                // Break must stop and restart in the same direction on second press.
                // Both do not work!
                // Perhaps because direction can only be changed on a corssing!
                // Or not?

            }

            // HERE WE MUST CALL A FUNCTION TO ANIMATE THE PACMAN

            document.getElementById("outputX").innerHTML = GameStorage.getItem("PacManLeft");
            document.getElementById("outputY").innerHTML = GameStorage.getItem("PacManTop");

            move_actor("PacMan");

        /*
         *
         * Actor Cyan/ Inky
         *
         * Moody
         *
         * Mathematical logic: random mix of all others
         *
         */

            move_actor("Inky");

        /*
         *
         * Actor Red/ Blinky
         *
         * Chaser
         *
         * Mathematical logic: shortest way after you
         *
         */

        /*
         *
         * Actor Pink/ Pinky
         *
         * Ambusher
         *
         * Mathematical logic: try to guess your path and to come in front of you
         *
         */

        /*
         *
         * Actor Orange/ Clyde
         *
         * Stupid
         *
         * Mathematical logic: decide randomly on every crossing
         *
         */

    }, interval); //end of setInterval
} //end of function animateScript()

/*
 *
 * Toggle Button Auto-Return
 *
 */

function ToggleAutoReturn() {

    AutoReturn = GameStorage.getItem("AutoReturn");

    if (AutoReturn == "ON"){

        GameStorage.setItem("AutoReturn", "OFF");

        document.getElementById("button_auto_return").innerHTML = "Auto Return OFF";

    }else{

        GameStorage.setItem("AutoReturn", "ON");

        document.getElementById("button_auto_return").innerHTML = "Auto Return ON";

    }

};

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