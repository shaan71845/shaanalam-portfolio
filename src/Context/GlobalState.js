import { useState, useEffect, createContext } from "react";
import sanityClient from "../client";

export const Context = createContext(null);

const Provider = ({ children }) => {
  const [state, setState] = useState(null);

  // Fetch author ====> Shaan Alam from Sanity io
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'author'] {
        name, 
        bio,
        about,
        image {
          asset -> {
            url
          }
        }
      }`
      )
      .then((data) => {
        setState((state) => ({ ...state, author: data[0] }));
      });
  }, []);

  // Fetch Projects from sanity io
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project'] {
          title,
          slug,
          mainImage {
            asset -> {
              url
            }
          }
        }`
      )
      .then((data) => {
        setState((state) => ({ ...state, projects: data }));
      });
  }, []);

  // Fetch from dev.to API
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=shaan71845")
      .then((res) => res.json())
      .then((res) => {
        const blog_posts = res.map((blog) => {
          return {
            url: blog.url,
            title: blog.title,
            slug: blog.slug,
            published_timestamp: blog.published_timestamp,
            cover_image: blog.cover_image,
            name: blog.user.name,
          };
        });

        setState((state) => ({ ...state, blog_posts }));
      });
  }, []);

  return <Context.Provider value={{ state }}>{children}</Context.Provider>;
};

export default Provider;
