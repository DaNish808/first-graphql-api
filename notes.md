
# Notes on graphql setup

## Dependencies
`npm i -S express express-graphql graphql`

## CORS
### include in server
`npm i -S cors`
```
const cors = require('cors')();
app.use(cors);
```
### add to frontend package.json
```
proxy: 'http://localhost:SERVERPORT'
```
