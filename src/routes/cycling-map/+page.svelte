<script>
	import { onMount } from 'svelte';

    import '@recogito/annotorious-openseadragon/dist/annotorious.min.css';

    let annotation_list = [];

    let OpenSeadragon;
    let Annotorious;
    let SelectorPack;

    let viewer;
    let anno;

    onMount(async () => {
        OpenSeadragon = await import('openseadragon');
        Annotorious = (await import('@recogito/annotorious-openseadragon')).default;
        SelectorPack = (await import('@recogito/annotorious-selector-pack')).default;

        viewer = new OpenSeadragon.Viewer({
            id: 'openseadragon',
            prefixUrl: "//openseadragon.github.io/openseadragon/images/",
            showNavigator:  true,
            maxZoomPixelRatio: Infinity,
            zoomPerClick: 1,
            tileSources: {
                type: 'image',
                url: "/images/cycling-map.jpg",
            },
        });

        anno = Annotorious(viewer);

        new SelectorPack(anno, { 
            tools: ['point']
        });

        initAnnoCanvas();
    });

    function initAnnoCanvas() {
        anno.setDrawingTool('point');

        // for (var i = 0; i < annotation_list.length; i++) {
        //     anno.addAnnotation(annotation_list[i]);
        // }

        anno.on('createAnnotation', function(annotation, overrideId) {
            annotation_list.push(annotation)
            console.log(annotation_list)
        });
    }

</script>

<div id='openseadragon'></div>

<style>
	#openseadragon {
		height: 100vh;
		width: 100vw;
	}
</style>