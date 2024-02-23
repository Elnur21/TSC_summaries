# Introduction
<br/>This paper purposed the new model (LITE) that uses a technique to get the state of the art results.
<br/>Here Authors arged that models which have larger complexit are not necessary to get welll performance results.
<br/>However, LITE uses 2.34% of Inception's parameters and it achieves better results than other models (Inception, ResNet, FCN).
<br/>Here reucing of parameters is not only the benefit of LITE but also it reduces amount of CO2 and Power and also decreaces the training time and FLOPS.


# BACKGROUND AND RELATED WORK
<br/>Some works adressed Time Series classification with machine learing algortihms such as Desicion Tree and etc. 
<br/>But disadvantage of them is that they require high CPU time and they can not be parallelized on a cluster of GPUs.
<br/>For these reasons deep learning is used for time series.

### Machine Learning for TSC
<br/>The basic aproacj for time series is using Nearest Neighbor. 
<br/>In some papers DTW (to define a similarity metric for NN) is used but it has limitations to extract features from imput samples.

