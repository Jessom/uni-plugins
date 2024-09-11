/**
 * 图片压缩
 * @description 
 * @property {Array} paths 需要压缩的图片路径
 * @property {Object} options
 * 	@value quality 压缩质量，默认0.8
 * 	@value width 压缩后图片的宽度，如果未指定，将使用原始图像的自然宽度
 * 	@value height 压缩后图片的高度，如果未指定，将使用原始图像的自然高度
 */
// #ifdef H5
import Compressor from './compressor.min.js'

// 路径转file对象
function convertUrlToFile(imageUrl, fileName) {
	return new Promise(async(resolve, reject) => {
		try {
			const response = await fetch(imageUrl, { method: 'GET', mode: 'cors' });
			if (!response.ok) {
				throw new Error('图片加载失败！');
			}
			const blob = await response.blob();
			const file = new File([blob], fileName, { type: blob.type });
			resolve(file)
		} catch (error) {
			reject('图片url转换Blob失败!')
		}
	})
}
// #endif

const compress = (path, options) => {
	return new Promise(async(resolve, reject) => {
		options = Object.assign({}, {
			quality: 0.8
		}, options)
		
		// #ifdef H5
		const file = await convertUrlToFile(path, 'aaa')
		new Compressor(file, {
			quality: options.quality,
			width: options.width ? options.width : undefined,
			height: options.height ? options.height : undefined,
			success(res) {
				resolve(res)
			},
			error(err) {
				reject(err)
			},
		})
		// #endif
		
		// #ifndef H5
		uni.compressImage({
			src: path,
			compressedWidth: options.width ? options.width : undefined,
			compressedHeight: options.height ? options.height : undefined,
			quality: options.quality * 100,
			success(res) {
				resolve(res.tempFilePath)
			},
			fail: reject
		})
		// #endif
	})
}

export default (paths, options) => {
	return new Promise((resolve, reject) => {
		(async() => {
			let result = []
			/* for(let i=0; i<paths.tempFilePaths.length; i++) {
				let path
				// #ifndef H5
				path = paths.tempFilePaths[i]
				// #endif
				// #ifdef H5
				path = paths.tempFiles[i]
				// #endif
				
				result.push(compress(path, options))
			} */
			for(let i=0; i<paths.length; i++) {
				result.push(compress(paths[i], options))
			}
			
			try{
				const res = await Promise.all(result)
				options.success && options.success(res)
				resolve(res)
			} catch(e) {
				reject(e)
				options.fail && options.fail(e)
			}
		})()
	})
}
