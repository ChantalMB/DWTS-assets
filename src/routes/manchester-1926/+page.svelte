<script>
	import { onMount } from 'svelte';

    import '@recogito/annotorious-openseadragon/dist/annotorious.min.css';

    let annotation_list = [
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "Greenep’s Tobacco and Sweets\n\n426 Cheetham Hill Road\n\nGreenep’s Tobacco and Sweets shop was a popular spot in Cheetham Hill. They sold Needler’s sweets as well as Cadbury’s chocolates and cocoa.\n\nThe shop was not bombed in December 1940 and was a place where families from the neighbour would meet and share community news.\n",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/manchester-1926.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3235.484130859375,1307.2132568359375,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#a5878903-7514-438f-ac19-a1f742fa2c3d"
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
                                    "source": "http://localhost:5173/images/manchester-1926.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3243.24267578125,2414.923828125,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#1fd85a06-e59f-49ff-8443-925119e809ce"
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
                                    "source": "http://localhost:5173/images/manchester-1926.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3881.3466796875,4191.96484375,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#08e8cb00-5bb7-4c85-8767-c5163f90b2c5"
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
                                    "source": "http://localhost:5173/images/manchester-1926.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3353.170654296875,2023.339111328125,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#44a5f8ce-435f-4514-a3eb-108f3882a7e7"
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
                                    "source": "http://localhost:5173/images/manchester-1926.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3217.06103515625,2478.00146484375,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#10cc3153-3641-4c73-a94c-07169c33d8ed"
                            },
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "J. Mandelberg and Co.\n\nCobden Street, Salford\n\nMandelberg and Co. was a well-known raincoat manufacturer. The company employed hundreds of workers who came from many different backgrounds. They specialized in rainwear for women, men, and children and were known for their colourful Macintosh (“Mac”) raincoats. The company supported the war effort by making flying suits and seaplane waders, dinghies and life-saving waistcoats to Government specification. The factory was not bombed in December 1940.",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/manchester-1926.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:1972.9725341796875,1906.060546875,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#7bcbb3fc-55e1-4a9d-85f6-80b5265cbf17"
                            },
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "University of Manchester\n\nOxford Road\n\nLike many English universities, the University of Manchester began as a single college, Owens College, and was founded by business owner John Owens. By World War II, the college had become a centre of research, where students could study the arts, sciences, engineering, and medicine. It was not bombed in December 1940.",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/manchester-1926.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3542.75341796875,3236.196533203125,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#ece1aff9-f3a2-4574-94f8-f37bed7cb9fb"
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
                                    "source": "http://localhost:5173/images/manchester-1926.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3853.822265625,3622.43603515625,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#f31ac473-f3c1-4ec3-ba2b-e084648805fe"
                            },
                            {
                                "type": "Annotation",
                                "body": [
                                    {
                                        "type": "TextualBody",
                                        "value": "Sephardi Synagogue\n\n24 Wicker Ln, Hale Barns, Altrincham WA15 0HQ, United Kingdom\n\nSephardi Jews lived originally in Spain and Portugal. They migrated to England in the eighteenth and nineteenth centuries and opened their first synagogue on Cheetham Hill Road in 1874. It was not bombed in December 1940.",
                                        "purpose": "commenting"
                                    }
                                ],
                                "target": {
                                    "source": "http://localhost:5173/images/manchester-1926.jpg",
                                    "selector": {
                                        "type": "FragmentSelector",
                                        "conformsTo": "http://www.w3.org/TR/media-frags/",
                                        "value": "xywh=pixel:3395.929443359375,1976.572509765625,0,0"
                                    },
                                    "renderedVia": {
                                        "name": "point"
                                    }
                                },
                                "@context": "http://www.w3.org/ns/anno.jsonld",
                                "id": "#641704dc-1db4-4a7c-9cfb-53a1605f07e0"
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
                url: "/images/manchester-1926.jpg",
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