<template>
	<canvas
		canvas-id="watermark"
		class="watermark"
		:style="{
			width: width + 'px',
			height: height + 'px'
		}"
	/>
</template>

<script>
	export default {
		name: "watasi-watermark",
		props: {
			images: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				width: 0,
				height: 0,
			}
		},
		methods: {
			async start(images) {
				try{
					const { width, height, path } = await uni.getImageInfo({ src: images[0] })
					this.width = width
					this.height = height
					/* const maxWidth = 750
					if(width > maxWidth) {
						height = parseInt((maxWidth / width) * height);
						width = parseInt(maxWidth);
					} */
					const ctx = uni.createCanvasContext('watermark');
					ctx.drawImage(path, 0, 0, width, height)
					console.log(res);
				}catch(e){
					console.log(e);
				}
			},
			
			drawRoundedRect(ctx, color, x, y, width, height, radius) {
				ctx.beginPath();
				ctx.moveTo(x + radius, y);
				ctx.lineTo(x + width - radius, y);
				ctx.arcTo(x + width, y, x + width, y + radius, radius);
				ctx.lineTo(x + width, y + height - radius);
				ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
				ctx.lineTo(x + radius, y + height);
				ctx.arcTo(x, y + height, x, y + height - radius, radius);
				ctx.lineTo(x, y + radius);
				ctx.arcTo(x, y, x + radius, y, radius);
				ctx.setFillStyle(color)
				ctx.fill();
			},
			
			async drawWatermark(ctx, watermark) {
				for(let i=0; i<watermark.length; i++) {
					const item = watermark[i]
					switch (item.type){
						case 'text':
							ctx.font = item.isBold ? "bold "+ item.size +"px Arial" : "normal "+item.size+"px Arial";
							ctx.fillStyle = item.color;
							ctx.fillText(item.text, item.x, item.y + item.size);
							break;
						case 'fillRect':
							ctx.fillStyle = item.color
							ctx.fillRect(item.x, item.y, item.w, item.h);
							break;
						case 'roundedRect':
							this.drawRoundedRect(ctx, item.color, item.x, item.y, item.w, item.h, 10)
							break;
						case 'image':
							const { path } = await uni.getImageInfo({ src: item.url })
							ctx.drawImage(path, item.x, item.y, item.w, item.h);
							break;
					}
				}
			},
		}
	}
</script>

<style lang="scss">
.watasi-watermark {
	.watermark {
		position: absolute;
		left: -10000px;
		top: -10000px;
	}
}
</style>
