import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { NextPage } from "next";

import { About } from "components/About";
import { Contact } from "components/Contact";
import { Experience } from "components/Experience";
import { Hero } from "components/Hero";
import { Skills } from "components/Skills";
import { Layout } from "layouts/Layout";

const Home: NextPage = ({ jobsList }: any) => {
    return (
        <Layout>
            <Hero />
            <About />
            <Skills />
            <Experience jobsList={jobsList} />
            <Contact />
        </Layout>
    );
};

export const getStaticProps = () => {
    const jobsDir = path.join("src", "content", "jobs");
    const jobsFiles = fs.readdirSync(jobsDir);

    const jobsList = jobsFiles.map((fileName) => {
        const mdFile = fs.readFileSync(path.join(jobsDir, fileName));
        const { data, content } = matter(mdFile);
        const formatedContent = content.split("\n");
        return {
            ...data,
            content: formatedContent,
        };
    });

    return {
        props: {
            jobsList,
        },
    };
};

export default Home;
