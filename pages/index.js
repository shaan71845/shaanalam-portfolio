import Navbar from "../components/Navbar";
import homeStyles from "../styles/Home.module.scss";
import buttonStyles from "../styles/Button.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LogoInstagram,
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
} from "react-ionicons";

const Home = () => {
  return (
    <main className={homeStyles.main}>
      <aside className={homeStyles["main-aside"]}>
        <div className={homeStyles["social-icons"]}>
          <a
            href="https://instagram.com/shaancodes"
            target="_blank"
            rel="noreferrer"
          >
            <LogoInstagram color="#303030" />
          </a>
          <a
            href="https://github.com/shaan71845"
            target="_blank"
            rel="noreferrer"
          >
            <LogoGithub color="#303030" />
          </a>
          <a
            href="https://twitter.com/shaancodes"
            target="_blank"
            rel="noreferrer"
          >
            <LogoTwitter color="#303030" />
          </a>
          <a
            href="https://www.linkedin.com/in/shaan-alam-01784018a/"
            target="_blank"
            rel="noreferrer"
          >
            <LogoLinkedin color="#303030" />
          </a>
        </div>
        <motion.span
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "100px", opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        ></motion.span>
      </aside>
      <div className={homeStyles["main-right"]}>
        <Navbar />
        <div className={homeStyles.container}>
          <h1 className={homeStyles.heading}>
            <div className={homeStyles["heading-inner"]}>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
              >
                Hey,
              </motion.div>
            </div>
            <div className={homeStyles["heading-inner"]}>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
              >
                I am Shaan Alam
              </motion.div>
            </div>
          </h1>
          <div className={homeStyles.subtitle}>
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 1, delay: 0.459 }}
            >
              I turn ideas into code...
            </motion.p>
          </div>
          <div className={homeStyles.actions}>
            <div className={homeStyles["actions-inner"]}>
              <Link href="/projects">
                <motion.a
                  className={buttonStyles["btn-primary"]}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
                >
                  My Projects
                </motion.a>
              </Link>
            </div>
            <div className={homeStyles["actions-inner"]}>
              <motion.a
                href="#!"
                className={buttonStyles["btn-primary"]}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
              >
                Download CV
              </motion.a>
            </div>
          </div>
        </div>
        <img src="/images/code.svg" alt="My Code" className={homeStyles.code} />
      </div>
    </main>
  );
};

export default Home;

// <section className={homeStyles.home}>
//   <Navbar />
//   <main className={homeStyles.main}>
//     <aside className={homeStyles["main-left"]}>
//       <LogoInstagram />
//       <LogoGithub />
//       <LogoTwitter />
//       <LogoLinkedin />
//     </aside>
//     <div className={homeStyles["main-right"]}>
//       <div className={homeStyles.container}>
//         <h1 className={homeStyles.heading}>
//           <div className={homeStyles["heading-inner"]}>
//             <motion.div
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               transition={{ ease: "easeOut", duration: 1 }}
//             >
//               Hey,
//             </motion.div>
//           </div>
//           <div className={homeStyles["heading-inner"]}>
//             <motion.div
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
//             >
//               I am Shaan Alam
//             </motion.div>
//           </div>
//         </h1>
//         <div className={homeStyles.subtitle}>
//           <motion.p
//             initial={{ y: "100%" }}
//             animate={{ y: 0 }}
//             transition={{ ease: "easeOut", duration: 1, delay: 0.459 }}
//           >
//             I turn ideas into code...
//           </motion.p>
//         </div>
//         <div className={homeStyles.actions}>
//           <div className={homeStyles["actions-inner"]}>
//             <Link href="/projects">
//               <motion.a
//                 className={buttonStyles["btn-primary"]}
//                 initial={{ y: "100%" }}
//                 animate={{ y: 0 }}
//                 transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
//               >
//                 My Projects
//               </motion.a>
//             </Link>
//           </div>
//           <div className={homeStyles["actions-inner"]}>
//             <motion.a
//               href="#!"
//               className={buttonStyles["btn-primary"]}
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
//             >
//               Download CV
//             </motion.a>
//           </div>
//         </div>
//         <img
//           src="/images/code.svg"
//           alt="Code"
//           className={homeStyles.code}
//         />
//       </div>
//     </div>
//   </main>
// </section>
