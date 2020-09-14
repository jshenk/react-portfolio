import React from "react";

function IconReact(props) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         style={props.style}
         className={props.className}
         height={props.height}
         width={props.width}
         viewBox="0 0 512 512"
    >
    <path fill={props.fill} d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"></path>
    </svg>
  );
}

export default IconReact;
