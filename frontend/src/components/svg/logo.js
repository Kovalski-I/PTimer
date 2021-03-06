import React from 'react';

// static svg of ptimer logo
export default function Logo(props) {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" 
        width={props.size + 'px'} height={props.size + 'px'} viewBox="0 0 386.7 526.64" 
        style={{enableBackground: 'new 0 0 350.7 490.64'}}
        className="logo" xmlSpace="preserve"
      >
        <g>
          <circle 
            cx="175.35" cy="315.29" r="173.35"
            style={{fill: 'none', stroke: '#FFFFFF', strokeWidth: 40, strokeMiterlimit: 30}}
          />
          <path style={{fill: '#009245'}}
            d="M181,141.9c-0.03,0-0.06,0-0.09,0.01c-0.01,0.01-0.02,0.01-0.04,0c-0.27,0.01-0.55,0.02-0.82,0.02h-0.11
            c0.28,0,0.57-0.01,0.86-0.03C180.85,141.91,180.92,141.91,181,141.9z"
          />
          <path style={{fill: '#009245'}}
            d="M237.16,110.81c-16.67,16.68-35.01,27.93-49.77,31.74c-2.65,1.06-5.73,1.53-9.15,1.42
            c0.03-0.01,0.06-0.01,0.09-0.01c-0.07,0.01-0.14,0.01-0.2,0c-0.29,0.02-0.58,0.03-0.86,0.03c-3.12,0.02-5.95-0.45-8.4-1.44
            c-14.76-3.8-33.1-15.06-49.78-31.74c-28.12-28.12-40.84-60.98-28.43-73.4c9.96-9.96,33.05-3.75,56.3,13.59
            c3.96-29.52,16.08-51,30.42-51c14.51,0,26.74,21.97,30.56,52.01c23.71-18.11,47.5-24.75,57.65-14.6
            C278.01,49.83,265.28,82.69,237.16,110.81z"
          />
          <path style={{fill: '#009245'}} 
            d="M181,141.9c-0.03,0-0.06,0-0.09,0.01c-0.01,0.01-0.02,0.01-0.04,0c-0.02,0.01-0.04,0.01-0.07-0.01
            C180.85,141.91,180.92,141.91,181,141.9z"    
          />
        </g>
      </svg>
    );
}