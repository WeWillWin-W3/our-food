import React from 'react'

export const ImgPlaceholder = ({ width, height, borderRadius=10}) => (
    <svg width={width} height={height}>
        <rect width={width} height={height} rx={borderRadius} fill="#e9ecef"/>
        <line 
            x1={width - borderRadius/2} y1={borderRadius/2} 
            x2={borderRadius/2} y2={height - borderRadius/2} 
            stroke="#adb5bd" stroke-width="2" stroke-dasharray="5"
        />
        <line 
            x1={borderRadius/2} y1={borderRadius/2} 
            x2={width - borderRadius/2} y2={height - borderRadius/2} 
            stroke="#adb5bd" stroke-width="2" stroke-dasharray="5" 
        />
    </svg>
)