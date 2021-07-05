# nuber-eats-backend

## npm install 
1. `npm i @nestjs/graphql graphql-tools graphql apollo-server-express`
2. `npm i class-validator class-transformer`
3. `npm i --save @nestjs/typeorm typeorm pg`
4. `npm i --save @nestjs/config`
5. `npm i cross-env`
6. `npm i joi` // env 유효성검사 

## USER CRUD
1. `nest g mo users` 
2. `nest g mo common` 



## User Model:

- id
- createdAt
- updatedAt

- email
- password
- role(client|owner|delivery)

## User CRUD:

- Create Account
- Log In
- See Profile
- Edit Profile
- Verify Email