import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import ChartJS, {
  ChartOptions,
  ChartData,
  ChartType,
  ChartUpdateProps,
  PluginServiceRegistrationOptions,
} from 'chart.js';

import { generateID } from 'utils/generate-id/generateID';
import { noop } from 'utils/noop';

interface ChartProps {
  data: ChartData;
  options: ChartOptions;
  type: ChartType;
  plugins?: Array<PluginServiceRegistrationOptions>;
  updateConfig?: ChartUpdateProps;
  height?: number;
  width?: number;
}

export const ReactChart = ({
  data,
  options,
  type,
  plugins,
  updateConfig,
  height,
  width,
}: ChartProps) => {
  const chartInstance = useRef<ChartJS>({
    update: noop,
    destroy: noop,
  } as ChartJS);
  const CHART_ID = useMemo(() => generateID('Chart'), []);

  useEffect(() => {
    chartInstance.current.options = options;
    chartInstance.current.data = data;

    chartInstance.current.update({
      duration: 300,
      lazy: false,
      ...updateConfig,
    });
  }, [data, options]);

  const nodeRef = useCallback((node) => {
    chartInstance.current.destroy();

    if (node) {
      chartInstance.current = new ChartJS(node, {
        type,
        data,
        options,
        plugins,
      });
    }
  }, []); // eslint-disable-line

  return <canvas ref={nodeRef} height={height} width={width} id={CHART_ID} />;
};
