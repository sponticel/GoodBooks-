
## Overview

_**GoodBooks** is an react front end, ruby on rails backend app that allows users to sign in to there very own account and contribute reviews and/or ratings on different books listed. 

<br>

## MVP

- Full CRUD 
- Authentication for users
- RESTful JSON API

<br>

### Goals

- Full functional CRUD
- 3 tables
- 1 association (one to many)


<br>

### Challenges

I expect to have a challenging time finishing up the backend, I am not yet comfortable with ruby syntax so I usually have to look things up a great deal. However I do know where to look and have gotten better at researching and finding what I am looking for quicker. Another challenge I see myself having is working with a css library, I have never used one before but I am excited to learn.

<br>


### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Used for Front End |
|   React Router   | Used for Front End |
| Material UI | CSS Library|
| React Semantic UI | CSS Library|
|     Ruby on Rails      | Used for Back End |


<br>

### Client (Front End)

#### Wireframes

https://i.imgur.com/r3Pc0Rb.png
- Desktop Sign Up

https://i.imgur.com/dq6FTKs.png

- Desktop Sign in

https://i.imgur.com/RqDw0Z2.png

- Desktop Home 

https://i.imgur.com/Flms2ts.png

- Add book and review

https://i.imgur.com/f6JC92V.png

- Tablet Home

https://i.imgur.com/Jq3OvDk.png

- Mobile Home

#### Component Tree

https://i.imgur.com/b5NQnri.png

-Direct Link : https://drive.google.com/file/d/1P_SSL_FwN_HDSP5XFqe8IIQX7-2KRVnW/view?usp=sharing

#### Component Architecture

``` 
app
|__ channels/application cable
      |__ channel.rb
      |__ connection.rb
|__ controllers/
      |__ concerns
            |__ application_controller.rb
            |__ authentication_controller.rb
            |__ books_controller.rb
            |__ author_contorller.rb
            |__ user_controller.rb
|__ jobs/
      |__ application_job.rb
|__ models
      |__ application_record.rb
      |__ book.rb
      |__ author.rb
      |__ user.rb

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal | H | 8hrs| hrs | hrs |
| Setup backend| H | 5hrs| hrs | hrs |
| Structure files | H | 3hrs| hrs | hrs |
| Authentication| H | 8hrs| hrs | hrs |
| Sign up and in form | H | 5hrs| hrs | hrs |
| Add Book and Review form | H | 5hrs| hrs | hrs |
| Home page | H | 3hrs| hrs | hrs |
| CSS of Home page | H | 3hrs|  hrs | hrs |
| CSS of forms page | M | 3hrs| hrs | hrs |
| implement Css Library | M | 6hrs| hrs | hrs |
| Add start rating| L | 3hrs| hrs | hrs |
| Improve layout Responsive Design | M | 3hrs| hrs | hrs|
| Play and test out app | M | 1hrs| hrs | hrs |
| Total | H | 56 hrs| hrs | hrs |



<br>

### Server (Back End)

#### ERD Model

https://drive.google.com/file/d/1ugdPZZAqkOn8hB7zZpFnMwJVLw01NwK5/view?usp=sharing
<br>

***

## Post-MVP

-Authorization for only sellers to edit and delete their own book added and review
-Advanced CSS using css library
-Allow users to search by author or genre
***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
