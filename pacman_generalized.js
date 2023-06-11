var tID; //we will use this variable to clear the setInterval()

function stopAnimate() {

    clearInterval(tID);

} //end of stopAnimate()

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
    GameStorage.setItem("PacManTop"      , "180");
    // If the step is not 1 some logic may stop working as control points may be skipped.
    GameStorage.setItem("Step"           , "1");
    GameStorage.setItem("PacManDirection", "Right");
    GameStorage.setItem("lastPressedKey" , "ArrowRight");

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
            var PacManLeft      = GameStorage.getItem("PacManLeft");
            var PacManTop       = GameStorage.getItem("PacManTop");
            var PacManDirection = GameStorage.getItem("PacManDirection");
            var lastPressedKey  = GameStorage.getItem("lastPressedKey");

            // document.getElementById("image").style.backgroundPosition =
            // `-${position}px 0px`;
            // We use the ES6 template literal to insert the variable "position".

            /*
             * Brain
             *
             * Change of Direction
             *
             *    Here we take the lastPressedKey and put it into Direction, if allowed.
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

                // GameStorage.setItem("Previous_Direction", PacManDirection);
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

                    GameStorage.setItem("PacManDirection", PreviousDirection);

                    // TODO
                    // This is a dangerous coupling
                    GameStorage.setItem("lastPressedKey","Arrow" + PacManDirection);

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
            let i = 0;

            var PacManLeft      = GameStorage.getItem("PacManLeft");
            var PacManTop       = GameStorage.getItem("PacManTop");
            var PacManDirection = GameStorage.getItem("PacManDirection");

            while (i < crossings_and_possible_directions.length) {

                element = crossings_and_possible_directions[i];

                if (element){

                    var allowed_directions = element[1];

                    if ((element[0][0] == PacManLeft) &&
                        (element[0][1] == PacManTop)){

                        var possibleDirection = "Arrow" + PacManDirection;

                        if (allowed_directions.includes(possibleDirection)){

                        //}else if(AutoReturn == 1 ){

                        //    return false;

                        }else{

                            GameStorage.setItem("PacManDirection","Break");
                        }
                    }else{

                    }

                }else{

                    alert("PROGRAM ERROR: Last time we got this error, the const crossings_and_possible_directions was missing a , in the middle of the array.");

                }

                i++;
            }

            /*
             *
             * Motion Calculator
             *
             * AutoReturn is implemented here.
             *
             */

            //introduce a system to use the actor it's been requested from: var RequestingActor = 
            var ActorDirection = GameStorage.getItem(RequestingActor + "Direction"); //RequestingActor-System is used by functions_generalized aswell - is yet to be implemented
            var ActorLeft = GameStorage.getItem(RequestingActor + "Left");
            var PacManTop = GameStorage.getItem(RequestingActor + "Top");
            var ActorStep = GameStorage.getItem("Step");

            // TODO
            // saves Actor´s current diretion
            if(ActorDirection != "Break"){

                ActorPreviousDirection = ActorDirection

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
            if(GameStorage.getItem("ActorDirection") == "Right"){

                // This creates the motion.
                // It is extracted from the logic below, which we think we do not need.

                ActorLeft = parseFloat(ActorLeft) + parseFloat(ActorStep);

                GameStorage.setItem(RequestingActor + "Left", ActorLeft);

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

            }else if(ActorDirection == "Left"){

                //if(PacManLeft > 5){

                    ActorLeft = parseFloat(ActorLeft) - parseFloat(ActorStep);

                    GameStorage.setItem(RequestingActor + "Left", ActorLeft);

                /* }else{

                    if(PacManTop == 108){

                        GameStorage.setItem("PacManLeft", "235")
                        GameStorage.setItem("lastPressedKey", "ArrowLeft")

                    }else if(AutoReturn == "ON"){

                        GameStorage.setItem("lastPressedKey", "ArrowRight")

                        }

                    }
                */
            }else if(ActorDirection == "Up"){

                //if(PacManTop > 4){

                    ActorTop = parseFloat(ActorTop) - parseFloat(ActorStep);

                    GameStorage.setItem(RequestingActor + "Top", ActorTop);

                /*}else if(AutoReturn == "ON"){

                    GameStorage.setItem("lastPressedKey", "ArrowDown")

                }
                */
            }else if(GameStorage.getItem("PacManDirection") == "Down"){

                //if(PacManTop < 228){

                    ActorTop = parseFloat(ActorTop) + parseFloat(ActorStep);

                    GameStorage.setItem(RequestingActor + "Top", ActorTop);

                /*}else if(AutoReturn == "ON"){

                    GameStorage.setItem("lastPressedKey", "ArrowUp")

                }
                */
            }else if(GameStorage.getItem("ActorDirection") == "Break"){

                // TODO
                // Break must stop and restart in the same direction on second press.
                // Both do not work!
                // Perhaps because direction can only be changed on a corssing!
                // Or not?

            }

            // HERE WE MUST CALL A FUNCTION TO ANIMATE THE PACMAN

            document.getElementById("outputX").innerHTML = GameStorage.getItem("PacManLeft");
            document.getElementById("outputY").innerHTML = GameStorage.getItem("PacManTop");

            move_actor("PacMan"); //probably won't work anymore, either do all here or implement the motion calculator in move_actor

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