import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="../docs/intro">
            Explore the Docs 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Tech Stack Documentation"
      description="A comprehensive learning hub for modern programming languages and tools.">
      <HomepageHeader />
      <main>
        <section className="container margin-vert--lg">
          <div className="row">
            <div className="col col--6">
              <h2>What you'll learn</h2>
              <ul>
                <li>Get started with Node.js, React, and TypeScript</li>
                <li>Understand C++, Java, Rust, and C# by example</li>
                <li>Learn via real-world code snippets</li>
              </ul>
            </div>
            <div className="col col--6">
              <h2>Why this site?</h2>
              <p>
                This is a central hub for developers looking to understand and compare popular tech stacks.
                Each topic includes core concepts, code examples, and practical use cases.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
