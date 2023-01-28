export const jsonResponse = (
  stringifiable: Record<string | number | symbol, unknown> | string | number,
  opts: { statusCode?: number; headers?: Record<string, unknown>; } = {}
): Response => {
  const { statusCode, headers } = opts;
  return new Response(JSON.stringify(stringifiable), {
    status: statusCode ?? 200, headers: {
      'content-type': 'application/json',
      ...headers
    },
  });
};
