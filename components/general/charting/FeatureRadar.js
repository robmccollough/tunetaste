import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import { convertFeaturesToRadarSchema } from '../../../lib/parsing';
import styles from './FeatureRadar.module.scss';

const FeatureRadar = ({ data }) => {
    let nivo_data = convertFeaturesToRadarSchema(data);
    console.log(nivo_data);
    let maximum = Math.max.apply(
        Math,
        nivo_data.map((o) => o.value)
    );
    return (
        <div className={styles.container}>
            <ResponsiveRadar
                data={nivo_data}
                keys={['value']}
                indexBy="feature"
                maxValue={maximum + 10}
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                curve="linearClosed"
                borderWidth={4}
                borderColor={{ from: 'color', modifiers: [['darker', 0.7]] }}
                gridLevels={5}
                gridShape="linear"
                gridLabelOffset={20}
                enableDots={true}
                dotSize={0}
                dotColor={{ theme: 'background' }}
                dotBorderWidth={0}
                dotBorderColor={{ from: 'color' }}
                enableDotLabel={true}
                dotLabel="value"
                dotLabelYOffset={-12}
                colors={'#5cb8ff'}
                fillOpacity={0.75}
                blendMode="multiply"
                animate={true}
                motionConfig="wobbly"
                isInteractive={true}
            />
        </div>
    );
};

export default FeatureRadar;
