# Introduction:
<br/>The paper introduces InceptionTime, a novel deep learning ensemble for TSC, achieving state-of-the-art accuracy and providing insights into its success through an analysis of architectural hyperparameters.
<br/>InceptionTime is an ensemble of five deep learning models for TSC, each one created by cascading multiple Inception modules

------

# Related work:
<br/>The state-of-the-art for TSC has been organized into the following main categories: Whole series, Dictionary-based, Shapelets, and Transformation ensembles. 
<br/>-- Whole series refers to the entire time series data being compared as a single entity rather than comparing specific segments or features of the series. This approach involves classifiers that compare two series using a certain distance measure, such as Dynamic Time Warping (DTW) or global alignment kernels. 
<br/>-- Dictionary-based focuses on discriminating time series by the frequency of repetition of specific sub-series.
<br/>-- Shapelets are short repeated subsequences within time series data used to identify specific patterns or classes, often extracted and utilized by algorithms for classification purposes.
<br/>-- Transformation ensembles in TSC refer to the combination of various techniques for transforming time series data, aiming to improve accuracy by leveraging diverse representations of the data through ensemble methods.

------

# InceptionTime:
<br/>InceptionTime model includes an ensemble of 5 Inception networks, each comprising two residual blocks, three Inception modules, and a Global Average Pooling layer.
<br/>The Inception module reduces dimensionality of multi-dimensional time series by sliding filters and performing convolutions, allowing for longer filters and mitigating overfitting. 
<br/>The first major component of the Inception module is called the “bottleneck” layer. The bottleneck layer performs an operation of sliding filters of length 1 on the input multivariate time series (MTS) with a stride of 1.
<br/>Multiple filters of different lengths are applied simultaneously, with a parallel MaxPooling operation for robustness to perturbations, and outputs are concatenated for each module in the network.
<br/>
<br/>Ensembling combines predictions from multiple models to improve stability and performance. 
<br/>With the small training size of the datasets, ensembling helps control and leverage error variance, potentially reducing it as the training set size increases.
<br/>
<br/>The Receptive Field in deep CNNs defines the region of input data a neuron depends on, crucial for understanding network behavior. For temporal data, RF measures the maximum field of view in a one-dimensional space, essential for detecting longer patterns. Increasing filter length or network depth incrementally expands the RF.

------

# Experimental setup:
<br/>The synthetic dataset was created to control time series length, class distribution, and patterns injected into the data. 
<br/>Neural networks were trained on a remote cluster of GPUs and tested using the UCR archive, with additional analysis on a synthetic dataset. 
<br/>All time series data were z-normalized (including the synthetic series) to have a mean equal to zero and a standard deviation equal to one.

------

# Experiments: InceptionTime:
<br/>The experiments with InceptionTime demonstrate its competitive accuracy compared to HIVE-COTE, a leading algorithm, across 85 datasets from the UCR archive. 
<br/>InceptionTime shows similar accuracy to HIVE-COTE but with substantially faster training times, leveraging GPU parallelization. 
<br/>Evaluation of training time scalability indicated InceptionTime's efficiency, particularly with long time series and large datasets. 

------

# Architectural Hyperparameter study
<br/>-- The batch size hyperparameter greatly influences the training time of models in InceptionTime.
<br/>-- While bottleneck layers reduce model complexity, their inclusion had minimal effect on accuracy. 
<br/>Removing residual connections did not significantly alter accuracy across datasets, but for specific cases like ShapeletSim, their absence led to overfitting.
<br/>-- The depth in the InceptionTime model refers to the number of layers within the network architecture. The depth is varied by adjusting the number of residual blocks, each comprised of three inception modules.
<br/>-- Sensitivity analysis was conducted to evaluate the performance of InceptionTime by choosing the second-best values for its parameters, such as network depth, width, convolution length, batch size, and bottleneck size.
<br/>
# Conclusion:
<br/>InceptionTime is an ensemble of Inception-based networks that achieves state-of-the-art results with significant scalability and speed, highlighting the potential for applying these advancements to multivariate TSC.
