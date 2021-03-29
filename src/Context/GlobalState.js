import { useState, useEffect, createContext } from "react";
import sanityClient from "../client";

export const Context = createContext(null);

const Provider = ({ children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Fetch author ====> Shaan Alam
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

  useEffect(() => {
    // Fetch Projects
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

  return <Context.Provider value={{ state }}>{children}</Context.Provider>;
};

export default Provider;

// For a single Project Page
// *[_type == 'project' && slug.current == 'whatsapp-clone']{
//   title,
//   body,
// 	live_url,
//   github_url,
//   author -> {
// 		image {
// 			asset -> {
// 				url
// 			}
// 		}
// 	},
//   mainImage {
// 		asset -> {
// 			url
// 		}
// 	}
// }
