// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.post('/auth/login', async (req, res, ctx) => {
    const data = await req.json();

    console.log('data', data);
    // 正しい認証情報で来た場合

    // それ以外（正しくないとき）

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ token: 'hogehoge' })
    );
  }),
];