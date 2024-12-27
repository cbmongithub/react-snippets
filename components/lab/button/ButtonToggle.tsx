"use client";
import * as motion from "motion/react-client"
import { useState } from "react"

const ButtonToggle = () => {
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => setIsOn(prev => !prev)

    return (
        <button
            className={`flex items-center ${isOn ? "justify-start" : "justify-end"} w-24 h-12 border border-neutral-900 bg-gradient-to-t from-blue-500 from-0% to-neutral-100 rounded-full cursor-pointer`}
            onClick={toggleSwitch}
        >
            <motion.div
                className="size-12 inset-shadow-inner rounded-full bg-blue-500"
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
            />
        </button>
    )
}

export default ButtonToggle;



