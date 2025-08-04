import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Tech Stack Docs" description="Documentation for popular tech stacks">
      <main className="container margin-vert--lg">
        <h1 className="hero__title">Welcome to the Tech Stack Docs</h1>
        <p className="hero__subtitle">Explore documentation for popular technologies like Node.js, React, TypeScript, and more.</p>

        <div className="row">
          <div className="col col--4">
            <Link className="button button--primary button--block" to="/docs/nodejs">
              Node.js Docs
            </Link>
          </div>
          <div className="col col--4">
            <Link className="button button--secondary button--block" to="/docs/react">
              React Docs
            </Link>
          </div>
          <div className="col col--4">
            <Link className="button button--info button--block" to="/docs/typescript">
              TypeScript Docs
            </Link>
          </div>
        </div>

        <div className="row margin-top--lg">
          <div className="col col--4">
            <Link className="button button--warning button--block" to="/docs/java">
              Java Docs
            </Link>
          </div>
          <div className="col col--4">
            <Link className="button button--success button--block" to="/docs/rust">
              Rust Docs
            </Link>
          </div>
          <div className="col col--4">
            <Link className="button button--danger button--block" to="/docs/cpp">
              C++ Docs
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
// This file serves as the main entry point for the documentation site,
// providing links to various technology documentation pages.
// Each button links to a specific documentation section for easy navigation.