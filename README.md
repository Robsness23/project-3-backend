### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly - Software Engineering Immersive
# I Beg your Garden

This project was the third project for the General Assembly Software Engineering Immersive course. I Beg Your Garden is an e-commerce site that sells house plants that have personality. We based the names off all the members of our GA course to add a fun element. This was the first project where we were tasked with building our own backend. This was a MERN project, so we used Mongo, Express, React and Node. 

# Deployment Link

https://ibyg.netlify.app/






# Installation

Clone or download the repo then in your Terminal run the following commands:

•Running the database: mongod --dbpath ~/data/db

•Seed command: node db/seed.js

•Install all dependencies: npm i

•Open frontend:  npm start





    
## Timeframe & Team

For this project, we were in a group of four people. We had just over two weeks to complete the project.
## Tech Stack

• Miro

• Jira

• Excalidraw 

• Node

• React 

• Express

• React-Modal-Video 

• React-Confetti

• React-Responsive-Carousel 

• Survey-React

• Insomnia

• CSS 

• Bulma

• Google Fonts

• Cloudinary

• Netlify 

• Heroku 

• MongoDB

• Github

• Chai, Supertest, and Mocha








## Project Brief

• Work in a team, using git to code collaboratively

• Build a full-stack application by making your own backend and your own front-end

• Use an Express API to serve your data from a Mongo database

• Consume your API with a separate front-end built with React

• Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models

• Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut

• Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers. ALLOW time for this

• Be deployed online so it's publicly accessible

• Have automated tests for at least one RESTful resource on the back-end Improve your employability by demonstrating a good understanding of testing principles


## Planning

For our planning we used Miro and Excalidraw:

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662849585/Screenshot_2022-09-04_at_12.16.36_um6qwn.png)

This wireframing was for the frontend. Something I notice now when looking back is that we didn’t spend too much time planning the database/backend. 

We used Jira for the first time in this project, we had a very basic setup of three sprints, one for the backend, one for the frontend and another for polishing/stretch goals. 

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662849625/Screenshot_2022-09-04_at_12.17.07_pzur5o.png)

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662849643/Screenshot_2022-09-04_at_12.17.15_jdcyzm.png)

We spent a lot of evenings working on the backend together, we were also in comms on Slack most days, letting each other know when we had pushed a feature or any updates. Delegating out tasks on Jira worked really well, so when we weren’t on a Zoom or chatting in Slack we knew exactly what features we each needed to work on.





## Build Process

We split the project into a few Sprint, one for the backend (which we allocated a week to complete) and the second Sprint for the frontend (which we also allocated a week to). The third Sprint was for polishing and stretch goals. We believed that we would be able to complete both Sprint 1 and Sprint 2 a lot quicker than we did, so this was a downfall in our planning.

I took responsibility for the backend testing, using Supertest, Chai and Mocha. By doing this, we could ensure that the functionality we had implemented worked in the backend, before implementing the frontend. I was able to complete the testing in two evenings, after work.

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662849671/Screenshot_2022-09-04_at_13.51.30_xdhevv.png)

From the above, I am using Mocha. Here it is setting up conditions for the testing to teardown once it has run. This ensures that the test environment remains consistent. 

The test is to ensure that the backend can handle registering a new user. It is a POST request, where I have included all the required fields for registering a user. Once the test “ends” the results should be that we have a status of 201  which is the HTTP created success status code - which means the user would have created it in the database. Another result requirement is that the username is equal to “Hank”.

I had a lot of fun doing the testing and am so glad I got to use this project to get further experience with it. 

Another responsibility I had was the Homepage. I enjoyed doing this page as I was also implementing the styling through the frontend, so felt like this page set up the feel for the rest of the site. I had also stored all the seeded data with the images of the plants so was excited to find a beautiful image that tied it all together. 

Below is the end result:

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662849693/Screenshot_2022-09-04_at_14.46.58_cv8mni.png)

The code that excited me on this Homepage was the Carousel. From my previous experience with the Cocktail Party App, I really wanted to find a way to actually implement this library on this project. 

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662849721/Screenshot_2022-09-04_at_14.54.19_n0p7lx.png)

The above is implementation of the Carousel and all the desired settings that I wanted it to have. A frustration with this Carousel is that I couldn’t apply the actual links to the ShowPlant page within these recent purchases images. 

Below you can see that every card in the Carousel is an image:

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662849738/Screenshot_2022-09-04_at_14.59.23_suetak.png)

I am happy that I was able to implement the Carousel and set up the tone for the rest of the site on this Homepage. I think it looks great and I am even more eager to get the Carousel with useState and links to work in the future. 


 
## Challenges

For me this was one of the most challenging projects, I think the time constraints with creating the backend and frontend was challenging. We had a lot of ambitious goals which at times I would have preferred to keep more simple so that it was fully completed when we first deployed it. 
On the features that I worked on, I struggled with making the homepage more interactive. I tried to work on the Carousel and make it so that the “recently purchased” plants would have been the actual cards with the link to the ShowPlant page. At the moment, they are just pictures and you cannot click on them at all. 
Deployment with MongoAtlas proved challenging, we deployed initially as a group but I only came back to it at a later date. I had to really research all the errors that I was getting, it seems there were a few updates with MogoAtlas that I had to account for, dropping the database in my seed.js was something that it wouldn’t allow without a few tweaks. Although this was really challenging, I managed to solve it myself by Googling the errors which I kept getting and following guidance on Stack Overflow.






## Wins

• Simple, effective visual design - the images used are high res and I feel give the feel of the website a modern, clean look

• Working shopping cart and check out - we spent a lot of time working with the arrays and how to get plants into a cart using them, this was a great achievement for our entire team

• Backend testing - we hadn’t spent a great deal of time on testing suites, so it felt good to still be able to deliver this feature on the site







## Key Learnings

My key takeaway from this project was to keep clear objectives and achievable stretch goals. We spent quite a lot of time on the backend together, which as the “scrum master” I probably should have delegated out a few parts. This meant that frontend features did not get as much time as they needed. 
Personally, on the features that I added, I really enjoyed implementing the testing for the backend using Supertest, Chai and Mocha. I found this really interesting and am looking forward to using these suites again. 


## Bugs

• The survey page is not complete, unfortunately the intended functionality was not completed on time

• The Homepage doesn’t have any interactivity for the user 

• The site is not mobile responsive





## Future Improvements 

• A filter box on the side of all plants for users to filter their options for plants that love sunny spots or are super easy to care for etc

• A search box where the user can search for the name of the plant 

• Plant food and accessories such as pots 
