import { FC, memo } from "react";

type Props = {
  className?: string;
};

const DoneSVG: FC<Props> = ({ className }) => {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.00016 11.17L1.83016 7L0.410156 8.41L6.00016 14L18.0002 2L16.5902 0.589996L6.00016 11.17Z"
        fill="#1C1B1F"
      />
    </svg>
  );
};

export default memo(DoneSVG);
