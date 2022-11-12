import React, { useEffect, useRef, useCallback, useState } from 'react';
import { Chart } from 'chart.js';

import type {
  ChartOptions,
  ChartData,
  ChartType,
  Plugin,
  UpdateMode,
} from 'chart.js';

import { generateID } from './utils/generate-id/generateID';
import { noop } from './utils/noop';

export interface ChartProps {
  data: ChartData;
  options: ChartOptions;
  type: ChartType;
  plugins?: Plugin[];
  updateMode?: UpdateMode;
  id?: string;
  height?: number;
  width?: number;
}

export const ReactChart = ({
  id,
  data,
  options,
  type,
  plugins,
  updateMode,
  height,
  width,
}: ChartProps) => {
  const chartInstance = useRef<Chart>({
    update: noop,
    destroy: noop,
  } as Chart);
  const [CHART_ID] = useState(id || generateID('Chart'));

  useEffect(() => {
    chartInstance.current.data = data;
    chartInstance.current.options = options;

    chartInstance.current.update(updateMode);
  }, [data, options]);

  const nodeRef = useCallback<(node: HTMLCanvasElement | null) => void>(
    (node) => {
      chartInstance.current.destroy();

      if (node) {
        chartInstance.current = new Chart(node, {
          type,
          data,
          options,
          plugins,
        });
      }
    },
    [],
  );

  return (
    <canvas
      ref={nodeRef}
      height={height}
      width={width}
      id={CHART_ID}
      role="chart"
    />
  );
};

ReactChart.register = Chart.register || noop;
