# Functional Prototype Demo

##Master Branch
This contains the current working code in preparation for the final demo. As we add more changes, continue to push to this branch.

###Storing Info in the Session State
The project has been updated to store info such as children, locations, etc.. to a local session, rather than being hard-coded for each page. This is all done using jQuery, and shouldn't be too hard to figure out. I'll give a brief description here for convenience.

####Initializing the Session State
The session state is all initialized in the file home_init.html. This is basically a copy of home.html, but has an extra script at the top to pre-populate the session with children and a few other variables. This is in a separate file so that it doesn't reset the session state every time you go back to the home menu. This page can also be reached by pressing the iPhone circle/home button on the phone itself.

##User_Study_Condition Branch
Contains all of the code as it was at the state in which we did the user study. This was branched and no changes have been made to this branch since then. Do not commit any changes here.
