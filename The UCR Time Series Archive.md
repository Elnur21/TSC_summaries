# Introduction
The UCR Time Series Archive was introduced in 2002.
The last expansion took place in the summer of 2015 when the archive grew from 45 to 85 data sets. This paper introduces and will focus on the new data expansion from 85 to 128 data sets.
While the archive is heavily used, it has invited criticisms, both in published papers [9] and in informal communications to the lead archivists.


# SETTING THE BASELINE ACCURACY
The UCR Archive established a fixed train/test split and provided and three baseline (“strawman”) scores using the 1-Nearest Neighbor classifier (1-NN). 
Test instances are labeled based on their closest match in the training set, with distance measures like Euclidean distance (ED) or Dynamic Time Warping distance (DTW) varying with the warping window width parameter.
DTW allows non-linear mapping between time series data points.
The UCR Time Series Archive provides baseline classification results for 1-NN using Euclidean distance, unconstrained DTW, and DTW with learned warping window width. 
The warping window width parameter is learned from training data using Leave-One-Out Cross-Validation, but in some cases, the best parameter learned in training may not generalize well to testing, particularly with very small training sets, which can lead to suboptimal classification results in real-world scenarios.
