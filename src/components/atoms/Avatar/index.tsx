import React, { useState } from "react";
import classNames from "classnames";
import BarLoader from "components/animations/BarLoader";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function Avatar({ src, alt, className }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <BarLoader />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        width="auto"
        height="auto"
        className={classNames(
          "object-cover border-4 border-indigo-400 dark:border-orange-500 rounded-3xl w-28 h-28 md:w-64 md:h-64 shadow-xl",
          className,
          5
        )}
        onLoad={handleLoad}
      />
    </div>
  );
}
