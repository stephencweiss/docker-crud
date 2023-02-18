import { jsonResponse } from "src/utils/jsonResponse";

export const config = {
  runtime: 'edge',
}

export default function handler(
  req: Request,
) {

  return jsonResponse(`index`);
}
