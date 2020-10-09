import React from 'react'

export const ImgPlaceholder = ({ width, height, borderRadius=10, style}) => (
    <svg width={width} height={height} style={style}>
        <rect width={width} height={height} rx={borderRadius} fill="#e9ecef"/>
        <line 
            x1={width - borderRadius/2} y1={borderRadius/2} 
            x2={borderRadius/2} y2={height - borderRadius/2} 
            stroke="#adb5bd" strokeWidth="2" strokeDasharray="5"
        />
        <line 
            x1={borderRadius/2} y1={borderRadius/2} 
            x2={width - borderRadius/2} y2={height - borderRadius/2} 
            stroke="#adb5bd" strokeWidth="2" strokeDasharray="5" 
        />
    </svg>
)
