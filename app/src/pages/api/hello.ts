import { jsonResponse } from "../../utils/jsonResponse";

export const config = {
  runtime: 'edge',
}

export default function handler(
  req: Request,
) {
  return jsonResponse({name: 'Johnny Depp'});
}
