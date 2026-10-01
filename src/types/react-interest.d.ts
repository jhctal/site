import "react";

declare module "react" {
  interface ButtonHTMLAttributes<T> {
    interestfor?: string;
  }
  interface AnchorHTMLAttributes<T> {
    interestfor?: string;
  }
  interface AreaHTMLAttributes<T> {
    interestfor?: string;
  }
}
