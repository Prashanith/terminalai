import { getBardUrl } from "../../utils/apis/api.js";
import httpClient from "../rest.js";

async function getCode(request, count = 0) {
  var httpResponse = await httpClient().post(getBardUrl(), {
    prompt: {
      text: request,
    },
    temperature: process.env.TEMP,
    candidateCount: count,
  });
  console.log(httpResponse);
  const res = [];
  for (let i = 0; i < httpResponse.data.candidates.length; i++) {
    res.push(httpResponse.data.candidates[i].output);
  }
  return res;
}

export { getCode };
