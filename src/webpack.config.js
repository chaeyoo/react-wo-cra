const path = require('path');
//  HTML 파일을 생성하고 번들된 JavaScript 파일을 자동으로 주입하는 플러그인
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 이 객체 속성들이 Webpack의 동작을 정의
module.exports = {
    //  Webpack이 번들링을 시작할 진입점 파일을 지정
    entry: './src/index.js',
    // 번들링된 결과물의 이름(filename)과 저장 경로(path)를 지정
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // Webpack의 최적화 수준을 설정
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // JavaScript 파일을 변환하는 로더
                    loader: 'babel-loader',
                    options: {
                        // Babel이 사용할 프리셋을 지정
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        // HTML 파일을 생성하고 번들된 JS 파일을 주입
        new HtmlWebpackPlugin({
            // 사용할 HTML 템플릿 파일을 지정
            template: './src/index.html'
        })
    ],
    devServer: {
        static: {
            // 정적 파일을 제공할 디렉토리를 지정
            directory: path.join(__dirname, 'dist'),
        },
        // 응답을 gzip 압축할지 여부를 설정
        compress: true,
        port: 9000,
    }
};