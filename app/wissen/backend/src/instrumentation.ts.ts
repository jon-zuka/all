// import { useConfig } from "./config";
// /*instrumentation.ts*/
// import { NodeSDK } from "@opentelemetry/sdk-node";
// import {
//   ConsoleSpanExporter,
//   SimpleSpanProcessor,
// } from "@opentelemetry/sdk-trace-node";
// import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
// import {
//   PeriodicExportingMetricReader,
//   ConsoleMetricExporter,
// } from "@opentelemetry/sdk-metrics";

// const { appName } = useConfig();

// const sdk = new NodeSDK({
//   serviceName: appName,
//   spanProcessors: [new SimpleSpanProcessor(new ConsoleSpanExporter())],
//   metricReader: new PeriodicExportingMetricReader({
//     exporter: new ConsoleMetricExporter(),
//   }),
//   instrumentations: [getNodeAutoInstrumentations()],
// });

// sdk.start();
