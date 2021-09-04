# Login Sign-up and MapBox

- Built with

* Sign up and login form using react bootstrap
* Mapbox using React Map GL
* Current location using geoLocation API and React Map GL
* Styled components for styling

- Sign-up form

* Data from sign up form is stored in {values} which is later validated with "validate.js".
* If no errors found i.e. {errors === {}}, allow submitting of form and store the data into local database

- Login form

* Data from login form is stored in values which is later validated by "validate.js" inside Login folder.
* If data is entered correctly, a for loop check the login id and password with database.
* If user is not registered or enters incorrect password, it shows error.
