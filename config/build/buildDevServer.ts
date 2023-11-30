import type { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types/buildTypes";

export function buildDevServer(options: BuildOptions): Configuration {
  const { port } = options;

  return {
    port: port ?? 3001,
    open: true,
  };
}
