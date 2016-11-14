# core-angular

This is a demo app which shows how to use together:

1. Asp.net core
2. Mongodb
3. JWT tokens 
4. Angularjs2
5. Webpack
6. Ninject

Source based on [JavaScriptServices](https://github.com/aspnet/JavaScriptServices)

Work in progress.

ToDo:

1. Logging
2. Code cleanup
3. add redux.js
4. https
5. Remove mongo api from repositories and entities
6. add tests
7. More correct angular js modularization. Remove data loading from ctors.

Steps to run

Install dotnet core: https://www.microsoft.com/net/core

Install latest nodejs and npm: https://nodejs.org/en/download/

Change mongo db connection string in .\Source\Books\appsettings.json


```
        Current value:
            "ConnectionStrings": {
                "DefaultConnection": "mongodb://localhost:27017/DemoDb"
            },
```


Open commandline and run:


```
    cd .\Source\Books
    dotnet restore
    cd ..\Books.Domain
    dotnet restore
    cd ..\Books
    npm install
    dotnet run --configuration Release
```


Open browser: http://localhost:5000/


        
 

