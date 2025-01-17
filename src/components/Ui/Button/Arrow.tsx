import React from 'react';
import { styled } from '../../../styles/stitches.config';

export const ArrowStyle = styled('i', {
    position: 'absolute',
    right: '$s1',
    '.icon-animation-secondary': {
        transition: 'all ease 350ms'
    }
});

export const Arrow = () => {
    return (
        <>
            <ArrowStyle className="icon-animation-secondary">
                <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.51256 5.28044C6.46375 5.16006 6.39052 5.04726 6.29289 4.94963L2.05025 0.706995C1.65972 0.316471 1.02656 0.316471 0.636034 0.706995C0.24551 1.09752 0.245509 1.73068 0.636034 2.12121L4.17157 5.65674L0.636035 9.19227C0.245511 9.58279 0.245511 10.216 0.636035 10.6065C1.02656 10.997 1.65973 10.997 2.05025 10.6065L6.29289 6.36385L6.29289 6.36384C6.58579 6.07095 6.65901 5.64157 6.51256 5.28044Z"
                    />
                </svg>
            </ArrowStyle>
            <ArrowStyle className="icon-animation-primary">
                <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.51256 5.28044C6.46375 5.16006 6.39052 5.04726 6.29289 4.94963L2.05025 0.706995C1.65972 0.316471 1.02656 0.316471 0.636034 0.706995C0.24551 1.09752 0.245509 1.73068 0.636034 2.12121L4.17157 5.65674L0.636035 9.19227C0.245511 9.58279 0.245511 10.216 0.636035 10.6065C1.02656 10.997 1.65973 10.997 2.05025 10.6065L6.29289 6.36385L6.29289 6.36384C6.58579 6.07095 6.65901 5.64157 6.51256 5.28044Z"
                    />
                </svg>
            </ArrowStyle>
        </>
    );
};
