#App Overview
    This is a restaurant suggestion app called good bites, where a user can CRUD a list of favorite suggested restaurants. This app is made with Rails API on the backend and JavaScript working the frontend. 

#User Stories
    Users will be able to:
    <!-- sign up, log in, log out -->

    Users can:
    -create a list of favorite suggested restaurants
    -read from and interact with this list
    -update their list
    -delete from their list

#Wireframing (attributes and associations)
    Models will be:
        User, Restaurant

    User attributes:
        user_name

    User associations:
        has_many :restaurants

    Restaurant attributes:
        rest_name
        type
        description
        review
        user_id

    Restaurant associations:
        belongs_to :user

#MVP
    *see spec.md file for checklist*

#Stretch Goals
    The original idea for this project was to create a bird beat box and is considered still in progress....

