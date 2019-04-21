# restaurants-comments
This project is inspired by the repository:
* Vikas https://github.com/v1k45/ponynote.git
* Andrew Mead: https://github.com/andrewjmead/react-course-2-expensify-app.git

The backend uses Django API based on Postgres database. The frontend uses React Javascript as user interface.

The frontend login, logout and registration uses the backend authorization from the Django Rest Auth, which is implemented by using the token created by the backend auth.

## How to setup

Create a virtual env for this project
Clone it
* pip install -r requirements.txt
* cd restaurants-comments/backend
* python manage.py runserver
* cd restaurants-comments/frontend
* yarn install
* yarn start
