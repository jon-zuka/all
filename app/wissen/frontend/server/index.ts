import express from 'express'
import vike from 'vike-node/connect'

startServer()

function startServer() {
  const app = express()
  app.use(vike())
  const port = process.env.PORT || 3000
  app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
}

export {}

// TODO: Enable elysia when the problem with the pending responses is resolved
// import { Elysia } from 'elysia'
// import vike from 'vike-node/elysia'

// function startServer() {
//   const app = new Elysia()
//   app.use(vike())
//   const port = +(process.env.PORT || 3000)
//   app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
// }

// startServer()


// process.on("SIGINT", () => {
//   console.log("\nCtrl-C was pressed");
//   process.exit();
// });
