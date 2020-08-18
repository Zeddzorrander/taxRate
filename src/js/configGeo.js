export const parameters = {
    "id": "ggbApplet",
    "width":800,
    "height":600,
    "showMenuBar":false,
    "showAlgebraInput":false,
    "showToolBar":false,
    "customToolBar":"0 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
    "showToolBarHelp":false,
    "showResetIcon":false,
    "enableLabelDrags":true,
    "enableShiftDragZoom":true,
    "enableRightClick":false,
    "errorDialogsActive":false,
    "useBrowserForJS":false,
    "allowStyleBar":false,
    "preventFocus":false,
    "showZoomButtons":true,
    "capturingThreshold":3,
    // add code here to run when the applet starts
    "appletOnLoad":function(api){
                                    api.setCoordSystem(-31500, 725000, -0.03, 0.45);
                                },
    "showFullscreenButton":false,
    "scale":1,
    "disableAutoScale":false,
    "allowUpscale":false,
    "clickToLoad":false,
    "appName":"classic",
    "showSuggestionButtons":true,
    "buttonRounding":0.7,
    "buttonShadows":false,
    "language":"en",
    "rounding":"3",
    // use this instead of ggbBase64 to load a material from geogebra.org
    //"material_id":"kNsYvNTd",
    // use this instead of ggbBase64 to load a .ggb file
    //"filename":"http://Users/Zeddzorrander/Documents/Sabbatical2020/functionImages1/GeoGebra/FunctionImages.ggb"
    "ggbBase64":"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",
    
};
    // is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
export const views = {'is3D': 0,'AV': 0,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};

// export function ggbFunctionf(x) {
//     return 0.05 * (x + 4) * (x - 1) * (x - 5);
// };

