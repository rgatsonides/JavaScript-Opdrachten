const express = require('express');
const app = express();
/** Host alle bestanden in de client folder als static resources */
app.use(express.static('client'));
app.listen(8000, () => console.log('Example app listening on port 3000!'));