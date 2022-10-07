# MarinStefanDaniel_FE_TC_Angular_Training

#### task 1 - Build basic Angular Project

* - Create 3 modules, each should have at least 1 component.
* - One of it should export component.
* - Use the exported component into another module.
* - Show all components on the screen.
* - Header module has 3 components, one of them is used in Footer module also.
* - Footer module uses searchBar component from Header module.
* - The searchBar component displays an span with the content searched using two-way binding.
* - UserList component should be a array of user card components displayed with flex/grid.
* - Use *ngFor to display user cards.
* - Added button that hides/shows non-Active users.
* - Added button that sorts the userList to all/female/male.
* - Added button for each userCard to alter the status Active/non-Active - which is displayed also.
* - Added Angular Material to project.

#### task 2 - Add shared service module

* - Added Angular material on task01.
* - Created Shared Service module to host array of users.
* - Modified UserList component into a smart component. 
* - UserList component gets data from shared module and passes it to child components.
* - Created Button component. It receives input parameter, that changes its own background color.
* - Added button component to userCard. If activated it turns card background color to gray, should work as toggle.
* - Added another button component to Userlist component that activates / de-activates all cards. 
* - Background will turn gray for each card when inactive.
* - Added Changedetection.onPush to UserCard component.

#### task 3 - Add Vehicle List module and refactor Card component 

* - Created Vehicle list module.
* - Refactored card to be generic template for both User and Vehicle.
* - Created a Shared Service module that handles data with UserService and VehicleService files.
* - Created a generic Info model for cards.
* - Mapped data to Info model both for User and for Vehicle in service module to be fetched as needed.
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
* - User-list-shell becomes users-shell and vehicle-list-shell becomes vehicles-shell.
* - Updated User Model and details of each user from the list of users.

#### task 5 - Add Validations to Form Fields

* - Fixed a bug at email field in User mapped card.
* - Added new field for email in the add-user-form.
* - Added required validations to all form fields besides status field.
* - Added custom validator for age, company, department and email.
* - Email validator is set to have @gmail.com with Regex pattern and to be email format.
* - Errors for each field are displayed under that certain field.
* - Submit button is disabled until all fields are validated.
* - Implemented async email validator to check if email is already used by another registered user.

#### task 6 - Add addresses component on user add page

* - General folder/component/modules restructure.
* - Added Addresses component on main add user form.
* - Added button to add another address form to the main form.
* - Added button to each address form to be removed.
* - Street input is a textrea with required validator.
* - Zip is required only if city has any value, untill that city input is disabled.
* - Moved Contact info fields into a separate dumb component form.
* - Form inputs are split into 2 dumb components for contact info and adresses info called by the main smart user-add-form component.
* - Each dumb component runs its own validators.
* - Add address field button is disabled until previous address form is valid.
* - Delete address field button is enabled only at minimum 2 address group fields present.
* - User can add maximum of 3 addresses.
* - In user card all present addresses will be displayed.
* - At form submit, the smart main component gets all input values and saves user and then redirects to user-list page.

#### task 7 - add edit user smart component 

* - Created edit-user-shell smart component as container.
* - In edit-user component we re-used basic and address dumb components.
* - Used url with params to handle userId property to get/save info for certain user.
* - At usersList page on each user card the pencil icon redirects to that certain user's edit-page form.
* - At edit-user form data for the user is pre-filled with patchValue().
* - Submit button on edit-user form saves the changes and redirects to usersList page which displays new changed info.
* - Added comments for fewer headaches further on.

#### task 8 - add auth module

* - Refactored once again form components.
* - Added more logic to the dumb form components to handle edit-user functionality.
* - Edited email validator to work properly with edit-user also.
* - Created separate auth modules in the modules folder.
* - Created login and register components inside auth module.
* - Created link from Login page to register page.
* - At Register we check the username to be unique.
* - Registering an account will also log it in.
* - Added log out button on header.
* - Added custom validator for the confirm password field at register.

#### task 9 - Add User details page

* - Added User Details page.
* - Added routes and guard.
* - Added Account Service.
* - Added Auth Service.
* - Added User detail shell comp.
* - Added user details card shared dumb comp.
* - Added mat-toggle to switch between complete/personal/company details displayed.

#### task 10 - Add pipes and lazy loading

* - Refactored routes, with nested children routes.
* - Refactored Login and Register components to smart both using a separate dumb component for the inputs.
* - Edited Footer and Body Css to make footer stick to bottom.
* - Used Mat-Tab-Nav for tabs instead of mat-Toggle.
* - Changing view from personal / company / all details updates the url.
* - Added mat-card to user details page.
* - Added different mat-card to userCard in users list shell component.
* - Added random mock avatar image to userCard , 6 variants. 
* - Moved the Users list page sort bar into a separate sidebar component.
* - Added custom pipe on Shared userCard component that modifies age adding 10 years.
* - Added custom pipe used in .ts file this time in UsersShell.
* - The pipe sorts through the mapped(with CardModel) UserCards to extract and use firstName to sort cards in order.
* - Refactored User Module to be a lazy loading module.
* - Added alert pop-up on user.module to prove time of loading.
* - Added canLoad Guard to user module routes and edited where CanActivate Guard applies.
* - Any route but /login or /register will be redirected to /login.
* - After a successful login user module will be loaded and user List component will be displayed.
* - Edited my grammar for this README so more people will understand :).
* - Edited log-form component that handled unnecessary data and moved logic to parents.
* - Refactored routes with proper default cases due to some bugs and issues.

#### task 11 - Replace mock with API, use Observables

* - Replaced mock list of users with one fetched from a free API.
* - Refactored all interfaces to fit the response from the API.
* - Refactored return type of methods in the user service to be of type observable.
* - EditUser and AddUser methods just return the user since we can't use the free API to store data.
* - Added mat-paginator on Users-list component.
* - Added switchMap to the main http API request.
* - Added mat-spinner that displays while selected page of users is loading (visible on slow 3g).
* - Added search-field as formControl at the top of the list of users.
* - Added withLatestOperator to get latest array or inputs.
* - Used valuechanges to handle changes inside control.
* - Searching a name will display results for that certain page (with the selected size of results).
* - If search returns no match, "mo matches" will be displayed. 
* - Matches get filtered and displayed.
* - Clearing search input will display normal list of users on correct page and size of results.


#### task 12 - Add unsaved changes guard and refactor email combination.

* - Added CanDeactivate guard to edit user path of router to alert at unsaved changes in edit user page.
* - The Guard deactivates navigating away if form is dirty unless changes have been saved.
* - Refactored User list fetch (piped it) in UsersList Shell to use SwitchMap properly.
* - Edit user form gets pre-filled like before, user can edit.
* - List of dirty fields gets displayed on the alert if trying to navigate and field is dirty.


