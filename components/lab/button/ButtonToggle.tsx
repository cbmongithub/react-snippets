"use client";
import * as motion from "motion/react-client"
import { useState } from "react"

const ButtonToggle = () => {
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => setIsOn(prev => !prev)

    return (
        <button
            className={`flex ${isOn ? "justify-start" : "justify-end"} items-center w-[50px] h-[25px] border border-neutral-900 bg-gradient-to-t from-blue-500 from-0% to-neutral-100 rounded-full cursor-pointer`}
            onClick={toggleSwitch}
        >
            <motion.div
                className="size-6 inset-shadow-inner rounded-full bg-blue-500"
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



