import React from 'react';
import {BarChart} from "@mui/x-charts";

const DummyChart = () => {
    return (
        <div className="flex justify-center items-center mt-12">
            <BarChart
                xAxis={[
                    {
                        id: 'barCategories',
                        data: ['IPhone 15', 'Apple MacBook Pro 13', 'Samsung Galaxy S23 Ultra'],
                        scaleType: 'band',
                    },
                ]}
                series={[
                    {
                        data: [869, 551, 1250],
                    },
                ]}
                width={500}
                height={300}
            />
        </div>
    );
};

export default DummyChart;