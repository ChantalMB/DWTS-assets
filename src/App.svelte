<script>
	import { onMount } from 'svelte';
	import OpenSeadragon from 'openseadragon';
	import Icon from '@iconify/svelte';


	onMount( async () => {

		let viewer = OpenSeadragon({
			id: 'openseadragon',
			prefixUrl: "//openseadragon.github.io/openseadragon/images/",
			maxZoomLevel: 10,
			showNavigator:  true,
			tileSources: {
				type: 'image',
				url: "/images/manchester1926.jpg",
			},
		});
	});
</script>

<div id='openseadragon'></div>

<style>
	#openseadragon {
		height: 100%;
		width: 100%;
	}
</style>