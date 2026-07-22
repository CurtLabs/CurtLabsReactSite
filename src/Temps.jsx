export function RoundDiv({ className = '', children }) {
    return (
        <div className={`rounded-[20px] shadow px-5 py-5 md:px-10 md:py-10 mt-8 mb-8 md:mt-16 md:mb-16 ${className}`}>
            {children}
        </div>
    )
}

export function HeaderText({ className = '', children }) {
    return (
        <h2 className={`text-left m-5 text-[10vw] md:text-[5vw] text-white ${className}`}>
            {children}
        </h2>
    )
}

export function DescText({ className = '', children }) {
    return (
        <p className={`text-gray-200 flex-wrap text-[4vw] md:text-[2vw] text-left m-5 ${className}`}>
            {children}
        </p>
    )
}

export function SvgOutlineDefs() {
    return (
        <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden>
            <defs>
                <filter id="logo-outline" x="-50%" y="-50%" width="200%" height="200%">
                    <feMorphology in="SourceAlpha" operator="dilate" radius="5" result="dilated" />
                    <feFlood floodColor="#fff" result="flood" />
                    <feComposite in="flood" in2="dilated" operator="in" result="outline" />
                    <feMerge>
                        <feMergeNode in="outline" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
        </svg>
    )
}
