import React, { 
  useEffect, 
  useRef, 
  useCallback, 
  useImperativeHandle,
  useMemo, 
  forwardRef
} from 'react';
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
  height?: number;
  width?: number;
}

export const ReactChart = forwardRef<Chart, ChartProps>(
  ({ data, options, type, plugins, updateMode, height, width }, ref) => {
    const chartInstance = useRef<Chart>({
      update: noop,
      destroy: noop
    } as Chart);
    const CHART_ID = useMemo(() => generateID("Chart"), []);

    useImperativeHandle(ref, () => chartInstance.current, []);

    useEffect(() => {
      chartInstance.current.data = data;
      chartInstance.current.options = options;

      chartInstance.current.update(updateMode);
    }, [data, options]);

    const nodeRef = useCallback<(instance: HTMLCanvasElement | null) => void>(
      (node) => {
        chartInstance.current.destroy();
        if (node) {
          const ci = new Chart(node, {
            type,
            data,
            options,
            plugins
          });
          chartInstance.current = ci;
        }
      },
      []
    );

    return <canvas ref={nodeRef} height={height} width={width} id={CHART_ID} />;
  }
);

export const register = Chart.register || noop;
