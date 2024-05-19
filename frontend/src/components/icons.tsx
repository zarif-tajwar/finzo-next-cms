import { SvgIconProps } from "@/lib/types/common";
import { cn } from "@/lib/utils";

export const ArrowLong = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.7832 8.31104L26.5728 16.1007L18.7832 23.8903"
        stroke="currentColor"
        strokeWidth="1.92495"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.75684 16.1006H26.3548"
        stroke="currentColor"
        strokeWidth="1.92495"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const XIcon = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 3.2769C22.0424 3.95238 20.9821 4.46901 19.86 4.8069C19.2577 4.11441 18.4573 3.62359 17.567 3.40083C16.6767 3.17806 15.7395 3.2341 14.8821 3.56135C14.0247 3.88861 13.2884 4.4713 12.773 5.23062C12.2575 5.98993 11.9877 6.88924 12 7.8069V8.8069C10.2426 8.85247 8.50127 8.46271 6.93101 7.67235C5.36074 6.88198 4.01032 5.71554 3 4.2769C3 4.2769 -1 13.2769 8 17.2769C5.94053 18.6749 3.48716 19.3758 1 19.2769C10 24.2769 21 19.2769 21 7.7769C20.9991 7.49835 20.9723 7.2205 20.92 6.9469C21.9406 5.94039 22.6608 4.66961 23 3.2769Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const CheckIcon = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 6L9 17l-5-5"
      ></path>
    </svg>
  );
};
export const SpinnerIcon = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2V6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.92999 4.93018L7.75999 7.76018"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.24 16.2402L19.07 19.0702"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 12H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.92999 19.0702L7.75999 16.2402"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.24 7.76018L19.07 4.93018"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const LinkedinIcon = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.999 8.27698C17.5903 8.27698 19.1164 8.90912 20.2417 10.0343C21.3669 11.1596 21.999 12.6857 21.999 14.277V21.277H17.999V14.277C17.999 13.7465 17.7883 13.2378 17.4132 12.8628C17.0382 12.4877 16.5295 12.277 15.999 12.277C15.4686 12.277 14.9599 12.4877 14.5848 12.8628C14.2097 13.2378 13.999 13.7465 13.999 14.277V21.277H9.99902V14.277C9.99902 12.6857 10.6312 11.1596 11.7564 10.0343C12.8816 8.90912 14.4077 8.27698 15.999 8.27698Z"
        fill="currentColor"
      />
      <path d="M6 9.27686H2V21.2769H6V9.27686Z" fill="currentColor" />
      <path
        d="M4 6.27686C5.10457 6.27686 6 5.38142 6 4.27686C6 3.17229 5.10457 2.27686 4 2.27686C2.89543 2.27686 2 3.17229 2 4.27686C2 5.38142 2.89543 6.27686 4 6.27686Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const GithubIcon = ({ className, ...props }: SvgIconProps) => {
  return (
    <svg
      width="98"
      height="96"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 98 96"
      className={cn("size-6", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        fill="currentColor"
      />
    </svg>
  );
};
export const Arrow = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.4299 5.92993L20.4999 11.9999L14.4299 18.0699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 12H20.33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const MailInboxIcon = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 13.1468C22 13.0976 21.9964 13.0485 21.9892 13C21.9821 12.9525 21.9717 12.9055 21.9578 12.8594L19.6414 5.13796C19.2607 3.869 18.0927 3 16.7679 3H7.23209C5.90727 3 4.7393 3.869 4.35861 5.13796L2.04217 12.8594C2.02834 12.9055 2.01788 12.9525 2.01083 13C2.00363 13.0485 2 13.0976 2 13.1468V18C2 19.6569 3.34315 21 5 21H19C20.6569 21 22 19.6569 22 18V13.1468ZM16.7679 5H7.23209C6.79048 5 6.40116 5.28967 6.27427 5.71265L4.08806 13H8.38197C8.76074 13 9.107 13.214 9.27639 13.5528L9.99724 14.9945C9.99893 14.9979 10.0024 15 10.0062 15H13.9938C13.9976 15 14.0011 14.9979 14.0028 14.9945L14.7236 13.5528C14.893 13.214 15.2393 13 15.618 13H19.9119L17.7257 5.71265C17.5988 5.28967 17.2095 5 16.7679 5ZM20 15H16.2361L15.7916 15.8889C15.4511 16.5698 14.7552 17 13.9938 17H10.0062C9.24487 17 8.54887 16.5699 8.20838 15.8889L7.76393 15H4V18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18V15Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const FinzoIcon = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      width="44"
      height="34"
      viewBox="0 0 44 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32.2203 18.3339L29.465 27.0469C29.3034 27.556 28.8321 27.9034 28.2989 27.9034H19.7166C18.891 27.9034 18.2994 27.0985 18.5505 26.3074L21.3058 17.5977C21.464 17.0852 21.9387 16.7412 22.4719 16.7412H31.0542C31.8798 16.7412 32.4714 17.5462 32.2203 18.3339Z"
        fill="currentColor"
      />
      <path
        d="M43.0892 1.59254L40.3339 10.3056C40.1722 10.8147 39.701 11.1587 39.1678 11.1587H18.5599C18.0886 11.1587 17.6793 11.4614 17.5314 11.9017C17.5279 11.9051 17.5245 11.912 17.5245 11.9154V11.9189L17.3181 12.5725V12.5759C17.3181 12.5793 17.3147 12.5862 17.3113 12.5897L14.2326 22.3209L10.9751 32.6266C10.8135 33.1357 10.3422 33.4831 9.8056 33.4831H1.22669C0.397685 33.4831 -0.190519 32.6782 0.0571413 31.887L3.08418 22.3209L6.34169 12.0152C6.50335 11.5061 6.97806 11.1587 7.51122 11.1587H16.9673C17.4419 11.1587 17.8616 10.8526 18.0026 10.402L18.3879 9.18426C18.3879 9.18082 18.3913 9.17393 18.3948 9.17049L21.0228 0.853056C21.1845 0.343961 21.6557 1.39092e-09 22.1923 1.39092e-09H41.9197C42.7486 -3.86352e-05 43.3403 0.804858 43.0892 1.59254Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const MobileIcon = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      width="28"
      height="36"
      viewBox="0 0 28 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.3942 10.2533V25.7463C26.3942 31.9435 24.8449 33.4928 18.6477 33.4928H9.35195C3.15476 33.4928 1.60547 31.9435 1.60547 25.7463V10.2533C1.60547 4.05613 3.15476 2.50684 9.35195 2.50684H18.6477C24.8449 2.50684 26.3942 4.05613 26.3942 10.2533Z"
        stroke="currentColor"
        strokeWidth="3.09859"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0986 7.9292H10.9014"
        stroke="currentColor"
        strokeWidth="2.32394"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 28.9996C15.3263 28.9996 16.4015 27.9244 16.4015 26.5982C16.4015 25.2719 15.3263 24.1968 14 24.1968C12.6738 24.1968 11.5986 25.2719 11.5986 26.5982C11.5986 27.9244 12.6738 28.9996 14 28.9996Z"
        stroke="currentColor"
        strokeWidth="2.32394"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const LineChartIcon = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.05613 3.50732C5.91178 3.50732 6.60543 4.20097 6.60543 5.05662V29.8454C6.60543 30.701 7.29907 31.3946 8.15472 31.3946H32.9435C33.7991 31.3946 34.4928 32.0883 34.4928 32.9439C34.4928 33.7996 33.7991 34.4932 32.9435 34.4932H8.15472C5.58777 34.4932 3.50684 32.4123 3.50684 29.8454V5.05662C3.50684 4.20097 4.20048 3.50732 5.05613 3.50732Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.0393 13.257C34.6443 13.862 34.6443 14.843 34.0393 15.448L26.9346 22.5528C25.1194 24.3679 22.1766 24.3679 20.3614 22.5528L16.997 19.1884C16.392 18.5833 15.411 18.5833 14.806 19.1884L11.5745 22.4199C10.9695 23.0249 9.9885 23.0249 9.38347 22.4199C8.77843 21.8148 8.77843 20.8339 9.38347 20.2288L12.615 16.9973C14.4301 15.1822 17.373 15.1822 19.1881 16.9973L22.5525 20.3617C23.1575 20.9668 24.1385 20.9668 24.7435 20.3617L31.8483 13.257C32.4533 12.652 33.4343 12.652 34.0393 13.257Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const MoneySendIcon = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.417 25.2083C17.417 26.9866 18.792 28.4166 20.4787 28.4166H23.9253C25.392 28.4166 26.5837 27.1699 26.5837 25.6116C26.5837 23.9433 25.8503 23.3383 24.7687 22.9533L19.2503 21.0283C18.1687 20.6433 17.4353 20.0566 17.4353 18.3699C17.4353 16.8299 18.627 15.5649 20.0936 15.5649H23.5403C25.227 15.5649 26.602 16.9949 26.602 18.7733"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 13.75V30.25"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.3337 21.9998C40.3337 32.1198 32.1203 40.3332 22.0003 40.3332C11.8803 40.3332 3.66699 32.1198 3.66699 21.9998C3.66699 11.8798 11.8803 3.6665 22.0003 3.6665"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.3333 10.9998V3.6665H33"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.167 12.8332L40.3337 3.6665"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ReceiptIcon = ({ ...props }: SvgIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 7V21C2 21.83 2.93998 22.3 3.59998 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.28998 22.29C8.67998 22.68 9.32002 22.68 9.71002 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 9H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 13H11.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const Logo = ({ className, ...props }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="543"
      height="62"
      fill="none"
      viewBox="0 0 543 62"
      className={cn("h-6 w-max", className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M53.887 33.664l-4.608 14.572a2.05 2.05 0 01-1.95 1.433H32.974a2.05 2.05 0 01-1.95-2.67l4.608-14.567A2.037 2.037 0 0137.583 31h14.354c1.38 0 2.37 1.346 1.95 2.664z"
      ></path>
      <path
        fill="#FD3"
        d="M72.066 5.664l-4.608 14.572a2.044 2.044 0 01-1.95 1.427H31.04c-.788 0-1.473.506-1.72 1.242a.044.044 0 00-.012.023v.006l-.345 1.093v.006a.044.044 0 01-.011.023l-5.15 16.275-5.447 17.236A2.051 2.051 0 0116.4 59H2.052a2.053 2.053 0 01-1.956-2.67l5.062-15.999 5.448-17.236a2.057 2.057 0 011.956-1.432h15.816c.793 0 1.495-.512 1.731-1.266l.644-2.036c0-.006.006-.018.012-.024l4.395-13.91A2.046 2.046 0 0137.116 3H70.11c1.386 0 2.376 1.346 1.956 2.664z"
      ></path>
      <path
        fill="currentColor"
        d="M221.368 55c-2.768 0-5.255-.453-7.46-1.361-2.206-.952-4.087-2.249-5.643-3.892a17.672 17.672 0 01-3.503-5.644 18.312 18.312 0 01-1.233-6.681c0-2.378.411-4.627 1.233-6.746.821-2.12 1.989-4 3.503-5.643 1.556-1.644 3.437-2.92 5.643-3.828 2.205-.951 4.692-1.427 7.46-1.427 2.767 0 5.232.476 7.394 1.427 2.206.909 4.087 2.184 5.644 3.828a16.298 16.298 0 013.503 5.643c.821 2.119 1.232 4.368 1.232 6.746 0 2.335-.411 4.562-1.232 6.681-.779 2.12-1.946 4-3.503 5.644-1.514 1.643-3.373 2.94-5.579 3.892-2.205.908-4.692 1.362-7.459 1.362zm-8.887-17.578c0 1.99.389 3.762 1.167 5.32.779 1.513 1.838 2.702 3.179 3.567 1.341.865 2.854 1.297 4.541 1.297 1.643 0 3.135-.432 4.475-1.297 1.341-.908 2.4-2.12 3.179-3.633.821-1.557 1.232-3.33 1.232-5.319 0-1.946-.411-3.697-1.232-5.254-.779-1.557-1.838-2.768-3.179-3.633-1.34-.864-2.832-1.297-4.475-1.297-1.687 0-3.2.454-4.541 1.362-1.341.865-2.4 2.076-3.179 3.633-.778 1.513-1.167 3.265-1.167 5.254zM171.978 49.035l18.746-22.573h-17.968v-6.098h27.309v5.32l-18.617 22.573h18.941v6.097h-28.411v-5.319zM166.693 54.352H158v-19.07c0-2.725-.475-4.714-1.427-5.968-.951-1.254-2.27-1.881-3.956-1.881-1.168 0-2.357.302-3.568.908-1.168.605-2.227 1.448-3.179 2.53a9.491 9.491 0 00-2.075 3.632v19.85h-8.692v-33.99h7.848v6.291a12.34 12.34 0 013.309-3.697c1.34-1.038 2.875-1.817 4.605-2.335a18.349 18.349 0 015.579-.844c2.119 0 3.848.39 5.189 1.168 1.384.735 2.422 1.751 3.114 3.049.735 1.254 1.232 2.68 1.491 4.28.303 1.6.455 3.223.455 4.866v21.211zM118.569 54.353v-33.99h8.692v33.99h-8.692zm0-38.726V7h8.692v8.627h-8.692zM82.163 54.353V8.298h30.941v7.849h-21.99v11.87h18.293v7.265H91.115v19.071h-8.952z"
      ></path>
      <path fill="currentColor" d="M266.031 17H272.253V45H266.031z"></path>
      <path
        fill="currentColor"
        d="M255.142 34.11H261.364V62.11H255.142z"
        transform="rotate(-90 255.142 34.11)"
      ></path>
      <path
        fill="#4945FF"
        d="M299.142 22.413c0-9.151 0-13.727 2.85-16.57S309.43 3 318.605 3h17.217c9.175 0 13.763 0 16.613 2.843 2.851 2.843 2.851 7.419 2.851 16.57v17.174c0 9.151 0 13.727-2.851 16.57C349.585 59 344.997 59 335.822 59h-17.217c-9.175 0-13.763 0-16.613-2.843-2.85-2.843-2.85-7.419-2.85-16.57V22.413z"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M337.881 19.986h-18.902V29.6h9.638v9.613h9.638V20.36a.374.374 0 00-.374-.374z"
        clipRule="evenodd"
      ></path>
      <path fill="#fff" d="M328.242 29.6h.374v.373h-.374V29.6z"></path>
      <path
        fill="#9593FF"
        d="M318.978 29.6h9.264c.207 0 .375.167.375.373v9.24h-9.264a.374.374 0 01-.375-.373V29.6zm9.639 9.613h9.638l-9.319 9.294a.187.187 0 01-.288-.028.19.19 0 01-.031-.103v-9.163zm-9.639-9.613h-9.186a.185.185 0 01-.183-.223.186.186 0 01.051-.096l9.319-9.295-.001 9.614z"
      ></path>
      <path
        fill="currentColor"
        d="M532.908 9.141c1.056 1.057 2.303 1.586 3.741 1.586 1.483 0 2.753-.529 3.809-1.586s1.584-2.305 1.584-3.744-.528-2.698-1.584-3.778S538.132 0 536.649 0c-1.438 0-2.685.54-3.741 1.619-1.056 1.08-1.584 2.339-1.584 3.778 0 1.44.528 2.687 1.584 3.744zm-113.72 13.8a.2.2 0 01-.2.2h-7.417v14.033c0 1.17.292 2.024.876 2.563.585.54 1.438.844 2.562.911 1.028.062 2.281.058 3.76-.012l.038-.002.069-.003.101-.006a.2.2 0 01.211.2v7.504a.199.199 0 01-.178.199l-.136.014c-5.811.62-9.919.047-12.325-1.72-2.449-1.8-3.674-5.016-3.674-9.648V23.14h-5.664a.199.199 0 01-.141-.058.198.198 0 01-.059-.142v-7.966c0-.11.09-.2.2-.2h5.664V9.205a.4.4 0 01.239-.366l8.175-3.601a.203.203 0 01.191.015.201.201 0 01.091.168v9.356h7.417c.11 0 .2.09.2.2v7.965zm15.768-2.364c.809-2.159 2.146-3.778 4.011-4.857 1.707-.988 3.593-1.524 5.657-1.608.1-.004.253-.007.376-.009a.2.2 0 01.203.2v9.154a.326.326 0 01-.358.32c-2.507-.226-4.759.326-6.754 1.658-2.09 1.394-3.135 3.71-3.135 6.948v15.924a.202.202 0 01-.058.142.202.202 0 01-.142.058h-8.295a.202.202 0 01-.142-.058.202.202 0 01-.058-.142V14.975a.2.2 0 01.2-.2h8.295a.2.2 0 01.2.2v5.602z"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M476.074 14.775a.198.198 0 00-.141.058.198.198 0 00-.059.142v3.78c-2.607-3.283-6.269-4.925-10.988-4.925-4.494 0-8.347 1.72-11.561 5.161-3.213 3.44-4.819 7.657-4.819 12.65 0 4.992 1.606 9.209 4.819 12.65 3.214 3.44 7.067 5.16 11.561 5.16 4.719 0 8.381-1.641 10.988-4.925v3.78c0 .111.09.2.2.2h8.295a.205.205 0 00.142-.058.201.201 0 00.059-.141V14.975a.202.202 0 00-.201-.2h-8.295zM459.83 38.522c1.753 1.754 3.977 2.631 6.673 2.631 2.697 0 4.933-.888 6.707-2.664 1.776-1.777 2.663-4.06 2.663-6.848 0-2.789-.887-5.071-2.663-6.848-1.774-1.776-4.01-2.665-6.707-2.665-2.696 0-4.92.889-6.673 2.665-1.753 1.777-2.629 4.06-2.629 6.848 0 2.789.876 5.082 2.629 6.881zm62.508-19.531c-3.213-3.44-7.089-5.16-11.628-5.16-4.718 0-8.359 1.64-10.92 4.924v-3.78a.202.202 0 00-.201-.2h-8.294a.199.199 0 00-.142.059.198.198 0 00-.059.14V61.8c0 .11.09.2.201.2h8.294a.202.202 0 00.201-.2V44.527c2.561 3.283 6.202 4.925 10.92 4.925 4.539 0 8.415-1.72 11.628-5.161 3.213-3.441 4.82-7.658 4.82-12.65s-1.607-9.209-4.82-12.65zm-19.92 19.531c1.753 1.755 3.977 2.632 6.674 2.632 2.696 0 4.932-.889 6.707-2.665 1.775-1.777 2.662-4.06 2.662-6.848 0-2.788-.887-5.071-2.662-6.848-1.775-1.776-4.011-2.664-6.707-2.664-2.697 0-4.921.888-6.674 2.665-1.753 1.776-2.629 4.058-2.629 6.847 0 2.789.876 5.083 2.629 6.881z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        d="M532.537 48.508a.202.202 0 01-.201-.2V14.975c0-.111.09-.2.201-.2h8.294a.2.2 0 01.201.2v33.331a.198.198 0 01-.059.142.199.199 0 01-.142.059h-8.294zm-155.221-21.96c-1.191-.563-1.786-1.294-1.786-2.193 0-.855.37-1.53 1.112-2.024.741-.495 1.674-.742 2.797-.742 2.155 0 3.782.84 4.882 2.52a.289.289 0 00.355.109l7.337-3.249a.195.195 0 00.067-.048.19.19 0 00.042-.073.195.195 0 00-.018-.162c-.084-.143-.17-.285-.258-.425-1.258-1.979-2.884-3.453-4.924-4.576-2.247-1.237-4.741-1.855-7.483-1.855-3.64 0-6.684.956-9.134 2.867-2.449 1.912-3.674 4.532-3.674 7.86 0 2.204.596 4.037 1.787 5.498 1.191 1.462 2.64 2.53 4.348 3.205a45.468 45.468 0 005.123 1.686c1.707.45 3.157.956 4.348 1.518 1.191.563 1.786 1.294 1.786 2.193 0 1.934-1.55 2.901-4.651 2.901-2.952 0-4.997-1.092-6.136-3.275a.4.4 0 00-.516-.188l-7.316 3.245a.213.213 0 00-.065.046.217.217 0 00-.042.067.209.209 0 00-.012.078.206.206 0 00.02.077l.084.171c2.556 5.115 7.217 7.672 13.983 7.672 3.865 0 7.089-.933 9.673-2.8 2.584-1.866 3.876-4.53 3.876-7.994 0-2.294-.595-4.205-1.786-5.734-1.191-1.53-2.64-2.62-4.348-3.272a44.902 44.902 0 00-5.123-1.62c-1.708-.427-3.157-.922-4.348-1.484z"
      ></path>
    </svg>
  );
};
