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

#### task 2 - Add shared service module

* - Added Angular material on task01.
* - Created Shared Service module to host array of users.
* - Modified UserList component into a smart component. 
* - UserList component gets data from shared module and passes it to child components.
* - Created Button component. It receives input parameter, that changes it's own background color.
* - Added button component to userCard. If activated it turns card background color to gray, should work as toggle.
* - Added another button component to Userlist component that activates / de-activates all cards.(background will turn gray for each card).
* - Added Changedetection.onPush to UserCard component.

#### task 3 - Add Vehicle List module and refactor Card component 

* - Created Vehicle list module.
* - Refactored card to be generic template for both User and Vehicle.
* - Created a Shared Service module that handles data with UserService and VehicleService files.
* - Created a generic Info model for cards.
* - Maped data to Info model both for User and for Vehicle in service module to be fetched as needed.
* - Used Ng-Content to display/not display buttons on cards.
* - Used Ng-Content to display distinct title for User or vehicle card and also distinct icon.
* - Separated content into folders and modules.

#### task 4 - Add a new page called add-new user and update Header component

* - Added pages module.
* - Added routing.
* - Homepage displays Users list and Vehicle list.
* - Added new page for add new user form.
* - Added a Header component with navbar with links to pages.
* - Form is Model-Driven.
* - Values from Form are collected and sent to User service to add new user to user array.
* - After form Submit we redirect to homepage where we have the list of users displayed.
* - List of users gets updated with the new added user.
* - User-list-shel becomes users-shell and vehicle-list-shell becomes vehicles-shell.
* - Updated User Model and details of each users from the list of users.

#### task 5 - Add Validations to Form Fields

* - Fixed a bug at email field in User mapped card.
* - Added new field for email in the add-user-form.
* - Added required validations to all form fields besides status field.
* - Added custom validator for age, company, department and email.
* - Email validator is set to have @gmail.com with Regex pattern and to be email format.
* - Errors for each field are displayed under that certain field.
* - Submit button si disabled untill all fields are validated.
Async email validator to check if email exists in the mock user list, email must be unique

