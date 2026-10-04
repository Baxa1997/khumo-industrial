import Icon, { type IconName } from "./Icon";

/**
 * Renders a photo when `src` is provided, otherwise a branded placeholder.
 * Put images in /public/images and reference them from src/lib/data.ts.
 */
export default function Photo({
  src,
  alt,
  className = "",
  icon = "box",
}: {
  src?: string;
  alt: string;
  className?: string;
  icon?: IconName;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`object-cover ${className}`} />;
  }
  return (
    <div role="img" aria-label={alt} className={`photo-placeholder relative grid place-items-center overflow-hidden ${className}`}>
      <Icon name={icon} className="h-1/3 max-h-48 w-1/3 max-w-48 text-white/25" strokeWidth={0.9} />
    </div>
  );
}
