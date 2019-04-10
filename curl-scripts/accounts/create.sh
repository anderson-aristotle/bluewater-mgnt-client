curl "http://localhost:4741/accounts" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "account": {
      "name": "'"${NAME}"'",
      "number": "'"${NUMBER}"'"
    }
  }'

echo
