# Functional Prototype Demo

##Master Branch
This contains the current working code in preparation for the final demo. As we add more changes, continue to push to this branch.

###Storing Info in the Session State
The project has been updated to store info such as children, locations, etc.. to a local session, rather than being hard-coded for each page. This is all done using jQuery, and shouldn't be too hard to figure out. I'll give a brief description here for convenience.

####Initializing the Session State
The session state is all initialized in the file `home_init.html`. This is basically a copy of home.html, but has an extra script at the top to pre-populate the session with children and a few other variables. This is in a separate file so that it doesn't reset the session state every time you go back to the home menu.

This page can also be reached by pressing the iPhone circle/home button on the phone itself.

####Accessing the Session State
Storing and retrieving data in the session state is pretty simple. We're using a slightly modified version of the $.session plugin for JQuery found at: https://github.com/AlexChittock/JQuery-Session-Plugin. Our Modified version also allows you to store objects in the session state, instead of just plain text.

__Usage:__
#####Storing Data
> $.session.set('some key', 'a value');

#####Retrieving Data
> $.session.get('some key');

####Other helpful Functions
Check some of the other JavaScript files in the project for other usage cases. There are a few convenient methods worthy of note:

- `getRegisteredChildren()` returns all of the children who are currently added to the device.
- `goToMap(child_id)` opens up the map page. If child_id is set, it goes to that child's location.
- `goToLocation()` should do the same thing as goToMap, but for a particular location. [Not yet implemented]

##User_Study_Condition Branch
Contains all of the code as it was at the state in which we did the user study. This was branched and no changes have been made to this branch since then. Do not commit any changes here.
