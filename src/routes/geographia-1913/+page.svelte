<script>
	import { onMount } from 'svelte';

    import '@recogito/annotorious-openseadragon/dist/annotorious.min.css';

    let annotation_list = [
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "Greenep’s Tobacco and Sweets\n\nCheetham Hill Road\n\nGreenep’s Tobacco and Sweets shop was a popular spot in Cheetham Hill. They sold Needler’s sweets as well as Cadbury’s chocolates and cocoa.\n\nThe shop was not bombed in December 1940 and was a place where families from the neighbour would meet and share community news.",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/geographia-1913.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3318.751220703125,1241.8555908203125,0,0"
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
                                        "value": "Cheetham Hill Assembly Rooms (Community bomb shelter)\n\n111 Cheetham Hill Road\n\nThe Assembly Rooms opened in 1857. The rooms (both large and small) drew people of the higher social classes from across the city and surrounding area. This was the spot to be for weddings, dances, and gathering gossip.",
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
                                        "value": "University of Manchester\n\nOxford Street\n\nLike many English universities, the University of Manchester began as a single college, Owens College, and was founded by business owner John Owens. By World War II, the college had become a centre of research, where students could study the arts, sciences, engineering, and medicine. It was not bombed in December 1940.",
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
                                        "value": "Victoria Park Mosque\n\n20 Upper Park Rd, Manchester M14 5RU, United Kingdom\n\nMuslim families and congregations have lived in England for centuries. In the early 1900s, members of the Muslim communities in Manchester gathered for worship in two houses in Victoria Park in south Manchester and continued to do so during World War II. The mosque was not bombed in December 1940.",
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
                            },
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "Sephardi Synagogue\n\n190 Cheetham Hill Rd M8 8LW Manchester\n\nSephardi Jews lived originally in Spain and Portugal. They migrated to England in the eighteenth and nineteenth centuries and opened their first synagogue on Cheetham Hill Road in 1874. It was not bombed in December 1940.",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/geographia-1913.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3261.826171875,1623.462158203125,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#540b2479-4399-4b9c-86a4-9fefe63f7bee"
                            },
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "The Hendersons household, on Broughton St.",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/geographia-1913.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3083.39794921875,1585.549072265625,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#bf3d0f38-5726-4280-8186-13ca6e3928a3"
                            },
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "The Empeys household, on Waterloo Rd.",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/geographia-1913.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:2898.0146484375,1559.135009765625,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#976558da-912d-4ad1-b52a-afb2d38de55f"
                            },
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "The Engels household, on Cheetham Hill Rd.",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/geographia-1913.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3209.8349609375,1773.2183837890625,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#81c12d26-c673-450e-b46a-6d02f9ed01f1"
                            },
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "The Baileys household, on Elizabeth St.",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/geographia-1913.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3086.4638671875,1331.2169189453125,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#06ec6781-6373-4b11-ab84-ca3490252a56"
                            },
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "The Sklars household, on Walnut St.",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/geographia-1913.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:2941.6982421875,1093.578125,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#07cdc302-038c-4b1d-9262-25a815781195"
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