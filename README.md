# chartjs-react

## Intro

Tiny, written in TS, based on React hooks wrapper for Chart.js

## Why?

The main problem that the most popular package `react-chartjs-2` was written
many years ago has a bunch of legacy code and issues
(in 90% of cases it does not work without the redraw = true flag).

The main idea was to completely rewrite code into modern React with hooks.

The second goal, add custom React tooltips for Chart.js (PoC is done)

## Version

The version format is X.Y.Z, where

- X - is chart.js major version
- Y - is chartjs-react major version
- Z - is chartjs-react minor version

## Support the project

If you like to use this module please click the star button - it is very motivating.

## Quick Start

Install chartjs-react using [npm](https://www.npmjs.com/):

```bash
$ npm install chartjs-react
```

## Documentation

TODO

## Examples

**add bar chart**

``` js
import { ReactChart } from 'chartjs-react';

const BarChart = () => {
  const chartOption = {}; // options of chart
  const chartData = {}; // data of chart

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

## TODO

- Added chart tooltip as children

## License

[MIT](./LICENSE)
