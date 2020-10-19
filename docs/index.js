URLS=[
"index.html",
"plot.html",
"text.html",
"colors.html",
"decorators.html",
"cmaps/index.html",
"gallery.html",
"style.html"
];
INDEX=[
{
"ref":"prettypyplot",
"url":0,
"doc":"                        prettypyplot The documentation including an gallery can be found [here](https: braniii.gitlab.io/prettypyplot). This is a wrapper package for matplotlib to achieve more easily pretty figures. If you are looking for something complete, this project is nothing for you but maybe [seaborn](https: seaborn.pydata.org/). The main aspect of this project is to help me syncing my rcParams files and to stop copy-pasting so much code. The aim of this project is to simplify the generation of some simple pre-defined figures. Almost all code is inspired or taken from the [matplotlib gallery](https: matplotlib.org/gallery/index.html). If you are a power user or interested in generating complex figures, this packages is not ment for you and you should better take a look in the matplotlib gallery directly. This project is in an alpha stage, hence it is neither stable nor ready for production. >  CAUTION : > Starting from version 1.0.0 (which is far in the future) API-breaking > changes will be made only in major releases. Until then, it can be changed > in every minor release (see [changelog]( changelog .  Features The most notable features are: - figsize specifies size of canvas. So labels, ticks or colorbars are not counted. - Nice top-aligned outter legends - New colors  Usage This package uses an syntax very close to matplotlib. Hence, it should be straight forward to use it. Instead of calling a function on the axes itself, one needs to pass here the axes as an argument (args or kwargs).  Installation   python3 -m pip install prettypyplot    Usage   import matplotlib.pyplot as plt import prettypyplot as pplt pplt.use_style() fig, ax = plt.subplots()  . pplt.plot(ax=ax, x, y) pplt.savefig(output)    Known Bugs -  plt.subplots_adjust() does not work with  pplt.savefig(use_canvas_size=True) If you find one, please open an issue. -  pplt.savefig(use_canvas_size=True) is not compatible with a grid of subplots  Known Workarounds The method  pyplot.subplots_adjust() is not compatible with the option  use_canvas_size in  prettypyplot.plot.savefig , use instead:    this doesn't work, use instead gridspec fig.subplots_adjust(hspace=0)  use this instead fig, axs = plt.subplots( ., gridspec_kw={'hspace': 0.000})    Comparison to  matplotlib     matplotlib.pyplot.plot      prettypyplot.plot        matplotlib.pyplot.legend      prettypyplot.legend        matplotlib.pyplot.imshow      prettypyplot.imshow        matplotlib.pyplot.colorbar      prettypyplot.colorbar       Roadmap: The following list is sorted from  near future to  hopefully ever . - add more colorpalettes - enforce simplicity by refactoring - add countour line plot - add [axes_grid](https: matplotlib.org/3.1.1/tutorials/toolkits/axes_grid.html) examples - add more gallery entries - add package to conda_forge - improve  plt.suplots() behaviour together with  pplt.savefig() - setup widths and scaling factors for beamer and poster mode - tweak all function to enable  STYLE='minimal' - add pytest - add search functionality in doc - implement tufte style  Building Documentation: The doc is based on [pdoc](https: pdoc3.github.io/pdoc/) and can be created by simply running  bash create_doc.sh from the docs folder.  Similar Projects - [seaborn](https: seaborn.pydata.org/)  Credits: In alphabetical order: - [colorcyclepicker](https: colorcyclepicker.mpetroff.net/) - [coolors](https: coolors.co/) - [matplotlib](https: matplotlib.org/) - [prettyplotlib](https: github.com/olgabot/prettyplotlib) - [realpython](https: realpython.com/) - [viscm](https: github.com/matplotlib/viscm)"
},
{
"ref":"prettypyplot.plot",
"url":1,
"doc":"Wrapper for matplotlib plotting functions. BSD 3-Clause License Copyright (c) 2020, Daniel Nagel All rights reserved."
},
{
"ref":"prettypyplot.plot.imshow",
"url":1,
"doc":"Display an image, i.e. data on a 2D regular raster. This is a wrapper of pyplot.imshow(). In contrast to the original function the default value of  zorder is increased to  1 . Parameters      ax : matplotlib axes, optional Matplotlib axes to plot in. args, kwargs See [pyplot.imshow()](MPL_DOC.pyplot.imshow.html)",
"func":1
},
{
"ref":"prettypyplot.plot.plot",
"url":1,
"doc":"Plot simple lineplot. Wrapping pyplot.plot() to adjust to style. For more information on the arguments see in matplotlib documentation. If STYLE='minimal', spines will be limited to plotting range. Parameters      ax : matplotlib axes Matplotlib axes to plot in. args, kwargs See [pyplot.plot()](MPL_DOC.pyplot.plot.html)",
"func":1
},
{
"ref":"prettypyplot.plot.savefig",
"url":1,
"doc":"Save figure as png and pdf. This methods corrects figsize for poster/beamer mode. Parameters      fname : str Output filename. If no file ending, pdf will be used. use_canvas_size : bool, optional If True the specified figsize will be used as canvas size. kwargs See [pyplot.savefig()](MPL_DOC.pyplot.savefig.html)",
"func":1
},
{
"ref":"prettypyplot.plot.legend",
"url":1,
"doc":"Generate a nice legend. This is a wrapper of pyplot.legend(). Take a look there for the default arguments and options. The ticks and labels are moved to the opposite side. For  top and  bottom the default value of columns is set to the number of labels, for all other options to 1. In case of many labels this parameter needs to be adjusted.  todo Use handles and labels from  args if provided Parameters      outside : str or bool False, 'top', 'right', 'bottom' or 'left'. axs : list of mpl.axes.Axes List of axes which are used for extracting all labels. ax : mpl.axes.Axes Axes which is used for placing legend. args, kwargs See [pyplot.legend()](MPL_DOC.pyplot.legend.html) Returns    - leg Matplotlib legend handle. Examples      Legend This is an example of using  prettypyplot.plot.legend .  warning This is not yet correctly implemented for  STYLE='minimal' .     ~ IMPORT                                  import matplotlib.pyplot as plt import numpy as np import prettypyplot as pplt   ~ DEFINE DATA                               ~ np.random.seed(1337) N = 500 t = np.linspace(0, 3  np.pi, N) x1, x2, x3 = [np.sin(t + np.pi  np.random.rand( + 0.1  np.random.rand(N) for _ in range(3)] for style in ['default', 'minimal']: pplt.setup_pyplot(style=style)  legend for outside in ['top', 'bottom', 'left', 'right', False]: fig, ax = plt.subplots() pplt.plot(t, x1, label='$x_1$') pplt.plot(t, x2, label='$x_2$') pplt.plot(t, x3, label='$x_3$') pplt.legend(title='function:', outside=outside) pplt.savefig(f'gallery/legend/{style}_plot_legend_{outside}.png') plt.close()   ![default](gallery/legend/default_plot_legend_False.png) ![right](gallery/legend/default_plot_legend_right.png) ![top](gallery/legend/default_plot_legend_top.png)",
"func":1
},
{
"ref":"prettypyplot.plot.activate_axis",
"url":1,
"doc":"Shift the specified axis to the opposite side. Parameters      pos : str or list of str Specify axis to flip, one of ['left', 'right', 'top', 'bottom']. ax : matplotlib axes Matplotlib axes to flip axis.",
"func":1
},
{
"ref":"prettypyplot.plot.colorbar",
"url":1,
"doc":"Generate colorbar of same height as image. Wrapper around pyplot.colorbar which corrects the height. Parameters      im : matplotlib.axes.AxesImage Specify the object the colorbar belongs to, e.g. the return value of pyplot.imshow(). width : str or float, optional The width between figure and colorbar stated relative as string ending with '%' or absolute value in inches. pad : str or float, optional The width between figure and colorbar stated relative as string ending with '%' or absolute value in inches. position : str, optional Specify the position relative to the image where the colorbar is plotted, choose one of ['left', 'top', 'right', 'bottom'] label : str, optional Specify the colorbar label. kwargs Colorbar properties of [pyplot.colorbar()](MPL_DOC.pyplot.colorbar.html)",
"func":1
},
{
"ref":"prettypyplot.plot.grid",
"url":1,
"doc":"Generate grid. This function will add a major and minor grid in case of STYLE='default', a major grid in case of 'none' and otherwise nothing. Parameters      ax : matplotlib axes Axes to plot grid. args, kwargs See [pyplot.grid()](MPL_DOC.pyplot.grid.html)",
"func":1
},
{
"ref":"prettypyplot.plot.hide_empty_axes",
"url":1,
"doc":"Hide empty axes. Loop over all axes and hide empty ones. Parameters      axs : mpl.axes.Axes or list of Specify axes to check for empty state. Default use all of current figure.",
"func":1
},
{
"ref":"prettypyplot.plot.label_outer",
"url":1,
"doc":"Only show outer labels and tick labels. This checks for outest visible axes only. Works only with single Gridspec. Parameters      axs : list of mpl.axes.AxesSubplot",
"func":1
},
{
"ref":"prettypyplot.text",
"url":2,
"doc":"Plot text. BSD 3-Clause License Copyright (c) 2020, Daniel Nagel All rights reserved. Author: Daniel Nagel"
},
{
"ref":"prettypyplot.text.text",
"url":2,
"doc":"Generate text object at (x,y). Wrapper around pyplot.text. The default alignment is changed to centered. Parameters      x, y : scalars The position to place the text. By default, this is in data coordinates. The coordinate system can be changed using the  transform parameter. s : str The text. contour : bool or tuple(scalar, color) Add a contour to the text. Either use a boolean for default values, or give a tuple with linewidth and linecolor. ax : matplotlib axes Matplotlib axes to plot in. kwargs Text properties of [pyplot.text()](MPL_DOC.pyplot.text.html)",
"func":1
},
{
"ref":"prettypyplot.text.figtext",
"url":2,
"doc":"Generate text object at figure position (x,y). Wrapper around pyplot.figtext. The default alignment is changed to centered. Parameters      x, y : scalars The position to place the text. By default, this is in data coordinates. The coordinate system can be changed using the  transform parameter. s : str The text. contour : bool or tuple(scalar, color) Add a contour to the text. Either use a boolean for default values, or give a tuple with linewidth and linecolor. ax : matplotlib axes Matplotlib axes to plot in. kwargs Text properties of [pyplot.figtext()](MPL_DOC.pyplot.figtext.html)",
"func":1
},
{
"ref":"prettypyplot.text.add_contour",
"url":2,
"doc":"Draw contour around txt. Parameters      txt : matplotlib.text.Text Instance of matplotlib text. Can be obtained by, e.g.,  txt = plt.text() or  txt = plt.figtext() . contourwidth : scalar Width of contour. contourcolor : RGB color or matplotlib predefined color, optional Color of contour, default is white.",
"func":1
},
{
"ref":"prettypyplot.colors",
"url":3,
"doc":"Set-up matplotlib environment. BSD 3-Clause License Copyright (c) 2020, Daniel Nagel All rights reserved."
},
{
"ref":"prettypyplot.colors.load_cmaps",
"url":3,
"doc":"Load and include custom colormaps to matplotlib. Add sequential colormaps 'pastel5', 'pastel6', 'cbf4', 'cbf5', 'cbf8', and 'ufcd' as an corporate design. Except of 'ufcd' all palettes should be 'color-blind-friendly'. Add continuous colormaps macaw, Turbo. The Copyright of those are given on top of the data.  see  prettypyplot.cmaps ",
"func":1
},
{
"ref":"prettypyplot.colors.load_colors",
"url":3,
"doc":"Load and include custom colors to matplotlib. Add colors of 'pastel5' which can be accessed via 'pplt:blue', 'pplt:red', 'pplt:green', 'pplt:orange', 'pplt:lightblue'. Further, the current colors will be added 'pplt:axes', 'pplt:text', 'pplt:grid'.  see  prettypyplot.cmaps ",
"func":1
},
{
"ref":"prettypyplot.colors.categorical_cmap",
"url":3,
"doc":"Generate categorical colors of given cmap. Exract from a predefined colormap colors and generate for each the desired number of shades. Parameters      nc : int Number of colors nsc : int Number of shades per colors cmap : mpl colormap, optional Matplotlib colormap to take colors from. The default is the active color cycle. return_colors : bool, optional Return an array of rgb colors. Each color together with its shades are in an own row. Returns    - scolors : mpl colormap Return discrete colormap. If return_colors, a 2d representation will be returned instead.",
"func":1
},
{
"ref":"prettypyplot.colors.categorical_color",
"url":3,
"doc":"Generate categorical shades of given colors. Generate for each provided color the number of specified shades. The shaded colors are interpolated linearly in HSV colorspace. This function is based on following post: https: stackoverflow.com/a/47232942 Parameters      nsc : int Number of shades per color. color : RGB color or matplotlib predefined color Color used for generating shades. return_hex : bool, optional Return colors in hex format instead of rgb. Returns    - colors_rgb : list of RGB colors A list containing shaded colors. Where the list is sorted from the original color at the beginning to the most shaded one at the end. The default color encoding is rgb and hex if specified.",
"func":1
},
{
"ref":"prettypyplot.colors.text_color",
"url":3,
"doc":"Select textcolor with maximal contrast on background. All parameters needs to be colors accepted by matplotlib, see [matplotlib.colors](https: matplotlib.org/api/colors_api.html). The formulas are taken from W3C [WCAG 2.1](https: www.w3.org/TR/WCAG21) (Web Content Accessibility Guidelines). Parameters      bgcolor : matplotlib color Background color to which the contrast is maximized. colors : list of matplotlib colors, optional Selection of textcolors to choose from. Returns    - color : matplotlib color Color of colors which has the highest contrast on the given bgcolor.",
"func":1
},
{
"ref":"prettypyplot.decorators",
"url":4,
"doc":"Decorators for prettypyplot. BSD 3-Clause License Copyright (c) 2020, Daniel Nagel All rights reserved."
},
{
"ref":"prettypyplot.decorators.copy_doc",
"url":4,
"doc":"Copy docstring from source.",
"func":1
},
{
"ref":"prettypyplot.decorators.copy_doc_params",
"url":4,
"doc":"Copy parameters from docstring source. The docstring needs to be formatted according to numpy styleguide.  todo Catch if after parameters is further docstring",
"func":1
},
{
"ref":"prettypyplot.decorators.deprecated",
"url":4,
"doc":"Add deprecated warning.",
"func":1
},
{
"ref":"prettypyplot.cmaps",
"url":5,
"doc":" Colormaps This module defines some perceptually uniform sequential and several qualitative colormaps. All of them can be loaded into matplotlib by  prettypyplot.colors.load_cmaps or simply using the setup function  prettypyplot.style.use_style . With  prettypyplot.colors.load_colors the colors of  pastel5 ( 'pplt:blue' ,  'pplt:red' ,  'pplt:green' ,  'pplt:orange' ,  'pplt:lightblue' ), axes  'pplt:axes' , grid  'pplt:grid' and textcolor  'pplt:text' can be accessed easily. The qualitative colors  'pastel_autumn' ,  'pastel_spring' ,  'pastel_rainbow' are neither cbf friendly nor suited for black-white.  warning  macaw ,  pastel5 ,  pastel6 ,  ufcd and  turbo will be only modified slightly in future relases. All others will probably change dramatically.  viridis and  jet are only included here for comparsion. Both,  macaw and  bownair are modified versions of  viridis . While  turbo tries to be a better  jet (see [here](https: ai.googleblog.com/2019/08/turbo-improved-rainbow-colormap-for.html . ![Perceptually Uniform Sequential]( /gallery/cmaps/Perceptually Uniform Sequential.png) ![Qualitative]( /gallery/cmaps/Qualitative.png) For more colormaps see [matplolib colormaps](https: matplotlib.org/tutorials/colors/colormaps.html)."
},
{
"ref":"prettypyplot.gallery",
"url":6,
"doc":" Gallery  Legend This is an example of using  prettypyplot.plot.legend .  warning This is not yet correctly implemented for  STYLE='minimal' .     ~ IMPORT                                  import matplotlib.pyplot as plt import numpy as np import prettypyplot as pplt   ~ DEFINE DATA                               ~ np.random.seed(1337) N = 500 t = np.linspace(0, 3  np.pi, N) x1, x2, x3 = [np.sin(t + np.pi  np.random.rand( + 0.1  np.random.rand(N) for _ in range(3)] for style in ['default', 'minimal']: pplt.setup_pyplot(style=style)  legend for outside in ['top', 'bottom', 'left', 'right', False]: fig, ax = plt.subplots() pplt.plot(t, x1, label='$x_1$') pplt.plot(t, x2, label='$x_2$') pplt.plot(t, x3, label='$x_3$') pplt.legend(title='function:', outside=outside) pplt.savefig(f'gallery/legend/{style}_plot_legend_{outside}.png') plt.close()   ![default](gallery/legend/default_plot_legend_False.png) ![right](gallery/legend/default_plot_legend_right.png) ![top](gallery/legend/default_plot_legend_top.png)  Colorbar This is an example of using  prettypyplot.plot.colorbar .  warning This is not yet correctly implemented for  STYLE='minimal' .     ~ IMPORT                                  import matplotlib.pyplot as plt import numpy as np import prettypyplot as pplt   ~ DEFINE DATA                               ~ np.random.seed(1337) n = 1000000 x = np.random.standard_normal(n) y = x + .5  np.random.standard_normal(n) hist, xedges, yedges = np.histogram2d(x, y, bins=100, density=True) hist[hist  0] = None for style in ['default', 'minimal']: pplt.setup_pyplot(style=style)  legend for position in ['top', 'bottom', 'left', 'right']: fig, ax = plt.subplots() im = pplt.imshow(hist, extent=[x.min(), x.max(), y.min(), y.max()]) pplt.colorbar(im, label=r'$P(x,y)$', position=position) pplt.savefig(f'gallery/colorbar/{style}_plot_colorbar_{position}.png') plt.close()   ![default](gallery/colorbar/default_plot_colorbar_right.png) ![top](gallery/colorbar/default_plot_colorbar_top.png)"
},
{
"ref":"prettypyplot.style",
"url":7,
"doc":"Set-up matplotlib environment. BSD 3-Clause License Copyright (c) 2020, Daniel Nagel All rights reserved."
},
{
"ref":"prettypyplot.style.update_style",
"url":7,
"doc":"Update alternative matplotlib style. This function updates specified parameters of  use_style without changing other. Parameters      interactive : bool, optional Set interactive mode. colors : matplotlib colormap, optional Set the default color cycler from continuous or discrete maps. Use any of matplotlibs defaults or specified in the colors submodule. cmap : matplotlib colormap, optional Set the default colormap. ncs : int, optional Number of colors if continuous cmap is selected. figsize : int or int tuple, optional Give size of default figure in inches, either as tuple (x, y) or a single float for the x-axis. The y-axis will be determined by figratio. figratio : str or float, optional Set ratio of figsize x:y to 1:1/'option', where 'option' is one of ['sqrt(2)', 'golden', 'sqrt(3)'] or any number. Golden stands for the golden ratio (1.618). This option is ignored if figsize is used with tuple. mode : str, optional One of the following modes. default: use matplotlib defaults beamer: extra large fontsize print: default sizes poster: for Din A0 posters style : str, optional One of the following styles. default: enables grid and upper and right spines minimal: removes all unneeded lines none: no changes to style ipython : bool, optional Deactivate high-res in jpg/png for compatibility with IPyhton, e.g. jupyter notebook/lab. true_black : bool, optional If true black will be used for labels and co., else a dark grey. latex : bool, optional If true LaTeX font will be used. sf : bool, optional Use sans-serif font for text and latex math environment.",
"func":1
},
{
"ref":"prettypyplot.style.use_style",
"url":7,
"doc":"Define alternative matplotlib style. This function restores first the matplolib default values and finally changes depicted values to achieve a more appealing appearence. It additionally loads pplts colormaps and colors in matplolib. Parameters      interactive : bool, optional Set interactive mode. colors : matplotlib colormap, optional Set the default color cycler from continuous or discrete maps. Use any of matplotlibs defaults or specified in the colors submodule. cmap : matplotlib colormap, optional Set the default colormap. ncs : int, optional Number of colors if continuous cmap is selected. figsize : int or int tuple, optional Give size of default figure in inches, either as tuple (x, y) or a single float for the x-axis. The y-axis will be determined by figratio. figratio : str or float, optional Set ratio of figsize x:y to 1:1/'option', where 'option' is one of ['sqrt(2)', 'golden', 'sqrt(3)'] or any number. Golden stands for the golden ratio (1.618). This option is ignored if figsize is used with tuple. mode : str, optional One of the following modes. default: use matplotlib defaults beamer: extra large fontsize print: default sizes poster: for Din A0 posters style : str, optional One of the following styles. default: enables grid and upper and right spines minimal: removes all unneeded lines none: no changes to style ipython : bool, optional Deactivate high-res in jpg/png for compatibility with IPyhton, e.g. jupyter notebook/lab. true_black : bool, optional If true black will be used for labels and co., else a dark grey. latex : bool, optional If true LaTeX font will be used. sf : bool, optional Use sans-serif font for text and latex math environment.",
"func":1
},
{
"ref":"prettypyplot.style.setup_pyplot",
"url":7,
"doc":"Define alternative matplotlib style. This function restores first the matplolib default values and finally changes depicted values to achieve a more appealing appearence.  deprecated 0.4 use  use_style instead",
"func":1
}
]