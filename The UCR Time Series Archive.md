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


# CRITICISMS OF THE UCR ARCHIVE
### -- Unrealistic Assumptions: 
There is a copious amount of perfectly aligned atomicpatterns.
The patterns are all of equal length.
Every item in the archive belongs to exactly one well-defined class; there is no option to choose an "unknown" or "unclassifiable".

### -- The Provenance of the Data is Poor:
The UCR Time Series Archive started as a small-scale project for a lab at the University of California, Riverside, without foreseeing its growth and significance. 
Now, efforts are made to systematically document datasets, requiring detailed descriptions or citations from published papers for inclusion.

### -- Data Already Normalized:
The time series are already z-normalized to remove offset and scaling.
However, in rare cases normalized data re not suitable so raw data are provided. 

### -- The Individual Data Sets are Too Small:
The largest data set is StarLightCurves with 1,000 train and 8,236 test objects, covering 3 classes. 
The smallest data set is Beef with 30 train and 30 test objects, covering 5 different classes.

### -- Benchmark Results are from a Single Train/Test Split:
Critics argue that the UCR Archive's single train/test split could mask implementation errors, emphasizing the need for more robust evaluation methods like K-fold cross-validation to ensure research reproducibility.

# HOW BAD IS CHERRY PICKING?


# BEST PRACTICES FOR USING THE ARCHIVE:


# THE NEW ARCHIVE:


