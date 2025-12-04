"use client";

import Image from "next/image";
import { useState } from "react";

type LazyImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export const LazyImage = ({ src, alt, width, height, className, priority = false }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse rounded" />
      )}
    </div>
  );
};