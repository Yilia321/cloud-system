;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-data" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M924.001491 279.81694c-52.810903 0-95.642116 42.801828-95.642116 95.611591 0 30.714536 14.731096 57.746192 37.252942 75.250868L746.594883 688.747493c-11.768503-5.176906-24.710787-8.165983-38.401138-8.165983-7.186974 0-14.186675 0.798179-20.921329 2.301416L519.00533 288.659329c12.730451-16.238846 20.320624-36.696784 20.320624-58.930157 0-52.80874-42.817909-95.66378-95.642116-95.66378-52.82523 0-95.642116 42.85504-95.642116 95.66378 0 17.539468 4.727868 33.972742 12.971961 48.102554L130.390925 540.234041c-9.607192-3.229554-19.707638-5.390777-30.395486-5.390777-52.810903 0-95.642116 42.829458-95.642116 95.637174 0 52.822043 42.831213 95.624894 95.642116 95.624894s95.642116-42.802852 95.642116-95.624894c0-22.12081-7.831683-42.241057-20.453659-58.4666l225.686126-256.770038c12.881906 6.457062 27.421636 10.096962 42.813816 10.096962 10.351166 0 20.314484-1.64957 29.649465-4.689812l166.102705 389.094786c-16.640664 17.20587-26.884379 40.638559-26.884379 66.473971 0 52.782134 42.831213 95.639221 95.642116 95.639221s95.642116-42.857087 95.642116-95.639221c0-18.188244-5.2815-35.016515-14.175418-49.414433l127.243106-256.459976c2.402821 0.187265 4.669538 0.720408 7.098966 0.720408 52.810903 0 95.642116-42.829458 95.642116-95.638197S976.813418 279.81694 924.001491 279.81694zM99.995439 671.454642c-22.60269 0-40.989186-18.411325-40.989186-40.974203 0-22.600741 18.386496-40.98853 40.989186-40.98853 22.603713 0 40.990209 18.387789 40.990209 40.98853C140.985648 653.043317 122.599152 671.454642 99.995439 671.454642zM402.693628 229.729172c0-22.601764 18.386496-41.014112 40.990209-41.014112 22.60269 0 40.989186 18.412348 40.989186 41.014112 0 22.576181-18.386496 40.960901-40.989186 40.960901C421.080124 270.690072 402.693628 252.30433 402.693628 229.729172zM708.193745 817.208237c-22.60269 0-40.989186-18.413372-40.989186-40.98853s18.386496-40.98853 40.989186-40.98853c22.603713 0 40.990209 18.413372 40.990209 40.98853S730.797458 817.208237 708.193745 817.208237zM924.001491 416.415015c-22.60269 0-40.989186-18.385742-40.989186-40.987506 0-22.576181 18.386496-40.960901 40.989186-40.960901 22.603713 0 40.990209 18.385742 40.990209 40.960901C964.9917 398.030295 946.605204 416.415015 924.001491 416.415015z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-addnew" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M85.376 556.842667c4.608 46.890667 17.152 91.349333 35.712 132.48l-36.992 21.376C62.08 663.125333 47.616 611.413333 42.666667 556.842667L85.376 556.842667zM313.344 939.946667c47.573333 22.016 99.285333 36.437333 153.898667 41.386667l0-42.666667c-46.933333-4.608-91.392-17.152-132.522667-35.754667L313.344 939.946667zM467.242667 89.642667l0-42.666667C412.672 51.925333 360.917333 66.389333 313.344 88.362667l21.418667 36.992C375.936 106.794667 420.352 94.293333 467.242667 89.642667zM706.474667 88.405333c-47.573333-22.058667-99.328-36.48-153.898667-41.472l0 42.666667c46.890667 4.650667 91.392 17.194667 132.522667 35.797333L706.474667 88.405333zM42.666667 471.509333l42.666667 0C89.984 424.618667 102.528 380.16 121.130667 338.944L84.096 317.568C62.08 365.226667 47.616 416.896 42.666667 471.509333zM552.533333 938.666667l0 42.666667c54.613333-4.906667 106.325333-19.413333 153.898667-41.429333l-21.376-36.992C643.925333 921.514667 599.466667 934.058667 552.533333 938.666667zM898.645333 689.28l36.992 21.333333c22.016-47.530667 36.437333-99.2 41.386667-153.770667l-42.666667 0C929.749333 603.648 917.205333 648.106667 898.645333 689.28zM163.882667 763.178667 126.72 784.597333c30.890667 43.690667 69.034667 81.834667 112.725333 112.768l21.461333-37.162667C223.530667 833.237333 190.805333 800.512 163.882667 763.178667zM758.954667 860.117333l21.461333 37.162667c43.648-30.933333 81.749333-69.034667 112.64-112.725333l-37.12-21.461333C829.013333 800.469333 796.288 833.194667 758.954667 860.117333zM977.024 471.509333c-4.906667-54.570667-19.370667-106.282667-41.386667-153.856l-37.034667 21.376c18.602667 41.173333 31.104 85.632 35.754667 132.48L977.024 471.509333zM126.762667 243.669333l37.162667 21.461333c26.922667-37.333333 59.605333-70.058667 96.938667-96.938667L239.402667 130.986667C195.754667 161.877333 157.610667 200.021333 126.762667 243.669333zM780.373333 131.029333l-21.461333 37.162667c37.333333 26.922667 70.058667 59.605333 96.938667 96.938667l37.162667-21.461333C862.165333 200.021333 824.021333 161.92 780.373333 131.029333zM531.2 300.842667l-42.666667 0 0 192-192 0 0 42.666667 192 0 0 192 42.666667 0 0-192 192 0 0-42.666667-192 0L531.2 300.842667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-money" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.001949 0C228.783158 0 0 228.783158 0 511.001949s228.783158 511.001949 511.001949 511.001949 511.001949-228.783158 511.001949-511.001949S793.220741 0 511.001949 0zM511.001949 926.191033c-229.302144 0-415.189084-185.88694-415.189084-415.189084S281.699805 95.812865 511.001949 95.812865s415.189084 185.88694 415.189084 415.189084S740.304094 926.191033 511.001949 926.191033z"  ></path>' +
    '' +
    '<path d="M748.90729 246.518519l-173.740663 231.763337 136.89862 0 0 65.310441-159.506464 0 0 90.008203 159.506464 0 0 66.146807-159.506464 0 0 131.040062-82.055735 0 0-131.040062-165.369014 0 0-66.146807 165.369014 0 0-90.008203-165.369014 0 0-65.310441 141.086441 0L274.154542 246.518519l92.521294 0c80.383002 146.809263 129.219618 176.08209 146.529809 215.435228l1.674729 0L661.406191 246.518519 748.90729 246.518519z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontdengpaooff" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M716.408814 473.108183C716.437161 425.683977 700.619643 381.803123 674.001993 346.681431 650.672572 315.840106 618.952497 291.631934 582.243384 277.430185L582.413465 276.438047 566.737681 271.817517C554.548555 268.302514 541.99092 265.836341 529.149817 264.532388L527.335622 264.333961 527.278928 264.333961 527.222235 264.305614C520.929244 263.710331 514.381132 263.256782 507.577898 263.256782L506.58576 263.256782C499.75418 263.256782 493.206068 263.710331 486.941424 264.305614L486.828037 264.333961 484.957148 264.532388C472.144392 265.836341 459.586757 268.302514 447.425977 271.817517L432.260436 276.267966 432.40217 277.260104C395.49463 291.461854 363.604473 315.698372 340.133319 346.681431 313.544015 381.803123 297.726498 425.683977 297.726498 473.108183 297.726498 507.124349 303.622633 535.0743 312.750305 558.205293 326.498505 592.901783 347.446794 616.344591 364.284797 634.146385 372.703798 642.990588 380.130661 650.559185 385.148046 657.050603 390.307164 663.542022 392.773336 668.559406 393.510353 672.556306 397.167091 691.973868 397.563946 716.493855 397.563946 722.701805L397.563946 724.487654C397.563946 752.579338 420.298084 775.256782 448.361422 775.313476L565.802237 775.313476C593.893921 775.256782 616.599712 752.550991 616.599712 724.487654L616.599712 722.758499C616.571365 716.607242 616.968221 692.030561 620.653305 672.584653 621.163548 669.891706 622.354114 666.801905 624.706898 663.031779 628.732145 656.483667 636.329089 648.291441 645.768575 638.483446 659.82859 623.658067 677.743771 605.005869 691.973868 578.473259 706.260658 551.968996 716.465508 517.754402 716.380467 473.108183L716.408814 473.108183ZM668.417672 545.165762C657.192338 573.455874 640.354335 592.618315 624.111616 609.768132 616.004429 618.328867 608.067324 626.322666 601.122356 635.138523 594.262429 643.840992 588.139519 653.819068 585.786735 666.036541 581.336286 689.876204 581.166205 715.445023 581.137858 722.786845 581.137858 723.750637 581.137858 724.289226 581.137858 724.516 581.109512 732.991695 574.277932 739.851622 565.802237 739.851622L448.361422 739.851622C444.052707 739.851622 440.339276 738.150814 437.504595 735.34448 434.698262 732.5098 433.0258 728.796368 433.0258 724.516 433.0258 724.289226 433.0258 723.72229 433.0258 722.730152 432.997453 715.331635 432.799026 689.819511 428.348577 666.036541 426.846196 657.957701 423.557967 650.729266 419.561067 644.322888 412.502713 633.1259 403.431735 623.884841 394.105636 613.991806 380.017274 599.279814 365.078507 583.377256 353.456317 561.720297 341.862474 540.034991 333.245045 512.481896 333.216698 473.108183 333.245045 433.592736 346.284575 397.337172 368.395084 368.111616 390.533939 338.914406 421.630384 316.860591 457.545787 306.117152L461.967888 304.756505C470.642011 302.517108 479.542908 300.759606 488.698926 299.795814L488.75562 299.795814 490.456428 299.597387C495.842321 299.087144 501.029786 298.746983 506.188905 298.718636L507.096003 298.803676 508.031447 298.746983C513.133872 298.746983 518.378031 299.087144 523.735577 299.597387L523.650537 299.597387 525.436386 299.795814 525.464733 299.795814C534.592404 300.759606 543.493301 302.488761 552.139077 304.756505L556.617872 306.117152C592.533274 316.860591 623.62972 338.914406 645.768575 368.111616 667.850736 397.337172 680.918614 433.592736 680.918614 473.108183 680.918614 503.12745 675.901229 526.258443 668.417672 545.165762ZM529.12147 264.532388 529.206511 264.532388 529.12147 264.532388ZM484.957148 264.532388C484.957148 264.532388 484.985494 264.532388 485.013841 264.532388L484.957148 264.532388ZM565.320341 789.20341 448.843317 789.20341C436.795925 789.20341 426.98793 798.926365 426.98793 811.058797 426.98793 823.077843 436.795925 832.885838 448.843317 832.885838L565.320341 832.885838C577.367733 832.885838 587.175728 823.077843 587.175728 811.058797 587.175728 798.926365 577.367733 789.20341 565.320341 789.20341ZM565.320341 844.3096 448.843317 844.3096C436.795925 844.3096 426.98793 854.089248 426.98793 866.108294 426.98793 878.21238 436.795925 887.992027 448.843317 887.992027L565.320341 887.992027C577.367733 887.992027 587.175728 878.21238 587.175728 866.108294 587.175728 854.089248 577.367733 844.3096 565.320341 844.3096ZM517.272506 899.840992 457.290665 899.840992C457.290665 900.521315 457.177278 901.144945 457.177278 901.825269 457.177278 913.901008 475.716089 923.680656 492.83756 923.680656L521.297752 923.680656C538.475916 923.680656 556.958033 913.901008 556.958033 901.825269 556.958033 901.144945 556.872993 900.521315 556.872993 899.840992L517.300853 899.840992 517.272506 899.840992Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-save2" viewBox="0 0 1085 1024">' +
    '' +
    '<path d="M963.764706 0 120.470588 0C53.970824 0 0 53.970824 0 120.470588l0 783.058824c0 66.499765 53.970824 120.470588 120.470588 120.470588l843.294118 0c66.499765 0 120.470588-53.970824 120.470588-120.470588L1084.235294 120.470588C1084.235294 53.970824 1030.264471 0 963.764706 0zM240.941176 60.235294c15.058824 0 586.330353 0 602.352941 0l0 391.529412C843.294118 468.389647 829.741176 481.882353 813.176471 481.882353l-542.117647 0C254.433882 481.882353 240.941176 468.389647 240.941176 451.764706L240.941176 60.235294zM1024 903.529412c0 33.310118-26.925176 60.235294-60.235294 60.235294L120.470588 963.764706c-33.310118 0-60.235294-26.925176-60.235294-60.235294L60.235294 120.470588c0-33.249882 26.925176-60.235294 60.235294-60.235294l60.235294 0 0 421.647059c0 33.249882 26.925176 60.235294 60.235294 60.235294l602.352941 0c33.310118 0 60.235294-26.985412 60.235294-60.235294L903.529412 60.235294l60.235294 0c33.310118 0 60.235294 26.985412 60.235294 60.235294L1024 903.529412z"  ></path>' +
    '' +
    '<path d="M692.705882 361.411765C709.270588 361.411765 722.823529 347.919059 722.823529 331.294118l0-120.470588C722.823529 194.198588 709.270588 180.705882 692.705882 180.705882S662.588235 194.198588 662.588235 210.823529l0 120.470588C662.588235 347.919059 676.141176 361.411765 692.705882 361.411765z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-down" viewBox="0 0 1821 1024">' +
    '' +
    '<path d="M208.935 155.243l703.125 703.125 703.125-703.125h-1406.249z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-balance2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M992 597.12c0-4.16-1.152-8.064-3.168-11.376l-129.024-261.68c21.536-11.808 36.16-34.64 36.16-60.832 0-38.256-31.152-69.36-69.472-69.36L590.752 193.872 590.752 121.056c0-42.656-34.784-77.344-77.504-77.344-42.736 0-77.488 34.688-77.488 77.344l0 72.816L200 193.872c-38.32 0-69.488 31.104-69.488 69.344 0 26.672 15.184 49.84 37.36 61.44L34.384 587.152c-0.144 0.32-0.256 0.624-0.384 0.944S33.712 588.72 33.6 589.024c-0.464 1.152-0.848 2.336-1.104 3.568-0.032 0.128-0.032 0.288-0.064 0.432-0.224 1.184-0.336 2.368-0.352 3.6 0 0.16-0.048 0.32-0.048 0.496 0 0.256 0.016 0.496 0.016 0.784 0 0.064 0 0.096 0 0.16 0.512 90.4 74.336 163.808 165.024 163.808 90.624 0 164.384-73.28 165.024-163.6 0.016-0.4 0.112-0.784 0.112-1.152 0-4.16-1.152-8.064-3.184-11.376l-124.832-253.152 201.568 0L435.76 825.6l-36.624 0c-42.72 0-77.488 34.688-77.488 77.344s34.768 77.344 77.488 77.344l228.208 0c42.736 0 77.504-34.688 77.504-77.344S670.08 825.6 627.344 825.6l-36.592 0L590.752 332.592l202.928 0-129.488 254.56c-0.16 0.32-0.256 0.592-0.368 0.912-0.16 0.32-0.32 0.656-0.432 0.976-0.448 1.152-0.848 2.336-1.088 3.536-0.032 0.16-0.032 0.32-0.08 0.464-0.24 1.184-0.336 2.368-0.352 3.6 0 0.16-0.048 0.32-0.048 0.496 0 0.256 0.016 0.496 0.016 0.784 0 0.064 0 0.096 0 0.16 0.528 90.4 74.336 163.808 165.056 163.808 90.608 0 164.384-73.312 165.008-163.632C991.904 597.872 992 597.504 992 597.12L992 597.12zM197.056 717.936c-59.232 0-108.672-42.688-119.04-98.848l238.08 0C305.728 675.248 256.304 717.936 197.056 717.936L197.056 717.936zM89.872 575.152l109.104-214.528 105.792 214.528L89.872 575.152 89.872 575.152zM660.816 902.944c0 18.432-15.008 33.44-33.472 33.44L399.136 936.384c-18.464 0-33.472-15.008-33.472-33.44 0-18.4 15.008-33.408 33.472-33.408l228.208 0C645.808 869.536 660.816 884.528 660.816 902.944L660.816 902.944zM568.72 288.656c-12.144 0-22 9.824-22 21.968L546.72 825.6l-66.944 0L479.776 310.608c0-12.128-9.856-21.968-22.016-21.968L200 288.64c-14.032 0-25.472-11.408-25.472-25.408 0-14.016 11.424-25.424 25.472-25.424l257.744 0c12.16 0 22.016-9.84 22.016-21.968L479.76 121.056c0-18.416 15.008-33.408 33.472-33.408s33.472 15.008 33.472 33.408l0 94.784c0 12.128 9.84 21.968 22 21.968l257.744 0c14.032 0 25.472 11.392 25.472 25.424 0 14-11.44 25.408-25.472 25.408L568.72 288.64 568.72 288.656zM828.768 360.64l105.76 214.528-214.88 0L828.768 360.64 828.768 360.64zM826.864 717.936c-59.232 0-108.672-42.688-119.04-98.848l238.096 0C935.536 675.248 886.096 717.936 826.864 717.936L826.864 717.936z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontdiannao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M916.102594 769.944793 699.460486 769.944793l-57.770751 0 0 72.214718 57.770751 57.770751 0 14.443967-375.512443 0L323.948043 899.92924l57.770751-57.770751 0-72.214718-57.770751 0L107.305935 769.94377c-23.930015 0-43.327808-19.399839-43.327808-43.330878L63.978127 148.905378c0-23.931039 19.397792-43.328831 43.327808-43.328831l808.79666 0c23.931039 0 43.329854 19.397792 43.329854 43.328831l0 577.708538C959.432449 750.544955 940.033633 769.944793 916.102594 769.944793zM901.660674 163.347299 121.748878 163.347299l0 491.057015 779.911796 0L901.660674 163.347299z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-play" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M960 1024 64 1024C28.64 1024 0 995.36 0 960L0 64C0 28.64 28.64 0 64 0L960 0C995.36 0 1024 28.64 1024 64L1024 960C1024 995.36 995.36 1024 960 1024ZM960 64 64 64 64 960 960 960 960 64ZM352 799.36C352.704 607.776 352.704 416.224 352 224.64 458.304 321.408 564.992 417.184 672 512 564.992 606.816 458.304 702.592 352 799.36Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shuaxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M891.393331 411.414117 605.095793 411.414117l107.010199-107.306958c-54.076616-54.220902-125.968993-84.083024-202.438619-84.083024-76.472696 0-148.370189 29.862121-202.445782 84.083024-54.070476 54.223972-83.850733 126.318964-83.850733 203.00246 0 76.679403 29.780257 148.773372 83.850733 202.998367 54.076616 54.216809 125.973086 84.080977 202.445782 84.080977 76.470649 0 148.365072-29.864168 202.441689-84.08507 4.51585-4.52813 8.840342-9.188266 13.010315-13.957897l71.811536 63.008033c-69.964468 80.122829-172.715667 130.730437-287.263539 130.730437-210.822566 0-381.729028-171.378206-381.729028-382.77587 0-211.406874 170.906461-382.780986 381.729028-382.780986 105.409748 0 200.831005 42.859134 269.905196 112.131847l111.819738-112.131847L891.392308 411.414117z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-data1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 457.387c67.413 0 130.418-6.115 189.013-18.347 58.595-12.231 104.818-30.293 138.667-54.187v72.533c0 19.627-14.649 37.831-43.947 54.613-29.298 16.782-69.12 30.080-119.467 39.893-50.347 9.813-105.102 14.72-164.267 14.72-59.165 0-113.92-4.907-164.267-14.72-50.347-9.813-90.169-23.111-119.467-39.893-29.298-16.782-43.947-34.987-43.947-54.613v-72.533c33.849 23.893 80.071 41.955 138.667 54.187 58.595 12.231 121.6 18.347 189.013 18.347v0zM512 785.067c67.413 0 130.418-6.115 189.013-18.347 58.595-12.231 104.818-30.293 138.667-54.187v72.533c0 19.627-14.649 37.831-43.947 54.613s-69.12 30.080-119.467 39.893c-50.347 9.813-105.102 14.72-164.267 14.72-59.165 0-113.92-4.907-164.267-14.72-50.347-9.813-90.169-23.111-119.467-39.893-29.298-16.782-43.947-34.987-43.947-54.613v-72.533c33.849 23.893 80.071 41.955 138.667 54.187 58.595 12.231 121.6 18.347 189.013 18.347v0zM512 621.227c67.413 0 130.418-6.115 189.013-18.347 58.595-12.231 104.818-30.293 138.667-54.187v72.533c0 19.627-14.649 37.831-43.947 54.613s-69.12 30.080-119.467 39.893c-50.347 9.813-105.102 14.72-164.267 14.72-59.165 0-113.92-4.907-164.267-14.72-50.347-9.813-90.169-23.111-119.467-39.893-29.298-16.782-43.947-34.987-43.947-54.613v-72.533c33.849 23.893 80.071 41.955 138.667 54.187 58.595 12.231 121.6 18.347 189.013 18.347v0zM512 129.707c59.165 0 113.92 4.907 164.267 14.72 50.347 9.813 90.169 23.111 119.467 39.893 29.298 16.782 43.947 34.987 43.947 54.613v54.613c0 19.627-14.649 37.831-43.947 54.613s-69.12 30.080-119.467 39.893c-50.347 9.813-105.102 14.72-164.267 14.72-59.165 0-113.92-4.907-164.267-14.72-50.347-9.813-90.169-23.111-119.467-39.893-29.298-16.782-43.947-34.987-43.947-54.613v-54.613c0-19.627 14.649-37.831 43.947-54.613s69.12-30.080 119.467-39.893c50.347-9.813 105.102-14.72 164.267-14.72v0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dizhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.998977 65.290005c-173.638689 0-314.904063 138.294716-314.904063 308.281225 0 77.603449 31.020504 185.005574 85.10633 294.67023 53.746088 108.971877 124.852566 209.287607 195.185424 275.377838 8.955976 9.602705 21.51092 15.08865 34.612309 15.08865 12.913101 0 25.359574-5.358031 34.296107-14.736633 149.549038-140.014894 280.608979-406.358985 280.608979-570.401108C826.904063 203.584722 685.637666 65.290005 511.998977 65.290005zM517.467525 914.127613l-1.128707 1.13894c-0.816598 0.8913-2.232854 1.952468-4.339842 1.952468-2.245134 0-3.695159-1.251503-4.361331-1.997494l-1.294482-1.327228C366.207519 782.579555 238.584863 525.041014 238.584863 373.572254c0-147.109476 122.652458-266.791276 273.414113-266.791276 150.761656 0 273.415137 119.6818 273.415137 266.791276C785.414113 525.483082 657.700383 783.130094 517.467525 914.127613z"  ></path>' +
    '' +
    '<path d="M513.044796 181.616384c-91.091648 0-165.199483 74.112951-165.199483 165.210739 0 91.076298 74.107835 165.172877 165.199483 165.172877 91.083461 0 165.184133-74.096579 165.184133-165.172877C678.228929 255.729336 604.128257 181.616384 513.044796 181.616384zM513.044796 470.51005c-68.213591 0-123.709533-55.484685-123.709533-123.682927 0-68.219731 55.495942-123.720789 123.709533-123.720789 68.205405 0 123.694183 55.501058 123.694183 123.720789C636.738979 415.025365 581.2502 470.51005 513.044796 470.51005z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-clouddisk" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M729.088 287.36c-25.344-32.768-58.24-59.84-95.04-78.336C595.264 189.568 553.536 179.776 510.016 179.776c-73.92 0-143.488 28.8-195.776 81.088C263.68 311.424 235.136 378.112 233.216 449.216L233.152 449.216c-52.672 0-102.208 20.608-139.52 57.984-37.376 37.376-57.984 86.912-57.984 139.52s20.608 102.144 57.984 139.52 86.912 57.984 139.52 57.984l199.104 0c17.344 0 31.552-14.144 31.552-31.488 0-17.408-14.208-31.616-31.552-31.616L233.152 781.12c-35.776 0-69.44-14.016-94.912-39.488s-39.488-59.2-39.488-94.848c0-35.776 14.016-69.504 39.488-94.976s59.2-39.488 94.912-39.488l32.64 0c8.832 0 17.344-3.776 23.424-10.432C295.168 495.232 298.048 486.4 297.216 477.76 296.512 470.464 296.192 463.424 296.192 456.768c0-57.088 22.272-110.784 62.656-151.168 40.384-40.384 94.144-62.656 151.168-62.656 33.664 0 65.856 7.616 95.744 22.592 28.48 14.4 53.952 35.264 73.408 60.48 6.016 7.808 15.04 12.224 25.024 12.224 6.976 0 13.632-2.304 19.264-6.592 6.656-5.12 10.944-12.608 12.032-20.928S734.272 294.016 729.088 287.36L729.088 287.36z"  ></path>' +
    '' +
    '<path d="M944.832 698.752 508.8 698.752c-24 0-43.584 18.56-43.584 41.344 0 22.848 19.584 53.248 43.584 53.248l430.08 0 5.952 0c24 0 43.584-30.4 43.584-53.248C988.352 717.312 968.832 698.752 944.832 698.752zM900.16 768.896c-13.376 0-24.128-10.176-24.128-22.784 0-12.544 10.752-22.784 24.128-22.784s24.192 10.24 24.192 22.784C924.352 758.656 913.536 768.896 900.16 768.896z"  ></path>' +
    '' +
    '<path d="M894.272 709.12"  ></path>' +
    '' +
    '<path d="M908.48 462.272C908.096 459.52 907.392 456.896 906.24 454.4l-0.576-2.24-0.512 0c-5.184-9.92-14.976-16.96-26.688-17.984L878.464 434.048 572.736 434.048c-12.928 0-24.192 7.36-29.76 18.112L542.528 452.16 541.888 454.4C540.864 456.832 540.16 459.392 539.712 462.08l-62.656 218.88c9.088-3.008 18.624-4.992 28.736-4.992l436.544 0c10.112 0 19.776 1.984 28.736 4.992L908.48 462.272 908.48 462.272z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)