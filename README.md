# OnlineJudge

<p> A project to judge solutions of programming problem. Mainly, It has two part. Server part and web part. Server side is implemented using django framework and application side is implemented using Angular 6.<p>
 

## How to install and run this projects?

<p> We used docker to build and running this project during development. <p>

- Install docker and docker-compose  on your environment
- Clone this repository.
- Enter this repository using the following command:
   ``` bash
   cd OnlineJudge
   ```
- Enter OnlineJudgeWeb and run npm install.
   ``` bash
   cd OnlineJudgeWeb
   npm install
   ```
- Go back to the previous directory.
   ``` bash
   cd ..
   ```
- Run the project using the docker-compose command.

   ``` bash
   docker-compose up
   ```
- To stop running the project enter:
   ``` bash
   docker-compose down
   ```
   
   
  ###  For starting angular js, follow: 
> https://angular.io/guide/quickstart  
> https://angular-templates.io/tutorials/about/learn-angular-from-scratch-step-by-step
