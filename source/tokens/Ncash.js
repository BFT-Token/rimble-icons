import React from "react";

const SvgNcash = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#36A9CF"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.733 13.856c.131.058.18.237.109.4a.334.334 0 01-.259.208l-1.668 3.078a.404.404 0 01-.122.381.408.408 0 01-.322.126l-3.254 1.948a.393.393 0 01-.308.245c-.16.03-.313-.028-.386-.137l-3.824-.268a.4.4 0 01-.338.071c-.19-.041-.32-.192-.312-.347l-2.954-2.132a.396.396 0 01-.345-.105c-.13-.117-.176-.287-.127-.416L4.409 14.09c-.132-.026-.247-.156-.277-.329-.025-.155.026-.301.122-.38l.179-4.265a.409.409 0 01-.053-.387c.06-.174.205-.285.348-.277L7.915 5.11c-.027-.158.093-.325.281-.384a.399.399 0 01.353.047l4.588-.834c.06-.135.227-.215.409-.182.165.028.289.141.318.272l2.12 1.209a.428.428 0 01.354.043.44.44 0 01.214.321l.913.614a.398.398 0 01.345.067c.17.123.232.338.135.48l-.006.008 1.337 2.61c.127-.017.258.082.304.238.051.172-.02.347-.156.39-.137.045-.29-.058-.34-.23l-.008-.037-2.752-1.473a.42.42 0 01-.173.14v7.346a.425.425 0 01.243.48l1.118 1.14a.354.354 0 01.181-.026l1.688-2.982a.338.338 0 01-.016-.321c.071-.164.236-.248.368-.19zm.002.357c.029-.066.009-.138-.044-.161-.052-.022-.118.011-.147.077-.028.065-.009.136.044.16.053.023.118-.011.147-.076zm-1.998 3.594c.06-.06.07-.149.023-.198-.047-.05-.134-.042-.195.017-.06.06-.07.15-.023.2.047.049.135.04.195-.02zm-.472-.188l.008-.018-1.072-1.09a.404.404 0 01-.435-.004.413.413 0 01-.152-.175h-1.439a.424.424 0 01-.173.186l.14 2.03a.401.401 0 01.143.102l2.98-1.031zm-3.126 2.09l2.6-1.558-2.37.82a.388.388 0 01-.235.263l-.072.423a.333.333 0 01.077.052zm-.244.403c.083-.015.139-.082.127-.151-.012-.068-.09-.111-.172-.095-.082.015-.14.082-.127.15.012.069.09.112.172.096zm-.378-.298a.398.398 0 01.22-.173l.068-.401a.418.418 0 01-.16-.107l-2.984.482 2.856.199zm-2.79-3.253l-.971 2.863 3.762-.607-2.662-2.31a.415.415 0 01-.13.054zm-1.25 2.667l.926-2.73a.42.42 0 01-.14-.167H8.57a.53.53 0 01-.035.06l.943 2.837zm-.114.551c.082.018.16-.023.174-.09.015-.067-.04-.137-.122-.156-.083-.017-.16.022-.175.09-.014.069.04.138.123.156zM6.298 17.22l2.854 2.06-.902-2.713a.413.413 0 01-.355-.127l-1.592.694a.33.33 0 01-.005.086zm-.267-.448c.04.017.078.04.112.07l1.638-.713a.432.432 0 01.075-.227l-2.532-2.616.707 3.486zm-.018.456c.046-.05.03-.14-.032-.196-.063-.056-.15-.061-.195-.01-.045.053-.031.142.032.198.063.056.15.06.195.008zm-1.342-3.25l.872 2.02-.585-2.878-.23.49a.43.43 0 01-.057.369zm-.021-3.255l-.105 2.514.208-.442a.418.418 0 01.018-.42l-.121-1.652zM4.5 8.736c-.029.081.002.165.066.189.064.022.138-.024.166-.105.027-.081-.002-.165-.066-.189-.065-.022-.138.024-.167.105H4.5zm.633 3.865c0-.085-.062-.155-.137-.155-.076 0-.138.07-.138.155 0 .086.062.155.138.155.075 0 .137-.069.137-.155zM4.96 8.936a.45.45 0 01-.102.17l.217 2.992L6.41 7.877l-1.429.97a.49.49 0 01-.02.089zm2.27-2.69L5.404 8.16l.936-.634a.448.448 0 01.333-.37l.557-.908zm.94-.904L6.98 7.278c.029.051.04.112.036.175l.881.27a.41.41 0 01.673.112h1.476a.418.418 0 01.292-.233l.802-1.705a.43.43 0 01-.083-.195l-2.45-.543a.429.429 0 01-.232.168.438.438 0 01-.204.015zm.044-.49c-.08.025-.129.099-.11.165.02.067.102.1.181.075.08-.025.13-.1.11-.165-.02-.067-.1-.1-.181-.075zm4.686-.573l-3.699.673 1.935.429a.411.411 0 01.469-.145l1.295-.957zm.454.073l-1.38 1.02 3.784.105.009-.029-2.006-1.143a.41.41 0 01-.321.071.445.445 0 01-.086-.024zm.178-.465c-.082-.015-.16.029-.17.098-.012.067.044.135.127.15.083.015.16-.029.171-.098.012-.067-.045-.135-.128-.15zm2.425 2.044a.466.466 0 01-.131-.121l-3.947-.11a.363.363 0 01-.016.069l1.593 1.837a.416.416 0 01.465.23h1.693a.421.421 0 01.199-.202l.144-1.703zm.03 1.919a.168.168 0 00-.165.17c0 .094.074.17.165.17a.168.168 0 00.167-.17.169.169 0 00-.166-.17h-.001zm.074-2.4c-.041.072-.01.169.07.216.078.048.176.027.217-.045.042-.072.011-.17-.069-.216-.079-.048-.177-.027-.218.045zm2.936 3.988l-2.72-3.44-.137 1.627a.425.425 0 01.262.36l2.595 1.453zm-1.72-2.998l-.61-.41 1.97 2.566-.958-1.715a.435.435 0 01-.222-.082c-.128-.091-.195-.233-.18-.359zm.286-.042c-.04.057-.015.142.054.192.068.048.156.042.195-.015.039-.057.015-.143-.053-.192-.07-.048-.157-.042-.195.015h-.001zM13.385 8.02c0 .091.072.166.162.166a.165.165 0 00.163-.166.165.165 0 00-.163-.167.165.165 0 00-.163.167h.001zm.09 3.58a.169.169 0 00-.167.169c0 .094.075.17.167.17a.168.168 0 00.165-.17.166.166 0 00-.165-.17zm-2.173-6.018c0 .093.074.169.165.169a.168.168 0 00.167-.17.169.169 0 00-.167-.17.167.167 0 00-.165.17zm.121.477l-.76 1.617a.426.426 0 01.114.559l2.536 3.143a.432.432 0 01.071-.023V8.411a.425.425 0 01-.192-.611l-1.545-1.78a.415.415 0 01-.224.04zm-1.17 1.96c0 .095.075.17.167.17.09 0 .165-.075.165-.17a.169.169 0 00-.165-.17.169.169 0 00-.167.17zm-2.22 0c0 .092.072.167.162.167.09 0 .163-.075.163-.166a.164.164 0 00-.163-.167.164.164 0 00-.162.167zm.162 7.958a.167.167 0 00-.165.17c0 .094.074.17.165.17a.168.168 0 00.167-.17.167.167 0 00-.167-.17zM6.548 7.382c-.054.065-.059.154-.007.2.05.045.136.031.192-.034.055-.064.059-.153.008-.199-.051-.046-.136-.031-.193.033zM5.33 12.377a.417.417 0 01.063.223.417.417 0 01-.061.221l2.701 2.792V8.41a.424.424 0 01-.252-.376l-.917-.281a.435.435 0 01-.095.065l-1.44 4.558zm8.47 3.345c.18 0 .332.116.39.277h1.409a.42.42 0 01.226-.243V8.411a.419.419 0 01-.226-.243h-1.662a.423.423 0 01-.227.243v3.007a.427.427 0 01.18.351.42.42 0 01-.415.425.42.42 0 01-.389-.575l-2.571-3.186a.416.416 0 01-.485-.265H8.585a.424.424 0 01-.227.243v7.345a.422.422 0 01.227.243h1.661a.423.423 0 01.228-.243v-3.053a.426.426 0 01.216-.786.42.42 0 01.39.572l2.613 3.247a.447.447 0 01.107-.014zm.18 3.035c-.09 0-.165.067-.165.151 0 .084.075.151.165.151.092 0 .167-.068.167-.15 0-.082-.075-.152-.166-.152h-.001zm-.346-2.61c0 .094.075.17.165.17a.168.168 0 00.168-.17.169.169 0 00-.167-.17.168.168 0 00-.166.17zm-3.11-3.805c0 .094.075.17.167.17a.168.168 0 00.165-.17.167.167 0 00-.165-.17.168.168 0 00-.167.17zm.113 3.635a.168.168 0 00-.167.17c0 .094.075.17.166.17a.168.168 0 00.166-.17.167.167 0 00-.165-.17zm.162-.221a.424.424 0 01.244.478l2.695 2.337a.438.438 0 01.077-.035l-.138-1.983a.425.425 0 01-.24-.611l-2.582-3.21a.374.374 0 01-.056.02v3.004zm5.355.39a.167.167 0 00-.166-.169.168.168 0 00-.167.17c0 .094.075.17.167.17a.168.168 0 00.166-.17v-.001zM4.37 13.88c.067-.011.11-.089.096-.173-.015-.085-.08-.144-.147-.132-.067.011-.11.09-.095.174.013.085.08.144.146.131zM19.35 9.595c-.054.017-.083.088-.062.156.02.068.08.11.135.092.055-.017.082-.088.063-.156-.02-.069-.081-.11-.135-.092h-.001z"
      fill="white"
    />
  </svg>
);

export default SvgNcash;
