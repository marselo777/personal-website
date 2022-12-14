import { IconProps } from "./icons.types";

export const HTML = (props: IconProps) => {
    const { className } = props;
    return (
        <svg
            className={className}
            width="60"
            height="60"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M27.854 116.354L19.811 26.143H108.189L100.138 116.34L63.946 126.373L27.854 116.354Z"
                fill="#30DDA9"
            />
            <path
                d="M64 118.704L93.244 110.596L100.125 33.52H64V118.704Z"
                fill="#30DDA9"
            />
            <path
                d="M64 66.978H49.359L48.349 55.647H64V44.583H36.257L36.521 47.552L39.241 78.041H64V66.978ZM64 95.711L63.951 95.724L51.63 92.396L50.842 83.573H39.735L41.285 100.945L63.949 107.237L64 107.222V95.711Z"
                fill="#EBEBEB"
            />
            <path
                d="M64 67.1634V78.1119H77.7636L76.4664 92.3125L64 95.6091V107L86.9144 100.779L87.0821 98.9284L89.7088 70.1026L89.9815 67.1634H86.969H64ZM64 45V55.9496H90.9988L91.2221 53.4883L91.7323 47.9383L92 45H64Z"
                fill="white"
            />
        </svg>
    );
};
