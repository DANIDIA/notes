import React, { useEffect, useRef } from 'react';

export const LoadingIndicator = ({
    size,
    color = '#000000',
    style,
    className,
}) => {
    const canvas = useRef();
    useEffect(() => {
        /** @type {CanvasRenderingContext2D} **/
        const ctx = canvas.current.getContext('2d');

        const segmentWidth = size * 0.25;
        const x = size / 2;
        const y = size / 2;
        const maxRadius = size / 2 - segmentWidth / 2;
        const minRadius = maxRadius * 0.6;

        const segmentOffset = Math.PI / 180;
        const segmentsAmount = 8;
        const segmentLength = Math.PI / (segmentsAmount / 2);

        const FPSRate = 60;
        const growingToMaxRadiusInSeconds = 0.05;
        const decreaseToMinRadiusInSeconds = 0.3;

        const radiusGrowingCoefficient =
            (maxRadius - minRadius) / (FPSRate * growingToMaxRadiusInSeconds);
        const radiusDecreaseCoefficient =
            (maxRadius - minRadius) / (FPSRate * decreaseToMinRadiusInSeconds);

        const segmentsRadius = [];
        let growingSegmentIndex = 0;
        for (let i = 0; i < segmentsAmount; i++) segmentsRadius.push(minRadius);

        ctx.lineWidth = segmentWidth;
        ctx.strokeStyle = color;

        const animFrame = () => {
            ctx.clearRect(0, 0, 500, 500);
            let segmentsStartAngle = 0;

            segmentsRadius.forEach((r, i) => {
                if (i === growingSegmentIndex)
                    segmentsRadius[i] = Math.min(
                        r + radiusGrowingCoefficient * (r / maxRadius),
                        maxRadius,
                    );
                else
                    segmentsRadius[i] = Math.max(
                        r - radiusDecreaseCoefficient * (maxRadius / r),
                        minRadius,
                    );

                ctx.beginPath();
                const endAngle =
                    segmentsStartAngle + segmentLength - segmentOffset;
                ctx.arc(x, y, r, segmentsStartAngle, endAngle);
                ctx.stroke();

                segmentsStartAngle += segmentLength;
            });

            const growingSegmentRadius = segmentsRadius[growingSegmentIndex];

            if (growingSegmentRadius >= maxRadius)
                growingSegmentIndex =
                    (growingSegmentIndex + 1) % segmentsAmount;

            requestAnimationFrame(animFrame);
        };

        requestAnimationFrame(animFrame);
    }, []);

    return (
        <div style={{ width: size, ...style }} className={className}>
            <canvas
                ref={canvas}
                width={size}
                height={size}
                style={{
                    width: size,
                    height: size,
                }}
            ></canvas>
        </div>
    );
};
