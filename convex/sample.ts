import { query } from "./_generated/server";

const sampleApi = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("sample").collect();
  },
});

export const get = sampleApi;