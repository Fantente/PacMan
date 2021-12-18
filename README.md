# PacMan

![](logo.png)

## Netelify

https://pacman-dahoum.netlify.app/game/pacman.html

## Project Plan

Find the images.

https://www.spriters-resource.com/fullview/52631/

Find a way to cut/ extract the images.

This kind of images are called `spritesheets`.

There is an online cutter https://ezgif.com/sprite-cutter

Isn't there a way w/ code?

https://medium.com/dailyjs/how-to-build-a-simple-sprite-animation-in-javascript-b764644244aa

This looks like a more proper way and a reason not to use BlockLike...

Asked Ron if he thinks it makes sense to add the sprit sheet support to blocklike.

NEXT TIME

Animate only the PacMan.

Create and move the PacMan w/ the arrows.

Generate the dots.

Make the PacMan eat the dots.

## References

https://www.w3schools.com


Store Data:
https://www.w3schools.com/jsref/jsref_obj_json.asp

# Diary

## 25 September 2021

11:00 call Kian, T. E.

* Moved some from the Google Docs in git
* Archived some git
* The importance of comments in code
  * Sometimes you forget why you have done something
* Cleaned up game.html from alerts and legacy comments
* Move left w/ left arrow
* Practiced git merge and conflict resolution

### Homework

* Move down w/ the down arrow
* Continue to develop your idea with the +

## 9 October

Mantra

* The importance of comments in code
  * Sometimes you forget why you have done something

11:30 call Kian, T. E.

* Kian has homework up/down
* Continue to develop your idea with the +
* Learned
  * parseFloat(PacManLeft) forces the variable to be a number (floating point)
* Success
  * Left and Right automomous motion is done (Kian's + idea)

### Homework

* Move up/down autonomously

## Next

Mantra

* The importance of comments in code
  * Sometimes you forget why you have done something

Focus

`together`

* Continue to move the Google Docs in git: https://docs.google.com/document/d/1LUrJoPXNlQv849iD-L1eSOrUzqjsJptFLizNlU0gdyY/

## 16 October

Mantra

* The importance of comments in code
  * Sometimes you forget why you have done something
* Do fix and cleanup in separate commits, else the fix is difficult to be seen among the cleanups
* Errors are not always there, where they are shown
* Not all errors are shown by the automatic check

12:30 call Kian, T. E.

* Kian did his homework up/down
* Learned
  * Errors are not always there, where they are shown
  * Not all errors are shown by the automatic check
  * Do fix and cleanup in separate commits, else the fix is difficult to be seen among the cleanups
  * div are block level

    +--------+
    |        |
    +--------+
    +--------------+
    |              |
    +--------------+

    container, position: relative
    content,   position: absolute

    +----+-------------------------------+
    |    |       |                       |
    +----+       |                       |
    |            |                       |
    +------------+                       |
    |                                    |
    +------------------------------------+

* Success
  * Up and Down works
  * We showed the Labyrinth

* Challenge
  * The PacMan starts below the Labyrinth

### Homework

* Show only the Labyrinth w/ the points
* Stop the PacMan at the ends of the Screen or Labyrinth
* Try to think why the PacMan begins under the Labyrinth
  * Read about div positioning
    * top
    * margin-top
    * usw.
  * Paste there the URLs you have read
    * ...
    * ...
    * ...

### 31 October

10:30 call km and te

* Make the PacMan start on game start `done`
* See that PacMan stars on top of the Labyrinth `done`

### Homework

* Stop PacMan at the end of the Labyrinth (or at least try)! I want to see work! :)

## 14 November

11:00 call km and te

* km has done his homework! great!
  * PacMan turns at the end of the labyrinth! great!
  * Today is a great day!
* We showed our counters.
* We introduced additional stop/turning points w/ if || &&.

### Homework

* Cut the unnecessary part of the Labyrinth on the right side. `done`
* Make PacMan stop when you press Interval. `done`
* We do double steps, there are no odd xes only even. `done`

## 18 December

Mantra

* Watch out for AstroPi 2022 `!!`

13:00 live meeting km and te in Berlin `!! :)`

* Check Homework
  * See to fix this place in the code as it sometimes works slowly and somtimest fast `different approach, but perfect result, bravo :)`

                    // HOMEWORK
                    // Sometimes works, sometimes does not :)
* Today
  * Make PacMan follow the corridors.
    * There are two options.
      * Read the colours `we will not do this`
        * This is useful if
          * We want to do it like this, or
          * There are different labyrinths
      * w/ many IFs the same way you have done the ends of the labyrinth
        * This means for every direction we have to create an array of limitations (or extend the array of limitations you have already started) `we began working on this and have proof of concept`

### Homework

* Fix the start direction.
* Fix the end of labirynth logic.
* Try to add more/ all points where the direction can change.

## Backlog

Focus

`together`

* Continue to move the Google Docs in git: https://docs.google.com/document/d/1LUrJoPXNlQv849iD-L1eSOrUzqjsJptFLizNlU0gdyY/