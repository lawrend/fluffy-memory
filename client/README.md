To start:

-- rake start

both servers start according to rules in the procfile.dev

To do:

 - loading page to pull all data at first site visit
 - when state is selected:
   - pull center, 
   - add lat, long to state
   - render map of state
   - pull all locations for state
   - add lat, long to each location
   - drop marker on map for each location
   - each marker is active link for that location
   - when clicked, render map of location
   - render cards of each species
   - each card is active link
   - when clicked, info about that species comes up
     - all locations where it is endangered
         - each should be a link to the map of that location like above
     - status
     - picture
     - wikipedia link and or info
