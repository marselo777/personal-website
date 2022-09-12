import React from "react";

import { Icon } from "components/Icon";
import { Typography } from "components/Typography";

import styles from "./Skill.module.scss";
import { SkillProps } from "./Skill.types";

export const Skill = (props: SkillProps) => {
    const { iconName, skillName } = props;
    return (
        <div className={styles.root}>
            <div>
                <Icon iconName={iconName} />
            </div>
            <Typography>{skillName}</Typography>
        </div>
    );
};
