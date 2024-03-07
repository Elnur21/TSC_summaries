# Introduction
<br/>This paper discusses various approaches to time series classification, starting from distance-based methods like Dynamic Time Warping (DTW) to feature-based methods like Bag-of-Words (BoW) and ensemble-based approaches. 
<br/>Distance-based methods in time series classification work directly on raw time series data using predefined similarity measures, like Euclidean distance or Dynamic Time Warping (DTW).
<br/>Feature-based methods in time series classification involve extracting representative features from the data, such as quantized patterns or intervals, to train classifiers.
<br/>There's a shift towards deep learning, particularly Convolutional Neural Networks (CNNs), for end-to-end classification without heavy preprocessing. 
<br/>A multi-scale CNN approach (MCNN) has shown state-of-the-art performance on 44 benchmark datasets, but it requires complex preprocessing and tuning. 
<br/>However, a novel approach using deep Multilayer Perceptrons (MLPs), Fully Convolutional Networks (FCNs), and Residual Networks (ResNets) achieves comparable or better results without extensive preprocessing, leveraging Class Activation Maps (CAM) to identify significant regions in raw data for specific labels.

------

# NETWORK ARCHITECTURES
### Multilayer Perceptrons (MLP): 
<br/>MLPs consist of three fully-connected layers with ReLU activation and dropout regularization to prevent overfitting. 
<br/>Despite limitations with ReLU handling negative values, this structure maintains simplicity over deeper architectures.
<br/>
### Fully Convolutional Networks (FCN): 
<br/>FCNs serve as feature extractors, utilizing convolutional layers with batch normalization and ReLU activation. 
<br/>Excluding pooling operations mitigates overfitting, with global average pooling reducing weight complexity before classification.
<br/>
### Residual Network (ResNet): 
<br/>ResNet extends neural networks with shortcut connections to enable gradient flow through deep layers, although it's prone to overfitting due to limited dataset complexity. 
<br/>Each residual block reuses convolutional layers, followed by global average pooling and softmax classification. 
<br/>Despite potential for optimization, the chosen structure offers a sufficient baseline demonstration.
<br/>
<br/>The activation function of each model is "softmax".

------

# EXPERIMENTS AND RESULTS
### Experiment Settings: 
<br/>Here the neural networks are tested on a subset of the UCR time series repository with default splits. 
<br/>Preprocessing involves z-normalization, and training details include specific optimization algorithms and loss functions. 
<br/>Hyperparameter tuning and cross-validation are excluded to maintain an unbiased baseline.
<br/>
### Evaluation: 
<br/>Seven top-performing methods are compared, with these models' complexity similar to simpler baselines. 
<br/>Mean Per-Class Error (MPCE) is used for evaluation across datasets, providing a robust criterion. 
<br/>FCN and ResNet demonstrate competitive performance, even though ResNet may overfit due to dataset limitations.
<br/>
### Results and Analysis: 
<br/>FCN and ResNet show competitive performance, clustering with other top models according to MPCE scores. 
<br/>Despite potential overfitting, ResNet remains effective and competitive. 
<br/>FCN and ResNet achieve premium performance without heavy preprocessing, highlighting their effectiveness as baseline models.

------

# LOCALIZE THE CONTRIBUTING REGIONS WITH CLASS ACTIVATION MAP
<br/>Another benefit of FCN with the global average pooling layer is its natural extension, the class activation map (CAM) to interpret the class-specific region in the data.
<br/>CAMs emphasize discriminative regions for each class, aiding in model interpretation.
<br/>On the 'CBF' dataset, different labels are associated with distinct patterns, such as sharp drops or rises, which are captured by the CAMs. 
<br/>On the 'StarLightCurve' dataset, CAMs reveal how different labels correspond to specific shapes in the data. 
<br/>CAMs provide a simple and effective way to visualize and understand how convolutional networks make classification decisions.

------

# DISCUSSION
### Overfitting and Generalization: 
<br/>Neural networks is a strong universal approximator which is known to overfit easily due to the large number of parameters.
<br/>And here despite the risk of overfitting, the models showed strong generalization on the UCR time series dataset.
<br/>
### Feature Visualization and Analysis: 
<br/>Here Gramian Angular Summation Field (GASF) was used to visualize neural network filters and weights, revealing clear structures and showcasing the effectiveness of 1-D convolution.
<br/>
### Deep and Shallow: 
<br/>The 11-layer ResNet showed premium performance, benefiting from shortcut connections that enhance interpretability. 
<br/>However, deeper models tended to overfit more easily despite regularization techniques.
<br/>
### Classification Semantics:
<br/>Evaluation using per-class error (PCE) scores and PCA dimensionality reduction revealed distinct classification patterns among models. 
<br/>FCN and ResNet showed similar behavior, while MLP showed isolated patterns, suggesting potential improvement through a deep-and-wide model approach.
