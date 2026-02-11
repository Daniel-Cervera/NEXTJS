import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

// En este apartado anadiremos parametros del servidor,pagina etc en la cual esta alojado 
// el archivo multimedia que deseamos agregar 

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
    ]
  }


};

export default nextConfig;
