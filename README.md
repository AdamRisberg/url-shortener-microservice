# url-shortener-microservice

Creates a shortened url and uses mongodb to store the redirect for future use.

/add route creates a new shortened url and responds with the original and shortened url in JSON.

* Example request: www.example.com/new/http://www.google.com
* Example response: { "original_url": "http://www.google.com", "short_url": "www.example.com/1837" }