import Koa from 'koa';
import fs from 'fs';
import logger from 'koa-logger';

const app = new Koa();

app.use(logger());


// app.use(ctx => ctx.body = { name: this })

// app.use(ctx => {
//   ctx.body = '2324';
//   fs.readFile('./config', (err, data) => {
//     console.log(err);
//     console.log(data.toString());
//   })
// })

// const k = function* (cb) {
//   yield fs.readFile('./config', cb);
// }
//
// app.use(ctx => {
//   const s = k((err, data) => console.log(data));
//   const m = s.next();
//   const n = s.next();
//   console.log(m);
//   console.log(n);
// })

const ss = new Promise((reslove, reject) => {
  setTimeout(() => {
    reject('done');
  }, 1000)
})


app.use(async (ctx, next) => {
  try{
    const sd = await ss;
    // console.log(sd);
  }catch(err) {
    console.log(err);
  }
  console.log('1');
  ctx.body = '123';
  await next();
  console.log('2');
})


app.use(async (ctx, next) => {
  console.log('3')
  await next();
  console.log('4');
})

app.listen(3000);
