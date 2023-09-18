import React from 'react'

const menus = [
    {label: "Table", key: "table"},
    {label: "Graph", key: "graph"},
];

export default function SwitchToggle({isActive, onSwitch}) {
    return (
        <div className="flex justify-between p-2 bg-white shadow rounded-full space-x-2 items-center">
            {menus.map(item => {
                return (
                    <span 
                        key={item.key}
                        onClick={() => onSwitch(item.key)}
                        className={`px-5 py-1 rounded-full cursor-pointer ${isActive === item.key ? "bg-blue-500 text-white" : "hover:bg-blue-50"}`}
                    >
                        {item.label}
                    </span>
                )
            })}
        </div>
    )
}
