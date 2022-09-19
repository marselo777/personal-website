import React from "react";

import { IconProps } from "./icons.types";

export const Git = (props: IconProps) => {
    const { className } = props;
    return (
        <svg
            className={className}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_13_153)">
                <path
                    d="M15.9857 0.439271C7.15357 0.4357 0 7.5857 0 16.4107C0 23.3893 4.475 29.3214 10.7071 31.5C11.5464 31.7107 11.4179 31.1143 11.4179 30.7071V27.9393C6.57143 28.5071 6.375 25.3 6.05 24.7643C5.39286 23.6428 3.83929 23.3571 4.30357 22.8214C5.40714 22.2536 6.53214 22.9643 7.83571 24.8893C8.77857 26.2857 10.6179 26.05 11.55 25.8178C11.7536 24.9786 12.1893 24.2286 12.7893 23.6464C7.76786 22.7464 5.675 19.6821 5.675 16.0393C5.675 14.2714 6.25714 12.6464 7.4 11.3357C6.67143 9.17499 7.46786 7.32499 7.575 7.04999C9.65 6.86427 11.8071 8.5357 11.975 8.66784C13.1536 8.34999 14.5 8.18213 16.0071 8.18213C17.5214 8.18213 18.8714 8.35713 20.0607 8.67856C20.4643 8.37141 22.4643 6.9357 24.3929 7.1107C24.4964 7.3857 25.275 9.19284 24.5893 11.325C25.7464 12.6393 26.3357 14.2786 26.3357 16.05C26.3357 19.7 24.2286 22.7678 19.1929 23.6536C19.6242 24.0777 19.9667 24.5836 20.2003 25.1416C20.4339 25.6996 20.554 26.2986 20.5536 26.9036V30.9214C20.5821 31.2428 20.5536 31.5607 21.0893 31.5607C27.4143 29.4286 31.9679 23.4536 31.9679 16.4143C31.9679 7.5857 24.8107 0.439271 15.9857 0.439271Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_13_153">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
