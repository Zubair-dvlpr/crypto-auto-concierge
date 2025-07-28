import * as React from "react";
const SearchIcon = (props) => (
  <svg
    className="absolute right-5  top-[50%] -translate-y-[50%]"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M10.5 19C15.1945 19 19 15.1945 19 10.5C19 5.8055 15.1945 2 10.5 2C5.8055 2 2 5.8055 2 10.5C2 15.1945 5.8055 19 10.5 19Z"
      stroke="#00AEEF"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="M13.3289 7.1715C12.9578 6.79963 12.5168 6.50471 12.0315 6.30367C11.5461 6.10264 11.0258 5.99944 10.5004 6C9.975 5.99944 9.45468 6.10264 8.96929 6.30367C8.4839 6.50471 8.043 6.79963 7.67188 7.1715M16.6114 16.611L20.8539 20.8535"
      stroke="#00AEEF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SearchIcon;
