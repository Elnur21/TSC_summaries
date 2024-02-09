# Introduction:
<br/>This paper discusses the perfrmance of DNNs in TSC tasks. 
<br/>Given the need to accurately classify time series data, researchers have proposed hundreds of methods to solve this task. One of the most popular and traditional TSC approaches is the use of a nearest neighbor (NN) classifier coupled with a distance function. 
<br/>The Dynamic Time Warping (DTW) distance when used with a NN classifier has been shown to be a very strong baseline
<br/>
<br/>This paper targets the following open questions:
<br/>What is the current state-of-the-art DNN for TSC ?
<br/>Is there a current DNN approach that reaches state-of-the-art performance for TSC and is less complex than HIVE-COTE ? What type of DNN architectures works best for the TSC task ? How does the random initialization affect the performance of deep learning classifiers?
<br/>Could the black-box effect of DNNs be avoided to provide interpretability?
<br/>
<br/>
# Background:
<br/>Although there exist many types of DNNs, in this review 3 main architectures are given for theoretical background on training DNNs for the TSC task: MLP, CNN, ESN.
<br/>MLP: in 1 layer each neuron is connected to all neurons in previous layer, and learns directly from raw input, but may lose temporal information. 
<br/>CNN: each neuron in a layer is connected to a local receptive field in the previous layer through convolutional operations. 
<br/>ESN: in 1 layer each neuron is connected to all neurons in previous layer but fully connected.
<br/>
<br/>Deep learning approaches for TSC can be separated into two main categories: the generative and the discriminative models.
<br/>
<br/>Generative models -> (Auto Encoders, Echo State Networks)
<br/>Auto Encoders -> (SDAE, CNN, DBN, RNN) 
<br/>Echo State Networks -> (traditional, kernel learning, meta learning)
<br/>Generative models usually exhibit an unsupervised training step that precedes the learning phase of the classifier.
<br/>This type of networks refers to as Model-based classifiers.
<br/>Auto Encoders: to reconstruct input data, capturing features in a latent space. Variants include SDAE, CNN, and DBN.
<br/>Echo State Networks: input data through a fixed reservoir of neurons:
<br/>Traditional ESNs for feature extraction.
<br/>Kernel Learning ESNs for classification.
<br/>Meta-learning ESNs for optimizing architectures.
<br/>
<br/>Discriminative models -> (Feature Engineering, End-to-End) 
<br/>Feature Engineering -> (image transform, domain specific)  
<br/>End-to-End -> (MLP, CNN, Hybrid)
<br/>A discriminative model that directly learns the mapping between the raw input of a time series and outputs a probability distribution over the class variables in a dataset.
<br/>Feature Engineering: This involves transforming time series into images using methods like Gramian fields, recurrence plots, and Markov transition fields. It also includes extracting domain-specific features, such as velocity in surgical training tasks.
<br/>End-to-End: These models incorporate feature learning while fine-tuning the classifier.
<br/>Hybrid: Combines CNN with other architectures like Gated Recurrent Units and attention mechanisms, showing promising results.
<br/>And in this review the discriminative models are selected.
<br/>
<br/>
# Approaches:
<br/>Here the nine architectures are presented such as MLP, FCN, ResNet, MCNN, t-LeNet, MCDCNN, Time-CNN, TWIESN, Encoder.
<br/>-- MLP: The network contains 4 layers in total where each one is fully connected to the output of its previous layer.
<br/>-- FCNs: do not contain any local pooling layers which means that the length of a time series is kept unchanged throughout the convolutions. The replacement of the traditional final FC layer with a Global Average Pooling (GAP) layer reduces drastically the number of parameters in a neural network while enabling the use of the CAM. 
<br/>-- ResNet: The network is composed of three residual blocks followed by a GAP layer and a final softmax classifier whose number of neurons is equal to the number of classes in a dataset.
<br/>-- Encoder is like FCN but it uses attention layer instead of global average pooling.
<br/>-- MCNN is characterized by a traditional CNN structure and augmented with the Window Slicing method for data processing.
<br/>-- t-LeNet consists of two convolutions followed by an FC layer and a softmax classifier.
<br/>-- MCDCNN is used for multivariant time series. It employs a traditional deep CNN architecture with parallel convolutions applied independently on each dimension of the input MTS, enhancing its effectiveness for this type of data.
<br/>-- Time-CNN offers unique features for both univariate and multivariate time series classification. For all the categorical cross entropy is used exclude Time-CNN because Mean Square Error is used for it as loss function. 
<br/>-- TWIESN: It is s the only non-convolutional recurrent architecture. It employs Ridge classifiers to predict class probabilities for each time series element.
<br/>The best model on the validation set or training set loss is chosen for evaluation. For FCN, ResNet, and MLP, the learning rate was reduced when the training loss did not improve for 50 consecutive epochs.
<br/>
<br/>
# Experimental setup:
<br/>-- Univariate archive:
<br/>Each algorithm was tested on the whole UCR/UEA archive which contains 85 univariate time series datasets. 
<br/>The datasets possess different varying characteristics such as the length of the series which has a minimum value of 24 for the ItalyPowerDemand dataset and a maximum equal to 2,709 for the HandOutLines dataset. 
<br/>Note that the time series in this archive are already z-normalized
<br/>-- Multivariate archive:
<br/>Baydogan’s archive contains 13 MTS classification datasets. This archive also exhibits datasets with different characteristics such as the length of the time series which, unlike the UCR/UEA archive, varies among the same dataset.
<br/>-- Experiments:
<br/>8730 models were trained on 97 datasets (12 datasets are multivariate). 
<br/>The experimental setup involved training nine deep learning models on a cluster of more than 60 GPUs. Each dataset was trained for 10 different runs. 
<br/>The mean accuracy over the 10 runs was taken to reduce bias due to weight initialization. 
<br/>The results showed that deep learning models were able to significantly outperform the NN-DTW model and achieve similar results to COTE and HIVE-COTE using a deep residual network architecture.
<br/>
<br/>
# Results:
<br/>-- Results for univariate time series:
<br/>ResNet outperforms FCN on the majority of problems, contrary to initial findings.
<br/>CNNs benefit from their ability to learn spatially invariant features in two-dimensional images, adapting to the natural temporal order in sequential data.
<br/>Methods like MCNN and t-LeNet exhibit low accuracy, possibly due to ad-hoc slicing methods and replacing global average pooling (GAP) with fully connected (FC) layers.
<br/>-- Comparing with state-of-the-art approaches:
<br/>ResNet emerges as the top-performing classifier among nine classifiers, with similar performance to other non-deep TSC algorithms like COTE and HIVE-COTE.
<br/>Fair comparison requires optimization efforts for both deep learning and non-deep learning classifiers.
<br/>-- Results for multivariate time series:
<br/>Deep CNNs (ResNet, FCN, Encoder) outperform Time-CNN and MCDCNN, originally proposed for MTSC.
<br/>Classifier rankings in MTSC are FCN, ResNet, Encoder, Time-CNN, TWIESN, MLP, MCDCNN, MCNN, and t-LeNet.
<br/>-- What can the dataset’s characteristics tell us about the best architecture?
<br/>Characteristics such as time series length and training set size influence model performance.
<br/>ResNet and FCN generally perform well across datasets, while Time-CNN is less prone to overfitting smaller datasets.
<br/>Larger training sets are essential for achieving high accuracies with deep neural networks (DNNs).
<br/>-- Effect of random initializations:
<br/>FCN exhibits less stable performance compared to ResNet, highlighting the challenge of maintaining stability in complex DNNs.
<br/>
<br/>
# Visualisation:
<br/>For visualization CAM is used on GunPoint and Meat datasets to reduce the black-box effect.
<br/>CAM requires models with a GAP layer preceding the softmax classifier, enabling visualization of important features used in classification decisions.
<br/>MDS involves calculating pairwise distances between time series examples and projecting them into a 2D space, allowing for visualization and analysis of separability.
