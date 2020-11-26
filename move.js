var fs = require("fs-extra");

// move source folder to destination
try {
  fs.moveSync('client/out', 'api/routes/client', { overwrite: true });
  console.log('client move completed!')
} catch (e) {
  if (e){
    console.log('An error occured while copying the folder.')
    return console.error(e)
  }
}
