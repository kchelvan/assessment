# Red Thread Innovations Interview Assessment Submission

This repository contains the code for Keshopan Arunthavachelvan's interview submission for the React Native Software Developer position at Red Thread Innovations.

**About the Project**

In this project, a mobile app is created for android and iOS to display the top 20 popular movies currently airing, allowing the user to select a movie and view the respective movie details. 

**Before Running**

The app requires an API token from TheMovieDB. Once you obtain your API token from the platform, include this token on the variable assignment for **API_TOKEN** in the **assessment/constants/API.tsx** file. 

**To Obtain API Token (Steps provided by Red Thread Innovations)**

To fetch popular movies, you will use the API from themoviedb.org.
● If you don’t already have an account, you will need to create one in order to request an
API Key.
In your request for a key, state that your usage will be for educational/non-commercial
use. You will also need to provide some personal information to complete the request.
Once you submit your request, you should receive your key via email shortly after.
● In order to request popular movies you will want to request data from the /movie/popular
and /movie/top_rated endpoints. An API Key is required.
http://api.themoviedb.org/3/movie/popular?api_key=[YOUR_API_KEY]
● You will extract the movie id from this request. You will need this in subsequent requests.
