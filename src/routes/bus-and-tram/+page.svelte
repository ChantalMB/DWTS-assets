<script>
	import { onMount } from 'svelte';

    import '@recogito/annotorious-openseadragon/dist/annotorious.min.css';

    let annotation_list = [
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
                                    "source": "http://localhost:5173/images/bus-and-tram.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:2710.155517578125,3200.237060546875,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#d0dc0fc2-b20e-48c3-919e-c871fea1ea1b"
                            },
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
                                    "source": "http://localhost:5173/images/bus-and-tram.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:2838.889892578125,2632.9482421875,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#4688efb7-e4d2-4be8-b066-87367cbb35ec"
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
                                    "source": "http://localhost:5173/images/bus-and-tram.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3041.3232421875,4415.4150390625,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#6abd6cf0-7064-49a3-847a-3308be1b5c5f"
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
                                    "source": "http://localhost:5173/images/bus-and-tram.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:2834.44482421875,2912.96533203125,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#171fa4bd-a62a-49ed-b9cd-e2c50361f625"
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
                                    "source": "http://localhost:5173/images/bus-and-tram.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:2626.614501953125,3286.44140625,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#c1f8e551-a6af-4d2c-9ee1-3d02407e1ec6"
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
                                    "source": "http://localhost:5173/images/bus-and-tram.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:2033.5413818359375,2951.822509765625,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#01f868d0-dd44-48c3-88a0-efeb5561a01b"
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
                                    "source": "http://localhost:5173/images/bus-and-tram.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:2880.43310546875,4052.48876953125,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#15bcd1bd-1bb9-4ecb-ac64-4ff069ff39ec"
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
                                    "source": "http://localhost:5173/images/bus-and-tram.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3163.84765625,4215.70166015625,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#70a0c9bc-395a-4cd5-ae42-593f809c2b72"
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
                                    "source": "http://localhost:5173/images/bus-and-tram.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:2852.69189453125,2885.67822265625,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#8ae61bbf-7497-422a-bebd-6ed3a28bbb91"
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
                url: "/images/bus-and-tram.jpg",
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