"use client";

import { SvgIconProps } from "@/lib/types/common";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const Logo = ({ className, ...props }: SvgIconProps) => {
  const pathName = usePathname();

  if (pathName === "/payload")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="564"
        height="56"
        fill="none"
        viewBox="0 0 564 56"
        className={cn("h-6 w-max", className)}
        {...props}
      >
        <path
          fill="currentColor"
          d="M54.979 30.664L50.37 45.236a2.05 2.05 0 01-1.95 1.433H34.066a2.05 2.05 0 01-1.95-2.67l4.608-14.567A2.037 2.037 0 0138.674 28h14.354c1.381 0 2.37 1.346 1.95 2.664z"
        ></path>
        <path
          fill="#FD3"
          d="M73.158 2.664L68.55 17.236a2.044 2.044 0 01-1.95 1.427H32.132c-.788 0-1.473.506-1.72 1.242a.044.044 0 00-.012.023v.006l-.345 1.093v.006a.044.044 0 01-.011.023l-5.15 16.275-5.447 17.236A2.051 2.051 0 0117.49 56H3.143a2.053 2.053 0 01-1.956-2.67L6.25 37.332l5.448-17.236a2.057 2.057 0 011.956-1.432H29.47c.794 0 1.496-.512 1.732-1.266l.644-2.036c0-.006.006-.018.012-.024l4.395-13.91A2.046 2.046 0 0138.208 0h32.994c1.386 0 2.376 1.346 1.956 2.664z"
        ></path>
        <path
          fill="currentColor"
          d="M222.459 52c-2.767 0-5.254-.453-7.459-1.361-2.206-.952-4.087-2.249-5.644-3.892a17.686 17.686 0 01-3.502-5.644 18.312 18.312 0 01-1.233-6.681c0-2.378.411-4.627 1.233-6.746.821-2.12 1.989-4 3.502-5.643 1.557-1.644 3.438-2.92 5.644-3.828 2.205-.951 4.692-1.427 7.459-1.427 2.768 0 5.233.476 7.395 1.427 2.206.909 4.087 2.184 5.644 3.828A16.296 16.296 0 01239 27.675c.822 2.119 1.233 4.368 1.233 6.746 0 2.335-.411 4.562-1.233 6.681-.778 2.12-1.946 4-3.502 5.644-1.514 1.643-3.373 2.94-5.579 3.892-2.205.908-4.692 1.362-7.46 1.362zm-8.886-17.578c0 1.99.389 3.762 1.167 5.32.779 1.513 1.838 2.702 3.179 3.567 1.34.865 2.854 1.297 4.54 1.297 1.644 0 3.136-.432 4.476-1.297 1.341-.908 2.4-2.12 3.179-3.633.821-1.557 1.232-3.33 1.232-5.319 0-1.946-.411-3.697-1.232-5.254-.779-1.557-1.838-2.768-3.179-3.633-1.34-.864-2.832-1.297-4.476-1.297-1.686 0-3.2.454-4.54 1.362-1.341.865-2.4 2.076-3.179 3.633-.778 1.513-1.167 3.265-1.167 5.254zM173.069 46.035l18.747-22.573h-17.968v-6.098h27.309v5.32L182.54 45.256h18.941v6.097h-28.412v-5.319zM167.784 51.352h-8.692v-19.07c0-2.725-.475-4.714-1.427-5.968-.951-1.254-2.27-1.881-3.957-1.881-1.167 0-2.357.302-3.567.908-1.168.605-2.227 1.448-3.179 2.53a9.506 9.506 0 00-2.076 3.632v19.85h-8.692v-33.99h7.849v6.291a12.35 12.35 0 013.308-3.697c1.341-1.038 2.876-1.817 4.606-2.335a18.342 18.342 0 015.578-.844c2.119 0 3.849.39 5.19 1.168 1.384.735 2.421 1.751 3.113 3.049.735 1.254 1.233 2.68 1.492 4.28.303 1.6.454 3.223.454 4.866v21.211zM119.661 51.353v-33.99h8.692v33.99h-8.692zm0-38.726V4h8.692v8.627h-8.692zM83.255 51.353V5.298h30.941v7.849h-21.99v11.87H110.5v7.265H92.207v19.071h-8.952z"
        ></path>
        <path
          fill="currentColor"
          d="M267.123 14H273.34499999999997V42H267.123z"
        ></path>
        <path
          fill="currentColor"
          d="M256.233 31.11H262.455V59.11H256.233z"
          transform="rotate(-90 256.233 31.11)"
        ></path>
        <path
          fill="currentColor"
          d="M320.083 0l23.879 15.458v29.34L325.981 56V26.66l-23.908-15.438L320.083 0z"
        ></path>
        <path
          fill="currentColor"
          d="M318.252 54.374V31.478l-18.019 11.223 18.019 11.673zM562.908 8v39.628h-7.702l-.168-4.242c-1.618 3.126-4.688 4.912-8.986 4.912-8.205 0-12.502-6.81-12.502-15.46 0-8.652 4.297-15.461 12.502-15.461 4.075 0 7.033 1.674 8.819 4.688V8h8.037zM541.81 32.837c0 4.912 2.121 9.21 6.754 9.21 4.688 0 6.809-4.354 6.809-9.21 0-5.079-2.121-9.377-6.809-9.377-4.689 0-6.754 4.298-6.754 9.377zM501.321 27.144c1.172-6.25 5.972-9.767 13.618-9.767 8.819 0 13.395 4.41 13.395 12.837v9.544c0 1.842.782 2.289 1.898 2.289h1.061v5.581l-1.563.056c-2.065.056-7.479.446-8.205-4.521-1.395 2.958-4.744 5.135-10.046 5.135-5.972 0-10.605-3.237-10.605-8.428 0-5.581 4.13-7.59 11.219-9.042l8.148-1.619c0-4.353-1.73-6.418-5.358-6.418-2.902 0-4.8 1.619-5.414 4.8l-8.148-.447zm7.813 12.447c0 1.898 1.563 3.349 4.745 3.349 3.739 0 6.53-2.791 6.53-8.26v-.336l-5.135.95c-3.516.669-6.14 1.171-6.14 4.297zM482.175 48.298c-9.098 0-15.014-6.084-15.014-15.46 0-9.377 5.916-15.461 15.014-15.461 9.042 0 15.014 6.084 15.014 15.46 0 9.377-5.972 15.46-15.014 15.46zm-6.753-15.46c0 5.804 2.455 9.153 6.753 9.153s6.754-3.349 6.754-9.154c0-5.804-2.456-9.153-6.754-9.153s-6.753 3.349-6.753 9.153zM452.197 8h8.037v31.312c0 1.45.782 2.232 2.177 2.232h2.177v6.084h-4.409c-4.8 0-7.982-2.902-7.982-7.981V8zM417.535 18.047h7.702l7.535 21.21 7.256-21.21h7.647L436.01 50.53c-1.34 3.795-3.852 5.47-8.038 5.47h-5.023v-5.973h3.516c1.786 0 2.679-.502 3.238-1.897l.781-1.898h-2.288l-10.661-28.186zM387.835 27.144c1.172-6.25 5.972-9.767 13.619-9.767 8.818 0 13.395 4.41 13.395 12.837v9.544c0 1.842.782 2.289 1.898 2.289h1.06v5.581l-1.563.056c-2.065.056-7.479.446-8.204-4.521-1.396 2.958-4.744 5.135-10.047 5.135-5.972 0-10.604-3.237-10.604-8.428 0-5.581 4.13-7.59 11.218-9.042l8.149-1.619c0-4.353-1.73-6.418-5.358-6.418-2.902 0-4.8 1.619-5.414 4.8l-8.149-.447zm7.814 12.447c0 1.898 1.563 3.349 4.744 3.349 3.74 0 6.531-2.791 6.531-8.26v-.336l-5.135.95c-3.517.669-6.14 1.171-6.14 4.297zM369.625 8c9.377 0 15.126 4.912 15.126 12.837 0 7.982-5.749 12.949-15.126 12.949h-7.535v13.842h-8.149V8h15.684zm-7.535 18.865h7.089c4.632 0 7.2-2.065 7.2-6.028 0-3.907-2.568-5.916-7.2-5.916h-7.089v11.944z"
        ></path>
      </svg>
    );

  if (pathName === "/contentful")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="642"
        height="56"
        fill="none"
        viewBox="0 0 642 56"
        className={cn("h-6 w-max", className)}
        {...props}
      >
        <path
          fill="currentColor"
          d="M53.887 30.664l-4.608 14.572a2.05 2.05 0 01-1.95 1.433H32.974a2.05 2.05 0 01-1.95-2.67l4.608-14.567A2.037 2.037 0 0137.583 28h14.354c1.38 0 2.37 1.346 1.95 2.664z"
        ></path>
        <path
          fill="#FD3"
          d="M72.066 2.664l-4.608 14.572a2.044 2.044 0 01-1.95 1.427H31.04c-.788 0-1.473.506-1.72 1.242a.044.044 0 00-.012.023v.006l-.345 1.093v.006a.044.044 0 01-.011.023l-5.15 16.275-5.447 17.236A2.051 2.051 0 0116.4 56H2.052a2.053 2.053 0 01-1.956-2.67l5.062-15.999 5.448-17.236a2.057 2.057 0 011.956-1.432h15.816c.793 0 1.495-.512 1.731-1.266l.644-2.036c0-.006.006-.018.012-.024l4.395-13.91A2.046 2.046 0 0137.116 0H70.11c1.386 0 2.376 1.346 1.956 2.664z"
        ></path>
        <path
          fill="currentColor"
          d="M221.368 52c-2.768 0-5.255-.453-7.46-1.361-2.206-.952-4.087-2.249-5.643-3.892a17.672 17.672 0 01-3.503-5.644 18.312 18.312 0 01-1.233-6.681c0-2.378.411-4.627 1.233-6.746.821-2.12 1.989-4 3.503-5.643 1.556-1.644 3.437-2.92 5.643-3.828 2.205-.951 4.692-1.427 7.46-1.427 2.767 0 5.232.476 7.394 1.427 2.206.909 4.087 2.184 5.644 3.828a16.298 16.298 0 013.503 5.643c.821 2.119 1.232 4.368 1.232 6.746 0 2.335-.411 4.562-1.232 6.681-.779 2.12-1.946 4-3.503 5.644-1.514 1.643-3.373 2.94-5.579 3.892-2.205.908-4.692 1.362-7.459 1.362zm-8.887-17.578c0 1.99.389 3.762 1.167 5.32.779 1.513 1.838 2.702 3.179 3.567 1.341.865 2.854 1.297 4.541 1.297 1.643 0 3.135-.432 4.475-1.297 1.341-.908 2.4-2.12 3.179-3.633.821-1.557 1.232-3.33 1.232-5.319 0-1.946-.411-3.697-1.232-5.254-.779-1.557-1.838-2.768-3.179-3.633-1.34-.864-2.832-1.297-4.475-1.297-1.687 0-3.2.454-4.541 1.362-1.341.865-2.4 2.076-3.179 3.633-.778 1.513-1.167 3.265-1.167 5.254zM171.978 46.035l18.746-22.573h-17.968v-6.098h27.309v5.32l-18.617 22.573h18.941v6.097h-28.411v-5.319zM166.693 51.352H158v-19.07c0-2.725-.475-4.714-1.427-5.968-.951-1.254-2.27-1.881-3.956-1.881-1.168 0-2.357.302-3.568.908-1.168.605-2.227 1.448-3.179 2.53a9.491 9.491 0 00-2.075 3.632v19.85h-8.692v-33.99h7.848v6.291a12.34 12.34 0 013.309-3.697c1.34-1.038 2.875-1.817 4.605-2.335a18.349 18.349 0 015.579-.844c2.119 0 3.848.39 5.189 1.168 1.384.735 2.422 1.751 3.114 3.049.735 1.254 1.232 2.68 1.491 4.28.303 1.6.455 3.223.455 4.866v21.211zM118.569 51.353v-33.99h8.692v33.99h-8.692zm0-38.726V4h8.692v8.627h-8.692zM82.163 51.353V5.298h30.941v7.849h-21.99v11.87h18.293v7.265H91.115v19.071h-8.952z"
        ></path>
        <path fill="currentColor" d="M266.031 14H272.253V42H266.031z"></path>
        <path
          fill="currentColor"
          d="M255.142 31.11H261.364V59.11H255.142z"
          transform="rotate(-90 255.142 31.11)"
        ></path>
        <path
          fill="#FFD85F"
          d="M316.161 39.024c-2.974-2.79-4.758-6.634-4.758-11.026 0-4.392 1.739-8.235 4.575-11.025 2.471-2.47 2.471-6.314 0-8.784-2.47-2.47-6.313-2.47-8.784 0-4.896 5.078-8.052 12.078-8.052 19.81 0 7.731 3.156 14.73 8.235 19.809 2.471 2.47 6.314 2.47 8.784 0 2.242-2.47 2.242-6.313 0-8.784z"
        ></path>
        <path
          fill="#3BB4E7"
          d="M316.162 16.973c2.791-2.974 6.68-4.712 11.026-4.712s8.235 1.738 11.026 4.575c2.471 2.47 6.314 2.47 8.785 0 2.47-2.47 2.47-6.314 0-8.784C341.92 3.157 334.92 0 327.188 0c-7.732 0-14.732 3.157-19.811 8.235-2.47 2.47-2.47 6.313 0 8.784 2.471 2.196 6.314 2.196 8.785-.046z"
        ></path>
        <path
          fill="#ED5C68"
          d="M338.214 39.027c-2.791 2.974-6.68 4.712-11.026 4.712s-8.235-1.738-11.026-4.575c-2.471-2.47-6.314-2.47-8.785 0-2.47 2.47-2.47 6.314 0 8.784C312.456 52.843 319.456 56 327.188 56c7.732 0 14.732-3.156 19.811-8.235 2.47-2.47 2.47-6.313 0-8.784-2.471-2.196-6.314-2.196-8.785.046z"
        ></path>
        <path
          fill="#308BC5"
          d="M311.768 18.712a6.13 6.13 0 100-12.261 6.13 6.13 0 000 12.261z"
        ></path>
        <path
          fill="#D5465F"
          d="M311.768 49.548a6.13 6.13 0 100-12.262 6.13 6.13 0 000 12.262z"
        ></path>
        <path
          fill="currentColor"
          d="M381.679 38.148c2.269-1.851 2.746-.657 4.597 1.134.896.895 3.642 2.746 1.851 4.12-3.642 2.984-6.866 4.357-11.642 4.357-10.508 0-18.09-8-17.612-18.328.239-4.775 2.03-9.133 5.731-12.118 3.403-2.746 7.523-4.12 11.881-3.88 2.269 0 4.119.477 6.149 1.133 1.373.478 2.747 1.135 3.881 2.03 2.269 1.85 1.134 2.746-.478 4.597-.477.478-.656.896-1.134 1.134-.896.896-1.612 1.612-2.746.657-2.269-1.612-5.493-2.507-8.239-1.85-9.135 2.268-8.717 18.506 2.507 18.506 1.791.358 3.881-.298 5.254-1.492zm254.091 8.954c-1.612 0-2.747-1.134-2.747-2.746V8.418c0-1.612 1.135-2.747 2.747-2.747h2.985c1.612 0 2.746 1.135 2.746 2.747v35.938c0 1.612-1.134 2.746-2.746 2.746h-2.985zm-15.762-4.119c-3.223 2.985-6.388 4.597-10.985 4.597-9.373 0-13.731-7.76-13.731-16.238V16.716c0-1.612 1.134-2.747 2.746-2.747h2.985c1.612 0 2.747 1.135 2.747 2.747v14.626c0 4.776 2.507 8.477 7.761 8.477 5.015 0 8.239-4.358 8.239-8.895V16.716c0-1.612 1.134-2.747 2.746-2.747h2.985c1.612 0 2.746 1.135 2.746 2.747v27.64c0 1.612-1.134 2.746-2.746 2.746h-2.507c-1.612 0-2.508-1.373-2.747-2.746l-.239-1.373zM584.307 14.15h5.731c1.612 0 2.746 1.373 2.746 2.746v1.85c0 1.612-1.134 2.747-2.746 2.747h-5.731v22.864c0 1.612-1.135 2.746-2.746 2.746h-2.986c-1.612 0-2.746-1.134-2.746-2.746V13.014C575.829 6.15 579.71.657 586.814 0h4.358c1.612 0 2.747 1.373 2.747 2.746v1.85c0 1.613-1.135 2.747-2.747 2.747h-2.268c-3.403 0-4.776 2.507-4.776 5.731v1.134h.179v-.06zm-20.836 0h6.388c1.612 0 2.746 1.134 2.746 2.746v1.85c0 1.612-1.134 2.747-2.746 2.747h-6.388v13.91c0 2.746 1.373 4.119 4.119 4.119h1.373c1.612 0 2.747 1.134 2.747 2.746v2.03c0 1.611-1.135 2.746-2.747 2.746h-3.88c-6.866-.478-9.851-4.776-9.851-11.642V8.418c0-1.612 1.134-2.747 2.746-2.747h2.985c1.612 0 2.747 1.135 2.747 2.747v5.73h-.239zm-91.702 0h6.388c1.612 0 2.746 1.134 2.746 2.746v1.85c0 1.612-1.134 2.747-2.746 2.747h-6.388v13.91c0 2.746 1.373 4.357 4.119 4.357h1.374c1.611 0 2.746 1.135 2.746 2.747v1.85c0 1.612-1.135 2.746-2.746 2.746h-1.851c-7.523 0-11.881-3.223-11.881-11.64V8.476c0-1.612 1.134-2.746 2.746-2.746h2.985c1.612 0 2.747 1.134 2.747 2.746v5.731c0-.06-.239-.06-.239-.06zm-37.254 3.88c2.985-2.985 6.388-4.597 10.508-4.597 9.373 0 14.209 7.522 14.209 16.238v14.686c0 1.612-1.135 2.746-2.747 2.746H453.5c-1.612 0-2.746-1.134-2.746-2.746V29.73c0-4.776-2.508-8.477-7.761-8.477-5.015 0-8.239 4.119-8.239 8.895v14.208c0 1.612-1.134 2.746-2.746 2.746h-2.986c-1.611 0-2.746-1.134-2.746-2.746v-27.7c0-1.612 1.135-2.746 2.746-2.746h2.508c1.612 0 2.507 1.373 2.746 2.746l.239 1.373zm91.941 0c2.985-2.985 6.388-4.597 10.507-4.597 9.373 0 14.209 7.522 14.209 16.238v14.686c0 1.612-1.134 2.746-2.746 2.746h-2.985c-1.612 0-2.746-1.134-2.746-2.746V29.73c0-4.776-2.508-8.477-7.762-8.477-5.015 0-8.238 4.119-8.238 8.895v14.208c0 1.612-1.135 2.746-2.747 2.746h-2.985c-1.612 0-2.746-1.134-2.746-2.746v-27.7c0-1.612 1.134-2.746 2.746-2.746h2.508c1.612 0 2.507 1.373 2.746 2.746l.239 1.373zm-120.12-4.776c-10.09 0-17.135 7.343-17.135 17.372 0 10.03 7.105 17.373 17.135 17.373 10.269 0 17.373-7.104 17.373-17.372 0-10.09-7.284-17.373-17.373-17.373zm83.761 20.358c.657 4.596 5.254 6.626 9.612 6.626 2.03 0 4.359-.478 6.15-1.373.238-.239.656-.239.895-.478 1.135-.656 2.03-.895 2.985 0l1.612 1.612 1.373 1.373c1.374 1.851.478 2.269-1.134 3.224-3.403 2.269-7.761 3.403-11.881 3.403-10.985 0-18.328-6.627-18.328-17.611 0-10.507 7.343-17.373 17.612-17.373 10.746 0 16.716 6.15 16.955 16.955 0 2.985.239 3.88-2.746 3.88h-23.105v-.238zm-83.761-12.597c5.254 0 8.716 4.597 8.716 9.611 0 5.254-3.224 9.373-8.716 9.373-5.493 0-8.717-4.119-8.717-9.372 0-5.254 3.463-9.612 8.717-9.612zm83.94 5.492h17.135c-.657-4.358-4.12-5.97-8.239-5.97-4.298 0-7.701 2.09-8.896 5.97z"
        ></path>
      </svg>
    );

  if (pathName === "/strapi")
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

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="537"
      height="56"
      fill="none"
      viewBox="0 0 537 56"
      className={cn("h-6 w-max", className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M53.887 30.664l-4.608 14.572a2.05 2.05 0 01-1.95 1.433H32.974a2.05 2.05 0 01-1.95-2.67l4.608-14.567A2.037 2.037 0 0137.583 28h14.354c1.38 0 2.37 1.346 1.95 2.664z"
      ></path>
      <path
        fill="#FD3"
        d="M72.066 2.664l-4.608 14.572a2.044 2.044 0 01-1.95 1.427H31.04c-.788 0-1.473.506-1.72 1.242a.044.044 0 00-.012.023v.006l-.345 1.093v.006a.044.044 0 01-.011.023l-5.15 16.275-5.447 17.236A2.051 2.051 0 0116.4 56H2.052a2.053 2.053 0 01-1.956-2.67l5.062-15.999 5.448-17.236a2.057 2.057 0 011.956-1.432h15.816c.793 0 1.495-.512 1.731-1.266l.644-2.036c0-.006.006-.018.012-.024l4.395-13.91A2.046 2.046 0 0137.116 0H70.11c1.386 0 2.376 1.346 1.956 2.664z"
      ></path>
      <path
        fill="currentColor"
        d="M221.368 52c-2.768 0-5.255-.453-7.46-1.361-2.206-.952-4.087-2.249-5.643-3.892a17.672 17.672 0 01-3.503-5.644 18.312 18.312 0 01-1.233-6.681c0-2.378.411-4.627 1.233-6.746.821-2.12 1.989-4 3.503-5.643 1.556-1.644 3.437-2.92 5.643-3.828 2.205-.951 4.692-1.427 7.46-1.427 2.767 0 5.232.476 7.394 1.427 2.206.909 4.087 2.184 5.644 3.828a16.298 16.298 0 013.503 5.643c.821 2.119 1.232 4.368 1.232 6.746 0 2.335-.411 4.562-1.232 6.681-.779 2.12-1.946 4-3.503 5.644-1.514 1.643-3.373 2.94-5.579 3.892-2.205.908-4.692 1.362-7.459 1.362zm-8.887-17.578c0 1.99.389 3.762 1.167 5.32.779 1.513 1.838 2.702 3.179 3.567 1.341.865 2.854 1.297 4.541 1.297 1.643 0 3.135-.432 4.475-1.297 1.341-.908 2.4-2.12 3.179-3.633.821-1.557 1.232-3.33 1.232-5.319 0-1.946-.411-3.697-1.232-5.254-.779-1.557-1.838-2.768-3.179-3.633-1.34-.864-2.832-1.297-4.475-1.297-1.687 0-3.2.454-4.541 1.362-1.341.865-2.4 2.076-3.179 3.633-.778 1.513-1.167 3.265-1.167 5.254zM171.978 46.035l18.746-22.573h-17.968v-6.098h27.309v5.32l-18.617 22.573h18.941v6.097h-28.411v-5.319zM166.693 51.352H158v-19.07c0-2.725-.475-4.714-1.427-5.968-.951-1.254-2.27-1.881-3.956-1.881-1.168 0-2.357.302-3.568.908-1.168.605-2.227 1.448-3.179 2.53a9.491 9.491 0 00-2.075 3.632v19.85h-8.692v-33.99h7.848v6.291a12.34 12.34 0 013.309-3.697c1.34-1.038 2.875-1.817 4.605-2.335a18.349 18.349 0 015.579-.844c2.119 0 3.848.39 5.189 1.168 1.384.735 2.422 1.751 3.114 3.049.735 1.254 1.232 2.68 1.491 4.28.303 1.6.455 3.223.455 4.866v21.211zM118.569 51.353v-33.99h8.692v33.99h-8.692zm0-38.726V4h8.692v8.627h-8.692zM82.163 51.353V5.298h30.941v7.849h-21.99v11.87h18.293v7.265H91.115v19.071h-8.952z"
      ></path>
      <path fill="currentColor" d="M266.031 14H272.253V42H266.031z"></path>
      <path
        fill="currentColor"
        d="M255.142 31.11H261.364V59.11H255.142z"
        transform="rotate(-90 255.142 31.11)"
      ></path>
      <g clipPath="url(#clip0_142_5974)">
        <path
          fill="#F37368"
          d="M475.836 20.993v30.262h-9.665V16.254l9.665 4.739z"
        ></path>
        <path
          fill="#F7A199"
          d="M339.042 45.636L346.291 52l30.541-16.045-3.155-7.65-34.635 17.331zm127.129-19.498l24.567-12.863-4.162-7.244-20.405 10.223v9.884z"
        ></path>
        <path
          fill="#F37368"
          d="M397.036 18.624v32.632h-9.263V4.746l9.263 13.878zm-57.994 27.012L346.291 52l13.962-35.204-4.498-12.05-16.713 40.89z"
        ></path>
        <path
          fill="#F04939"
          d="M355.755 4.745h9.531l17.653 46.51h-9.799l-17.385-46.51zm42.69 0l20.338 31.752v14.759l-31.011-46.51h10.673zm37.789 0h9.599v46.51h-9.599V4.746zm29.937 8.53h-14.767v-8.53h34.434l4.9 8.53h-24.567z"
        ></path>
        <path fill="#F7A199" d="M519.13 33.585v17.67h-9.531v-17.67"></path>
        <path
          fill="#F04939"
          d="M525.708 4.745l-16.109 28.84h9.531l16.713-28.84h-10.135z"
        ></path>
        <path
          fill="#F37368"
          d="M509.599 33.586l-16.646-28.84h10.471l11.21 19.768-5.035 9.072z"
        ></path>
        <path
          fill="#F04939"
          d="M303.266 10.161c0 6.432 3.96 10.29 11.881 12.322l8.39 1.963c7.518 1.76 12.082 6.093 12.082 13.134.067 3.047-.94 6.025-2.752 8.463 0-7.041-3.625-10.832-12.284-13.134l-8.256-1.896c-6.645-1.49-11.746-5.078-11.746-12.728 0-2.91.94-5.822 2.685-8.124z"
        ></path>
        <path
          fill="#F37368"
          d="M418.782 34.127V4.745h9.263v46.51h-9.263V34.128zM327.698 35.82c3.557 2.301 5.168 5.55 5.168 10.222-3.02 3.86-8.189 5.958-14.297 5.958-10.269 0-17.586-5.145-19.13-14.014h9.867c1.276 4.062 4.632 5.958 9.196 5.958 5.437.067 9.129-2.912 9.196-8.125zm-19.264-16.113c-3.356-2.031-5.303-5.687-5.169-9.614C306.152 6.302 311.119 4 317.16 4c10.538 0 16.579 5.62 18.123 13.473h-9.532c-1.074-3.115-3.691-5.552-8.457-5.552-5.168.068-8.659 3.047-8.86 7.786z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_142_5974">
          <path
            fill="#fff"
            d="M0 0H237V48H0z"
            transform="translate(299.142 4)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};
