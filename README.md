# GUVI - DAY 42

## URL Shortener - Frontend

### How to run the project on your machine:

1. Pull the repository to your local machine.

```
git pull
```

2. To install all the dependencies:

```
npm install
```

3. Once everything is installed successfully, now it's time to run the server.

```
npm run dev
```

### Dependencies used

1. React Router Dom

```
npm install react-router-dom
```

2. React Icons

```
npm install react-icons
```

3. Axios

```
npm install axios
```

4. Formik

```
npm install formik
```

3. Recharts

```
npm install recharts
```

### About the Task

> - The task is to create a UI which is user-friendly and responsive for a URL Shortener Application.

### Code Flow and Explanation

> - We initialise the project with routes.
> - Routes are the URLs or Endpoints which are associated with independent components that are rendered when the respective routes are hit on the browser.
> - We use `react-router-dom` to work with routes in our react application.
> - We use `createBrowserRouter` function to create routes in our react application and map them to components which act like webpages. These pages are located in the _pages_ folder.
> - The createBrowserRouter function accepts an array of objects where each object has a route and a component.
> - This Home page contains a form to register a user.
> - We have a `handleSubmit` function, which makes an API call to our backend.
> - To connect with the backend, we create a `service` to help us in it.
> - The service has 2 files, an instance and a service.
> - The instance is to create an axios object, which will help us make API calls.
> - We create a protected instance with it, which makes authenticated API calls.
> - The service is an array of objects that have a function.
> - These functions are asynchronous and accept the values to be passed to the backend as parameters.
> - These functions return a promise.
> - The service is used in our components, to make API calls and handled using `then()` and `catch()` methods.
> - The UI is made using CSS and BootstrapCSS.
> - The page is made UI friendly, by handling the loading time, disabling of buttons, etc.
