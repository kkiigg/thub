const path=require('path')
const webpack=require('webpack')
const htmlPlugin=require('html-webpack-plugin')
const devServer=require('webpack-dev-server')
const isDev=process.env.NODE_ENV==='development'
const { VueLoaderPlugin } = require('vue-loader')

const config={
	target:"web",
	mode:'development',
	entry:path.join(__dirname,'index.js'),
	output:{
		filename:'bundle.js',
		//path:path.join(__dirname,'../dist')
		path:path.resolve(__dirname,'./dist')
	},
	module:{
		rules:[
			{
				test:/\.less$/,
				use:['style-loader','css-loader','less-loader']
			},
			{
				test:/\.js$/,
				loader:'babel-loader'
			},
			{
				test:/\.vue$/,
				use:['vue-loader']
			},
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test:/\.(png|jpeg|gif|jpg)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:1024,
							name:'[name]-[hash].[ext]'
						}
					}
				]
			}
		]
	},
	plugins:[
		new VueLoaderPlugin(),
		new htmlPlugin(),
		new webpack.DefinePlugin({
			'process.env':{
				NODE_ENV:isDev?'"development"':'"production"'
			}
		}),
	]
	
}
if(isDev){
	//config.devtool="#cheap-module-eval-source-map"
	config.devServer={
		port:'8777',
		//host:'0.0.0.0',
		overlay:{
			errors:true
		},
		hot:true
	}
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	)
}	
module.exports=config;