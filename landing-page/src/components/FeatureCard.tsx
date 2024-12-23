import { twMerge } from "tailwind-merge"

export default function FeatureCard(props: { title: string, desc: string, children?: React.ReactNode, className?:string }) {
    const { title, desc, children, className } = props
    return (
        <div className={twMerge("bg-neutral-900 border border-white/10 p-6 rounded-3xl", className)}>
            <div className="aspect-video">{children}</div>
            <div>
                <h3 className="text-3xl font-medium mt-6">{title}</h3>
                <p className="text-white/30 mt-3">{desc}</p>
            </div>
        </div>
    )
}