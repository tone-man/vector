"use client"

import React, { useState } from 'react';
import './vector-display.css';

export default function VectorDisplay() {
    const [isMouseInsideRing, setIsMouseInsideRing] = useState(false);

    const growDot = () => {
        setIsMouseInsideRing(true);
    };

    const shrinkDot = () => {
        setIsMouseInsideRing(false);
    };

    const dotSize = isMouseInsideRing ? "100%" : "10%";

    return (
        <div className="vector">
            <span className="vector__count">17</span>
            <div 
                className="vector__ring" 
                onMouseEnter={growDot} 
                onMouseLeave={shrinkDot}
            >
                <div className="vector__dot" style={{ width: dotSize, height: dotSize }}></div>
            </div>
            <span className="vector__habit">become a better coder</span>
        </div>
    );
}
