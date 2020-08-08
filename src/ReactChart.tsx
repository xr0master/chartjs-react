import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { Chart as ChartJS } from 'chart.js';

import type {
  Chart,
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
  const chartInstance = useRef<Chart>({
    update: noop,
    destroy: noop,
  } as Chart);
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
  }, []);

  return <canvas ref={nodeRef} height={height} width={width} id={CHART_ID} />;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore the type is not updated for v3
ReactChart.register = (ChartJS.register as (...args: any[]) => void) || noop;
