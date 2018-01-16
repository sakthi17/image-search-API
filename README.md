Image Search Abstraction Layer
=================================

****- FreecodeCamp Backend Challenge****

**Objective :**

- To build a full stack JavaScript app that allows you to search for images and browse recent search queries

Here are the specific user stories implemented for this project

**User Story 1:**

- I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

**User Story 2:**

- I can paginate through the responses by adding a ?offset=2 parameter to the URL.

**User Story 3:**

- I can get a list of the most recently submitted search strings.

**Example Usage to Search for Image**

 [https://image-search-layer-api.glitch.me/api/imagesearch/new year/2](https://image-search-layer-api.glitch.me/api/imagesearch/new%20year/2).

**Response**

   ```
   [
     {
              "url"        : "http://s3.india.com/wp-content/uploads/2016/12/Happy-New-Year.jpg",
              "contexturl" : "http://www.india.com/buzz/happy-new-year-2017-best-new-year-wishes-sms-facebook-status-whatsapp-messages-to-send-happy-new-year-greetings-821595/",
              "thumbnail"  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrip4VtXgH02_YhCe_9IFxeNJNTELv28UUiTvbJyzdInblMZ5T8v33mfx-",
              "title"      : "Happy New Year 2017: Best New Year Wishes, SMS, Facebook Status ..."},
    {
              "url"        : "http://www.zandxcars.com/wp-content/uploads/2018/01/1137966_1280x720.jpg",
              "contexturl" : "http://www.zandxcars.com/want-start-new-year-right-forget-resolutions/",
              "thumbnail"  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VGHtqBEHSVKAfqTeFuFCsoxYua9RK2PxEomyOyNGKAf6BV3C18vCH5nv",
              "title"      : "Want to Start the New Year Right? Forget the Resolutions - Z&X Car ..."}
  ]
  
  ```
          
      
**Example Usage to Browse Recent History**

[https://image-search-layer-api.glitch.me/api/latest/imagesearch](https://image-search-layer-api.glitch.me/api/latest/imagesearch)

**Response**
        
   ```[
     {"topic":"new year","time":"Tue Jan 16 2018 14:27:38 GMT+0000 (UTC)"},
     {"topic":"christmas","time":"Tue Jan 16 2018 14:41:16 GMT+0000 (UTC)"},
     {"topic":"christmas","time":"Tue Jan 16 2018 14:43:47 GMT+0000 (UTC)"},
   ]```
        