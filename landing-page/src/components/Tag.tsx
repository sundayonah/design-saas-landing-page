import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...rest } = props;
    return (
        <div className={twMerge("inline-flex border bodrder-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center", className)}{...rest}>
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    )
}