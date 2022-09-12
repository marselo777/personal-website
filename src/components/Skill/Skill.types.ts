import { IconsType } from "components/icons";

export interface SkillType {
    iconName: IconsType;
    skillName?: string;
}
export interface SkillProps extends SkillType {}
