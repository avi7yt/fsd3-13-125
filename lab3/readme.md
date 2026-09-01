## npm - Node Package Manager

- npm install <packageName>
- npm uninstall <packangeName>

to use npm, the project must be npm project, 
to create npm project we can use

- npm init -y
- it creates a package.json file automatically
  packages.json holds all the information relate to tinstall packages from npm

- it also creates a folder node_modules automatically
- node_modulea holds the package/library files
- generally we ignore the nodemodules by .gitignore

# Installation
 Either through cloning with git or by using npm (the recommended way):

# npm install -g nodemon # or using yarn: yarn global add nodemon
And nodemon will be installed globally to your system path.

You can also install nodemon as a development dependency:

# npm install --save-dev nodemon # or using yarn: yarn add nodemon -D
With a local installation, nodemon will not be available in your system path or you can't use it directly from the command line. Instead, the local installation of nodemon can be run by calling it from within an npm script (such as npm start) or using npx nodemon.
