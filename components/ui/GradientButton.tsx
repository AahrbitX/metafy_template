import "@/app/_styles/gradient-button.css";
import { ButtonHTMLAttributes } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  glow?: boolean;
  active?: boolean;
}

export default function GradientButton({
  children,
  className = "",
  glow = true,
  active = true,
  ...props
}: GradientButtonProps) {
  return (
    <button
      className={`button ${glow ? "glow" : "no-glow"} ${
        active ? "active" : "inactive"
      } ${className}`}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}
