import React, { useState } from "react";

import { Tab, TabPanel, Tabs } from "components/Tabs";
import { Typography } from "components/Typography";

import styles from "./Experience.module.scss";
import { ExperienceProps } from "./Experience.types";

export const Experience = (props: ExperienceProps) => {
    const { jobsList } = props;
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };

    return (
        <section className={styles.root} id="experience">
            <Typography component="h1" variant="title">
                Where I've worked
            </Typography>
            <div className={styles.tabs}>
                <div className={styles.tabsList}>
                    <Tabs activeTab={activeTab} onTabChange={handleTabChange}>
                        {jobsList.map((job, idx) => (
                            <Tab key={job.date} active={idx === activeTab}>
                                {job.company}
                            </Tab>
                        ))}
                    </Tabs>
                </div>
                <div>
                    {jobsList.map(
                        ({ company, content, date, range, title }, idx) => (
                            <TabPanel key={date} active={activeTab === idx}>
                                <div className={styles.tabHeader}>
                                    <Typography
                                        variant="h3"
                                        className={styles.title}
                                    >
                                        {title}
                                    </Typography>
                                    <Typography
                                        className={styles.company}
                                        variant="h3"
                                    >
                                        {"\u00A0"}@{"\u00A0"}
                                        {company}
                                    </Typography>
                                </div>
                                <Typography
                                    className={styles.range}
                                    component="p"
                                >
                                    {range}
                                </Typography>
                                <ul>
                                    {content.map((workWith) => (
                                        <Typography
                                            key={workWith}
                                            component="li"
                                            className={styles.workWith}
                                            variant="body1"
                                        >
                                            {workWith}
                                        </Typography>
                                    ))}
                                </ul>
                            </TabPanel>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};
