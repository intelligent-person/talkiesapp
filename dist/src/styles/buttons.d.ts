/// <reference types="react" />
interface NavProperties {
    withIcon?: boolean;
    tab?: boolean;
}
export declare const Nav: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & NavProperties, import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, {}>;
interface ButtonProperties {
    primary?: boolean;
    secondary?: boolean;
    watch?: boolean;
    withIcon?: boolean;
}
export declare const Button: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & ButtonProperties, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export {};
