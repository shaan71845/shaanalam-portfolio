import { Section, Container, Grid, Col } from "../styled-components/about";
import Sidebar from "../components/Sidebar";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client";
import Education from "../components/Education";
import Skills from "../components/Skills";
import PreviousWorks from "../components/PreviousWorks";
import { motion } from "framer-motion";
import useTransition from "../Hooks/useTransition";

const About = ({ about, experiences, education }) => {
  const [SlideIn, SlideOut] = useTransition();

  return (
    <>
      <Section>
        <Container>
    <Sidebar />
      <Grid>
          <Col>
              <motion.h1
                initial={{ y: -30, opacity: 0 }}
                transition={{ duration: 1 }}
                animate={{ y: 0, opacity: 1 }}
              >
                About me
              </motion.h1>
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.43, duration: 1 }}
              >
                <BlockContent
                  blocks={about.bio[0]}
                  projectId={process.env.PROJECT_ID}
                  dataset={process.env.DATASET}
                />
              </motion.div>
            </Col>
            <Col>
              <motion.img
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1, scale: [1.3, 1] }}
                transition={{ duration: 1.8 }}
                src={about.image.asset.url}
                alt="Shaan Alam"
              />
            </Col>
          </Grid>
          <Education education={education} />
          <Skills />
          <PreviousWorks experiences={experiences} />
        </Container>
      </Section>
      <SlideIn />
      <SlideOut />
    </>
  );
};

export default About;

export async function getStaticProps() {
  const about = await sanityClient.fetch(`*[_type == "author"] {
    name,
    bio,
    image {
      asset -> {
        url
      }
    }
  }[0]`);

  const experiences = await sanityClient.fetch(`
    *[_type == "experiences"] {
      title,
      role,
      starting_date,
      ending_date
    }
  `);

  const education = await sanityClient.fetch(`
    *[_type == "education"] {
      institution,
      course,
      starting_year,
      ending_year
    }
  `);

  return {
    props: {
      about,
      experiences,
      education,
    },
  };
}
