URL="http://localhost:3000/posts"
echo //posts post data
curl -H "Content-Type: application/json" -X POST -d \
'{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": "POST ADDED"}' $URL

echo
echo //updates post data at specific id
curl -H "Content-Type: application/json" -X PUT -d \
'{"name": "ANOTHER", "url":"http://changed.org", "text": "PUT UPDATED"}' "$URL/0"

echo
echo //gets post data
curl $URL 
echo

echo //deletes post data at specific id
curl -X DELETE "$URL/0"
echo
