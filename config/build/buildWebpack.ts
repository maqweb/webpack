import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";

export function buildWebpack(option: any): webpack.Configuration {
    const {mode, paths} = option
    const isDev = option.mode === 'development'
    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(option),
        module: {
            rules: buildLoaders(option),
        },
        resolve: buildResolvers(),
        devtool:  isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(option) : undefined
    }
}