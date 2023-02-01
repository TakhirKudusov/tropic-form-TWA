import { FC, memo } from "react";

type Props = {
  className?: string;
};

const TrashSVG: FC<Props> = ({ className }) => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0V1H16V3H15V16C15 17.1 14.1 18 13 18H3C1.9 18 1 17.1 1 16V3H0V1H5V0H11ZM3 16H13V3H3V16ZM5 5H7V14H5V5ZM11 5H9V14H11V5Z"
        fill="#1C1B1F"
      />
    </svg>
  );
};

export default memo(TrashSVG);
