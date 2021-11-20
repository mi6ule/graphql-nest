## Quick start
 we focus on how to work with the built-in `@nestjs/graphql` module. The `GraphQLModule` is a wrapper around the [Apollo](https://www.apollographql.com/) server. We use this proven GraphQL package to provide a way to use GraphQL with Nest.
 
 #### Step 1:
```bash
npm i @nestjs/graphql graphql@^15 apollo-server-express
```
###### Important 
The last stable version of Graphql is 16 but you must install version 15.7.2 because nest.js is incompatible with the new version of Graphql until now (Nov 20,2021)

#### Step 2:
add below option to `tsconfig.js` :
```json
"skipLibCheck": true
```
TypeScript 2.0 adds a new --_skipLibCheck_ compiler option that causes type checking of declaration files

#### Step 3:
resgiter `GraphqlModule` in your module:
```typescript
GraphQLModule.forRoot({})
```
it can get some options:
```typescript
{
	debug: false,
    playground: false
}
```

#### Step 4:
select your approach: ***code first*** or ***schema first***
###### code first options:
```typescript
  autoSchemaFile: join(process.cwd(), 'src/schema.gql')
  //or
  autoSchemaFile: true // if you do not need any schema file
```
in code first method you can sort all schema sections into one file:
```json
sortSchema: true
```
###### schema first options:
```javascript
{  
	typePaths: ['./**/*.graphql'],
	definitions: {
		path: join(process.cwd(), 'src/graphql.ts'),
		outputAs: 'class',
	}
}
```
###### important!
if you wanna select schema-first approach you must install `ts-morph` package:
```bash
yarn add ts-morph
```
###### Apollo snadbox:
```typescript
{
	playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
}
```

next step: [[3-type]]