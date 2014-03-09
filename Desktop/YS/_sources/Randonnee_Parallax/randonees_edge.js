/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['amatic-sc, sans-serif']='<script src=\"http://use.edgefonts.net/amatic-sc:n4,n7:all.js\"></script>';
    fonts['poiret-one, sans-serif']='<script src=\"http://use.edgefonts.net/poiret-one:n4:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_1_plage',
                type: 'image',
                rect: ['-56px', '-78px','1160px','845px','auto', 'auto'],
                clip: ['rect(0px 1160px 845px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"plage.jpg",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['152px', '55px','814px','568px','auto', 'auto'],
                borderRadius: ["19px 19px", "19px 19px", "19px 19px", "19px 19px"],
                opacity: 0.759398500274,
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['391px', '107px','287px','46px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            },
            {
                id: 'feuille',
                type: 'image',
                rect: ['906px', '140px','170px','98px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"feuille.png",'0px','0px'],
                transform: [[],['-76']]
            },
            {
                id: 'randonnee_titre2',
                type: 'image',
                rect: ['299px', '64px','500px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"randonnee_titre2.png",'0px','0px']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['70px', '668px','auto','auto','auto', 'auto'],
                text: " • CIRCUITS• ",
                align: "center",
                font: ['poiret-one, sans-serif', 79, "rgba(255,114,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'audio',
                type: 'audio',
                tag: 'audio',
                rect: ['424', '165','320px','45px','auto', 'auto'],
                autoplay: 'autoplay',
                loop: 'loop',
                source: ['images/audio.ogg','images/audio.mp3']
            },
            {
                id: 'play2',
                type: 'image',
                rect: ['193px', '70px','30px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"play.png",'0px','0px']
            },
            {
                id: 'pause2',
                type: 'image',
                rect: ['231px', '70','30px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pause.png",'0px','0px']
            },
            {
                id: 'Text2Copy',
                type: 'text',
                rect: ['52px', '1002px','auto','auto','auto', 'auto'],
                text: " • PAYSAGES • ",
                align: "center",
                font: ['poiret-one, sans-serif', 79, "rgba(255,114,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['556px', '668px','412px','92px','auto', 'auto'],
                text: "Le parc du yellowstone propose plus 15 circuits pour faire de la randonée",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 25, "rgba(119,119,119,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy9',
                type: 'text',
                rect: ['559px', '1016px','468px','98px','auto', 'auto'],
                text: "Parcourez le parc et découvrez toute la richesse de ses paysages",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 25, "rgba(119,119,119,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['0px', '800px','1080px','138px','auto', 'auto'],
                fill: ["rgba(255,114,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text3Copy',
                type: 'text',
                rect: ['-23px', '829px','218px','50px','auto', 'auto'],
                text: "Grizzly lac",
                align: "center",
                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy3',
                type: 'text',
                rect: ['-16px', '875px','218px','50px','auto', 'auto'],
                text: "6 km",
                align: "center",
                font: ['Verdana, Geneva, sans-serif', 25, "rgba(58,58,58,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy4',
                type: 'text',
                rect: ['239px', '875px','218px','50px','auto', 'auto'],
                text: "20 km",
                align: "center",
                font: ['Verdana, Geneva, sans-serif', 25, "rgba(58,58,58,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy6',
                type: 'text',
                rect: ['510px', '875px','218px','50px','auto', 'auto'],
                text: "10 km",
                align: "center",
                font: ['Verdana, Geneva, sans-serif', 25, "rgba(58,58,58,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy8',
                type: 'text',
                rect: ['755px', '875px','218px','50px','auto', 'auto'],
                text: "14 km",
                align: "center",
                font: ['Verdana, Geneva, sans-serif', 25, "rgba(58,58,58,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy2',
                type: 'text',
                rect: ['232px', '831px','244px','45px','auto', 'auto'],
                text: "Solfatara Creek",
                align: "center",
                font: ['Verdana, Geneva, sans-serif', 30, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy5',
                type: 'text',
                rect: ['488px', '834px','240px','50px','auto', 'auto'],
                text: "Wolf Lake",
                align: "center",
                font: ['Verdana, Geneva, sans-serif', 30, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy7',
                type: 'text',
                rect: ['728px', '834px','240px','50px','auto', 'auto'],
                text: "Cygnet Trail",
                align: "center",
                font: ['Verdana, Geneva, sans-serif', 30, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'nuit',
                type: 'image',
                rect: ['-39px', '1414px','1500px','827px','auto', 'auto'],
                clip: ['rect(0px 1500px 723px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"nuit.png",'0px','0px']
            },
            {
                id: 'jour',
                type: 'rect',
                rect: ['0', '1135','auto','auto','auto', 'auto']
            },
            {
                id: 'glyph-left2',
                type: 'image',
                rect: ['68px', '2188px','300px','46px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"glyph-left2.png",'0px','0px']
            },
            {
                id: 'glyph-right2',
                type: 'image',
                rect: ['696px', '2188px','322px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"glyph-right2.png",'0px','0px']
            },
            {
                id: 'montagne32',
                type: 'image',
                rect: ['2px', '1677px','1080px','463px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"montagne32.png",'0px','0px']
            },
            {
                id: 'birdsprite_sym',
                type: 'rect',
                rect: ['232px', '1916','auto','auto','auto', 'auto']
            },
            {
                id: 'Rectangle2Copy',
                type: 'rect',
                rect: ['-12px', '1596px','1098px','98px','auto', 'auto'],
                fill: ["rgba(255,114,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text2Copy2',
                type: 'text',
                rect: ['51px', '1610px','auto','auto','auto', 'auto'],
                text: " • SOUS LES ETOILES • ",
                align: "center",
                font: ['poiret-one, sans-serif', 50, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy3',
                type: 'text',
                rect: ['366px', '2183px','322px','72px','auto', 'auto'],
                text: "CONSEILS",
                align: "center",
                font: ['poiret-one, sans-serif', 50, "rgba(255,114,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy10',
                type: 'text',
                rect: ['309px', '2274px','468px','170px','auto', 'auto'],
                text: "Nos conseils pour préparer votre randonnée et ne pas perdre le nord !",
                align: "center",
                font: ['Verdana, Geneva, sans-serif', 20, "rgba(119,119,119,1.00)", "400", "none", "normal"]
            },
            {
                id: 'fleche_bas',
                type: 'rect',
                rect: ['492', '470','auto','auto','auto', 'auto']
            },
            {
                id: 'Text2Copy4',
                type: 'text',
                rect: ['176px', '2439px','auto','auto','auto', 'auto'],
                text: " 1 •  PREPAREZ VOUS PHYSIQUEMENT • ",
                align: "center",
                font: ['poiret-one, sans-serif', 50, "rgba(255,114,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy5',
                type: 'text',
                rect: ['259px', '2738px','auto','auto','auto', 'auto'],
                text: "2 • SUIVEZ UN ITINERAIRE • ",
                align: "center",
                font: ['poiret-one, sans-serif', 50, "rgba(255,114,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'direction2',
                type: 'rect',
                rect: ['402', '2824','auto','auto','auto', 'auto']
            },
            {
                id: 'Text2Copy6',
                type: 'text',
                rect: ['173px', '3073px','auto','auto','auto', 'auto'],
                text: "3 • SACHEZ MONTER VOTRE TENTE • ",
                align: "center",
                font: ['poiret-one, sans-serif', 50, "rgba(255,114,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'bg_tissu',
                type: 'image',
                rect: ['342px', '3057px','400px','600px','auto', 'auto'],
                clip: ['rect(0px 400px 600px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"bg_tissu.jpg",'0px','0px'],
                transform: [[],['-90'],[],['1.03','1.86333']]
            },
            {
                id: 'RoundRectCopy',
                type: 'rect',
                rect: ['264px', '3207px','530px','320px','auto', 'auto'],
                borderRadius: ["57px 57px", "57px 57px", "57px 57px", "57px 57px"],
                fill: ["rgba(74,74,74,1.00)"],
                stroke: [1,"rgba(0,0,0,1)","none"],
                transform: [[],['-3']]
            },
            {
                id: 'RoundRect',
                type: 'rect',
                rect: ['267px', '3189px','520px','332px','auto', 'auto'],
                borderRadius: ["57px 57px", "57px 57px", "57px 57px", "57px 57px"],
                fill: ["rgba(255,114,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],['2']]
            },
            {
                id: 'Tente2',
                type: 'image',
                rect: ['277px', '3201px','500px','312px','auto', 'auto'],
                borderRadius: ["57px 57px", "57px 57px", "57px 57px", "57px 57px"],
                fill: ["rgba(0,0,0,0)",im+"Tente2.gif",'0px','0px'],
                filter: [0, -4, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'Text2Copy7',
                type: 'text',
                rect: ['193px', '3599px','auto','auto','auto', 'auto'],
                text: "4 • PRENEZ QUE LE NECESSAIRE • ",
                align: "center",
                font: ['poiret-one, sans-serif', 50, "rgba(255,114,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'sac4',
                type: 'image',
                rect: ['777px', '3734px','170px','465px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sac4.png",'0px','0px']
            },
            {
                id: 'sac3',
                type: 'image',
                rect: ['360px', '3734px','170px','465px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sac3.png",'0px','0px']
            },
            {
                id: 'sac2',
                type: 'image',
                rect: ['129px', '3628px','170px','463px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sac2.png",'0px','0px']
            },
            {
                id: 'sac1',
                type: 'image',
                rect: ['593px', '3604px','170px','464px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sac1.png",'0px','0px']
            },
            {
                id: 'feuille2',
                type: 'image',
                rect: ['107px', '4091px','139px','246px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"feuille2.png",'0px','0px']
            },
            {
                id: 'birdfly_sym',
                type: 'rect',
                rect: ['322px', '214px','auto','auto','auto', 'auto']
            },
            {
                id: 'clouds_background_sym',
                type: 'rect',
                rect: ['179px', '2862px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.66667','0.69273']]
            },
            {
                id: 'rando',
                type: 'image',
                rect: ['479px', '2523px','141px','168px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rando.gif",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'jour',
                symbolName: 'jour',
                autoPlay: {

                }
            },
            {
                id: 'clouds_background_sym',
                symbolName: 'clouds_background_sym',
                autoPlay: {

                }
            },
            {
                id: 'direction2',
                symbolName: 'direction',
                autoPlay: {

                }
            },
            {
                id: 'birdsprite_sym',
                symbolName: 'birdsprite_sym',
                autoPlay: {

                }
            },
            {
                id: 'birdfly_sym',
                symbolName: 'birdfly_sym',
                autoPlay: {

                }
            },
            {
                id: 'fleche_bas',
                symbolName: 'fleche_bas',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_nuit}": [
                ["style", "top", '1410px'],
                ["style", "left", '-54px'],
                ["style", "clip", [0,1500,723,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Text2Copy}": [
                ["style", "top", '1002px'],
                ["color", "color", 'rgba(255,114,0,1.00)'],
                ["style", "left", '52px'],
                ["style", "font-size", '79px']
            ],
            "${_montagne32}": [
                ["style", "top", '1677px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '463px'],
                ["style", "left", '2px'],
                ["style", "width", '1080px']
            ],
            "${_bg_tissu}": [
                ["style", "top", '3057px'],
                ["transform", "scaleY", '1.86333'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '1.03'],
                ["style", "left", '342px'],
                ["style", "clip", [0,400,600,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text2}": [
                ["color", "color", 'rgba(255,114,0,1.00)'],
                ["style", "top", '668px'],
                ["style", "left", '70px'],
                ["style", "font-size", '79px']
            ],
            "${_Text3Copy3}": [
                ["color", "color", 'rgba(58,58,58,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-16px'],
                ["style", "font-size", '25px'],
                ["style", "top", '875px'],
                ["style", "text-align", 'center'],
                ["style", "height", '50px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "text-decoration", 'none'],
                ["style", "width", '218px']
            ],
            "${_sac4}": [
                ["style", "top", '3901px'],
                ["style", "height", '531px'],
                ["style", "left", '776px'],
                ["style", "width", '170px']
            ],
            "${_Text3Copy5}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '488px'],
                ["style", "font-size", '30px'],
                ["style", "top", '834px'],
                ["style", "text-align", 'center'],
                ["style", "height", '50px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "text-decoration", 'none'],
                ["style", "width", '240px']
            ],
            "${_logo}": [
                ["style", "top", '107px'],
                ["style", "height", '46px'],
                ["style", "opacity", '1'],
                ["style", "left", '391px'],
                ["style", "width", '287px']
            ],
            "${_birdsprite_sym}": [
                ["style", "top", '1885px'],
                ["style", "left", '-247px'],
                ["transform", "skewY", '0deg'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_Text3Copy6}": [
                ["color", "color", 'rgba(58,58,58,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '510px'],
                ["style", "font-size", '25px'],
                ["style", "top", '875px'],
                ["style", "text-align", 'center'],
                ["style", "height", '50px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "text-decoration", 'none'],
                ["style", "width", '218px']
            ],
            "${_Text2Copy7}": [
                ["color", "color", 'rgba(255,114,0,1.00)'],
                ["style", "top", '3599px'],
                ["style", "left", '193px'],
                ["style", "font-size", '50px']
            ],
            "${_Text2Copy3}": [
                ["style", "top", '2183px'],
                ["style", "font-size", '50px'],
                ["style", "height", '72px'],
                ["style", "font-style", 'normal'],
                ["color", "color", 'rgba(255,114,0,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '366px'],
                ["style", "width", '322px']
            ],
            "${_Text3Copy7}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '728px'],
                ["style", "font-size", '30px'],
                ["style", "top", '834px'],
                ["style", "text-align", 'center'],
                ["style", "height", '50px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "text-decoration", 'none'],
                ["style", "width", '240px']
            ],
            "${_Text3Copy8}": [
                ["color", "color", 'rgba(58,58,58,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '755px'],
                ["style", "font-size", '25px'],
                ["style", "top", '875px'],
                ["style", "text-align", 'center'],
                ["style", "height", '50px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "text-decoration", 'none'],
                ["style", "width", '218px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(255,114,0,1.00)'],
                ["transform", "rotateZ", '2deg'],
                ["style", "height", '332px'],
                ["style", "top", '3189px'],
                ["style", "left", '267px'],
                ["style", "width", '520px']
            ],
            "${_birdfly_sym}": [
                ["style", "top", '214px'],
                ["style", "left", '322px']
            ],
            "${_rando}": [
                ["style", "height", '168px'],
                ["style", "top", '2523px'],
                ["style", "left", '479px'],
                ["style", "width", '141px']
            ],
            "${_Text3Copy4}": [
                ["color", "color", 'rgba(58,58,58,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '239px'],
                ["style", "font-size", '25px'],
                ["style", "top", '875px'],
                ["style", "text-align", 'center'],
                ["style", "height", '50px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "text-decoration", 'none'],
                ["style", "width", '218px']
            ],
            "${_play2}": [
                ["style", "height", '30px'],
                ["style", "top", '70px'],
                ["style", "left", '193px'],
                ["style", "width", '30px']
            ],
            "${_clouds_background_sym}": [
                ["style", "top", '2862px'],
                ["transform", "scaleX", '0.66667'],
                ["style", "left", '179px'],
                ["transform", "scaleY", '0.69273']
            ],
            "${_Text3Copy10}": [
                ["style", "top", '2274px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(119,119,119,1)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '309px'],
                ["style", "font-size", '20px']
            ],
            "${_Text2Copy2}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '1610px'],
                ["style", "left", '51px'],
                ["style", "font-size", '50px']
            ],
            "${__1_plage}": [
                ["subproperty", "filter.sepia", '0.000000'],
                ["style", "top", '-78px'],
                ["style", "opacity", '1'],
                ["style", "left", '-56px'],
                ["style", "clip", [0,1160,843,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Tente2}": [
                ["style", "border-top-left-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "filter.hue-rotate", '-4deg'],
                ["style", "left", '277px'],
                ["style", "width", '500px'],
                ["style", "top", '3201px'],
                ["style", "border-bottom-left-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '312px'],
                ["style", "border-top-right-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_randonnee_titre2}": [
                ["style", "left", '299px'],
                ["style", "top", '64px']
            ],
            "${_sac2}": [
                ["style", "height", '463px'],
                ["style", "top", '3795px'],
                ["style", "left", '128px'],
                ["style", "width", '170px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0.759398500274'],
                ["style", "left", '152px'],
                ["style", "width", '814px'],
                ["style", "top", '55px'],
                ["style", "border-bottom-left-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '568px'],
                ["style", "border-top-right-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Text3Copy}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-23px'],
                ["style", "font-size", '30px'],
                ["style", "top", '829px'],
                ["style", "text-align", 'center'],
                ["style", "height", '50px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "text-decoration", 'none'],
                ["style", "width", '218px']
            ],
            "${_Rectangle2Copy}": [
                ["style", "top", '1596px'],
                ["style", "height", '98px'],
                ["color", "background-color", 'rgba(255,114,0,1.00)'],
                ["style", "left", '-12px'],
                ["style", "width", '1098px']
            ],
            "${_Text3Copy2}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '232px'],
                ["style", "font-size", '30px'],
                ["style", "top", '831px'],
                ["style", "text-align", 'center'],
                ["style", "height", '45px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "text-decoration", 'none'],
                ["style", "width", '244px']
            ],
            "${_Text3Copy9}": [
                ["style", "top", '1016px'],
                ["style", "font-size", '25px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '98px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '559px'],
                ["style", "width", '468px']
            ],
            "${_glyph-left2}": [
                ["style", "height", '46px'],
                ["style", "top", '2188px'],
                ["style", "left", '68px'],
                ["style", "width", '300px']
            ],
            "${_pause2}": [
                ["style", "height", '30px'],
                ["style", "left", '231px'],
                ["style", "width", '30px']
            ],
            "${_feuille}": [
                ["style", "top", '739px'],
                ["transform", "rotateZ", '-76deg'],
                ["style", "height", '98px'],
                ["style", "left", '906px'],
                ["style", "width", '170px']
            ],
            "${_feuille2}": [
                ["style", "top", '3837px'],
                ["style", "left", '98px'],
                ["transform", "skewY", '-3deg']
            ],
            "${_glyph-right2}": [
                ["style", "height", '49px'],
                ["style", "top", '2188px'],
                ["style", "left", '696px'],
                ["style", "width", '322px']
            ],
            "${_sac3}": [
                ["style", "top", '3901px'],
                ["style", "height", '465px'],
                ["style", "left", '359px'],
                ["style", "width", '170px']
            ],
            "${_RoundRectCopy}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-3deg'],
                ["style", "border-style", 'none'],
                ["style", "left", '264px'],
                ["style", "width", '530px'],
                ["style", "top", '3207px'],
                ["style", "height", '320px'],
                ["style", "border-width", '1px'],
                ["color", "background-color", 'rgba(74,74,74,1.00)']
            ],
            "${_Text2Copy5}": [
                ["color", "color", 'rgba(255,114,0,1.00)'],
                ["style", "top", '2738px'],
                ["style", "left", '259px'],
                ["style", "font-size", '50px']
            ],
            "${_Text2Copy4}": [
                ["style", "top", '2439px'],
                ["color", "color", 'rgba(255,114,0,1.00)'],
                ["style", "left", '176px'],
                ["style", "font-size", '50px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,114,0,1.00)'],
                ["style", "top", '800px'],
                ["style", "left", '0px'],
                ["style", "width", '1080px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '2px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '4351px'],
                ["style", "max-width", '1000px'],
                ["style", "width", '1070px']
            ],
            "${_Text2Copy6}": [
                ["style", "top", '3073px'],
                ["color", "color", 'rgba(255,114,0,1.00)'],
                ["style", "left", '173px'],
                ["style", "font-size", '50px']
            ],
            "${_sac1}": [
                ["style", "height", '464px'],
                ["style", "top", '3771px'],
                ["style", "left", '592px'],
                ["style", "width", '170px']
            ],
            "${_Text3}": [
                ["style", "top", '668px'],
                ["style", "font-size", '25px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '92px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '556px'],
                ["style", "width", '412px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 120000,
            autoPlay: false,
            labels: {
                "Etiquette 1": 120000
            },
            timeline: [
                { id: "eid77", tween: [ "style", "${_Text3Copy4}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 4000 },
                { id: "eid72", tween: [ "style", "${_Text3Copy}", "opacity", '1', { fromValue: '0'}], position: 6342, duration: 4000 },
                { id: "eid76", tween: [ "style", "${_Text3Copy2}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 4000 },
                { id: "eid131", tween: [ "style", "${_feuille2}", "top", '2004px', { fromValue: '3837px'}], position: 55000, duration: 25000, easing: "easeInOutQuad" },
                { id: "eid62", tween: [ "style", "${__1_plage}", "clip", [0,1160,360,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1160,843,0]}], position: 1000, duration: 10000, easing: "easeInOutQuint" },
                { id: "eid107", tween: [ "style", "${_nuit}", "left", '-430px', { fromValue: '-54px'}], position: 40000, duration: 20000, easing: "easeInOutQuint" },
                { id: "eid177", tween: [ "style", "${_sac2}", "top", '3628px', { fromValue: '3795px'}], position: 107500, duration: 9181, easing: "easeInOutQuad" },
                { id: "eid181", tween: [ "style", "${_sac1}", "top", '3604px', { fromValue: '3771px'}], position: 110000, duration: 9181, easing: "easeInOutQuad" },
                { id: "eid173", tween: [ "style", "${_sac3}", "top", '3734px', { fromValue: '3901px'}], position: 105819, duration: 9181, easing: "easeInOutQuad" },
                { id: "eid78", tween: [ "style", "${_Text3Copy5}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 4000 },
                { id: "eid80", tween: [ "style", "${_Text3Copy7}", "opacity", '1', { fromValue: '0'}], position: 22000, duration: 4000 },
                { id: "eid81", tween: [ "style", "${_Text3Copy8}", "opacity", '1', { fromValue: '0'}], position: 21000, duration: 4000 },
                { id: "eid79", tween: [ "style", "${_Text3Copy6}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 4000 },
                { id: "eid112", tween: [ "style", "${_birdsprite_sym}", "left", '760px', { fromValue: '-247px'}], position: 37500, duration: 24000, easing: "easeInOutQuint" },
                { id: "eid169", tween: [ "style", "${_sac4}", "top", '3734px', { fromValue: '3901px'}], position: 105000, duration: 9181, easing: "easeInOutQuad" },
                { id: "eid75", tween: [ "style", "${_Text3Copy3}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 4000 },
                { id: "eid54", tween: [ "style", "${_feuille}", "top", '140px', { fromValue: '739px'}], position: 0, duration: 3500, easing: "easeInOutQuint" }            ]
        }
    }
},
"flower": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'String',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['24px', '0px', '3px', '422px', 'auto', 'auto'],
                    fill: ['rgba(0,18,149,1.00)']
                },
                {
                    id: 'simpleFlower',
                    type: 'rect',
                    rect: ['0', '399', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'simpleFlower',
                symbolName: 'simpleFlower',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '449px'],
                ["style", "width", '50px']
            ],
            "${_String}": [
                ["style", "top", '0px'],
                ["style", "left", '24px'],
                ["color", "background-color", 'rgba(0,18,149,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"simpleFlower": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sac',
                    type: 'image',
                    rect: ['12px', '4px', '26px', '41px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sac.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '50px']
            ],
            "${_sac}": [
                ["style", "height", '41px'],
                ["style", "top", '4px'],
                ["style", "left", '12px'],
                ["style", "width", '26px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"cascadingFlowers": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'falling6',
                    type: 'rect',
                    rect: ['36', '-24', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'falling5',
                    type: 'rect',
                    rect: ['36', '-24', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'falling4',
                    type: 'rect',
                    rect: ['36', '-24', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'falling3',
                    type: 'rect',
                    rect: ['36', '-24', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'falling2',
                    type: 'rect',
                    rect: ['36', '-24', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'falling1',
                    type: 'rect',
                    rect: ['36', '-24', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'falling0',
                    type: 'rect',
                    rect: ['353', '79', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'falling0',
                symbolName: 'swingingFlower',
                autoPlay: {

               }
            },
            {
                id: 'falling3',
                symbolName: 'swingingFlower',
                autoPlay: {

               }
            },
            {
                id: 'falling2',
                symbolName: 'swingingFlower',
                autoPlay: {

               }
            },
            {
                id: 'falling1',
                symbolName: 'swingingFlower',
                autoPlay: {

               }
            },
            {
                id: 'falling4',
                symbolName: 'swingingFlower',
                autoPlay: {

               }
            },
            {
                id: 'falling5',
                symbolName: 'swingingFlower',
                autoPlay: {

               }
            },
            {
                id: 'falling6',
                symbolName: 'swingingFlower',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_falling3}": [
                ["style", "top", '-450px'],
                ["style", "left", '110px']
            ],
            "${_falling2}": [
                ["style", "top", '-450px'],
                ["style", "left", '0px']
            ],
            "${_falling5}": [
                ["style", "top", '-450px'],
                ["style", "left", '20px']
            ],
            "${_falling6}": [
                ["style", "top", '-450px'],
                ["style", "left", '45px']
            ],
            "${_falling1}": [
                ["style", "top", '-450px'],
                ["style", "left", '95px']
            ],
            "${_falling4}": [
                ["style", "top", '-450px'],
                ["style", "left", '70px']
            ],
            "${symbolSelector}": [
                ["style", "height", '400px'],
                ["style", "width", '160px'],
                ["style", "overflow", 'visible']
            ],
            "${_falling0}": [
                ["style", "top", '-450px'],
                ["style", "left", '30px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3750,
            autoPlay: true,
            timeline: [
                { id: "eid46", tween: [ "style", "${_falling3}", "top", '-63px', { fromValue: '-450px'}], position: 3000, duration: 750, easing: "easeOutBounce" },
                { id: "eid36", tween: [ "style", "${_falling6}", "top", '-205px', { fromValue: '-450px'}], position: 500, duration: 750, easing: "easeOutBounce" },
                { id: "eid40", tween: [ "style", "${_falling2}", "top", '-155px', { fromValue: '-450px'}], position: 1500, duration: 750, easing: "easeOutBounce" },
                { id: "eid38", tween: [ "style", "${_falling4}", "top", '-132px', { fromValue: '-450px'}], position: 1000, duration: 750, easing: "easeOutBounce" },
                { id: "eid42", tween: [ "style", "${_falling0}", "top", '-297px', { fromValue: '-450px'}], position: 2000, duration: 750, easing: "easeOutBounce" },
                { id: "eid44", tween: [ "style", "${_falling5}", "top", '-87px', { fromValue: '-450px'}], position: 2500, duration: 750, easing: "easeOutBounce" },
                { id: "eid34", tween: [ "style", "${_falling1}", "top", '-260px', { fromValue: '-450px'}], position: 0, duration: 750, easing: "easeOutBounce" }            ]
        }
    }
},
"swingingFlower": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'flower',
                    type: 'rect',
                    rect: ['0', '1', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'flower',
                symbolName: 'flower'
            }            ]
        },
    states: {
        "Base State": {
            "${_flower}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '450px'],
                ["style", "width", '50px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2043,
            autoPlay: false,
            labels: {
                "center": 1500
            },
            timeline: [
                { id: "eid32", tween: [ "transform", "${_flower}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid47", tween: [ "transform", "${_flower}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 943, duration: 0, easing: "easeInQuad" },
                { id: "eid29", tween: [ "transform", "${_flower}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1000, duration: 500, easing: "easeInQuad" },
                { id: "eid30", tween: [ "transform", "${_flower}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 1500, duration: 500, easing: "easeOutQuad" }            ]
        }
    }
},
"birdfly_sym": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'birdsprite2',
                    type: 'rect',
                    rect: ['28.2%', '384px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'birdsprite1',
                    type: 'rect',
                    rect: ['79.9%', '384px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['-19']]
                }
            ],
            symbolInstances: [
            {
                id: 'birdsprite1',
                symbolName: 'birdsprite_sym',
                autoPlay: {

               }
            },
            {
                id: 'birdsprite2',
                symbolName: 'birdsprite_sym',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_birdsprite2}": [
                ["style", "top", '-32px'],
                ["transform", "scaleY", '-0.52515'],
                ["transform", "scaleX", '-0.52515'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '-20.92%']
            ],
            "${_birdsprite1}": [
                ["style", "top", '347px'],
                ["transform", "scaleY", '-0.52515'],
                ["transform", "rotateZ", '-19deg'],
                ["transform", "scaleX", '-0.52515'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '-43.66%']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100.6%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6342,
            autoPlay: true,
            timeline: [
                { id: "eid68", tween: [ "transform", "${_birdsprite2}", "scaleY", '-0.71994', { fromValue: '-0.52515'}], position: 0, duration: 1899 },
                { id: "eid4", tween: [ "style", "${_birdsprite1}", "top", '290px', { fromValue: '347px'}], position: 0, duration: 1500 },
                { id: "eid71", tween: [ "style", "${_birdsprite1}", "top", '-19px', { fromValue: '290px'}], position: 1500, duration: 1899 },
                { id: "eid74", tween: [ "subproperty", "${_birdsprite1}", "filter.blur", '10px', { fromValue: '0px'}], position: 2149, duration: 1250 },
                { id: "eid1", tween: [ "style", "${_birdsprite1}", "left", '-31.85%', { fromValue: '-43.66%'}], position: 0, duration: 1500 },
                { id: "eid73", tween: [ "style", "${_birdsprite1}", "left", '98.03%', { fromValue: '-31.85%'}], position: 1500, duration: 1899 },
                { id: "eid67", tween: [ "transform", "${_birdsprite2}", "scaleX", '-0.71994', { fromValue: '-0.52515'}], position: 0, duration: 1899 },
                { id: "eid66", tween: [ "style", "${_birdsprite2}", "top", '292px', { fromValue: '-32px'}], position: 0, duration: 1899 },
                { id: "eid65", tween: [ "style", "${_birdsprite2}", "left", '98.04%', { fromValue: '-20.92%'}], position: 0, duration: 1899 }            ]
        }
    }
},
"birdsprite_sym": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'birdsprite',
                    rect: ['0px', '0px', '600px', '785px', 'auto', 'auto'],
                    clip: ['rect(0px 123.93212890625px 172.838623046875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/birdsprite.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_birdsprite}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,123.93212890625,154.9427490234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '46px']
            ],
            "${symbolSelector}": [
                ["style", "height", '193px'],
                ["style", "width", '212px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 236,
            autoPlay: true,
            timeline: [
                { id: "eid56", tween: [ "style", "${_birdsprite}", "clip", [0,123.93212890625,154.9427490234375,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,123.93212890625,154.9427490234375,0]}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_birdsprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_birdsprite}", "background-position", [-120,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 13, duration: 0 },
                { id: "eid19", tween: [ "style", "${_birdsprite}", "background-position", [-240,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,0]}], position: 26, duration: 0 },
                { id: "eid20", tween: [ "style", "${_birdsprite}", "background-position", [-360,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,0]}], position: 39, duration: 0 },
                { id: "eid21", tween: [ "style", "${_birdsprite}", "background-position", [-480,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-360,0]}], position: 54, duration: 0 },
                { id: "eid23", tween: [ "style", "${_birdsprite}", "background-position", [0,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-480,0]}], position: 66, duration: 0 },
                { id: "eid24", tween: [ "style", "${_birdsprite}", "background-position", [-120,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-157]}], position: 80, duration: 0 },
                { id: "eid25", tween: [ "style", "${_birdsprite}", "background-position", [-240,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,-157]}], position: 93, duration: 0 },
                { id: "eid26", tween: [ "style", "${_birdsprite}", "background-position", [-360,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,-157]}], position: 105, duration: 0 },
                { id: "eid27", tween: [ "style", "${_birdsprite}", "background-position", [-480,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-360,-157]}], position: 119, duration: 0 },
                { id: "eid29", tween: [ "style", "${_birdsprite}", "background-position", [0,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-480,-157]}], position: 132, duration: 0 },
                { id: "eid30", tween: [ "style", "${_birdsprite}", "background-position", [-120,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-314]}], position: 145, duration: 0 },
                { id: "eid31", tween: [ "style", "${_birdsprite}", "background-position", [-240,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,-314]}], position: 160, duration: 0 },
                { id: "eid32", tween: [ "style", "${_birdsprite}", "background-position", [-360,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,-314]}], position: 172, duration: 0 },
                { id: "eid35", tween: [ "style", "${_birdsprite}", "background-position", [-480,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-360,-314]}], position: 183, duration: 0 },
                { id: "eid36", tween: [ "style", "${_birdsprite}", "background-position", [0,-471], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-480,-314]}], position: 197, duration: 0 },
                { id: "eid37", tween: [ "style", "${_birdsprite}", "background-position", [-120,-471], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-471]}], position: 210, duration: 0 },
                { id: "eid38", tween: [ "style", "${_birdsprite}", "background-position", [-240,-471], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,-471]}], position: 223, duration: 0 },
                { id: "eid39", tween: [ "style", "${_birdsprite}", "background-position", [-360,-471], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,-471]}], position: 236, duration: 0 }            ]
        }
    }
},
"birdsprite_sym_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '600px', '785px', 'auto', 'auto'],
                    id: 'birdsprite',
                    type: 'image',
                    clip: ['rect(0px 123.93212890625px 172.838623046875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/birdsprite2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_birdsprite}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,123.93212890625,154.9427490234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '46px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '193px'],
                ["style", "width", '212px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 236,
            autoPlay: true,
            timeline: [
                { id: "eid17", tween: [ "style", "${_birdsprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_birdsprite}", "background-position", [-120,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 13, duration: 0 },
                { id: "eid19", tween: [ "style", "${_birdsprite}", "background-position", [-240,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,0]}], position: 26, duration: 0 },
                { id: "eid20", tween: [ "style", "${_birdsprite}", "background-position", [-360,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,0]}], position: 39, duration: 0 },
                { id: "eid21", tween: [ "style", "${_birdsprite}", "background-position", [-480,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-360,0]}], position: 54, duration: 0 },
                { id: "eid23", tween: [ "style", "${_birdsprite}", "background-position", [0,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-480,0]}], position: 66, duration: 0 },
                { id: "eid24", tween: [ "style", "${_birdsprite}", "background-position", [-120,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-157]}], position: 80, duration: 0 },
                { id: "eid25", tween: [ "style", "${_birdsprite}", "background-position", [-240,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,-157]}], position: 93, duration: 0 },
                { id: "eid26", tween: [ "style", "${_birdsprite}", "background-position", [-360,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,-157]}], position: 105, duration: 0 },
                { id: "eid27", tween: [ "style", "${_birdsprite}", "background-position", [-480,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-360,-157]}], position: 119, duration: 0 },
                { id: "eid29", tween: [ "style", "${_birdsprite}", "background-position", [0,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-480,-157]}], position: 132, duration: 0 },
                { id: "eid30", tween: [ "style", "${_birdsprite}", "background-position", [-120,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-314]}], position: 145, duration: 0 },
                { id: "eid31", tween: [ "style", "${_birdsprite}", "background-position", [-240,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,-314]}], position: 160, duration: 0 },
                { id: "eid32", tween: [ "style", "${_birdsprite}", "background-position", [-360,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,-314]}], position: 172, duration: 0 },
                { id: "eid35", tween: [ "style", "${_birdsprite}", "background-position", [-480,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-360,-314]}], position: 183, duration: 0 },
                { id: "eid36", tween: [ "style", "${_birdsprite}", "background-position", [0,-471], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-480,-314]}], position: 197, duration: 0 },
                { id: "eid37", tween: [ "style", "${_birdsprite}", "background-position", [-120,-471], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-471]}], position: 210, duration: 0 },
                { id: "eid38", tween: [ "style", "${_birdsprite}", "background-position", [-240,-471], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,-471]}], position: 223, duration: 0 },
                { id: "eid39", tween: [ "style", "${_birdsprite}", "background-position", [-360,-471], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,-471]}], position: 236, duration: 0 },
                { id: "eid56", tween: [ "style", "${_birdsprite}", "clip", [0,123.93212890625,154.9427490234375,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,123.93212890625,154.9427490234375,0]}], position: 0, duration: 0 }            ]
        }
    }
},
"clouds_foreground_sym": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'cloud',
                    type: 'image',
                    rect: ['773px', '20px', '315px', '243px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud.png', '0px', '0px']
                },
                {
                    id: 'cloud5',
                    type: 'image',
                    rect: ['493px', '-49px', '444px', '342px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud.png', '0px', '0px']
                },
                {
                    id: 'cloud4',
                    type: 'image',
                    rect: ['-150px', '-38px', '444px', '342px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud.png', '0px', '0px']
                },
                {
                    id: 'cloud3',
                    type: 'image',
                    rect: ['147px', '20px', '252px', '196px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud3.png', '0px', '0px']
                },
                {
                    id: 'cloud2',
                    type: 'image',
                    rect: ['349px', '18px', '266px', '207px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud3.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.47', '0.47']],
                    id: 'cloud1',
                    type: 'image',
                    rect: ['147px', '-90px', '252px', '196px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cloud5}": [
                ["style", "height", '342px'],
                ["style", "top", '-49px'],
                ["style", "left", '493px'],
                ["style", "width", '444px']
            ],
            "${_cloud1}": [
                ["transform", "scaleX", '0.46987'],
                ["style", "top", '-90px'],
                ["transform", "scaleY", '0.46987'],
                ["style", "left", '147px']
            ],
            "${_cloud2}": [
                ["style", "height", '207px'],
                ["style", "top", '18px'],
                ["style", "left", '349px'],
                ["style", "width", '266px']
            ],
            "${symbolSelector}": [
                ["style", "height", '243px'],
                ["style", "width", '315px']
            ],
            "${_cloud3}": [
                ["style", "left", '147px'],
                ["style", "top", '20px']
            ],
            "${_cloud}": [
                ["style", "left", '773px'],
                ["style", "top", '20px']
            ],
            "${_cloud4}": [
                ["style", "top", '-38px'],
                ["style", "height", '342px'],
                ["style", "left", '-150px'],
                ["style", "width", '444px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"clouds_background_sym": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'cloud',
                    type: 'image',
                    rect: ['773px', '20px', '315px', '243px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud2.png', '0px', '0px']
                },
                {
                    id: 'cloud5',
                    type: 'image',
                    rect: ['493px', '-49px', '444px', '342px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud2.png', '0px', '0px']
                },
                {
                    id: 'cloud4',
                    type: 'image',
                    rect: ['-150px', '-38px', '444px', '342px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud2.png', '0px', '0px']
                },
                {
                    id: 'cloud2',
                    type: 'image',
                    rect: ['802px', '-31px', '161px', '97px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud22.png', '0px', '0px']
                },
                {
                    id: 'cloud3',
                    type: 'image',
                    rect: ['147px', '20px', '252px', '196px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud32.png', '0px', '0px']
                },
                {
                    id: 'cloud1',
                    type: 'image',
                    rect: ['349px', '18px', '266px', '207px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud32.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cloud5}": [
                ["style", "top", '-49px'],
                ["style", "height", '342px'],
                ["style", "left", '493px'],
                ["style", "width", '444px']
            ],
            "${_cloud1}": [
                ["style", "top", '18px'],
                ["style", "height", '207px'],
                ["style", "left", '349px'],
                ["style", "width", '266px']
            ],
            "${_cloud3}": [
                ["style", "left", '147px'],
                ["style", "top", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '243px'],
                ["style", "width", '315px']
            ],
            "${_cloud2}": [
                ["style", "height", '97px'],
                ["style", "top", '-31px'],
                ["style", "left", '802px'],
                ["style", "width", '161px']
            ],
            "${_cloud}": [
                ["style", "left", '773px'],
                ["style", "top", '20px']
            ],
            "${_cloud4}": [
                ["style", "height", '342px'],
                ["style", "top", '-38px'],
                ["style", "left", '-150px'],
                ["style", "width", '444px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"direction": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'direction',
                    type: 'image',
                    rect: ['0px', '0px', '212px', '211px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/direction.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_direction}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '211px'],
                ["style", "left", '0px'],
                ["style", "width", '212px']
            ],
            "${symbolSelector}": [
                ["style", "height", '211px'],
                ["style", "width", '212px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13000,
            autoPlay: true,
            timeline: [
                { id: "eid143", tween: [ "transform", "${_direction}", "rotateZ", '-90deg', { fromValue: '90deg'}], position: 0, duration: 7000, easing: "easeOutBounce" },
                { id: "eid146", tween: [ "transform", "${_direction}", "rotateZ", '-30deg', { fromValue: '-90deg'}], position: 7000, duration: 3000, easing: "easeOutBounce" },
                { id: "eid148", tween: [ "transform", "${_direction}", "rotateZ", '0deg', { fromValue: '-30deg'}], position: 10000, duration: 3000, easing: "easeOutBounce" }            ]
        }
    }
},
"fleche_bas": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'fleche-bottom',
                    type: 'image',
                    rect: ['0px', '0px', '134px', '118px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fleche-bottom.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_fleche-bottom}": [
                ["style", "left", '0px'],
                ["style", "top", '-11px']
            ],
            "${symbolSelector}": [
                ["style", "height", '118px'],
                ["style", "width", '134px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid165", tween: [ "style", "${_fleche-bottom}", "top", '19px', { fromValue: '-11px'}], position: 0, duration: 750, easing: "easeInOutQuad" }            ]
        }
    }
},
"jour": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'montagne12',
                    type: 'image',
                    rect: ['0px', '0px', '1086px', '467px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/montagne12.png', '0px', '0px']
                },
                {
                    id: 'soleil',
                    type: 'image',
                    rect: ['805px', '128px', '94px', '92px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/soleil.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_soleil}": [
                ["motion", "location", '852px 174px'],
                ["style", "height", '92px'],
                ["style", "width", '94px']
            ],
            "${_montagne12}": [
                ["style", "top", '0px'],
                ["style", "height", '467px'],
                ["style", "left", '0px'],
                ["style", "width", '1086px']
            ],
            "${symbolSelector}": [
                ["style", "height", '467px'],
                ["style", "width", '1086px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3753,
            autoPlay: true,
            timeline: [
                { id: "eid97", tween: [ "motion", "${_soleil}", [[852, 174, 0, 0],[429.61, 60.74, -644.55, -14.43, -875.69, -19.6],[91.58, 187, 0, 0]]], position: 0, duration: 3553, easing: "easeInOutQuint" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-119921572");
