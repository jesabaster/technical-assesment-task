import { SocialNetworkIconProps } from "../commonTypes";

export const IconInstagram = ({ isHovered }: SocialNetworkIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none">
      <path
        fill={isHovered ? '#000' : '#fff'}
        fillRule="evenodd"
        d="M4.408.045C5.208.008 5.463 0 7.5 0s2.292.009 3.091.045c.8.036 1.345.164 1.822.348.5.19.953.484 1.328.866.382.375.677.827.865 1.328.185.477.312 1.023.349 1.82.037.801.045 1.056.045 3.093s-.009 2.292-.045 3.092c-.036.798-.164 1.343-.35 1.82a3.68 3.68 0 0 1-.864 1.33 3.678 3.678 0 0 1-1.328.864c-.477.185-1.023.312-1.82.349-.8.037-1.056.045-3.093.045s-2.292-.009-3.092-.045c-.798-.036-1.343-.164-1.82-.35a3.68 3.68 0 0 1-1.33-.864 3.677 3.677 0 0 1-.865-1.328c-.184-.477-.311-1.023-.348-1.82C.008 9.792 0 9.537 0 7.5s.009-2.292.045-3.091c.036-.8.164-1.345.348-1.822.19-.5.485-.954.866-1.328A3.676 3.676 0 0 1 2.587.393C3.064.21 3.61.082 4.407.045Zm6.123 1.35c-.791-.036-1.029-.044-3.031-.044-2.003 0-2.24.008-3.03.044-.732.033-1.13.155-1.394.258-.35.137-.6.298-.862.56-.249.243-.44.538-.56.863-.104.265-.226.662-.259 1.393-.036.791-.044 1.028-.044 3.031 0 2.002.008 2.24.044 3.03.033.732.155 1.13.258 1.394.12.325.312.62.56.862.243.249.538.44.863.56.265.104.662.226 1.393.259.791.036 1.028.044 3.031.044s2.24-.008 3.03-.044c.732-.033 1.13-.155 1.394-.258.35-.137.6-.298.862-.56.249-.243.44-.538.56-.863.104-.265.226-.662.259-1.393.036-.791.044-1.029.044-3.031 0-2.003-.008-2.24-.044-3.03-.033-.732-.155-1.13-.258-1.394a2.33 2.33 0 0 0-.56-.862 2.327 2.327 0 0 0-.863-.56c-.265-.104-.662-.226-1.393-.259ZM6.542 9.812a2.502 2.502 0 1 0 .713-4.802 2.502 2.502 0 0 0-.713 4.802ZM4.774 4.774a3.855 3.855 0 1 1 5.452 5.452 3.855 3.855 0 0 1-5.452-5.452Zm7.436-.555a.911.911 0 1 0-1.25-1.326.911.911 0 0 0 1.25 1.326Z"
        clipRule="evenodd" />
    </svg>
  );
};