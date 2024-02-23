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

### Deep Learning for TSC
<br/> MLP (Multi Layer Perceptron) model has fully connected layers and dropout to avid overfitting.
<br/> FCN and ResNet don't have droput and they have BatchNormalization and ReLu activation function to avoid overfitting.
<br/> ResNet has residual blocks which is used to solve vanising graident problem.
<br/> The state-of-the-art model is InceptionTime which is ensemble of 5 Inception models.

### Reducing Model Complexity
<br/> One of issues of deep learning is that it has large number of parapeters which increase training time.
<br/> ROCKET is faster than InceptionTime because of learning filters, here filters are generated randomly.
<br/> Instead of randomly generate filters the Hybrid FCN model was created and it is better than FCN and compotative with InceptionTime.
<br/>
<br/>
<br/>
<br/>
<br/>
