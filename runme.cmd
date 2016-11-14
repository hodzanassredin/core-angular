cd .\Books.Domain
dotnet restore
cd ..\Books
dotnet restore
npm install

dotnet run --configuration Release