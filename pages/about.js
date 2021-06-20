import withTransition from "../HOC/withTransition";
import sanityClient from "../client";

const About = () => {
  return (
    <div>
      <div>
        <div>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default withTransition(About);

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
