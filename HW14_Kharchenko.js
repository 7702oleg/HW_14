//level 1

map();
north();
north();

//level 2

map();
for (var i = 0; i < 16; i++){
    east();
}

//level 3

map();
for (var i = 0; i < 16; i++){
    south();
    east();
}

//level 4

map();
while (isFree("east")||(isFree("south"))){
    if (isFree("east")) {
        east ();
    }
    else {
        south ();
    }
}

//level 5

map();
while (isFree("east")) {
    east ();
}
while (isFree("south")||(isFree("west"))) {
    if (isFree("south")) {
        south ();
    }
    else {
        west ();
    }
}
while (isFree("north")||(isFree("west"))) {
    if (isFree("north")) {
        north ();
    }
    else {
        west ();
    }
}
while (isFree("south")||(isFree("east"))) {
    if (isFree("south")) {
        south ();
    }
    else {
        east ();
    }
}
