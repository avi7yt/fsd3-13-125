# Express
1. Create project Folder
2. goto project and open terminal
3. execute 'npm init -y'
4. install 'npm i nodemon -D'
5. open package.json
    a. change 'type:'module''
    b. update script {
        "start":"node peg1.js"
        "dev":"nodemon prg1.js"
    }
6. create prg1.js in folder
7. add folderName/node_module in .gitignore
#SEND
it IS USe to revert back content  to the  client it may be html ,json html file ,plane next 
we can also add status code with sttus function it can be change with send function

## date: 30/09/2026

## Map -

- this function is used to iterate any array it must return new array.

```
array.map((item)=>{
    return
})

array.map((item)=>())
```

- we have to used explicit return keyword whereas in syntax two there is no need to write return

- exclude number of properties from any json object

```
    const {p1, p2, ...rest} = product;
```

- search any item any json array we use find method it will return null on unsuccessful or object on successful.

```
array.find((item) => item.id === Number(id));
```
