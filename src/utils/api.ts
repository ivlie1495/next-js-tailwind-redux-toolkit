import type { Endpoint } from "@/constants/endpoints"

interface Options {
  endpoint: Endpoint
  params?: Record<string, string>
  body?: BodyInit
}

export default function api(options: Options) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL

  const { 
    endpoint: { method, path }, 
    params = {}, 
    body
  } = options

  const url = new URL(`${baseUrl}${path}`);
  url.search = new URLSearchParams(params).toString();

  return fetch(url, { body, method })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error)
}
