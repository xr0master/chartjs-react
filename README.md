# Chart.js React

Tiny, written in TS, based on React hooks wrapper for Chart.js v4

[![codecov](https://codecov.io/gh/xr0master/chartjs-react/branch/master/graph/badge.svg)](https://codecov.io/gh/xr0master/chartjs-react)
[![npm version](https://img.shields.io/npm/v/chartjs-react.svg)](https://www.npmjs.com/package/chartjs-react)

## Why?

The main problem that the most popular package `react-chartjs-2` was written
many years ago has a bunch of legacy code and issues
(in 90% of cases it does not work without the redraw = true flag).

The main idea was to completely rewrite code into modern React with hooks.

The second goal, add custom React tooltips for Chart.js

## Version

The version format is X.Y.Z, where

- X - is chart.js major version
- Y - is chartjs-react major version
- Z - is chartjs-react minor version

### Current latest versions
- 3.8.0 supports Chart.js version 3.9.1 and above 
- 4.0.0 supports Chart.js version 4.0.1 and above 

## Support the project

If you like to use this module please click the star button - it is very motivating.

## Quick Start

Install chartjs-react using [npm](https://www.npmjs.com/):

```bash
$ npm install chartjs-react
```

## Documentation

TODO tooltips

## Examples

**Bar chart on Chart.js v3 (date-fns)**

```tsx
import {
  BarController,
  LinearScale,
  BarElement,
  TimeScale,
  Tooltip,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale';
import { ReactChart } from 'chartjs-react';

// Register modules,
// this example for time scale and linear scale
ReactChart.register(BarController, LinearScale, BarElement, TimeScale, Tooltip);

// options of chart similar to v2 with a few changes
// https://www.chartjs.org/docs/next/getting-started/v3-migration/
const chartOption = {
  scales: {
    x: {
      type: 'time',
      adapters: {
        date: enUS,
      },
    },
    y: {
      type: 'linear',
    },
  },
};

// data of chart similar to v2, check the migration guide
const chartData = {};

const BarChart = () => {
  return (
    <ReactChart
      type="bar"
      data={chartData}
      options={chartOption}
      height={400}
    />
  );
};
```

**Get the chart instance**

```tsx
import { Chart } from 'chart.js';

onEvent = () => {
  const myChartInstance = Chart.getChart('unique-chart-id');
  // Do your stuff with the chart instance
  // Note: the chart should be mounted
};

const BarChart = () => {
  return (
    <ReactChart
      id="unique-chart-id"
      type="bar"
      data={chartData}
      options={chartOption}
      height={400}
    />
  );
};
```

## TODO

- Added chart tooltip as children (after release v3)

## License

[MIT](./LICENSE)
