import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client";
import dateformat from "dateformat";
import { motion } from "framer-motion";

const Project = () => {
  const [project, setProject] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    // Fetch Project data
    sanityClient
      .fetch(
        `*[_type == 'project' && slug.current == '${slug}']{
          title,
          body,
          publishedAt,
          live_url,
          github_url,
          author -> {
            name,
            image {
              asset -> {
                url
              }
            }
          },
          mainImage {
            asset -> {
              url
            }
          }
        }`
      )
      .then((data) => {
        setProject(data[0]);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  return (
    <motion.section
      className="project__page"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ delay: 1, type: "tween" }}
    >
      <div className="container">
        <Link to="/" className="back__btn">
          <span>&larr;</span> Go back
        </Link>
        <div className="header__img">
          <img src={project?.mainImage.asset.url} alt={project?.title} />
        </div>
        <div className="project__details">
          <h1>{project?.title}</h1>

          <div className="project__authorDetails">
            <div className="author">
              <img
                src={project?.author.image.asset.url}
                alt={project?.author.name}
              />
              <h5>
                <span>{project?.author.name}</span> on{" "}
                {dateformat(project?.publishedAt, "dddd, mmmm dS, yyyy")}
              </h5>
            </div>
          </div>
          <div className="project__urls">
            <a
              href={project?.live_url}
              className="project__url"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            <a
              href={project?.github_url}
              className="project__url"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </div>
          <hr />
          <div className="project__blockContent">
            <BlockContent
              blocks={project?.body}
              projectId="izpqy9cv"
              dataset="production"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
