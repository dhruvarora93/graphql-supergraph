import koa from "koa";
import Router from "koa-router";
import { PrismaClient } from "@prisma/client";

const app = new koa();
const router = new Router();
const prisma = new PrismaClient();

router.get("/posts/:threadId", async (ctx) => {
  const { limit = 2 } = ctx.query;
  const { threadId } = ctx.params;
  const results = await prisma.posts.findMany({
    take: Number(limit),
    select: { id: true },
    where: { thread_id: Number(threadId) },
    orderBy: {
      created: "desc",
    },
  });
  ctx.body = results;
});

app
  .use(async (ctx, next) => {
    console.log(`${ctx.method} ${ctx.url}..Posts is running!!`);
    await next();
  })
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8001);
