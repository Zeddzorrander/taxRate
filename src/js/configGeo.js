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
    "ggbBase64":"UEsDBBQACAgIAGJxElEAAAAAAAAAAAAAAAAXAAAAZ2VvZ2VicmFfZGVmYXVsdHMyZC54bWztmltz4yYUgJ+7v4LhqX2IDbLlSybKTnZnOt2ZbDbTZHb6iiUs02BQBYrl/PoisCV5baex4qydNHkIOojrdw6HA/LZx3zKwT1NFZMigLiFIKAilBETcQAzPT4ZwI/nH85iKmM6SgkYy3RKdAD9omRZz0gtfzgs8kiSBDDkRCkWQpBwoosqAZxBAHLFToW8IlOqEhLSm3BCp+RShkTbViZaJ6ft9mw2ay37a8k0bpsmVTtXUTuOdcukEJhBCxXAxcOpaXel9qxj63kI4fZfXy9dPydMKE1ESCEwE4romGRcK/NIOZ1SoYGeJzSAiWRCQ8DJiPIAXhcS+HWcUvobBItKhhOC5x9+OVMTOQNy9DcNTZ5OM1rWs0K7KGNef5ZcpiANYL8PQeySUQA93ze4eDIhAUSuMCdzmoJ7wssckmkZ2vo2d0y4osuypqevMqLuTXdRXrCpxQmUpkYTqIUhUAmlkRk1XMwRW8XMrY5rLYZSppECeQCvyBUE80X64FJbxNK5YQ+LTv16rp5zWhv7WXsB9mmII5pQEZlCK5xxI869geVcJCOXvDTml4TcfWnIvXfI2yDj3Sl/E3W2XiO22PMtXJv+LFfxKhzFF/Enjc2Y64w774z3ynjVgruN6CLLFr1SsraIY6iK/yaikdOE03yP4DkTFcRLK5TQvWbxRR06Oghy1Bh5gcPB0xMW3gmqVEG2ard4+INFZvey/UkTQTJtWsL9gWuB/iNWVMaMxpgp87gaxpkItXUoC7Sfs/S+rotOFx1CG1Wb+1bGc0lvZ6loXEgll5ulXBl2s4Du/23YMtO86PmL0ObARa25qrWp3VGa3JqmvonblAhVnLpWLWm73lIyf0xn/rvOjk9nS7919Z2kpSYyE9yPzdijuvqahUdbN/CW5x9ahzt4841Enh/SHJVB72it+zGrXjOv4KHuZoyt/hGb1b2Znqx4fF+IVYzwHq/t7iI3BNkk1VQxIv7ryMLncW2NXy/lUh99p4/nj3HnQ6XfsTr18Zp9Y+T+cHeIMO5h79BqfhzwyvHkusyoEOMDIT7SRbOdZihFcRW+PF44qeTYfWOuYw/nOBZT4TyuAiBHttgc2coPaPGRIsdWnmP79gG7bFvfDDxlObhwNS5cwQvPJR2XdF3il4CaHR6tahPjtWrh8w9bQ7fZiec1OZI3qfSfEMKLbErTmmu4Wsql8fjOOZj2Mrqi2ie4gm12st0qFGeRMaEpM0o6MdqbktxqkYyU5JmmN2FKqai+1zkznrFIT4rAzvQ9ZnlhLu7FRKbsQQpdwgDFIrjg9sPeygXHJuvxHotfV2z1ed6ZiJhXi/HCSZUC3P29LfTj1d4mvdQRogXBXssbdPDA76A+7g/9Qe+JRPGgMdF188BoDway0zL3Ni1zkobVvWkHbfY7qIVwv+t3vKHn4+Gwax78/Z8Mfy8zqjPNMV70WQtYK/pid3hchpmq7qWdVBIavLFohWQ544yk8+fZ+k6ENc2reOHWCrUfFhwh4O1TMdjjamhfnFT7eu8mM2aGoiBTU8F1wsQnEt7FqcxEtL4L7WXq+NC2tR3aSEpOSeWIPi3l2lfjtX1/GyCXf9DVF05oeDeS+cpe9biPYapaAZdWqH3N3bACnj7L9X3u5OCm0OSGbttHxo2RSJ10u/bLpvbyZ1Tn/wJQSwcIFnp87eMEAADoJQAAUEsDBBQACAgIAGJxElEAAAAAAAAAAAAAAAAXAAAAZ2VvZ2VicmFfZGVmYXVsdHMzZC54bWztmM1S2zAQgM/lKTS6E1uOHTCDYTL00M4AQ4dLr0LeJGptyUgKiXm1vkOfqfoxweFvSobSgTaHrP52JX2rrLTZP1zWFboCpbkUBSaDGCMQTJZcTAs8N5PtXXx4sLU/BTmFC0XRRKqamgJnbuRKz9YGWZ67Nto0BWYV1ZozjJqKGqdS4AVGaKn5npCntAbdUAbnbAY1PZaMGm9lZkyzF0WLxWJwM99AqmlkTepoqctoOjUDKzGyixa6wF1hz9pd014MvV4SxyT6enIc5tnmQhsqGGBkN1TChM4ro20RKqhBGGTaBuzSpeBsaOeo6AVUBf4sjN0lMLdExObqyup3ygUekizGB1sf9vVMLpC8+GbHFdioOaz0fSVyY2z3kaykQqrASZZhZAmTZAejiwI7cFUzo7Y0IHH4kDSPCRmRJKhXtAWFrmjlRvsWOjeSeYu+dUIrDTdj7dwnsoTQk3bjBa89aqQNWC8RjHQDUPpS2H3sXdZ67/ftcQHnpq0AmRln3wVoSz/rKbnCJ16W4A5R0AE+BXFlgUilretjP0sb++HXcXfWlsTXW+J7r0lo9vp2qYov0ThojMPAcRLEMIg0iGyFBC5FWKd23wVuqLKnzRpirn8/6nx9z+t0yXXP6WNX/bjm6Hi4kaNj7+b4rpPfqEsfp4u6Mtg9//zxNGz/K2JUGdCcih72I9dxl/voX+f+OEhrX0CP35mvr/GzMXAjfnnuASYk9wi9XEWo7KUwMilVqdEyBIEQGvz3YmVyQt1d1M0yIE9AjDeEKKt2BqWS4pZjr+kW5bBDuckv57n4STb0/DNy73pIu+shy0dxOkpfzBebHulnkR0rNuM1lEDX0dpL7rXQJoR4tGm4eZ14H2zPWhuBebnO9fWOrA8RdvF54Jq8mzN7priu16mSV6Q6CoE4UM1Hb5KqALPa56kr96Nq9j+qPofl5ZyW/sXVbfXLTb3PlGyWlcTpw8+mwc6LAfkTqcSDiYRrDNlCG8R1sjL43NwCjUdB7ASxG0T+aN7B66bijJunXannamLz4Ieewl3XulfTv+XVW8Ov8hwmv/uSi3ppfHTzn8HBL1BLBwizFFRzKQMAANUQAABQSwMEFAAICAgAYnESUQAAAAAAAAAAAAAAABYAAABnZW9nZWJyYV9qYXZhc2NyaXB0LmpzSyvNSy7JzM9TSE9P8s/zzMss0dBUqK7lAgBQSwcIRczeXRoAAAAYAAAAUEsDBBQACAgIAGJxElEAAAAAAAAAAAAAAAAMAAAAZ2VvZ2VicmEueG1s7RrtbtvI8XfuKRZEENg9WdrlckkqJ+UQBygaILkLztei6OF+rMSVxJoiVXJlS8E9QPseLfpefZLO7AdFWf5QnFzSFrVN7dfM7M73LOXRt5tlQa5U3eRVOQ5YnwZEldMqy8v5OFjr2VkafPviq9FcVXM1qSWZVfVS6nEgELLFg1FfDIc4J1ercTAtZNPk04CsCqkRZRxcByTPxkE8y7I4S7KzIU0mZxFPxZmMJuKMhkORzGaZTGQcELJp8udl9Z1cqmYlp+piulBL+aaaSm32W2i9ej4YXF9f9/3J+lU9H8DmzWDTZIP5fNKHNiDAXtmMA9d5DnT3sK+5wQspZYM/vn1j9znLy0bLcqoCgqyv8xdfPRld52VWXZPrPNMLEFQSioAsVD5fgDAYDAMyQLAViGSlpjq/Ug0gd4aGfb1cBQZMlrj+xPZI0XIWkCy/yjNVjwPaTyMeJWkY0zQeiljAHlWdq1I7WOb2HHhqo6tcXVuy2DM7CgZouqqKiUSa5BfCiKDwEDYkPRInMBMSJkgEMynMJITjnGAR4QRBGCdRBG2E0yzGNQH4ghLGYJqElIQhCRkJOQyFICImIkHEEGDjoSFG4UFoOA48HOc4h8fM8QieEHtASFgycAjBY9MTCA30RYjHN5M8JdEQNsIJkTDC4QwwTigBihzJM8NERAn+MRIh+TAhYUqAHvCNlCmI5ipv8kmhxsFMFg1oPC9nNZhdO270tlBGdm5ipyvWg1+AyN8DuKBg/NZIYIXSHj4xPBEuDPaVEu2rBDRAgbceNsw2eNw4tkvUzlFum9A2kW2EhYksemRBLbc0sjAR/1g2PZP8Q5hMO0wyZAKUgqc3DSd4bmbOj03khrEdGlOjjLrZFD+GOACZxKnpfCRP/FE8sc6uul7fu6ld3+3Z7shYKo7f8oNs9M49ebrHZcp70dDumTJ+yOZHSrflVHR2FbRn/sxzsCX/KD4fs2O854Wfe3cWpp9GxlF69J4RHSafhE+edA04DiFE0LCXpnFPiMNtE3pruLMtc+3nUf9o4FPkyJ2INAuEdc6s1bLBM/IhSTiJwzZdxpjQXM5MQpIIksSdzNnD3BmLXfrE5JnupU+RdnIoJNAYJxOTkGE/zIA2n4aRT6k9l1R/OUiqkAOjXRqEAyIpRgjkbBMefT6EU4RtRgwFJsUQAigk45DEGJDvSI5QuFVN3sp2oYpVqwUjxrxcrfWe6KbLzHd1BdCyMGWZg8+q6eV5K2xHSclGd8lCIbMrl2xhs1dNPRkVcqIKKE0v0BIIuZIFeq7ZYVaVmngriANDzpRuI7WeFnmWy/IPoHpfJX23Xk5UTUy3QiYNEUQnbY0Xib0ajw0t0LSq6uxi24CtkM2fVA3onPc5YxysOkqHdChAZlu7EvGkn7IQDND+MHDAZirRymkfhlQkYF5Q2/Eo5hgDt251mIT9IYt3P3ZzdXWhtAYRNERuVONFPq/zrNt/3ZxXRdYKd1XlpX4lV3pdm8IevKFGtl6W80IZYRo9Q/U7vZxUmwsjxTC2tH7crtDl7f6T+auqqGoCThiieOaundjWwODBWihqYKiBcKpCou06G4YGwrQT2xoo0LM9mmOUeS6p3yVviB3vGaKxkXHwGm4xSxiuy1y/sVNgmfn0cscuYlk78HLcJ8xuJfyj3JAfpH4E6dHghimOnJN4w1xWmbJGzbypFYVcNSrrmPposIc1ulR1qQoLXYJlrKt1Y8Gt8g2hdaPeSb14WWY/qDm49TuJkVXD8SzojvtMTfMlINp5pwuJdvJ7YNfOZmpeKy8texirKXdK0qxqJbNmoZRu9WXdpgtmmPHHH2kJsd/kjGUOYecMzGEpN6b+AVdbOZmMmmmdr9AByATi/6XaGXmWN0gi6zCOImmAtymGMlCRNnWb3Fj9ybVeVLW5c8EYWgwWGzh6g7dar28NgWoD2+uTzSkZk9eznyj519/+Tjbmc5gmokdon/VMlzwr9DduKaLg92Yt7NlBdzUVwq6GsGoG3VUGwQDyFi5HPTfqroc04cKs87DnRt11wdLI4nPYZEOezWGpM5n8DBZr/Hq2Lo10jLhUoZZwv7y5tBOFCZJg26Sa/Bni8g3XsAN1hRcco3OAuiMQEFmsFrI1jkJuMRp34rkh+f1s1ihNwArOGOBsoY27629bh3HhaZZvvLPsTHoXSfQCvBTuyuCUiRcAtZ3f5VmmbLqrVnKa6y3e8lNnuxA60SQM4adoCU+tecnmrVyZuFzqeksu1RYjjwb/kMVP/yum0tuAtRjWgSNE+gcBvv76T8sGDjc9csLIACuZ35DNaUvGAgCk5cmDcgCF4R6ogwBYy2FLFumKG3QdCAA7fj10fAtlDwLQjnsPnd4C7UEA2gqhhU4Q+sZBvJxOeGLYt8s/k6+JC2/eQiD2W9868LJyvVQ1vitzTjSRjYLkZVwNhL5We26x53z+UtDxvmPdrs98QQL3QMZiFt7riG9vZqamwJdUNlRTF6kTU+XAHpOmKtZaXUwhS5S7t3Y2PLjqKkTIDV6/jV9j3W6c14NBZM7fQ0JrXdnk1Jc22zzo3Yze6d4uoUGSMy4N9aWyub6FX4EQTJm0yyNd7R1kiJcuQ5w41YHbnHpypvKy1e2+2t1CS+LLRdYwMhrgt6q7m7wbBLfqgs/3rTANK1gzWhTRnT3I9/cJEkorJ0ro3ZNuT8B8nR/eEUkRIgSQkw05MzCnp+CT0OmLuwPsCUZYj2SADFYUM4N2Z+RFvMjjGSiDx6KYCkS8OyafYFD2mBbMoMJNIGGIene4RlThUS2YPW3CY3PcmxEKQ7mF/9pN2lOKOOTiUeUAquuBmORvercbLlyXHmG6B8Z5fNIXxyf94wP2LC9l8f+I/d8Usc99xPa6e0TIPv+YkB2nRsnYTGzzgVH7C8VsuFMvZZmR0ryX85VusHslJKm5MUm2K2SIDDtOQiTfu5lWa93iVRpDiq2b7EYPOp/DucP1tstJVeTTTmwghz55qLUDdTHBjb7wxc5Nr3SvdsQwplEcRemxaXdo7zPRfdeZWz0lvN9R9u4qrTwfSLu/bdXTpl+vsdPbXOGmGrokPlAXjw59DzJ17g2w5cmZ5LEsnd9fin9ujioIrXslkhc5VABddo/gzZP6z+BMq41mjq1nf1lX+ht8yTZ+avtQpPjzQtfO2c/bWEVawT7hY+O0v+xXZZbbTANI3/vM7WVtqir6aarwg5jdaFnrdxiFrTRe3Ro7Yhs6OH9YtP49vpMuJHyQ4S4YP2wqLYEbpgKUvoyxvPK5258M31JQ8aHp+9VDpeuvkb/vydEoT5OlgZd7EnX06MsV+kK452QhZUPiX2c3zqWO8Kjw+Mrn1/IT821PA4Y6a2tNENFb+7bYfwdkvzDcVZC3FrmmouXCllMHYhx0XyCbr5Tcvxu9+DdQSwcIB6ofYf4JAAA6JQAAUEsBAhQAFAAICAgAYnESURZ6fO3jBAAA6CUAABcAAAAAAAAAAAAAAAAAAAAAAGdlb2dlYnJhX2RlZmF1bHRzMmQueG1sUEsBAhQAFAAICAgAYnESUbMUVHMpAwAA1RAAABcAAAAAAAAAAAAAAAAAKAUAAGdlb2dlYnJhX2RlZmF1bHRzM2QueG1sUEsBAhQAFAAICAgAYnESUUXM3l0aAAAAGAAAABYAAAAAAAAAAAAAAAAAlggAAGdlb2dlYnJhX2phdmFzY3JpcHQuanNQSwECFAAUAAgICABicRJRB6ofYf4JAAA6JQAADAAAAAAAAAAAAAAAAAD0CAAAZ2VvZ2VicmEueG1sUEsFBgAAAAAEAAQACAEAACwTAAAAAA==",
    
};
    // is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
export const views = {'is3D': 0,'AV': 0,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};

// export function ggbFunctionf(x) {
//     return 0.05 * (x + 4) * (x - 1) * (x - 5);
// };

