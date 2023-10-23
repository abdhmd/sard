import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getBlog() {
  return client.fetch(
    groq`*[_type == "blog"]{
            title,
            slug,
            description
          }`
  );
}
