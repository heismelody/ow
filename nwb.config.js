module.exports = () => {
	return {
		type: 'react-app',
		webpack: {
			rules: {
				svg: {
					loader: 'svg-inline-loader',
					options: {classPrefix: true}
				}
			}
		}
	}
}