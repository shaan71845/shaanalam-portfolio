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
        setState((state) => ({ ...state, blog_posts: res }));
      });
  }, []);

  return <Context.Provider value={{ state }}>{children}</Context.Provider>;
};

export default Provider;
