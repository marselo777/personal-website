import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { NextPage } from "next";

import { About } from "components/sections/About";
import { Contact } from "components/sections/Contact";
import { Experience } from "components/sections/Experience";
import { Hero } from "components/sections/Hero";
import { Skills } from "components/sections/Skills";
import { GlobalConfigProvider } from "context/GlobalConfig";
import { BaseLayout } from "layouts/BaseLayout";

const Home: NextPage = ({ jobsList }: any) => {
    return (
        <GlobalConfigProvider>
            <BaseLayout>
                <Hero />
                <About />
                <Skills />
                <Experience jobsList={jobsList} />
                <Contact />
            </BaseLayout>
        </GlobalConfigProvider>
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
