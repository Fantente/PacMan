# PacMan

![](logo.png)

## Netelify

https://pacman-dahoum.netlify.app

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

## 31 July

### Homework From Last Time

* Make PacMan begin on the empty place in the bottom of the scren `done`
* Test and complete all crossings `done`
### Ask someone

* How do we avoid overwriting each others changes?

### Today

* Try to think of a solution how not to continue through walls when the direction continues.
  * We have 1/3 of the solution. We split the logic on the crossing to see if the direction is allowed or not.
  * Now we have to add logic on two-three more places `homework for km`

## 9 July


* Sounds `done`
  * http://soundfxcenter.com/sound_effect/search.php?sfx=Pacman `km to implement this in the beginning as homework`
  * https://www.classicgaming.cc/classics/pac-man/sounds
  * https://www.findsounds.com/ISAPI/search.dll?keywords=pacman+pac+man

Learned Today

* https://github.com/postgres
  * a lot of comments
  * less than 5 lines of code per block
  * separation of control structure from functions

Next Time

* begin separating the logic from the functions

## 5 June

NEXT

* Begin w/ characters! :) Fun!
  * https://www.classicgaming.cc/classics/pac-man/characters

Done

* We made it possible to change direction between the crossings `done`

Continue with the simpification of the definition of the corridors and crossings

  * We can derive the corridors from the corssings! `Kian Martin's Idea` `very good`
    * We have to check if we are between two corssings, and the movement bretween these two crossings is allowed.

```
A       B    C   D     E     F
+--(<----+----+   +-----+-----+
|        |    |   |     |     |

A x,y   ,d,r
B x,y  l,d,r
C x,y  l,d
D x,y   ,d,r

```

* At every point, which directions are allowed?
  * There are two type of points
    * Between crossing
      * There is no definition for these, it must be extracted from the nearby corssings.
        * Between which two crossings are we?
          * How to find neghbours? Auto-Detect. Good when the labyrinths are complex or change https://stackoverflow.com/questions/652106/finding-neighbours-in-a-two-dimensional-array
          * Or we look for the closest number in both directions? `seems to be good`
          * And we search only in the direction of the corridor. Eg. if we move to the right, we are in a l-r corridor.
          * C-D It should not be possible to land there at all. We can do a check for this w/ a PROGRAM ERROR warning :)
          * A-E This check should be excluded, we can only check between neighbours.
        * Are we l/r or u/d.
    * At crossings
      * Simply read the definition
      * AUTO-MOTION
        * If I am on a crossing and the crossing does not allow me to continue in the same direction, I must stop.

### 10 April

* Kian has turned the r,l,d,u to ArrowRight,ArrowLeft,ArrowDown,ArrowUp `good`
  * `problem` ArrowDown stops the motion, continues down on a consequent ArrowLeft
    * The problem was that the above described array element was missing a , `solved`
* We discovered that our direction change model does not allow change of direction along a straing line.

Homework

* Define `all` the missing corrsings `km`
  * If we are on a crossing, which does not allow certain direction, the automatic motion in this direction should also stop.
* We need also line definition which allows up/down or left/right along the full length of a vertical or horizontal corridor `km`
  * Another array or a 3rd element in the coordinates `km`

### 13 March

11:30

Done Today

* r is variable
* "r" is value
* We made it work w/ some() !!!

Homework

* Try to add more crossings
* Try to add the logic to the other directions

### 12 March

12:30

Done Today

* Moved pacman.html into index.html in the /
* Complete the automatic turning
  * The button works
  * Make the PacMan also follow the button
  * done!
* Progressed w/ some

Homework

* Kian to try some on row 122, 123
* We continue tomorrow

Long Term Homework

* Learn to work w/ boolean in if ... else ... statements.
  * TypeScript
* Learn about the scope of variables and create examples.
### 12 February

* Check Homework
  * Move the comparison to one dimentsional arrays `done`
  * Make the teleport work :) `done`
  * Many coordinates in the multidimensional array have been prepared `done`
* Learned Today
  * The Google PacMan has a gradual teleport.
  * Security
    * We found out that if you close the tab, the direction remains.
    * This is a security problem.
  * JavaScript Array Prototype
    * https://www.w3schools.com/jsref/jsref_prototype_array.asp
    * prototype allows you to add new properties and methods to arrays.
    * prototype is a property available with all JavaScript objects.
  * Programming
    * Reference is not a Tutorial
      * Referende is the shortest description possible, and can be frustrating when you do not understand it.
      * In such cases look for a Tutorial, where there can be more explanation.
  * English and Programming
    * hunch
      * A feeling or guess based on intuition rather than fact.
  * Think how best to cycle thorugh the multidimentional array.
    * The built-in fuctions are faster than writing the same in JavaScript.
    * callback or anonyme function extends built-in functions in a more efficient way, than writing everything in JavaScript yourself
      * array.some will work
* Homework
  * Mission Zero `above`
  * PacMan
    * Research DO `do this first`
      * Array, Feld https://de.wikipedia.org/wiki/Feld_(Datentyp)
      * Read about array.some
        * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    * Think how to make the teleport come from the dark, gradually.
    * Security
      * We must clear the global store on tab close `research`

### Backlog

Focus

`together`

* Continue to move the Google Docs in git: https://docs.google.com/document/d/1LUrJoPXNlQv849iD-L1eSOrUzqjsJptFLizNlU0gdyY/