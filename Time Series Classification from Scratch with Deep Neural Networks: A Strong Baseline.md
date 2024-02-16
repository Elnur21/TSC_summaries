# Introduction
<br/>This paper discusses various approaches to time series classification, starting from distance-based methods like Dynamic Time Warping (DTW) to feature-based methods like Bag-of-Words (BoW) and ensemble-based approaches. 
<br/>Distance-based methods in time series classification work directly on raw time series data using predefined similarity measures, like Euclidean distance or Dynamic Time Warping (DTW).
<br/>Feature-based methods in time series classification involve extracting representative features from the data, such as quantized patterns or intervals, to train classifiers.
<br/>There's a shift towards deep learning, particularly Convolutional Neural Networks (CNNs), for end-to-end classification without heavy preprocessing. 
<br/>A multi-scale CNN approach (MCNN) has shown state-of-the-art performance on 44 benchmark datasets, but it requires complex preprocessing and tuning. 
<br/>However, a novel approach using deep Multilayer Perceptrons (MLPs), Fully Convolutional Networks (FCNs), and Residual Networks (ResNets) achieves comparable or better results without extensive preprocessing, leveraging Class Activation Maps (CAM) to identify significant regions in raw data for specific labels.
