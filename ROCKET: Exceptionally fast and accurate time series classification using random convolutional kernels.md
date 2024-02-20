# Introduction
<br/>Most methods for time series classification that attain state-of-the-art accuracy have high computational complexity, requiring significant training time even for smaller datasets, and simply do not scale to large datasets.
<br/>Existing methods for time series classification typically focus on a single representation such as shape, frequency, or variance.
<br/>Rocket achieves state-of-the-art classification accuracy on the datasets in the UCR archive, but requires only a fraction of the training time of existing methods.
<br/>
<br/>
# Related works
### State-of-the-Art Methods
<br/>Identified COTE, Shapelet Transform, and BOSS (Schäfer 2015) as the three most accurate classifiers on the UCR archive. 
<br/> -- BOSS is one of several dictionary-based methods which use a representation based on the frequency of occurrence of patterns in time series.
<br/> -- Shapelet Transform is one of several methods based on finding discriminative subseries, so-called ‘shapelets’.
<br/> -- HIVE-COTE is a large ensemble of other classifiers, including BOSS and Shapelet Transform, as well as classifiers based on elastic distance measures and frequency representations.
<br/>
 ### More Scalable Methods
<br/>The high computational complexity of existing state-of-the-art methods for time series classification makes these methods slow, even for smaller datasets, and intractable for large datasets. 
<br/>This has motivated the development of more scalable methods, including Proximity Forest, TS-CHIEF, and InceptionTime.
<br/>--Proximity Forest is an ensemble of decision trees.
<br/>--TS-CHIEF builds on Proximity Forest, incorporating dictionary-based and interval-based splitting criteria.
<br/>
<br/>
<br/>Instead of using predefined features, CNNs use convolutional kernels to automatically detect patterns in the input data.
<br/>CNNs offer a flexible and powerful approach to time series classification by automatically learning relevant features from the data, including patterns, shapes, and frequency information.
<br/>
