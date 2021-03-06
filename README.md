# Clueless Closet

***Clueless Closet*** is a group project created for the Web Development Immersive Remote at General Assembly ('WDIR').

**Collaborators on this project**:
- Shanaun Clayton
- Krystal Williams
- Stevie Burnette

**Support Team and Honorable Mentions**:  

*Thank You* ~  
   
- Jerrica Bobadilla, WDIR Instructor - instructional support
- Dan Lawrence, WDIR TA - instructional support
- Ashwanth A R, WDIR Colleague - willingess to share CSS techniques in a prior project that considerably contributed to frontend development efficiency 

## Project Concept

This app is a collaborative effort to offer users a fun and accessible way to style and edit outfits, based on either their current closet or their desired styles. Our aim is to offer users a colorful and aesthetic interface, which we achieved through both interactive forms and images and icons set on a minimalistic background.

* Once users sign up by creating an account with a username and password, they can then login and begin "creating a closet" by styling outfits. 

* Upon login, users are directed to the "create" page where they have the opportunity to input information about their clothing item into various fields and upload an image.

* Once users add a clothing item via the create form, they are taken to the "show" page where they can view their items individually and edit or delete them. 

## Wireframes
#### Day 1

### Landing Page
<img src="https://user-images.githubusercontent.com/40532253/47767019-f0e7f400-dc8e-11e8-8677-a2de9d9ea37a.jpg" width="360">

### Create Page
<img src="https://user-images.githubusercontent.com/40532253/47767062-2987cd80-dc8f-11e8-8b3e-2fba4589719e.jpg" width="360">

### Show Page
<img src="https://user-images.githubusercontent.com/40532253/47767104-59cf6c00-dc8f-11e8-8f04-177ee9e84803.jpg" width="360">

## Mockups

#### Days 2 and 3

### Landing Page - Original Concept
<img src ="https://user-images.githubusercontent.com/40532253/47767495-1ece3800-dc91-11e8-8eb4-9a230eee16fd.png" width="360">

### Create Page - Original Concept
<img src="https://user-images.githubusercontent.com/40532253/47769246-77ed9a00-dc98-11e8-88bb-7b7def723052.png" width="360">

### Show Page - Original Concept
<img src="https://user-images.githubusercontent.com/40532253/47767740-3659f080-dc92-11e8-866c-f31e5d9fdc25.png" width="360">

## Overview of Tasks
<img src="https://user-images.githubusercontent.com/40532253/47788881-3ed11c00-dcd0-11e8-827f-f342914eebb9.jpg" width="360" height="360">

## Final Product

### Landing Page
<img src ="https://user-images.githubusercontent.com/25889133/47766783-d2352d80-dc8d-11e8-8339-8508a51ddfc3.png" width="360">

### Modals
<img src="https://user-images.githubusercontent.com/40532253/47769439-2560ad80-dc99-11e8-9804-0bd694fe2593.png" width="360">
<img src="https://user-images.githubusercontent.com/25889133/47767314-4ec90b80-dc90-11e8-996a-81ea8bad72c7.png" width="360">

### Create Page
<img src="https://user-images.githubusercontent.com/25889133/47767428-d151cb00-dc90-11e8-899e-6015ce8122b9.png" width="360">

### Show Page
<img src="https://user-images.githubusercontent.com/40532253/47769633-bfc0f100-dc99-11e8-819c-4fbcf7a39872.png" width="360" height="360">


## Getting Started

***Clueless Closet*** is an app currently hosted via Heroku at https://clueless-closet-group.herokuapp.com/.
In order to access the app, users simply visit the link above and click 'Sign Up' to create a username and password. No additional installations or programs are required to access this app.


## Technologies Implemented

This app was developed using the MEAN stack - Mongoose, Express, Angular, and Node.js.

Supporting technologies include [GitHub Pages](https://pages.github.com/), text editor [Atom](https://atom.io/), and project management tool [waffle.io](https://waffle.io/). 

All site images are included courtesy [Unsplash](https://unsplash.com/), mockups were designed with [Sketch](https://www.sketchapp.com/), and icons were created using [Flaticon](https://www.flaticon.com/).

## Developer Story

### Design
On Day 1, we agreed upon a bold design that featured saturated colors, reminiscent of much American design from the 1980s. We began styling with hot pink, deep purple, bold aquamarine, and neon text effects.

On Day 2, while selecting images, we decided to redesign our brand to reflect a more clean and minimal feel, featuring pops of color in images and muted colors in accents like hover-over text, buttons, and icons.

A win for our team was that we were able to quickly adjust to this style overhaul and successfully apply a cohesive design style throughout.

### Functionality and Workflow
One team member contributed backend design, working diligently throughout the first 2 days to set the foundation for the backend setup, leaving ample time for the other team members to begin styling. This workflow worked well for our team, as it gave the frontend developers time to plan, collect inspiration, and adjust.

A win for our team was that backend issues arose and were handled efficiently, allowing our team to establish a fluid workflow between backend and frontend development.

## Collaborator Contributions

### Shanaun Clayton
Front End:
* Image Selection
* Create Page Styling
* Font Selection
* Landing Page Layout

### Krystal Williams
Front End:
* Navigation Bar Styling
* Login and Sign Up Modals
* Image Selection
* Dropdown Menus
* Show Page Styling
* Icons

### Stevie Burnette
Back End:
* Models
* Controllers
* Sessions
* Angular
* App.js  
* Partials
* Group Lead

## Technical Challenges and Unsolved Issues

### Technical Challenges

* Github
  - merge conflicts
* Heroku
  - pushing from Github to Heroku
* Models for Outfits
  - outfits.js schema had to be altered to accommodate the dropdown format we later desired
* App.css
  - Footer would not display styling and layout correctly, fix: we removed it
* App.js
  - Could not get multiple controllers to connect, fix: auth.controller had to be placed within app.controller
  - Getting forms to clear properly
  - Getting sessions to work correctly
  - Getting create form to work correctly
  - Getting edit form to work correctly
  - Getting edit form to display on Heroku
  - Getting items to show correctly
  - Getting create form to connect upon returning to the create page without requiring a page reload
  - Closing the modals
* Partials
  - Getting familiar with partials, fix: learning how connect partials with other partials
* Modals
  - Image sizing issues
  - Close modal button 
* Create Page
  - Centering items
  - Positioning the form
* Show Page
  - Item positioning
  - Edit form - appearing and disappearing
* Sessions
  - Log in/Log out
  

### Unsolved Issues

After we attempted to push to Heroku, our edit form and its buttons became dysfunctional and we are not currently able to correctly display our edit route.

We discovered this issue after instructor, TA, and classmate help was no longer available to us. After attempting to resolve the issue amongst ourselves, we sent a detailed message to our instructional lead apprising them of the situation and requesting assistance prior to our presentation. 

## Future Optimizations

Initially, we had planned for the "show" page to take the entered items and create a collage containing those items, thereby displaying an entire outfit as a cohesive whole. A future optimization could integrate this feature for enhanced user experience.
