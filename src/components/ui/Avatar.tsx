import { useState } from "react";

type AvatarSize = "sm" | "md" | "lg" | "xl";

interface AvatarProps {
  src?: string;
  name: string;
  size?: AvatarSize;
}

const sizeClasses: Record<AvatarSize, string> = {
  sm: "w-10 h-10 text-xs",
  md: "w-16 h-16 text-sm",
  lg: "w-24 h-24 text-lg",
  xl: "w-32 h-32 text-2xl",
};

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/);
  const firstWord = words[0];
  if (!firstWord) return "?";
  if (words.length === 1) return firstWord[0]?.toUpperCase() ?? "?";
  const lastWord = words[words.length - 1];
  if (!lastWord) return firstWord[0]?.toUpperCase() ?? "?";
  return (firstWord[0]?.toUpperCase() ?? "?") + (lastWord[0]?.toUpperCase() ?? "?");
}

export function Avatar({ src, name, size = "md" }: AvatarProps) {
  const [hasError, setHasError] = useState(false);

  if (src && !hasError) {
    return (
      <img
        src={src}
        alt={name}
        data-testid="avatar"
        className={`${sizeClasses[size]} rounded-full object-cover`}
        onError={() => setHasError(true)}
      />
    );
  }

  const initials = getInitials(name);

  return (
    <div
      data-testid="avatar"
      className={`${sizeClasses[size]} avatar-gradient rounded-full flex items-center justify-center font-bold text-white`}
    >
      {initials}
    </div>
  );
}
