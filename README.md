# MarinStefanDaniel_FE_TC_ANgular_Training

#### task 1 - Build basic Angular Project

* - Create 3 modules , each should have at least 1 component.
* - One of it should export component.
* - Use the exported component into another module.
* - Show all components on the screen.
* - Header module has 3 components, one of them is ued in Footer module also.
* - Footer module uses searchBar component from Header module.
* - The searchBar component displays a span with the content searched using two way binding.
* - UserList component should be a array of user card components displayed with flex/grid.
* - Use *ngFor to display user cards.
* - Added button that hides/shows non-Active users.
* - Added button that sorts the userLst to all/female/male.
* - Added button for each usercard to alter the status Active/non-Active - which is displayed also.
* - Added Angular Material to project.

### task 2 - Add shared service module

* - Created Shared Service module to host array of users.
* - Modified UserList component into a smart component. 
* - UserList component gets data from shared module and passes it to child components.
* - Created Button component. It receives input parameter, that changes it's own background color.
* - Added button component to userCard. If activated it turns card background color to gray, should work as toggle.
* - Added another button component to Userlist component that activates / de-activates all cards.(background will turn gray for each card).
* - Added Changedetection.onPush to UserCard component.

