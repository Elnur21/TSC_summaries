# Introduction
<br/> Multivariate TSC (MTSC) has more than one variables (channels).
<br/> The most of existing STOA algorithms don't consider itreactions of channels with each other.
<br/> The existing models consider time series data as a 1D image e and employ 1D convolution operations to extract features from the multivariate time series.
<br/> Here 1D convolution is converted into 2 unmixed and successive operations.
<br/> And here there are 2 main benefits: using additional nonlinear activtion functon and facilitating the optimization process.

------

# Related work
<br/> MTSC algorithms can be divided into seven main categories: distance-based, interval-based, shapelet-based, feature-based, dictionary-based, ensemble of univariate models and deep learning models.
<br/> Distance based approaches rely on the shape of the time series. Here only DTW is effective for MTSC.
<br/> Interval-based algorithms extract features from intervals of a time series and typically use a tree-based classifier.
<br/> Ductuibary based algorithms convert time series data into words (patterns).
<br/> TapNet has 3 main parts: apply random dimension permutation, each group is fed to LSTM and FCN blocks for extracting features, low-dimensional outputs from these feature extractors are learned.

------

# Proposed Model
<br/> In this model there are 4 blocks, each block has (1+1D) layer, BatchNormalization and ELU activation function.
<br/> (1+1D) --> Temporal convolution layer + Spatial Convolution layer
<br/> 
<br/> 

------

# Experimental results
<br/> Tensorflow which is python frame work is used on two Tesla V100 GPU with 16GB memory.
<br/> Multivariate time series datasets are taken from UEA Repository.
<br/> Compared results with other deep learning models' results such as FCN and no deep learning models' results such as ROCKET
<br/> There are Disjoint-FCN and Disjoint-ResNet models and they outperform than FCN and ResNet.

