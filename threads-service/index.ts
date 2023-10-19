import koa from "koa";
import Router from "koa-router";
import { PrismaClient } from "@prisma/client";

const app = new koa();
const router = new Router();
const prisma = new PrismaClient();

router.get("/threads/:limit", async (ctx) => {
  const results = await prisma.threads.findMany({
    take: Number(ctx.params.limit),
    select: { id: true },
    orderBy: {
      created: "desc",
    },
  });
  ctx.body = results;
});

app
  .use(async (ctx, next) => {
    console.log(`${ctx.method} ${ctx.url}..Threads is running!!`);
    await next();
  })
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8000);
