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
                                    api.setCoordSystem(-31500, 725000, -0.05, 0.45);
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

