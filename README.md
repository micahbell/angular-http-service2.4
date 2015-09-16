# Angular HTTP Service, Unit 2, Lesson 4

**What are the same origin policy?**

The same-origin policy restricts how a document or script loaded from one origin can interact with a resource from another origin. It is a critical security mechanism for isolating potentially malicious documents.

Two pages have the same origin if the protocol, port (if one is specified), and host are the same for both pages.

**What is CORS?**

Cross-site HTTP requests are HTTP requests for resources from a different domain than the domain of the resource making the request.  For instance, a resource loaded from Domain A (http://domaina.example) such as an HTML web page, makes a request for a resource on Domain B (http://domainb.foo), such as an image, using the img element (http://domainb.foo/image.jpg).  This occurs very commonly on the web today — pages load a number of resources in a cross-site manner, including CSS stylesheets, images and scripts, and other resources.


XMLHttpRequest cannot load https://itunes.apple.com/search?term=jack+johnson. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://127.0.0.1:8080' is therefore not allowed access.

**Try using $http.get() to make a request to https://itunes.apple.com/search?term=jack+johnson and display the title of every post on your template. You should get an error. What was the error? Why did the api.github.com domain work and not the itunes.com domain?**

XMLHttpRequest cannot load https://itunes.apple.com/search?term=jack+johnson. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://127.0.0.1:8080' is therefore not allowed access.

HTTP Requests made using the XMLHttpRequest object are subject to the same-origin policy.  In particular, this means that a web application using XMLHttpRequest could only make HTTP requests to the domain it was loaded from, and not to other domains.
