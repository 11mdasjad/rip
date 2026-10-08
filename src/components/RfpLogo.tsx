import React from "react";

export interface RfpLogoProps {
  /**
   * - "full": Complete transparent logo with crest, crown, stars & DIGITAL PRODUCTIONS text
   * - "emblem": Crest icon only (crown, 4 stars, intertwined monogram)
   * - "framed": Luxury square badge with double gold hairline border & black background
   */
  variant?: "full" | "emblem" | "framed";
  className?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

export const RfpLogo: React.FC<RfpLogoProps> = ({
  variant = "full",
  className = "h-12 w-auto",
  alt = "RFP Digital Productions Logo",
  width,
  height,
}) => {
  const src =
    variant === "emblem"
      ? "/medien/logo/rfp-emblem.svg"
      : variant === "framed"
      ? "/medien/logo/rfp-logo-framed.svg"
      : "/medien/logo/rfp-logo.svg";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`object-contain transition-transform duration-300 ${className}`}
      style={{
        width: width ?? undefined,
        height: height ?? undefined,
      }}
    />
  );
};
