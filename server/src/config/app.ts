/**
 * App Configuration
 */
 import AppBuilder from './builder'

 const app = new AppBuilder()
   .withMiddleware()
   .withRoutes()
   .build()
 
 export default app