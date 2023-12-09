import React, { useEffect, useRef } from 'react';

export const LoadingIndicator = () => {
    const canvas = useRef();
    useEffect(() => {
        if (!canvas.current) return;
        /** @type {CanvasRenderingContext2D} **/
        const ctx = canvas.current.getContext('2d');

        const minValue = 30;
        const maxValue = 150;
        const width = 40;
        const x = 20;
        const y = 30;
        const rectOffeset = 20;
        const rectAmount = 6;

        const rectSizes = [];
        let curruentRectIndex = 0;

        for (let i = 0; i < rectAmount; i++) rectSizes.push(minValue);
        const animDeltaPix = 17;
        const animDeltaPixMinus = 5;
        const animFrame = () => {
            ctx.clearRect(0, 0, 500, 500);
            let rectX = x;

            rectSizes.forEach((size, index) => {
                if (index === curruentRectIndex)
                    rectSizes[index] = Math.min(
                        size + animDeltaPix * (size / maxValue),
                        maxValue,
                    );
                else
                    rectSizes[index] = Math.max(
                        size - animDeltaPixMinus * (size / maxValue),
                        minValue,
                    );

                let rectY = y + maxValue - size;
                ctx.fillRect(rectX, rectY, width, size);
                rectX += width + rectOffeset;
            });

            const rectheight = rectSizes[curruentRectIndex];

            if (rectheight >= maxValue)
                curruentRectIndex = (curruentRectIndex + 1) % rectAmount;

            requestAnimationFrame(animFrame);
        };

        requestAnimationFrame(animFrame);
    }, []);

    return (
        <div>
            <canvas
                ref={canvas}
                width={500}
                height={500}
                style={{
                    width: 500,
                    height: 500,
                    outline: '1px dotted black',
                    margin: 10,
                }}
            ></canvas>
        </div>
    );
};
