const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = 'web';
if(process.env.NODE_ENV === 'production') {
	mode = 'production';
	target = 'browserslist';
}

module.exports = {

	mode,
	target,
	entry:'./src/app.js',
	devtool:'source-map',
	plugins:[new HtmlWebpackPlugin({
		template:'./src/index.html',
	}),
		new MiniCssExtractPlugin({
			filename:'[name].[contenthash].css',
		}),
	],
	output:{
		path:path.resolve(__dirname, 'dist'),
		assetModuleFilename:'assets/[hash][ext][query]',
		clean:true,
	},

	devServer:{
		compress:true,
		port:9000,
		hot:true,
		open:true,
	},

	module:{
		rules:[
			{
				test:/\.js$/,
				include:path.resolve(__dirname, 'src'),
				exclude:/node_modules/,
				use:{
					loader:'babel-loader',
					options:{
						cacheDirectory:true,
						// при каждом запуске
					},
				},
			},
			{
				test:/\.(html)$/,
				include:path.resolve(__dirname, 'src'),
				use:['html-loader'],
			},
			{
				test:/\.css$/i,
				include:path.resolve(__dirname, 'src'),
				use:[MiniCssExtractPlugin.loader, "css-loader"],
			},

			{
				test:/\.(png|jpe?g|gif|svg|webp|ico)$/i,
				include:path.resolve(__dirname, 'src'),
				type:mode === 'production' ? 'asset' : 'asset/resource',
			},
			{
				test:/\.(woff2?|eot|ttf|otf)$/i,
				include:path.resolve(__dirname, 'src'),
				type:'asset/resource',
			},
			{
				test:/\.mp3/,
				type:'asset/resource'
			}
		],
	}

}