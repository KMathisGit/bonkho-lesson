import React, {useState, useEffect} from 'react'

export default function Resizer() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const resizeHandler = () => { debugger; setWindowSize(window.innerWidth)};

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
      }, [])
    return (
        <div>
            {windowSize}
        </div>
    )
}
