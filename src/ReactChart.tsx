import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { Chart } from 'chart.js';

import type {
  IChartOptions,
  IChartData,
  IChartType,
  IPlugin,
  UpdateMode,
} from 'chart.js';

import { generateID } from 'utils/generate-id/generateID';
import { noop } from 'utils/noop';

interface ChartProps {
  data: IChartData;
  options: IChartOptions;
  type: IChartType;
  plugins?: IPlugin[];
  updateMode?: UpdateMode;
  height?: number;
  width?: number;
}

export const ReactChart = ({
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
  const CHART_ID = useMemo(() => generateID('Chart'), []);

  useEffect(() => {
    chartInstance.current.options = options;
    chartInstance.current.data = data;

    chartInstance.current.update(updateMode);
  }, [data, options]);

  const nodeRef = useCallback<(instance: HTMLCanvasElement | null) => void>(
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

  return <canvas ref={nodeRef} height={height} width={width} id={CHART_ID} />;
};

ReactChart.register = Chart.register || noop;
