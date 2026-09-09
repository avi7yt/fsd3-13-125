## npm - Node Package Manager

- npm install <packageName>
- npm uninstall <packangeName>

to use npm, the project must be npm project, 
to create npm project we can use

- npm init -y
- it creates a package.json file automatically
  packages.json holds all the information relate to tinstall packages from npm
- update package.json type = "module"
- it also creates a folder node_modules automatically
- node_modulea holds the package/library files
- generally we ignore the nodemodules by .gitignore

Nodemon - it restart the server automatically when file changes, 
to instal
> npm i nodemon -D
Note: -D flag will install this packages as developer dependency 

- to execute any program, update the package.json file then start the server as 
<b> npm run dev <b>

# Installation
 Either through cloning with git or by using npm (the recommended way):

# npm install -g nodemon # or using yarn: yarn global add nodemon
And nodemon will be installed globally to your system path.

You can also install nodemon as a development dependency:

# npm install --save-dev nodemon # or using yarn: yarn add nodemon -D
With a local installation, nodemon will not be available in your system path or you can't use it directly from the command line. Instead, the local installation of nodemon can be run by calling it from within an npm script (such as npm start) or using npx nodemon.

## Status Codes


- 200 -> Ok
- 201 -> Created
- 400 -> Bad request
- 401 -> Unauthorized
- 403 -> Forbidden
- 404 -> Not found
- 500 -> Internal 

## Content Type

- text/plain
- text/html
- application/json
- text/css

the content type and status code can be send back to client by two ways

1. res.writeHead
2. res.setHeader
3. res.statusCode