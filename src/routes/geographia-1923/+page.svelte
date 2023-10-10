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
                                    "source": "http://localhost:5173/images/geographia-1923.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3228.09619140625,941.3707275390625,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#ba810ecf-2fa2-4603-b5b8-3f1774d56838"
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
                                    "source": "http://localhost:5173/images/geographia-1923.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3187.76904296875,2372.374267578125,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#c04fbb32-6d52-42d0-9c98-099f83c80ffd"
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
                                    "source": "http://localhost:5173/images/geographia-1923.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3906.65234375,4620.1357421875,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#6c385008-a9b1-4dde-82ca-dad53741dabb"
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
                                    "source": "http://localhost:5173/images/geographia-1923.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3344.417724609375,1835.0684814453125,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#64919801-f89a-4859-b412-ad001ca6f803"
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
                                    "source": "http://localhost:5173/images/geographia-1923.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3152.48828125,2436.51416015625,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#9949fc80-1591-4663-b942-6a2937627800"
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
                                    "source": "http://localhost:5173/images/geographia-1923.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:1722.559814453125,1808.9549560546875,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#2dba1e7b-11c0-4cf4-8105-d3c3dd4f846e"
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
                                    "source": "http://localhost:5173/images/geographia-1923.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3520.83642578125,3462.81787109375,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#ae23275d-5aad-4635-9707-99b48ef3504f"
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
                                    "source": "http://localhost:5173/images/geographia-1923.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:4072.396484375,4060.35205078125,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#16d020e3-d9e3-48b2-b972-e01cfb1155ba"
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
                                    "source": "http://localhost:5173/images/geographia-1923.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3400.951904296875,1741.7364501953125,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#cbd68278-aa2e-4321-a38d-ca87b747b483"
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
                url: "/images/geographia-1923.jpg",
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