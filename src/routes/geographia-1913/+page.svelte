<script>
	import { onMount } from 'svelte';

    import '@recogito/annotorious-openseadragon/dist/annotorious.min.css';

    let annotation_list = [
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "Greenep’s Tobacco and Sweets\n\n426 Cheetham Hill Road\n\nGreenep’s Tobacco and Sweets shop was a popular spot in Cheetham Hill. They sold Needler’s sweets as well as Cadbury’s chocolates and cocoa.\n\nThe shop was not bombed in December 1940 and was a place where families from the neighbour would meet and share community news.",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/geographia-1913.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3102.90283203125,863.0944213867188,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#d000d09b-eaf9-4c15-871e-c374e87a7c8a"
                            },
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "Manchester Cathedral\n\nOf Deansgate Victoria Street, Off Deansgate, Manchester, GB M3 1SX\n\nManchester Cathedral is the church of the Anglican Diocese of Manchester, seat of the Bishop of Manchester and the city's parish church. It is on Victoria Street in the medieval quarter of Manchester. Dr. Garfield Williams was the dean of the cathedral in 1940 and was at the Victoria Hotel when the cathedral was bombed on December 22, 1940.",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/geographia-1913.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3058.056640625,2206.608642578125,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#06cd7063-f46f-4e01-9cb0-a8b9b4fa7d16"
                            },
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "Manchester High School for Girls\n\nGrangethorpe Road\n\nThe Manchester High School for Girls was established in 1874  The school was founded in 1874 by prominent residents. It was located on Grangthorpe Road in 1940 and the buildings were destroyed by the bombings on December 22, 1940.",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/geographia-1913.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3719.7275390625,4303.06396484375,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#ac61e204-3add-46c6-a0e2-1c34d0404040"
                            },
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "Cheetham Hill Assembly Rooms\n\n111 Cheetham Hill Road\n\nThe Assembly Rooms opened in 1857. The rooms (both large and small) drew people of the higher social classes from across the city and surrounding area. This was the spot to be for weddings, dances, and gathering gossip.",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/geographia-1913.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3205.610595703125,1702.9720458984375,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#6b488bd4-bb80-4415-a65b-b848db65e95d"
                            },
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "Victoria Hotel\n\nThe triangle of Deansgate, St. Mary's Gate, and Victoria Street\n\nThe Victoria Hotel was located on Victoria Street in downtown Manchester. It was close to Manchester Cathedral and the central train station and attracted guests from across the country and Europe. A truly grand hotel, it was know for its first-class service that included afternoon tea, and freshly ironed sheets. It was badly bombed on December 22, 1940.",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/geographia-1913.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3024.23583984375,2266.151123046875,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#d9e49296-69e8-4bf3-a2c4-1d20835a0f3d"
                            },
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "J. Mandelberg and Co.\n\nCobden Street\n\nMandelberg and Co. was a well-known raincoat manufacturer. The company employed hundreds of workers who came from many different backgrounds. They specialized in rainwear for women, men, and children and were known for their colourful Macintosh (“Mac”) raincoats. The company supported the war effort by making flying suits and seaplane waders, dinghies and life-saving waistcoats to Government specification. The factory was not bombed in December 1940.",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/geographia-1913.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:1674.9649658203125,1659.0443115234375,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#6ed7e08e-d261-4d92-a551-9e8767cca541"
                            },
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "University of Manchester\n\nOxford Street\n\nPlaceholder text",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/geographia-1913.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3361.3232421875,3232.810302734375,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#2deca945-21e3-4f8e-91fd-5637dcebc965"
                            },
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "Victoria Park Mosque\n\n20 Upper Park Rd, Manchester M14 5RU, United Kingdom\n\nPlaceholder text",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/geographia-1913.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3879.962158203125,3770.42626953125,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#ac4611a9-b538-4115-a438-911b4a123041"
                            }
                        ];

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
                url: "/images/geographia-1913.jpg",
            },
        });

        anno = Annotorious(viewer);

        new SelectorPack(anno, { 
            tools: ['point']
        });

        initAnnoCanvas()
    });

    function initAnnoCanvas() {
        anno.setDrawingTool('point');

        for (var i = 0; i < annotation_list.length; i++) {
            anno.addAnnotation(annotation_list[i]);
        }

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