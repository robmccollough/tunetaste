import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { convertGenresToPieChartSchema } from '../../../lib/parsing';
import styles from './GenrePieChart.module.scss';

const GenrePieChart = ({ data }) => {
    const nivo_data = convertGenresToPieChartSchema(data, 5);

    console.log(nivo_data);

    return (
        <div className={styles.container}>
            <ResponsivePie
                data={nivo_data}
                margin={{ top: 40, right: 80, bottom: 40, left: 20 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: 'green_blue' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.7]] }}
                radialLabel={(d) => d.label}
                enableRadialLabels={false}
                radialLabelsSkipAngle={10}
                radialLabelsTextColor="#333333"
                radialLabelsLinkColor={{ from: 'color' }}
                sliceLabelsSkipAngle={0}
                sliceLabelsTextColor="#333333"
                sortByValue={true}
                legends={[
                    {
                        anchor: 'right',
                        direction: 'column',
                        justify: false,
                        translateX: 60,
                        translateY: 0,
                        itemsSpacing: 10,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    );
};

export default GenrePieChart;
